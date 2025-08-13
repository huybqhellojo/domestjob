
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { hollandData, HollandGroup } from '@/lib/holland-data';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Answers = {
  [key: string]: number; // key is "groupCode-questionId", value is the score
};

const interestLevels = [
  { value: 2, label: 'Thích' },
  { value: 1, label: 'Không rõ' },
  { value: 0, label: 'Không thích' },
];

const COLORS = ['#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#AF19FF', '#FF19A6'];


export default function HollandTestPage() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = hollandData.reduce((sum, group) => sum + group.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;
  
  const currentGroup = hollandData[currentGroupIndex];
  
  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`${currentGroup.code}-${questionId}`]: parseInt(value, 10),
    }));
  };

  const handleNext = () => {
    if (currentGroupIndex < hollandData.length - 1) {
      setCurrentGroupIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const scores = hollandData.map(group => ({
      name: group.name,
      code: group.code,
      score: group.questions.reduce((total, q) => total + (answers[`${group.code}-${q.id}`] || 0), 0),
    }));
    scores.sort((a, b) => b.score - a.score);
    return scores;
  };

  if (showResults) {
    const results = calculateResults();
    const topGroup = results[0];
    const topGroupData = hollandData.find(g => g.code === topGroup.code);

    return (
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl text-primary">Kết quả trắc nghiệm Holland</CardTitle>
              <CardDescription>Đây là nhóm sở thích nghề nghiệp nổi trội nhất của bạn.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <h3 className="text-2xl font-bold font-headline">{topGroup.name}</h3>
                <p className="mt-2 text-muted-foreground">{topGroupData?.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-center">Biểu đồ điểm các nhóm</h4>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <BarChart data={results} layout="vertical" margin={{ left: 120 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={120} tickLine={false} axisLine={false} />
                      <Tooltip 
                        cursor={{fill: 'hsla(var(--muted), 0.5)'}}
                        contentStyle={{
                            backgroundColor: 'hsl(var(--background))',
                            borderRadius: 'var(--radius)',
                            border: '1px solid hsl(var(--border))'
                        }}
                      />
                      <Bar dataKey="score" fill="#8884d8" barSize={30}>
                        {results.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2 text-center">Gợi ý nghề nghiệp cho nhóm {topGroup.code}</h4>
                <p className="text-center text-muted-foreground">Dựa trên kết quả, bạn có thể phù hợp với các công việc liên quan đến kỹ thuật, máy móc, và các hoạt động thực tế. Hãy tìm kiếm các việc làm trong ngành cơ khí, xây dựng, nông nghiệp tại Nhật Bản.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button asChild size="lg">
                    <Link href="/jobs">
                        Tìm việc làm phù hợp <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-xl">
                <CardHeader>
                    <Progress value={progress} className="mb-4 h-2"/>
                    <CardTitle className="font-headline text-3xl">Trắc nghiệm Holland (Phần {currentGroupIndex + 1}/{hollandData.length})</CardTitle>
                    <CardDescription className="!mt-2 text-base">{currentGroup.name}: {currentGroup.description}</CardDescription>
                    <p className="text-sm text-muted-foreground pt-4">Với mỗi hoạt động dưới đây, hãy chọn mức độ bạn yêu thích khi thực hiện nó.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-2 font-semibold">Hoạt động</th>
                                    {interestLevels.map(level => (
                                        <th key={level.value} className="p-2 text-center text-xs md:text-sm font-semibold whitespace-nowrap">{level.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentGroup.questions.map((q, index) => (
                                    <tr key={`${currentGroup.code}-${q.id}`} className={cn("border-b", index % 2 === 1 ? 'bg-secondary/50' : '')}>
                                        <td className="p-3 text-sm">{q.text}</td>
                                        <td colSpan={interestLevels.length}>
                                            <RadioGroup
                                                value={answers[`${currentGroup.code}-${q.id}`]?.toString()}
                                                onValueChange={(value) => handleAnswerChange(q.id, value)}
                                                className="flex justify-around items-center w-full"
                                            >
                                                {interestLevels.map(level => (
                                                    <div key={`${currentGroup.code}-${q.id}-${level.value}`} className="flex items-center justify-center py-3 w-full">
                                                        <RadioGroupItem value={level.value.toString()} id={`${currentGroup.code}-q${q.id}-l${level.value}`} />
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                   </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleNext} disabled={currentGroup.questions.some(q => answers[`${currentGroup.code}-${q.id}`] === undefined)}>
                        {currentGroupIndex < hollandData.length - 1 ? 'Tiếp theo' : 'Xem kết quả'}
                        {currentGroupIndex < hollandData.length - 1 ? <ArrowRight className="ml-2"/> : <Check className="ml-2"/>}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
