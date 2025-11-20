import { PaymentMethod, RevenueData, SalesPeakData, EmployeeMetric, ProductStat } from './types';

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

export const PRODUCT_STATS: ProductStat[] = [
  { id: '1', name: 'Cerveja Glacial 600ml', category: 'Cervejas', price: 9.00, sold: 1240, revenue: 11160.00, stock: 85, status: 'high' },
  { id: '2', name: 'Cerveja Bavaria 600ml', category: 'Cervejas', price: 10.00, sold: 980, revenue: 9800.00, stock: 42, status: 'medium' },
  { id: '3', name: 'Combo Vodka Absolut + 6 Redbull', category: 'Combos', price: 350.00, sold: 42, revenue: 14700.00, stock: 15, status: 'medium' },
  { id: '4', name: 'Coca-Cola Lata 350ml', category: 'Não Alcoólicos', price: 6.00, sold: 850, revenue: 5100.00, stock: 120, status: 'high' },
  { id: '5', name: 'Cerveja Heineken 330ml', category: 'Cervejas', price: 18.00, sold: 420, revenue: 7560.00, stock: 120, status: 'high' },
  { id: '6', name: 'Água Mineral sem Gás', category: 'Não Alcoólicos', price: 5.00, sold: 340, revenue: 1700.00, stock: 45, status: 'medium' },
  { id: '7', name: 'Whisky Red Label Dose', category: 'Destilados', price: 28.00, sold: 85, revenue: 2380.00, stock: 2, status: 'low' },
  { id: '8', name: 'Energético Red Bull', category: 'Não Alcoólicos', price: 22.00, sold: 105, revenue: 2310.00, stock: 60, status: 'high' },
  { id: '9', name: 'Combo Gin Beefeater', category: 'Combos', price: 380.00, sold: 12, revenue: 4560.00, stock: 10, status: 'medium' },
];