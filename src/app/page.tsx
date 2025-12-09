'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { invoiceSchema } from '@/lib/schemas';
import type { Invoice } from '@/lib/types';
import InvoiceForm from '@/components/invoice-form';
import InvoicePreview from '@/components/invoice-preview';
import { Button } from '@/components/ui/button';
import { Download, Save } from 'lucide-react';

const defaultItems = [
  { description: 'Vintage Typewriter', quantity: 1, rate: 250 },
  { description: 'Premium Fountain Pen', quantity: 2, rate: 75 },
];

const defaultValues: Invoice = {
  invoiceNumber: 'INV-001',
  invoiceDate: new Date(),
  dueDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  from: {
    name: 'Your Company LLC',
    address: '123 Main St, Anytown, USA 12345',
    email: 'contact@yourcompany.com',
  },
  to: {
    name: 'Client Corporation',
    address: '456 Oak Ave, Othertown, USA 54321',
    email: 'contact@client.com',
  },
  items: defaultItems,
  notes: 'Thank you for your business. Please make payment by the due date.',
  taxRate: 8,
  discountRate: 5,
};

export default function Home() {
  const form = useForm<Invoice>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: defaultValues,
    mode: 'onBlur',
  });

  const invoiceData = form.watch();

  const handlePrint = () => {
    window.print();
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
