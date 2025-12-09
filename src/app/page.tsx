'use client';

import type { Invoice } from '@/lib/types';
import InvoicePreview from '@/components/invoice-preview';
import { generatePDF } from '@/lib/pdf-utils';

const defaultItems = [
  { confirmation: '41565-Schoemakpr', description: 'COLUMBARIUM-4 NICHE STANDARD\nCHINA ELB GRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1250 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
  { confirmation: '41565-Schoemakpr', description: 'FLUSH-6 NICHE STANDARD CHINA ELB\nGRAY+BLACK DOORS\n3-Oct-5-2x2-0.5\nAll Polished + 2"Margin', quantity: 1, rate: 1200 },
];

const defaultValues: Invoice = {
  invoiceNumber: '00000',
  invoiceDate: new Date(2025, 2, 27),
  dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  from: {
    name: 'DeepCarve',
    address: '545 N. Canfield Niles Rd.\nAustintown OH 44515',
    email: 'contact@deepcarve.com',
    phone: '979-694-8480',
  },
  to: {
    name: 'Ethan Venting',
    address: 'Gemstone Memorials\n545 N. Canfield Niles Rd.\nAustintown OH 44515',
    email: 'contact@client.com',
  },
  items: defaultItems,
  notes: 'Thank you for your business. Please make payment by the due date.',
  taxRate: 0,
  discountRate: 0,
  amountPaid: 0,
};

export default function Home() {
  // Keeping generatePDF available for manual console usage if needed, 
  // or it can be wired up to a button later if UI is added back.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePrint = () => {
    generatePDF(`invoice-${defaultValues.invoiceNumber || '00000'}.pdf`);
  };

  return (
    <InvoicePreview data={defaultValues} />
  );
}
