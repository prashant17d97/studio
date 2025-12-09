import Link from 'next/link';
import Logo from '@/components/logo';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="bg-card border-b px-4 h-16 flex justify-between items-center sticky top-0 z-10 no-print">
      <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
        <Logo />
        <span className="text-xl font-bold text-primary">ProInvoice</span>
      </Link>
      <nav>
        <Button variant="ghost" asChild>
          <Link href="/invoices">My Invoices</Link>
        </Button>
      </nav>
    </header>
  );
}
