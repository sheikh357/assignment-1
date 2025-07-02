import { z } from "zod";

export const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Please enter a topic.",
  }),
});

export type FormValues = z.infer<typeof formSchema>;