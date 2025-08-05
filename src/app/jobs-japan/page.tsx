
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { JobCard } from '@/components/job-card';

const japanJobs = [
  {
    id: 'JP-TTS-01',
    companyId: 'japan-company-1', // Placeholder, links to a generic page for now
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
    id: 'JP-KS-02',
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
    id: 'JP-TKT-03',
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
    id: 'JP-TTS-04',
    companyId: 'japan-company-1', // Placeholder
    companyName: 'Osaka',
    companyLogo: '/zalo.svg',
    title: 'Thực tập sinh lắp ráp điện tử',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'electronics assembly japan',
    location: 'Osaka, Nhật Bản',
    salary: 'Lương cơ bản: 27tr',
    tags: ['Thực tập sinh', 'Điện tử', 'Không yêu cầu KN'],
    isJapanJob: true,
  },
    {
    id: 'JP-KS-05',
    companyId: 'japan-company-2', // Placeholder
    companyName: 'Fukuoka',
    companyLogo: '/zalo.svg',
    title: 'Kỹ sư xây dựng',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'construction engineer japan',
    location: 'Fukuoka, Nhật Bản',
    salary: 'Lương cơ bản: 38tr',
    tags: ['Kỹ sư', 'Xây dựng', 'CAD'],
    isJapanJob: true,
  },
    {
    id: 'JP-TKT-06',
    companyId: 'japan-company-3', // Placeholder
    companyName: 'Hokkaido',
    companyLogo: '/zalo.svg',
    title: 'Tokutei ngành nông nghiệp',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'agriculture japan',
    location: 'Hokkaido, Nhật Bản',
    salary: 'Lương cơ bản: 29tr',
    tags: ['Tokutei', 'Nông nghiệp', 'Chăm chỉ'],
    isJapanJob: true,
  },
];

const FilterButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <Button
        variant="outline"
        className={`w-full h-auto py-4 text-left text-lg font-bold hover:bg-primary/10 justify-start ${className}`}
    >
        {children}
    </Button>
);

export default function JobsJapanPage() {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-amber-500">VIỆC LÀM NHẬT BẢN</h1>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">XKLĐ Nhật - Hiểu văn hóa, xây dựng tương lai!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:col-span-1">
                        <Card>
                            <CardContent className="p-4 space-y-3">
                                <FilterButton className="bg-primary/10 text-primary border-primary">Tất cả</FilterButton>
                                <FilterButton>Thực tập sinh</FilterButton>
                                <FilterButton>Tokutei</FilterButton>
                                <FilterButton>Kỹ sư</FilterButton>
                                <FilterButton>Khác</FilterButton>
                            </CardContent>
                        </Card>
                    </aside>

                    {/* Jobs Grid */}
                    <main className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {japanJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
