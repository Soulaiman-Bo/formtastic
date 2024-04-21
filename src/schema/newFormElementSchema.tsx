import { z } from 'zod';

export const FormElementSchema = z.object({
    form_id: z.string(),
    _id: z.string(),
    type: z.string(),
    properties: z.record(z.any()) // Allows any structure of key-value pairs in the properties object
});

export type FormElementSchemaType = z.infer<typeof FormElementSchema>;


