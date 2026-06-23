import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, "الاسم لازم يكون 3 أحرف على الأقل"),
  email: z.email("البريد الإلكتروني غير صحيح"),
  password: z.string().min(8, "كلمة المرور لازم تكون 8 أحرف على الأقل"),
  terms: z.boolean().refine((value) => value === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
});

export const loginSchema = z.object({
  email: z.email("البريد الإلكتروني غير صحيح"),
  password: z.string().min(8, "كلمة المرور لازم تكون 8 أحرف على الأقل"),
});

export const signupSupplierSchema = z.object({
  farmName: z.string().min(3, "الاسم لازم يكون 3 أحرف على الأقل"),
  email: z.email("البريد الإلكتروني غير صحيح"),
  // phoneNumber:
  password: z.string().min(8, "كلمة المرور لازم تكون 8 أحرف على الأقل"),
  terms: z.boolean().refine((value) => value === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
