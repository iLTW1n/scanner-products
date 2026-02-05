import * as z from 'zod';

export const codeSchema = z.object({
  code: z.string().regex(/^\d{6,13}$/, 'El código debe tener entre 6 y 13 dígitos.')
})

export type CodeSchema = z.infer<typeof codeSchema>;