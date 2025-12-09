'use client';

import type { Invoice } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Logo from './logo';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { Separator } from './ui/separator';

interface InvoicePreviewProps {
  data: Invoice;
}

const ITEMS_PER_PAGE = 12;

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const { from, to, invoiceNumber, invoiceDate, dueDate, items = [], notes, taxRate = 0, discountRate = 0 } = data;

  const itemChunks: typeof items[] = [];
  if (items.length > 0) {
    for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
      itemChunks.push(items.slice(i, i + ITEMS_PER_PAGE));
    }
  } else {
    itemChunks.push([]);
  }

  const subtotal = items.reduce((acc, item) => acc + (item.quantity || 0) * (item.rate || 0), 0);
  const taxAmount = subtotal * (taxRate / 100);
  const discountAmount = subtotal * (discountRate / 100);
  const total = subtotal + taxAmount - discountAmount;

  const renderPage = (chunk: typeof items, pageIndex: number, isLastPage: boolean) => (
    <Card key={pageIndex} className="w-[794px] min-h-[1123px] mx-auto p-12 bg-card shadow-lg print-page flex flex-col">
      <header className="flex justify-between items-start pb-8 border-b">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <h1 className="text-3xl font-bold text-primary">{from?.name || 'Your Company'}</h1>
            <p className="text-muted-foreground">{from?.address}</p>
            <p className="text-muted-foreground">{from?.email}</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-bold uppercase text-muted-foreground tracking-wider">Invoice</h2>
          <p className="text-muted-foreground mt-2"># {invoiceNumber}</p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Bill To</h3>
          <p className="font-bold">{to?.name || 'Client Name'}</p>
          <p className="text-muted-foreground">{to?.address}</p>
          <p className="text-muted-foreground">{to?.email}</p>
        </div>
        <div className="text-right">
          <div className="grid grid-cols-2">
            <span className="font-semibold">Invoice Date:</span>
            <span>{invoiceDate ? format(new Date(invoiceDate), 'PPP') : ''}</span>
          </div>
          <div className="grid grid-cols-2 mt-1">
            <span className="font-semibold">Due Date:</span>
            <span>{dueDate ? format(new Date(dueDate), 'PPP') : ''}</span>
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Description</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Rate</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chunk.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.rate)}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.quantity * item.rate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      
      {isLastPage && (
         <section className="mt-8">
          <div className="grid grid-cols-2">
            <div className="space-y-2">
                <h4 className="font-semibold">Notes</h4>
                <p className="text-muted-foreground text-sm max-w-md">{notes}</p>
            </div>
            <div className="space-y-2 text-right">
                <div className="flex justify-end gap-8">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-end gap-8">
                    <span className="text-muted-foreground">Tax ({taxRate}%)</span>
                    <span>{formatCurrency(taxAmount)}</span>
                </div>
                <div className="flex justify-end gap-8">
                    <span className="text-muted-foreground">Discount ({discountRate}%)</span>
                    <span className="text-green-600">-{formatCurrency(discountAmount)}</span>
                </div>
                <Separator className="my-2 bg-primary/20" />
                <div className="flex justify-end gap-8 font-bold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                </div>
            </div>
          </div>
         </section>
      )}
      
      <footer className="mt-auto pt-8 border-t text-center text-xs text-muted-foreground">
        {itemChunks.length > 1 && (
          <p className="mb-2">Page {pageIndex + 1} of {itemChunks.length}</p>
        )}
        Thank you for your business!
      </footer>
    </Card>
  );

  return (
    <div className="space-y-8">
      {itemChunks.map((chunk, index) => renderPage(chunk, index, index === itemChunks.length - 1))}
    </div>
  );
}
