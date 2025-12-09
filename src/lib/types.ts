export interface LineItem {
  confirmation: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface Company {
  name: string;
  address: string;
  email: string;
  logoUrl?: string;
  phone?: string;
}

export interface Client {
  name: string;
  address: string;
  email: string;
}

export interface Invoice {
  invoiceNumber: string;
  invoiceDate: Date;
  dueDate: Date;
  from: Company;
  to: Client;
  items: LineItem[];
  notes: string;
  taxRate: number;
  discountRate: number;
  amountPaid: number;
}
