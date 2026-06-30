import { z } from "zod";

const fileSchema = z
  .instanceof(File, {
    message: "الملف مطلوب",
  })
  .refine(
    (file) =>
      ["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(
        file.type,
      ),
    "يسمح فقط بـ PDF أو JPG أو PNG",
  )
  .refine(
    (file) => file.size <= 5 * 1024 * 1024,
    "حجم الملف يجب ألا يتجاوز 5MB",
  );

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

export const FarmerBusinessInfoSchema = z.object({
  farmName: z.string().min(3, "اسم المزرعة لازم يكون 3 أحرف على الأقل"),

  name: z.string().min(3, "الاسم لازم يكون 3 أحرف على الأقل"),

  email: z.string().email("البريد الإلكتروني غير صحيح"),

  phone: z.string().min(9, "رقم الجوال غير صحيح"),

  password: z.string().min(8, "كلمة المرور لازم تكون 8 أحرف على الأقل"),

  terms: z.boolean().refine((value) => value === true, {
    message: "يجب الموافقة على الشروط والأحكام",
  }),
});

export const FarmDocumentsSchema = z.object({
  identityFile: fileSchema,

  licenseFile: fileSchema,
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type FarmerBusinessInfoFormData = z.infer<
  typeof FarmerBusinessInfoSchema
>;
export type FarmDocumetsFormData = z.infer<typeof FarmDocumentsSchema>;
