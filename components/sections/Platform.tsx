const features = [
  {
    title: "Instant replies, 24/7",
    desc: "Responds in under a minute, day or night, weekends and holidays included.",
    icon: (
      <>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Trained on your business",
    desc: "Accurate answers based on your real catalogue, prices and tone — not generic scripts.",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    title: "Reads images & voice notes",
    desc: "Understands product photos, payment screenshots and voice messages customers send.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-5-5L5 21" />
      </>
    ),
  },
  {
    title: "Orders synced automatically",
    desc: "Every confirmed order is saved straight to Google Sheets — no manual copy‑paste.",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    title: "Courier tracking ",
    desc: "Customers get status updates on their delivery without messaging your team.",
    icon: (
      <>
        <rect x="1" y="6" width="15" height="12" rx="1" />
        <path d="M16 10h4l3 3v3h-7z" />
        <circle cx="6" cy="19" r="1.6" />
        <circle cx="18" cy="19" r="1.6" />
      </>
    ),
  },
  {
    title: "Seamless human hand‑off",
    desc: "Pause the AI and take over any conversation instantly, whenever you want to step in.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "100+ chats at once",
    desc: "Handles concurrent conversations at scale, so no customer waits in a queue.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Speaks their language",
    desc: "বাংলা, English or Banglish — Presswayy replies naturally in whichever your customer used.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
      </>
    ),
  },
];

export default function Platform() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="bg-[#f5f6f8] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section head */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#ff5a36]/10 px-3 py-1 text-sm font-medium text-[#ff5a36] mb-5">
            <span className="h-2 w-2 rounded-full bg-[#ff5a36]" />
            Platform
          </p>
          <h2
            id="platform-heading"
            className="font-googlesans text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#0a1128] leading-[1.15] tracking-tight mb-4"
          >
            Everything included
          </h2>
          <p className="font-googlesans text-[16px] md:text-[18px] text-slate-600 leading-relaxed">
            Every plan ships with the full platform from day one — no upsells.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a36]/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5a36]/10 text-[#ff5a36] transition-colors duration-300 group-hover:bg-[#ff5a36] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0a1128] mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-[14px] text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
