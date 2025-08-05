
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { JobCard } from '@/components/job-card';

const jobs = [
  {
    id: 'samsung-1',
    companyId: 'samsung',
    companyName: 'Samsung Electronics',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Kỹ sư Vận hành Dây chuyền',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'production line worker',
    location: 'Khu công nghệ cao, Q.9, TP.HCM',
    salary: 'Thỏa thuận',
    tags: ['Cơ điện tử', 'Tự động hóa', 'Làm việc theo ca'],
  },
  {
    id: 'vinfast-1',
    companyId: 'vinfast',
    companyName: 'Vinfast',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Công nhân Lắp ráp Ô tô',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'car assembly line',
    location: 'Hải Phòng',
    salary: '10-15 triệu',
    tags: ['Lắp ráp', 'Cẩn thận', 'Sức khỏe tốt'],
  },
  {
    id: 'fpt-1',
    companyId: 'fpt-software',
    companyName: 'FPT Software',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Thực tập sinh Frontend',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'software developer intern',
    location: 'Quận 7, TP.HCM',
    salary: 'Hỗ trợ thực tập',
    tags: ['ReactJS', 'HTML/CSS', 'Sinh viên'],
  },
  {
    id: 'samsung-2',
    companyId: 'samsung',
    companyName: 'Samsung Electronics',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Nhân viên Kiểm tra Chất lượng (QC)',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'quality control inspector',
    location: 'Bắc Ninh',
    salary: '12-18 triệu',
    tags: ['Kiểm tra sản phẩm', 'Tỉ mỉ', 'ISO 9001'],
  },
    {
    id: 'lg-1',
    companyId: 'lg-electronics',
    companyName: 'LG Electronics',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Kỹ sư Thiết kế Mạch',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'circuit design engineer',
    location: 'Hải Phòng',
    salary: 'Cạnh tranh',
    tags: ['Thiết kế mạch', 'Điện tử', 'Altium'],
  },
  {
    id: 'hoaphat-1',
    companyId: 'hoaphat',
    companyName: 'Hòa Phát Group',
    companyLogo: 'https://placehold.co/100x100.png',
    title: 'Công nhân Vận hành Lò thép',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'steel factory worker',
    location: 'Dung Quất, Quảng Ngãi',
    salary: '15-20 triệu',
    tags: ['Luyện kim', 'An toàn lao động', 'Chịu nhiệt'],
  },
];


export default function EmployersPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Card className="mb-8 shadow-lg">
           <CardHeader>
                <CardTitle className="font-headline text-3xl">Tìm kiếm việc làm</CardTitle>
                <CardDescription>Tìm kiếm từ hàng ngàn cơ hội việc làm tại các khu công nghiệp hàng đầu.</CardDescription>
           </CardHeader>
           <CardContent>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="search-title" className="font-semibold">Chức danh, từ khóa hoặc công ty</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="search-title" placeholder="VD: Công nhân, kỹ sư, Samsung..." className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label htmlFor="search-location" className="font-semibold">Địa điểm</label>
                   <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="search-location" placeholder="VD: Quận 9, TP.HCM" className="pl-10" />
                  </div>
                </div>
                <div>
                   <Button size="lg" className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white text-lg">
                    <Search className="mr-2 h-5 w-5" /> Tìm kiếm
                  </Button>
                </div>
              </div>
           </CardContent>
        </Card>
        
        <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Hiển thị <span className="font-bold text-foreground">{jobs.length}</span> kết quả</p>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="salary-desc">Lương cao nhất</SelectItem>
                    <SelectItem value="salary-asc">Lương thấp nhất</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
        
        <div className="flex justify-center mt-12">
            <Button variant="outline">Xem thêm việc làm</Button>
        </div>
      </div>
    </div>
  );
}
