
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { jobData } from '@/lib/mock-data';
import { JobCard } from '@/components/job-card';
import { ListFilter } from 'lucide-react';
import Link from 'next/link';

const FilterSidebar = () => (
    <div className="md:col-span-1 lg:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Bộ lọc</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Mức lương (triệu VND)</Label>
                    <Slider defaultValue={[20, 50]} max={100} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>20tr</span>
                        <span>100tr</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Loại hình công việc</Label>
                    <div className="space-y-2">
                        {['Toàn thời gian', 'Bán thời gian', 'Thực tập'].map(item => (
                            <div key={item} className="flex items-center space-x-2">
                                <Checkbox id={`type-${item}`} />
                                <Label htmlFor={`type-${item}`} className="font-normal">{item}</Label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Cấp bậc</Label>
                    <div className="space-y-2">
                        {['Thực tập sinh', 'Nhân viên', 'Chuyên viên', 'Trưởng nhóm'].map(item => (
                            <div key={item} className="flex items-center space-x-2">
                                <Checkbox id={`level-${item}`} />
                                <Label htmlFor={`level-${item}`} className="font-normal">{item}</Label>
                            </div>
                        ))}
                    </div>
                </div>
                <Button className="w-full bg-primary text-white">Áp dụng</Button>
            </CardContent>
        </Card>
    </div>
);

const SearchResultsContent = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    const location = searchParams.get('location');

    // In a real app, you would filter jobData based on query, type, and location
    const filteredJobs = jobData; 

    return (
        <div className="w-full bg-secondary min-h-screen">
             <div className="bg-primary shadow-lg">
                <div className="container mx-auto px-4 md:px-6 py-6 text-white">
                    <h1 className="text-3xl font-bold font-headline">Kết quả tìm kiếm</h1>
                    <p className="text-primary-foreground/80 mt-1">
                        Tìm thấy {filteredJobs.length} việc làm cho 
                        <span className="font-bold"> "{query || type || location || 'Tất cả'}"</span>
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    <div className="hidden md:block">
                      <FilterSidebar />
                    </div>

                    <div className="md:col-span-3 lg:col-span-3">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/"><ArrowLeft className="h-4 w-4" /> Quay lại</Link>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1 md:hidden">
                                    <ListFilter className="w-4 h-4" />
                                    Lọc
                                </Button>
                            </div>
                             <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sắp xếp theo" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Mới nhất</SelectItem>
                                    <SelectItem value="relevance">Liên quan nhất</SelectItem>
                                    <SelectItem value="salary_desc">Lương cao đến thấp</SelectItem>
                                    <SelectItem value="salary_asc">Lương thấp đến cao</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                          ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Button variant="outline">Xem thêm</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Đang tải...</div>}>
            <SearchResultsContent />
        </Suspense>
    );
}

