import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid
} from 'recharts';
import { REVENUE_DISTRIBUTION, SALES_PEAKS, TOP_EMPLOYEES, TOP_CLIENTS } from '../constants';
import { UserCheck, UserPlus, TrendingUp, DollarSign, Receipt } from 'lucide-react';

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

const DashboardView: React.FC = () => {
  const totalRevenue = REVENUE_DISTRIBUTION.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      
      {/* Top Row: Revenue & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Big Number - Takes 2 columns on large screens */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center lg:col-span-2 relative overflow-hidden min-h-[400px]">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
            <DollarSign size={200} className="text-indigo-900" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                  <DollarSign size={24} />
                </div>
                <h2 className="text-xl font-semibold text-slate-700">Faturamento Total</h2>
                <span className="ml-auto bg-emerald-50 text-emerald-600 text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1 border border-emerald-100">
                  <TrendingUp size={14} /> +12.5% este mês
                </span>
              </div>
              
              <div className="text-5xl sm:text-6xl font-bold text-slate-800 mb-8 tracking-tight">
                {formatCurrency(totalRevenue)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all group">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
                   Consumo médio
                </p>
                <p className="font-bold text-slate-700 text-2xl group-hover:text-indigo-600 transition-colors">R$ 357,29</p>
              </div>
               <div className="bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">
                   Meta diária
                </p>
                <div className="flex items-end gap-3">
                  <p className="font-bold text-slate-700 text-2xl">85%</p>
                  <div className="h-2.5 flex-1 bg-slate-200 rounded-full mb-2.5 overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Sources Donut - Takes 1 column */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full min-h-[400px]">
          <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center gap-2">
             Receita por Método
          </h3>
          <p className="text-sm text-slate-400 mb-6">Distribuição por tipo de pagamento</p>
          
          <div className="flex-1 flex flex-col items-center justify-between gap-4">
            <div className="h-48 w-48 relative flex-shrink-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                 <span className="text-xs text-slate-400 font-semibold uppercase">Total</span>
                 <span className="text-sm font-bold text-slate-700">100%</span>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={REVENUE_DISTRIBUTION}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="amount"
                    cornerRadius={4}
                  >
                    {REVENUE_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#1e293b', fontWeight: 600, fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full space-y-3 overflow-y-auto pr-1 max-h-[200px] custom-scrollbar">
              {REVENUE_DISTRIBUTION.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full shadow-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-600 font-medium truncate">{item.method}</span>
                  </div>
                  <span className="font-semibold text-slate-700 whitespace-nowrap ml-2">
                    {formatCurrency(item.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Metric Cards */}
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
               <UserPlus size={28} />
            </div>
            <div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Novos Clientes</p>
               <p className="text-3xl font-bold text-slate-800">12</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
               <UserCheck size={28} />
            </div>
            <div>
               <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Retornaram</p>
               <p className="text-3xl font-bold text-slate-800">48</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-4">
               <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-orange-50 text-orange-500 rounded-lg">
                    <Receipt size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Comandas</h4>
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">Hoje</span>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex-1">
                    <p className="text-2xl font-bold text-slate-800">142</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 w-max px-2 py-0.5 rounded-full mt-1">
                        <span>Fechadas</span>
                    </div>
                </div>
                <div className="w-px h-10 bg-slate-100"></div>
                <div className="flex-1">
                    <p className="text-2xl font-bold text-slate-800">5</p>
                     <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 w-max px-2 py-0.5 rounded-full mt-1">
                        <span>Abertas</span>
                    </div>
                </div>
             </div>
         </div>
      </div>

      {/* Third Row: Sales Peaks Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-700">Picos de venda</h3>
            <p className="text-sm text-slate-400">Análise horária do volume de vendas</p>
          </div>
          <div className="flex gap-2">
             <button className="text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2 rounded-lg transition-colors">
               Últimas 24h
             </button>
             <button className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-sm shadow-indigo-200 transition-colors">
               Hoje
             </button>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SALES_PEAKS} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 500}} 
                tickFormatter={(val) => `R$${val/1000}k`} 
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '5 5' }}
                formatter={(val: number) => [formatCurrency(val), 'Vendas']}
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="#f97316" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorSales)" 
                activeDot={{ r: 6, fill: '#ea580c', stroke: '#fff', strokeWidth: 2 }} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row: Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">Faturamento por funcionário</h3>
              <p className="text-sm text-slate-400">Top 5 performance</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50/50 text-slate-500 font-semibold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Nome</th>
                  <th className="px-6 py-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TOP_EMPLOYEES.map((emp, idx) => (
                  <tr key={emp.id} className="hover:bg-slate-50 transition-colors group cursor-default">
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                              idx === 0 ? 'bg-amber-50 border-amber-200 text-amber-700' : 
                              idx === 1 ? 'bg-slate-100 border-slate-200 text-slate-600' : 
                              idx === 2 ? 'bg-orange-50 border-orange-200 text-orange-800' : 'bg-slate-50 border-slate-200 text-slate-500'
                          }`}>
                             {idx + 1}
                          </div>
                          <span className="text-slate-700 font-medium">{emp.name}</span>
                       </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-700 group-hover:text-indigo-600">
                        {formatCurrency(emp.totalSales)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Clients */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
           <div className="p-6 border-b border-slate-50 flex justify-between items-center">
             <div>
              <h3 className="text-lg font-semibold text-slate-700">Top 10 clientes</h3>
              <p className="text-sm text-slate-400">Maiores consumidores do período</p>
             </div>
          </div>
          {TOP_CLIENTS.length > 0 ? (
             <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-slate-50/50 text-slate-500 font-semibold border-b border-slate-100">
                 <tr>
                   <th className="px-6 py-4">Cliente</th>
                   <th className="px-6 py-4 text-right">Gasto</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 {TOP_CLIENTS.map((client, idx) => (
                   <tr key={idx} className="hover:bg-slate-50 transition-colors cursor-default">
                     <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold border border-indigo-100">
                              {client.name.charAt(0)}
                           </div>
                           <span className="text-slate-700 font-medium">{client.name}</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 text-right font-bold text-slate-700">
                        {formatCurrency(client.spent)}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-3 min-h-[200px]">
              <div className="p-4 bg-slate-50 rounded-full">
                 <UserCheck size={32} className="opacity-30" />
              </div>
              <p>Nenhum dado faturado no período.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;