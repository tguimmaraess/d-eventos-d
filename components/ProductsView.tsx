import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { PRODUCT_STATS } from '../constants';
import { Package, AlertTriangle, TrendingUp, ShoppingBag, Search, Filter } from 'lucide-react';

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

const ProductsView: React.FC = () => {
  // Sort by revenue for the chart
  const chartData = [...PRODUCT_STATS]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  const totalProductsSold = PRODUCT_STATS.reduce((acc, curr) => acc + curr.sold, 0);
  const totalProductRevenue = PRODUCT_STATS.reduce((acc, curr) => acc + curr.revenue, 0);
  const lowStockCount = PRODUCT_STATS.filter(p => p.status === 'low').length;

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Receita de Produtos</p>
            <p className="text-3xl font-bold text-slate-800">{formatCurrency(totalProductRevenue)}</p>
          </div>
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
            <TrendingUp size={28} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Itens Vendidos</p>
            <p className="text-3xl font-bold text-slate-800">{totalProductsSold}</p>
          </div>
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
            <ShoppingBag size={28} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Estoque Crítico</p>
            <p className="text-3xl font-bold text-slate-800">{lowStockCount} <span className="text-sm font-medium text-slate-400">itens</span></p>
          </div>
          <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
            <AlertTriangle size={28} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-700">Top 5 Produtos (Receita)</h3>
            <p className="text-sm text-slate-400">Desempenho financeiro por item</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150} 
                  tick={{fill: '#64748b', fontSize: 12}}
                  tickFormatter={(value) => value.length > 20 ? `${value.substring(0, 20)}...` : value}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [formatCurrency(value), 'Receita']}
                />
                <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4f46e5' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mini Category Summary (Placeholder for visual balance) */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-sm text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Categoria Líder</h3>
            <div className="text-4xl font-bold text-indigo-400 mb-1">Cervejas</div>
            <p className="text-slate-400 text-sm">Representa a maior parte do faturamento total.</p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                   <Package size={20} />
                </div>
                <div>
                   <p className="text-xs text-indigo-200 uppercase font-bold">Produto em destaque</p>
                   <p className="font-medium truncate w-40">Cerveja Glacial 600ml</p>
                </div>
             </div>
             <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full w-[85%]"></div>
             </div>
             <div className="flex justify-between text-xs mt-2 text-slate-400">
                <span>Vendas: 1.240 un.</span>
                <span>Meta: 1.500 un.</span>
             </div>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-700">Relatório de Vendas</h3>
            <p className="text-sm text-slate-400">Detalhamento por produto, quantidade e valor</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar produto..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500">
              <Filter size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50/50 text-slate-500 font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Produto</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4 text-right">Preço Unit.</th>
                <th className="px-6 py-4 text-center">Qtd. Vendida</th>
                <th className="px-6 py-4 text-right">Valor Total</th>
                <th className="px-6 py-4 text-center">Status Estoque</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {PRODUCT_STATS.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-600">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-600">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="px-6 py-4 text-center text-slate-700 font-semibold">
                    {product.sold}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-indigo-600">
                    {formatCurrency(product.revenue)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {product.status === 'high' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Em dia
                      </span>
                    )}
                    {product.status === 'medium' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Regular
                      </span>
                    )}
                    {product.status === 'low' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium border border-red-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        Crítico ({product.stock})
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;