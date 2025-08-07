
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, Users, ArrowRight, BookOpen, Search, Map, GraduationCap, Building, MapPin, TrendingUp, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const featuredEmployers = [
  { id: 'samsung', name: 'Samsung', logo: 'https://placehold.co/150x50.png', dataAiHint: 'samsung logo' },
  { id: 'vinfast', name: 'Vinfast', logo: 'https://placehold.co/150x50.png', dataAiHint: 'vinfast logo' },
  { id: 'fpt-software', name: 'FPT Software', logo: 'https://placehold.co/150x50.png', dataAiHint: 'fpt logo' },
  { id: 'lg-electronics', name: 'LG Electronics', logo: 'https://placehold.co/150x50.png', dataAiHint: 'lg logo' },
  { id: 'hoaphat', name: 'Hòa Phát Group', logo: 'https://placehold.co/150x50.png', dataAiHint: 'hoaphat logo' },
];

const featuredCourses = [
   {
    id: 'tieng-nhat-giao-tiep',
    title: 'Tiếng Nhật giao tiếp cho người đi làm',
    category: 'Ngoại ngữ',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Japanese language',
  },
  {
    id: 'ky-nang-lam-viec-nhom',
    title: 'Kỹ năng làm việc nhóm hiệu quả',
    category: 'Kỹ năng mềm',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'teamwork collaboration',
  },
  {
    id: 'an-toan-lao-dong',
    title: 'An toàn lao động trong sản xuất',
    category: 'Kỹ thuật',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'factory safety',
  },
]

const jobTypesByMarket: { [key: string]: string[] } = {
  vn: ['Lao động phổ thông', 'Lao động lành nghề', 'Kỹ sư, tri thức'],
  jp: ['Thực tập sinh', 'Kỹ năng đặc định', 'Kỹ sư, tri thức'],
};

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState('');
  const [jobTypes, setJobTypes] = useState<string[]>([]);

  const handleMarketChange = (value: string) => {
    setSelectedMarket(value);
    setJobTypes(jobTypesByMarket[value] || []);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section for Candidates */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
              Nâng cao kỹ năng, làm chủ tương lai
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/80">
              Phát triển từ lao động phổ thông thành chuyên gia tay nghề cao với lộ trình đào tạo rõ ràng và hàng ngàn cơ hội việc làm.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto mt-[-2rem] shadow-2xl z-10 relative">
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-3 space-y-2">
                   <Label htmlFor="search-market" className="text-foreground">Thị trường</Label>
                   <Select onValueChange={handleMarketChange}>
                      <SelectTrigger id="search-market">
                        <SelectValue placeholder="Chọn thị trường" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vn">Trong nước (KCN)</SelectItem>
                        <SelectItem value="jp">Nhật Bản</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
                <div className="md:col-span-3 space-y-2">
                  <Label htmlFor="search-type" className="text-foreground">Loại hình, kỹ năng</Label>
                  <Select>
                    <SelectTrigger id="search-type" disabled={!selectedMarket}>
                      <SelectValue placeholder={selectedMarket ? "Chọn loại hình" : "Vui lòng chọn thị trường trước"} />
                    </SelectTrigger>
                    <SelectContent>
                      {jobTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="search-industry" className="text-foreground">Ngành nghề</Label>
                   <Select>
                      <SelectTrigger id="search-industry">
                        <SelectValue placeholder="Tất cả" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">Công nghệ thông tin</SelectItem>
                        <SelectItem value="cokhi">Cơ khí</SelectItem>
                        <SelectItem value="detmay">Dệt may</SelectItem>
                        <SelectItem value="dientu">Điện tử</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
                 <div className="md:col-span-2 space-y-2">
                   <Label htmlFor="search-location" className="text-foreground">Địa điểm</Label>
                   <Input id="search-location" placeholder="VD: Bắc Ninh" />
                </div>
                <div className="md:col-span-2">
                   <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                    <Search className="mr-2 h-5 w-5" /> Tìm kiếm
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </section>

      {/* Why Choose Us for Candidates */}
      <section className="w-full py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
            Con đường phát triển của bạn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-4 w-fit">
                  <Map className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="font-headline mt-4">Lộ trình rõ ràng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Xem lộ trình phát triển sự nghiệp (SWR) để định hướng con đường từ lao động phổ thông đến chuyên gia.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-orange-100 rounded-full p-4 w-fit">
                  <GraduationCap className="h-10 w-10 text-orange-500" />
                </div>
                <CardTitle className="font-headline mt-4">Nâng cao kỹ năng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tham gia các khóa học E-learning miễn phí để trau dồi kiến thức và kỹ năng cần thiết cho công việc mơ ước.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-sky-100 rounded-full p-4 w-fit">
                  <Briefcase className="h-10 w-10 text-sky-500" />
                </div>
                <CardTitle className="font-headline mt-4">Việc làm chất lượng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sau khi hoàn thành đào tạo, tiếp cận hàng ngàn công việc chất lượng cao từ các nhà tuyển dụng hàng đầu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skilled Labor CTA Section */}
      <section className="w-full py-20 md:py-28 bg-accent/20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-full order-last md:order-first">
                <Image 
                  src="https://placehold.co/600x600.png"
                  alt="Lao động lành nghề"
                  fill
                  className="object-cover"
                  data-ai-hint="happy factory worker"
                />
              </div>
              <div className="p-8 md:p-12 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  Lao động lành nghề <br /> thu nhập bao nhiêu?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
                  Khám phá lộ trình phát triển sự nghiệp để trở thành lao động tay nghề cao và đạt được mức thu nhập mơ ước.
                </p>
                <Button asChild size="lg" className="bg-accent-green hover:bg-accent-green/90 text-white">
                  <Link href="/roadmap">
                    <TrendingUp /> Xem ngay lộ trình
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Employers */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Các nhà tuyển dụng hàng đầu</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Những công ty lớn và uy tín đang tìm kiếm những ứng viên như bạn.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {featuredEmployers.map(emp => (
              <div key={emp.id} className="flex justify-center">
                <Image src={emp.logo} alt={emp.name} width={150} height={50} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={emp.dataAiHint}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured E-Learning Courses */}
      <section className="w-full py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Nâng cao kỹ năng với E-Learning</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Đầu tư vào bản thân với các khóa học được thiết kế riêng, giúp bạn thăng tiến trong sự nghiệp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="p-0">
                   <Link href={`/learn/${course.id}`} className="block">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={course.dataAiHint}
                      />
                   </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-sm font-bold mb-2 text-primary">{course.category}</p>
                  <Link href={`/learn/${course.id}`}>
                      <CardTitle className="font-headline text-xl mb-2 h-14 group-hover:text-primary transition-colors">{course.title}</CardTitle>
                  </Link>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                   <Link href={`/learn/${course.id}`} className="font-bold text-primary hover:underline flex items-center">
                    Tìm hiểu thêm <ArrowRight className="ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-16">
            <Button asChild size="lg">
              <Link href="/learn">Khám phá tất cả khóa học <BookOpen /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Employers & Franchise */}
      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 rounded-lg bg-accent text-primary-foreground p-12 lg:p-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Giải pháp cho Khu Công Nghiệp</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Xây dựng cổng thông tin nhân sự và đào tạo riêng cho KCN của bạn với mô hình PPaaS (Private Portal as a Service) - giải pháp toàn diện để thu hút, đào tạo và giữ chân nhân tài.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/employers">Tìm hiểu về PPaaS Private Portal</Link>
              </Button>
            </div>
             <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Kiến trúc hệ thống PPaaS"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
                data-ai-hint="system architecture diagram"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
