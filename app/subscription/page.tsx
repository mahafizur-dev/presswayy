"use client";

import React from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Imports from your project structure
import { FormInput } from "@/components/Subscription/FormInput";
import { FormSelect } from "@/components/Subscription/FormSelect";
import { FormCheckboxGroup } from "@/components/Subscription/FormCheckboxGroup";
import { FORM_OPTIONS, WEBHOOK_ENDPOINT } from "@/constants/subscription";
import {
  subscriptionFormSchema,
  SubscriptionFormPayload,
} from "@/lib/subscription";
import { useSubscriptionStore } from "@/store/useSubscriptionStore";

export default function SubscriptionPage() {
  const { isSuccess, globalError, setSuccess, setError } =
    useSubscriptionStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionFormPayload>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      "Business Name": "",
      "Business Email": "",
      "Contact Person": "",
      "Contact Person Phone": "",
      "Facebook Page ID": "",
      access_token: "",
      "per massage rate": "",
      "credit limit": "",
      "Business Type": "",
      Subcription: "",
      "Sales Channel": "",
      "Key Account Manager": "",
      "Sales Person": [],
      Integrator: [],
    },
  });

  const onSubmit: SubmitHandler<SubscriptionFormPayload> = async (data) => {
    setError(null);

    try {
      const response = await fetch(WEBHOOK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        reset();
      } else {
        setError(`Server error (${response.status}). Please try again later.`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("Network error. Could not connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans pt-24 sm:pt-32 flex justify-center items-start">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8">
          <div className="text-center mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Client Details
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Enter the details for adding the client to our database.
            </p>
          </div>

          {globalError && (
            <div
              className="mb-6 flex items-center p-4 text-sm text-red-900 bg-red-100 border border-red-200 rounded-lg"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="font-medium">{globalError}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Business Name"
                required
                placeholder="Presswayy"
                error={errors["Business Name"]?.message}
                {...register("Business Name")}
              />
              <FormInput
                label="Business Email"
                type="email"
                required
                placeholder="hello@company.com"
                error={errors["Business Email"]?.message}
                {...register("Business Email")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Contact Person"
                required
                placeholder="Ruman Sarder"
                error={errors["Contact Person"]?.message}
                {...register("Contact Person")}
              />
              <FormInput
                label="Contact Person Phone"
                placeholder="01304105567"
                error={errors["Contact Person Phone"]?.message}
                {...register("Contact Person Phone")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Facebook Page ID (Optional)"
                placeholder="309812308192302"
                error={errors["Facebook Page ID"]?.message}
                {...register("Facebook Page ID")}
              />
              <FormInput
                label="Access Token (Optional)"
                placeholder="Paste access token here"
                error={errors["access_token"]?.message}
                {...register("access_token")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Per Message Rate"
                placeholder="0.75"
                error={errors["per massage rate"]?.message}
                {...register("per massage rate")}
              />
              <FormInput
                label="Credit Limit"
                placeholder="1000"
                error={errors["credit limit"]?.message}
                {...register("credit limit")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormSelect
                label="Business Type"
                required
                options={FORM_OPTIONS.BUSINESS_TYPES}
                error={errors["Business Type"]?.message}
                {...register("Business Type")}
              />
              <FormSelect
                label="Subscription"
                required
                options={FORM_OPTIONS.SUBSCRIPTIONS}
                error={errors["Subcription"]?.message}
                {...register("Subcription")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormSelect
                label="Sales Channel"
                required
                options={FORM_OPTIONS.SALES_CHANNELS}
                error={errors["Sales Channel"]?.message}
                {...register("Sales Channel")}
              />
              <FormSelect
                label="Key Account Manager"
                required
                options={FORM_OPTIONS.ACCOUNT_MANAGERS}
                error={errors["Key Account Manager"]?.message}
                {...register("Key Account Manager")}
              />
            </div>

            <FormCheckboxGroup
              label="Sales Person"
              required
              options={FORM_OPTIONS.SALES_PERSONS}
              error={errors["Sales Person"]?.message}
              {...register("Sales Person")}
            />
            <FormCheckboxGroup
              label="Integrator"
              options={FORM_OPTIONS.INTEGRATORS}
              modifyLabel={(name) =>
                name === "Md Mahfijur Islam" ? "Md Mahafizur Rahman" : name
              }
              error={errors["Integrator"]?.message}
              {...register("Integrator")}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-[#ff6d5a] hover:bg-[#fa5c48] focus:ring-4 focus:ring-[#ff6d5a]/50 outline-none text-white h-12 rounded-lg font-semibold transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-[1px]"
            >
              {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSubmitting ? "Submitting..." : "Add to Database"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${isSuccess ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!isSuccess}
        role="dialog"
      >
        <div
          className={`bg-white rounded-xl p-8 w-11/12 max-w-md shadow-2xl text-center transform transition-transform duration-300 ${isSuccess ? "translate-y-0 scale-100" : "translate-y-5 scale-95"}`}
        >
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-emerald-500/20">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Success!</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Client details have been successfully added to the database.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="w-full bg-[#ff6d5a] hover:bg-[#fa5c48] focus:ring-4 focus:ring-[#ff6d5a]/50 outline-none text-white font-semibold py-3 px-6 rounded-lg transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
