'use client';

import type { Invoice } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Logo from './logo';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import HeaderWave from './header-wave';
import FooterWave from './footer-wave';


interface InvoicePreviewProps {
  data: Invoice;
}

const ITEMS_PER_PAGE = 10;

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const { from, to, invoiceNumber, invoiceDate, items = [], amountPaid = 0 } = data;

  const itemChunks: typeof items[] = [];
  if (items.length > 0) {
    for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
      itemChunks.push(items.slice(i, i + ITEMS_PER_PAGE));
    }
  } else {
    itemChunks.push([]);
  }

  const subtotal = items.reduce((acc, item) => acc + (item.quantity || 0) * (item.rate || 0), 0);
  const total = subtotal - amountPaid;

  const renderPage = (chunk: typeof items, pageIndex: number, isLastPage: boolean) => (
    <Card key={pageIndex} className="w-[794px] min-h-[1123px] mx-auto bg-card shadow-lg print-page flex flex-col relative overflow-hidden font-sans">
      <HeaderWave className="absolute top-0 left-0 w-full h-auto" />
      <header className="flex justify-between items-start p-12 z-10">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <div className="text-right text-white">
          <h2 className="text-4xl font-bold uppercase tracking-wider">INVOICE</h2>
          <p className="font-semibold mt-2 text-lg">#{invoiceNumber}</p>
          <div className="flex items-center justify-end gap-2 mt-4 text-sm">
            <MapPin size={14} />
            <p className="whitespace-pre-wrap max-w-[200px]">{from?.address}</p>
          </div>
        </div>
      </header>

      <section className="px-12 mt-16 mb-8 z-10">
        <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-500 mb-2">{invoiceDate ? format(new Date(invoiceDate), 'MMMM dd, yyyy') : ''}</p>
              <h3 className="text-sm font-semibold uppercase text-primary mb-2">Bill To</h3>
              <p className="font-bold text-lg">{to?.name || 'Client Name'}</p>
              <p className="text-gray-600 whitespace-pre-wrap">{to?.address}</p>
            </div>
        </div>
      </section>

      <section className="flex-grow px-12 z-10">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-white w-[150px]">Confirmation</TableHead>
              <TableHead className="text-white w-2/5">Product Name</TableHead>
              <TableHead className="text-white text-right">Unit Cost</TableHead>
              <TableHead className="text-white text-right">Qty</TableHead>
              <TableHead className="text-white text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chunk.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium bg-blue-50/50">{item.confirmation}</TableCell>
                <TableCell className="whitespace-pre-wrap">{item.description}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.rate)}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(item.quantity * item.rate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      
      {isLastPage && (
         <section className="mt-8 px-12 pb-32 z-10">
          <div className="flex justify-end">
            <div className="w-1/2">
                <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Amount Paid</span>
                    <span>-{formatCurrency(amountPaid)}</span>
                </div>
                <div className="flex justify-between items-center bg-primary text-white p-3 rounded-md mt-2">
                    <span className="font-bold text-lg">Amount Due</span>
                    <span className="font-bold text-lg">{formatCurrency(total)}</span>
                </div>
            </div>
          </div>
         </section>
      )}
      
      <FooterWave className="absolute bottom-0 left-0 w-full h-auto" />
      <footer className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>{from.phone}</span>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>{from.email}</span>
            </div>
          </div>
      </footer>
    </Card>
  );

  return (
    <div className="space-y-8">
      {itemChunks.map((chunk, index) => renderPage(chunk, index, index === itemChunks.length - 1))}
    </div>
  );
}
