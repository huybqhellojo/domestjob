
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const employers = [
  { id: 'samsung', name: 'Samsung Electronics', industry: 'Điện tử', location: 'Bắc Ninh', logo: 'https://placehold.co/100x100.png', dataAiHint: 'samsung logo', jobCount: 15 },
  { id: 'vinfast', name: 'Vinfast', industry: 'Cơ khí - Ô tô', location: 'Hải Phòng', logo: 'https://placehold.co/100x100.png', dataAiHint: 'vinfast logo', jobCount: 8 },
  { id: 'fpt-software', name: 'FPT Software', industry: 'IT/Phần mềm', location: 'TP. Hồ Chí Minh', logo: 'https://placehold.co/100x100.png', dataAiHint: 'fpt logo', jobCount: 22 },
  { id: 'garment-10', name: 'Garment 10 Corporation', industry: 'Dệt may', location: 'Hà Nội', logo: 'https://placehold.co/100x100.png', dataAiHint: 'garment factory', jobCount: 12 },
  { id: 'hoaphat', name: 'Hòa Phát Group', industry: 'Sản xuất Thép', location: 'Hải Dương', logo: 'https://placehold.co/100x100.png', dataAiHint: 'hoaphat logo', jobCount: 5 },
  { id: 'lg-electronics', name: 'LG Electronics', industry: 'Điện tử', location: 'Hải Phòng', logo: 'https://placehold.co/100x100.png', dataAiHint: 'lg logo', jobCount: 18 },
];

const industryColors: { [key: string]: string } = {
  'Điện tử': 'bg-sky-100 text-sky-700',
  'Cơ khí - Ô tô': 'bg-orange-100 text-orange-700',
  'IT/Phần mềm': 'bg-blue-100 text-blue-700',
  'Dệt may': 'bg-indigo-100 text-indigo-700',
  'Sản xuất Thép': 'bg-gray-100 text-gray-700',
};


export default function EmployersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Các nhà tuyển dụng hàng đầu
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Khám phá cơ hội việc làm tại các doanh nghiệp uy tín trong khu công nghiệp.
          </p>
        </div>

        {/* Filter Section */}
        <Card className="mb-12 shadow-lg">
           <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-grow w-full relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
               <Input placeholder="Tìm kiếm tên công ty..." className="pl-10 w-full" />
            </div>
            <div className="flex-grow w-full">
              <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn ngành" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT/Phần mềm</SelectItem>
                    <SelectItem value="cokhi">Cơ khí - Ô tô</SelectItem>
                    <SelectItem value="detmay">Dệt may</SelectItem>
                    <SelectItem value="dientu">Điện tử</SelectItem>
                  </SelectContent>
                </Select>
            </div>
             <div className="flex-grow w-full">
              <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn địa điểm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                    <SelectItem value="hanoi">Hà Nội</SelectItem>
                    <SelectItem value="haiphong">Hải Phòng</SelectItem>
                     <SelectItem value="bacninh">Bắc Ninh</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <Button className="w-full md:w-auto bg-primary text-white">Tìm kiếm</Button>
          </CardContent>
        </Card>

        {/* Employers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employers.map((employer) => (
            <Card key={employer.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="p-0">
                  <div className="bg-gray-100 h-24 flex items-center justify-center">
                    <Image src={employer.logo} alt={`${employer.name} logo`} width={80} height={80} className="rounded-full border-2 border-white" data-ai-hint={employer.dataAiHint} />
                  </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <Link href={`/employers/${employer.id}`}>
                    <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{employer.name}</CardTitle>
                </Link>
                <Badge className={`${industryColors[employer.industry] || 'bg-gray-100'}`}>{employer.industry}</Badge>
                <p className="text-muted-foreground mt-2 flex items-center justify-center gap-2"><MapPin className="h-4 w-4"/> {employer.location}</p>
                <p className="text-primary font-bold mt-4">{employer.jobCount} việc làm đang tuyển</p>
                 <Button asChild className="mt-4 w-full">
                    <Link href={`/employers/${employer.id}`}>Xem chi tiết</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
