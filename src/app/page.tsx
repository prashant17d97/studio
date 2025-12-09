'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { invoiceSchema } from '@/lib/schemas';
import type { Invoice } from '@/lib/types';
import InvoiceForm from '@/components/invoice-form';
import InvoicePreview from '@/components/invoice-preview';
import { Button } from '@/components/ui/button';
import { Download, Save } from 'lucide-react';
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
  const form = useForm<Invoice>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: defaultValues,
    mode: 'onBlur',
  });

  const invoiceData = form.watch();

  const handlePrint = () => {
    generatePDF(`invoice-${invoiceData.invoiceNumber || '00000'}.pdf`);
  };

  return (
    <FormProvider {...form}>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <header className="bg-card border-b p-4 flex justify-between items-center no-print">
          <h1 className="text-xl font-semibold text-primary">Create Invoice</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" /> Save
            </Button>
            <Button onClick={handlePrint}>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </header>
        <main className="flex-1 grid lg:grid-cols-[450px_1fr] overflow-hidden">
          <aside className="no-print overflow-y-auto border-r">
            <InvoiceForm />
          </aside>
          <section className="bg-secondary/50 overflow-y-auto p-4 md:p-8 printable-area">
            <InvoicePreview data={invoiceData} />
          </section>
        </main>
      </div>
    </FormProvider>
  );
}
