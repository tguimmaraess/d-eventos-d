export enum PaymentMethod {
  PIX = 'Pix',
  CREDIT = 'Crédito',
  DEBIT = 'Débito',
  CASH = 'Dinheiro',
  OPEN = 'Contas em aberto'
}

export interface RevenueData {
  method: PaymentMethod;
  amount: number;
  color: string;
}

export interface SalesPeakData {
  time: string;
  amount: number;
}

export interface EmployeeMetric {
  id: string;
  name: string;
  totalSales: number;
}

export interface EventMetric {
  title: string;
  value: string;
  type: 'currency' | 'number';
  category: 'revenue' | 'cashless' | 'ticket';
}

export interface MenuItem {
  id: string;
  label: string;
  iconName: string;
}

export interface ProductStat {
  id: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  revenue: number;
  stock: number;
  status: 'high' | 'medium' | 'low';
}