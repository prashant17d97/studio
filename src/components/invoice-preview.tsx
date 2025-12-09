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

const ITEMS_PER_PAGE = 10; // Can be adjusted based on needs

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const { from, to, invoiceNumber, invoiceDate, dueDate, items = [], amountPaid = 0, taxRate = 0, discountRate = 0 } = data;

  const itemChunks: typeof items[] = [];
  if (items.length > 0) {
    for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
      itemChunks.push(items.slice(i, i + ITEMS_PER_PAGE));
    }
  } else {
    // Make sure there is always at least one page, even if there are no items
    itemChunks.push([]);
  }

  const subtotal = items.reduce((acc, item) => acc + (item.quantity || 0) * (item.rate || 0), 0);
  const taxAmount = subtotal * (taxRate / 100);
  const discountAmount = subtotal * (discountRate / 100);
  const total = subtotal + taxAmount - discountAmount;
  const amountDue = total - amountPaid;

  const renderPage = (chunk: typeof items, pageIndex: number, isLastPage: boolean) => (
    <Card key={pageIndex} className="w-[595px] h-[842px] mx-auto bg-white shadow-lg print-page flex flex-col relative overflow-hidden font-sans">
      <HeaderWave className="absolute top-0 left-0 w-full h-auto" />
      <header className="flex justify-between items-start pt-[23px] px-[29px] z-10">
        <div className="flex items-center gap-1">
           <Logo className="w-[156.8px] h-[29px]" />
        </div>
        <div className="text-right">
          <div className="flex flex-col items-end gap-4">
            <div className="flex flex-col items-end gap-1">
              <h2 className="text-xl font-semibold uppercase text-white tracking-wide">Invoice</h2>
              <p className="font-medium text-sm text-white">#{invoiceNumber}</p>
            </div>
            <div className="flex items-start gap-1.5">
              <MapPin size={14} className="text-white/80 mt-0.5" />
              <div className="text-right">
                <p className="text-xs font-medium text-[#E9EAEB] whitespace-pre-wrap max-w-[119px]">{from?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-[29px] mt-[89px] mb-8 z-10">
        <div className="grid grid-cols-2">
            <div>
              <p className="text-xs font-medium text-[#3A3A3A] mb-2.5">{invoiceDate ? format(new Date(invoiceDate), 'MMMM dd, yyyy') : ''}</p>
              <div className="flex gap-2">
                <h3 className="text-xs font-medium text-[#0554A7]">Bill To :</h3>
                <div className='flex flex-col gap-1'>
                  <p className="font-semibold text-[10px] text-[#3A3A3A]">{to?.name || 'Client Name'}</p>
                  <p className="text-[10px] text-[#313131] whitespace-pre-wrap leading-tight">{to?.address}</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="flex-grow px-[24px] z-10">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0154A7] hover:bg-[#0154A7] border-none">
              <TableHead className="text-white text-[10px] font-medium w-[96px] h-[36px] text-center border-r border-[#0D5CAA]">Confirmation</TableHead>
              <TableHead className="text-white text-[10px] font-medium w-[217.5px] h-[36px] px-6 border-r border-[#0D5CAA]">Product Name</TableHead>
              <TableHead className="text-white text-[10px] font-medium w-[78px] h-[36px] text-center border-r border-[#0D5CAA]">Unit Cost</TableHead>
              <TableHead className="text-white text-[10px] font-medium w-[78px] h-[36px] text-center border-r border-[#0D5CAA]">Qty</TableHead>
              <TableHead className="text-white text-[10px] font-medium w-[78px] h-[36px] text-center">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chunk.map((item, index) => (
              <TableRow key={index} className='border-b border-[#BEDFFF]'>
                <TableCell className="text-[10px] font-medium text-[#414141] text-center align-top p-2 border-x border-[#BEDFFF]">{item.confirmation}</TableCell>
                <TableCell className="text-[10px] font-medium text-[#414141] align-top p-2 border-r border-[#BEDFFF] whitespace-pre-wrap">
                  <div>{item.description}</div>
                  <div className="text-[#4A5565] font-normal">{/* Placeholder for second line from figma */}</div>
                </TableCell>
                <TableCell className="text-[10px] font-medium text-[#414141] text-center align-top p-2 border-r border-[#BEDFFF]">{formatCurrency(item.rate)}</TableCell>
                <TableCell className="text-[10px] font-medium text-[#414141] text-center align-top p-2 border-r border-[#BEDFFF]">{item.quantity}</TableCell>
                <TableCell className="text-[10px] font-medium text-[#414141] text-center align-top p-2 border-r border-[#BEDFFF]">{formatCurrency(item.quantity * item.rate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      
      {isLastPage && (
         <section className="mt-auto px-[24px] pb-[90px] z-10">
          <div className="flex justify-end">
            <div className="w-[233px]">
              <div className="flex justify-between items-center text-[10px] font-medium h-8 px-2 border-b border-[#BEDFFF]">
                <span className="text-[#3A3A3A]">Subtotal</span>
                <span className='text-[#0A0A0A]'>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-medium h-8 px-2 border-b border-[#BEDFFF] bg-[#E5F2FF]">
                <span className="text-[#3A3A3A]">Discount ({discountRate}%)</span>
                <span className='text-[#0A0A0A]'>-{formatCurrency(discountAmount)}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-medium h-8 px-2 border-b border-[#BEDFFF]">
                <span className="text-[#3A3A3A]">Tax ({taxRate}%)</span>
                <span className='text-[#0A0A0A]'>{formatCurrency(taxAmount)}</span>
              </div>
               <div className="flex justify-between items-center text-[10px] font-medium h-8 px-2 border-b border-[#BEDFFF] bg-[#E5F2FF]">
                <span className="text-[#3A3A3A]">Total</span>
                <span className='text-[#0A0A0A]'>{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-medium h-8 px-2 border-b border-[#BEDFFF]">
                <span className="text-[#3A3A3A]">Amount Paid</span>
                <span className='text-[#0A0A0A]'>-{formatCurrency(amountPaid)}</span>
              </div>
              <div className="flex justify-between items-center h-8 px-2 bg-[#0554A7] text-white">
                  <span className="font-medium text-xs">Amount Due</span>
                  <span className="font-medium text-xs">{formatCurrency(amountDue)}</span>
              </div>
            </div>
          </div>
         </section>
      )}
      
      <FooterWave className="absolute bottom-0 left-0 w-full h-auto" />
      <footer className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={8} />
                </div>
                <span className='text-[10px] font-medium text-[#E9EAEB]'>{from.phone}</span>
            </div>
            <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={8} />
                </div>
                <span className='text-[10px] font-medium text-[#E9EAEB]'>{from.email}</span>
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
