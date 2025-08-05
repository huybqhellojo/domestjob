
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';
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
];


export default function EmployersPage() {
  return (
    <div className="bg-secondary">
      <div className="w-full bg-accent text-primary-foreground py-20 md:py-28">
         <div className="container mx-auto px-4 md:px-6">
             <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
                  Tìm việc làm phù hợp
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/80">
                  Tiếp cận hàng ngàn ứng viên tiềm năng. Đăng tin tuyển dụng và quản lý hồ sơ một cách dễ dàng và hiệu quả.
                </p>
                 <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                        <Link href="/post-job">Đăng tin tuyển dụng</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        <Link href="/franchise">Mô hình Nhượng quyền</Link>
                    </Button>
                 </div>
            </div>
          </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <Card className="mb-8 shadow-lg">
           <CardHeader>
                <CardTitle className="font-headline text-3xl">Tìm việc làm trong nước</CardTitle>
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
      
      {/* Japan Jobs Section */}
      <div id="jobs-japan" className="container mx-auto px-4 md:px-6 py-12 md:py-16 border-t-4 border-dashed border-primary/20">
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-amber-500">VIỆC LÀM NHẬT BẢN</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">XKLĐ Nhật - Hiểu văn hóa, xây dựng tương lai!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {japanJobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
                <Link href="/jobs-japan">
                    Xem tất cả việc làm Nhật Bản <ArrowRight className="ml-2"/>
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
