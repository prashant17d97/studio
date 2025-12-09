import { z } from 'zod';

export const lineItemSchema = z.object({
  description: z.string().min(1, 'Description is required.'),
  quantity: z.number().min(0, 'Quantity must be positive.'),
  rate: z.number().min(0, 'Rate must be positive.'),
});

export const companySchema = z.object({
  name: z.string().min(1, 'Company name is required.'),
  address: z.string().min(1, 'Company address is required.'),
  email: z.string().email('Invalid email address.'),
});

export const clientSchema = z.object({
    name: z.string().min(1, 'Client name is required.'),
    address: z.string().min(1, 'Client address is required.'),
    email: z.string().email('Invalid email address.'),
});

export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required.'),
  invoiceDate: z.date(),
  dueDate: z.date(),
  from: companySchema,
  to: clientSchema,
  items: z.array(lineItemSchema).min(1, 'At least one item is required.'),
  notes: z.string().optional(),
  taxRate: z.number().min(0).max(100).optional().default(0),
  discountRate: z.number().min(0).max(100).optional().default(0),
});
