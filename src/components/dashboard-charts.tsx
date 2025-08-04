'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Cơ khí', value: 400 },
  { name: 'Điện tử', value: 300 },
  { name: 'Dệt may', value: 300 },
  { name: 'Chế biến TP', value: 200 },
  { name: 'IT/Phần mềm', value: 278 },
  { name: 'Logistics', value: 189 },
];

const barData = [
  { name: 'Vận hành máy', value: 2400 },
  { name: 'Lắp ráp', value: 1398 },
  { name: 'Kiểm tra chất lượng', value: 9800 },
  { name: 'Sửa chữa', value: 3908 },
  { name: 'Lập trình', value: 4800 },
  { name: 'Ngoại ngữ', value: 3800 },
];

const COLORS = ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#38A3A5'];

export function DashboardCharts() {
  return (
    <>
      <Card className="lg:col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Ngành nghề quan tâm</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-3 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Kỹ năng phổ biến</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip wrapperStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}/>
                <Legend />
                <Bar dataKey="value" name="Số lượng ứng viên" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
