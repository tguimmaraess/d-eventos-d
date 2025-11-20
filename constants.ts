import { PaymentMethod, RevenueData, SalesPeakData, EmployeeMetric } from './types';

export const REVENUE_DISTRIBUTION: RevenueData[] = [
  { method: PaymentMethod.PIX, amount: 11914.66, color: '#fb923c' }, // Orange
  { method: PaymentMethod.CREDIT, amount: 20567.40, color: '#22d3ee' }, // Cyan
  { method: PaymentMethod.DEBIT, amount: 29873.31, color: '#4ade80' }, // Green
  { method: PaymentMethod.CASH, amount: 13087.00, color: '#f87171' }, // Red/Rose
  { method: PaymentMethod.OPEN, amount: 5002.10, color: '#94a3b8' }, // Gray
];

export const SALES_PEAKS: SalesPeakData[] = [
  { time: '0:00', amount: 30000 },
  { time: '1:00', amount: 22000 },
  { time: '2:00', amount: 15000 },
  { time: '3:00', amount: 10000 },
  { time: '4:00', amount: 5000 },
  { time: '5:00', amount: 2000 },
  { time: '6:00', amount: 1000 },
  { time: '7:00', amount: 500 },
  { time: '8:00', amount: 200 },
];

export const TOP_EMPLOYEES: EmployeeMetric[] = [
  { id: '001', name: 'Baguncinha Garçom 002', totalSales: 20772.12 },
  { id: '002', name: 'Camila Domingues', totalSales: 16749.63 },
  { id: '003', name: 'Baguncinha Garçom 016', totalSales: 11696.44 },
  { id: '004', name: 'Baguncinha Garçom 005', totalSales: 9219.44 },
  { id: '005', name: 'Thais Lima Camarote', totalSales: 7650.00 },
];

export const TOP_CLIENTS = [
  { name: 'João Silva', spent: 1250.00 },
  { name: 'Maria Oliveira', spent: 980.50 },
  { name: 'Carlos Souza', spent: 850.00 },
];
