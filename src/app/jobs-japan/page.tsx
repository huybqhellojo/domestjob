
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { JobCard } from '@/components/job-card';
import { Phone, Heart } from 'lucide-react';
import Link from 'next/link';

const japanJobs = [
  {
    id: 'jp-1',
    companyId: 'japan-company-1',
    companyName: 'Aichi',
    companyLogo: '/zalo.svg', // Using as placeholder
    title: 'Thực tập sinh 3 năm, Sơn kim loại',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'factory work japan',
    location: 'Aichi, Nhật Bản',
    salary: 'Lương cơ bản: 28tr',
    tags: ['Thực tập sinh', 'Sơn kim loại', 'Tăng ca'],
    isJapanJob: true,
  },
    {
    id: 'jp-2',
    companyId: 'japan-company-2',
    companyName: 'Gifu',
    companyLogo: '/zalo.svg',
    title: 'Kỹ sư cơ khí, vận hành máy',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mechanical engineer japan',
    location: 'Gifu, Nhật Bản',
    salary: 'Lương cơ bản: 35tr',
    tags: ['Kỹ sư', 'Cơ khí', 'Tiếng Nhật N3'],
    isJapanJob: true,
  },
  {
    id: 'jp-3',
    companyId: 'japan-company-3',
    companyName: 'Tokyo',
    companyLogo: '/zalo.svg',
    title: 'Tokutei ngành thực phẩm',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'food industry japan',
    location: 'Tokyo, Nhật Bản',
    salary: 'Lương cơ bản: 30tr',
    tags: ['Tokutei', 'Chế biến thực phẩm'],
    isJapanJob: true,
  },
   {
    id: 'jp-4',
    companyId: 'japan-company-1',
    companyName: 'Aichi',
    companyLogo: '/zalo.svg',
    title: 'Thực tập sinh 3 năm, dập kim loại',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'metal stamping japan',
    location: 'Aichi, Nhật Bản',
    salary: 'Lương cơ bản: 28tr',
    tags: ['Thực tập sinh', 'Dập kim loại', 'Tăng ca'],
    isJapanJob: true,
  },
    {
    id: 'jp-5',
    companyId: 'japan-company-2',
    companyName: 'Gifu',
    companyLogo: '/zalo.svg',
    title: 'Kỹ sư điện tử, thiết kế mạch',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'electronics engineer japan',
    location: 'Gifu, Nhật Bản',
    salary: 'Lương cơ bản: 35tr',
    tags: ['Kỹ sư', 'Điện tử', 'Tiếng Nhật N3'],
    isJapanJob: true,
  },
  {
    id: 'jp-6',
    companyId: 'japan-company-3',
    companyName: 'Tokyo',
    companyLogo: '/zalo.svg',
    title: 'Tokutei ngành xây dựng',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'construction japan',
    location: 'Tokyo, Nhật Bản',
    salary: 'Lương cơ bản: 32tr',
    tags: ['Tokutei', 'Xây dựng'],
    isJapanJob: true,
  },
];

export default function JobsJapanPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-amber-500">VIỆC LÀM NHẬT BẢN</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">XKLĐ Nhật - Hiểu văn hóa, xây dựng tương lai!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {japanJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
                 <div className="flex justify-center mt-12">
                    <Button variant="outline">Xem thêm việc làm</Button>
                </div>
            </div>
            <aside className="lg:col-span-1 space-y-4">
                 <Card className="p-4 shadow-lg">
                    <CardHeader className="p-2">
                        <CardTitle className="font-headline text-lg">ĐẦY ĐỦ CÁC LOẠI VISA, NGÀNH NGHỀ</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 flex flex-col gap-3">
                        <Button size="lg" className="w-full justify-start py-6 text-base bg-accent-green hover:bg-accent-green/90 text-white">Thực tập sinh</Button>
                        <Button size="lg" className="w-full justify-start py-6 text-base bg-amber-500 hover:bg-amber-500/90 text-white">Tokutei</Button>
                        <Button size="lg" className="w-full justify-start py-6 text-base bg-sky-500 hover:bg-sky-500/90 text-white">Kỹ sư</Button>
                        <p className="text-center text-muted-foreground my-2">hoặc</p>
                        <Button size="lg" variant="outline" className="w-full py-6 text-base border-primary text-primary hover:bg-primary/10">Xem tất cả việc làm</Button>
                    </CardContent>
                 </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
