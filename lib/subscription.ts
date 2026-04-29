import * as z from "zod";

export const subscriptionFormSchema = z.object({
  "Business Name": z.string().min(1, "Business Name is required"),
  "Business Email": z
    .string()
    .min(1, "Business Email is required")
    .email("Please enter a valid email address"),
  "Contact Person": z.string().min(1, "Contact Person is required"),
  "Contact Person Phone": z.string().optional(),
  "Facebook Page ID": z.string().optional(),
  access_token: z.string().optional(),
  "per massage rate": z.string().optional(),
  "credit limit": z.string().optional(),
  "order sheet url": z
    .union([z.literal(""), z.string().url("Please enter a valid URL")])
    .optional(),
  "database sheet url": z
    .union([z.literal(""), z.string().url("Please enter a valid URL")])
    .optional(),
  "cost sheet url": z
    .union([z.literal(""), z.string().url("Please enter a valid URL")])
    .optional(),
  "Business Type": z.string().min(1, "Please select a Business Type"),
  Subcription: z.string().min(1, "Please select a Subscription plan"), // cspell:disable-line
  "Sales Channel": z.string().min(1, "Please select a Sales Channel"),
  "Key Account Manager": z.string().min(1, "Please select an Account Manager"),
  "Sales Person": z
    .array(z.string())
    .min(1, "Please select at least one Sales Person"),
  Integrator: z.array(z.string()).optional(),
});

export type SubscriptionFormPayload = z.infer<typeof subscriptionFormSchema>;
