import { create } from "zustand";
import { INITIAL_STEPS } from "@/constants/portal";


export type StepStatus = "done" | "active" | "upcoming" | "pending";

interface Step {
  key: string;
  label: string;
  desc: string;
  time: string;
  detail: string;
  status: StepStatus;
  customBadge?: string;
}


export const MEETING_STATUS = {
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
  APPROVED: "Approved",
} as const;

interface PortalState {
  userName: string;
  userInitial: string;
  userPhone: string;
  isPaid: boolean;
  meetingStatus: string;
  meetingDesc: string;
  steps: Step[];
  openStepIndex: number | null;

  initializeData: (payStatus: string | null) => Promise<boolean>;
  toggleStep: (index: number) => void;
  handleMeetingSuccess: (desc: string) => void;
  logout: () => Promise<void>;
}

const initialState = {
  userName: "Client",
  userInitial: "C",
  userPhone: "",
  isPaid: false,
  meetingStatus: MEETING_STATUS.PENDING,
  meetingDesc: "",
  steps: INITIAL_STEPS as Step[],
  openStepIndex: 0,
};

export const usePortalStore = create<PortalState>((set, get) => ({
  ...initialState,

  initializeData: async () => {
    // Source of truth is the server-verified, httpOnly session — never a
    // client-writable cookie. `/api/auth/me` returns 401 if there is no
    // valid signed session.
    const res = await fetch("/api/auth/me");
    if (!res.ok) {
      set(initialState);
      return false;
    }
    const data = await res.json();

    const storedName = data.userName || "Client";
    const storedPhone = data.userPhone || "";
    const mStatus = data.meetingStatus || MEETING_STATUS.PENDING;
    const storedMeetingDesc = data.meetingDesc || "";
    const currentPaidStatus = Boolean(data.isPaid);


    const updatedSteps = INITIAL_STEPS.map((step, index) => {
      // Step 0: Payment
      if (index === 0) {
        if (currentPaidStatus) {
          return {
            ...step,
            status: "done",
            desc: "Payment received successfully.",
          };
        }
        return step;
      }

      if (index === 1 && currentPaidStatus) {
        if (mStatus === MEETING_STATUS.APPROVED) {
          return {
            ...step,
            status: "done",
            desc: `Meeting fixed for ${storedMeetingDesc}`,
            customBadge: "✓ Meeting Booked",
          };
        }
        if (mStatus === MEETING_STATUS.SCHEDULED) {
          return {
            ...step,
            status: "active",
            desc: `Requested for ${storedMeetingDesc}`,
            customBadge: "Schedule Requested",
          };
        }
        return { ...step, status: "active" };
      }

      // Step 2: Next Step
      if (
        index === 2 &&
        currentPaidStatus &&
        mStatus === MEETING_STATUS.APPROVED
      ) {
        return { ...step, status: "active" };
      }

      return step;
    }) as Step[];

    
    let openIndex = 0;
    if (currentPaidStatus && mStatus === MEETING_STATUS.APPROVED) openIndex = 2;
    else if (currentPaidStatus) openIndex = 1;

    set({
      userName: storedName,
      userInitial: storedName.charAt(0).toUpperCase(),
      userPhone: storedPhone,
      isPaid: currentPaidStatus,
      meetingStatus: mStatus,
      meetingDesc: storedMeetingDesc,
      steps: updatedSteps,
      openStepIndex: openIndex,
    });
    return true;
  },

  toggleStep: (index) => {
    set((state) => ({
      openStepIndex: state.openStepIndex === index ? null : index,
    }));
  },

  handleMeetingSuccess: (desc) => {
    // The n8n "schedule-meeting" webhook (called by /api/meeting) is the
    // authoritative record; this only updates local UI state for feedback.
    set((state) => {
      const updatedSteps = state.steps.map((step, index) => {
        if (index === 1) {
          return {
            ...step,
            status: "active" as const,
            desc: `Requested for ${desc}`,
            customBadge: "Schedule Requested",
          } as Step;
        }
        return step;
      });

      return {
        meetingStatus: MEETING_STATUS.SCHEDULED,
        meetingDesc: desc,
        steps: updatedSteps,
      };
    });
  },

  logout: async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    set(initialState);
  },
}));
