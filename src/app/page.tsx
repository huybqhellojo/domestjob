
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Briefcase, Users, ArrowRight, BookOpen, Search, Map, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section for Candidates */}
      <section className="w-full bg-primary text-primary-foreground py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Tìm kiếm cơ hội, phát triển sự nghiệp
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/80">
            Hàng ngàn việc làm từ các công ty hàng đầu trong khu công nghiệp đang chờ đón bạn. Tạo hồ sơ ngay hôm nay để bắt đầu hành trình của bạn!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/register">Tạo hồ sơ miễn phí <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="#">Tìm việc làm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Candidates */}
      <section className="w-full py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
            Lợi ích dành cho bạn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-sky-100 rounded-full p-4 w-fit">
                  <Search className="h-10 w-10 text-sky-500" />
                </div>
                <CardTitle className="font-headline mt-4">Việc làm đa dạng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Khám phá hàng ngàn công việc từ các công ty uy tín trong nhiều lĩnh vực: Cơ khí, Điện tử, May mặc, và nhiều hơn nữa.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-4 w-fit">
                  <Map className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="font-headline mt-4">Lộ trình rõ ràng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Xem lộ trình phát triển sự nghiệp (SWR) để định hướng con đường thăng tiến của bạn trong ngành.
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
                  Tham gia các khóa học E-learning miễn phí để trau dồi kiến thức và kỹ năng cần thiết cho công việc.
                </p>
              </CardContent>
            </Card>
          </div>
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
          <div className="flex flex-col md:flex-row items-center gap-12 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white p-12 lg:p-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Bạn là nhà tuyển dụng?</h2>
              <p className="text-lg text-white/80 mb-8">
                Tìm kiếm và tiếp cận hàng ngàn ứng viên tiềm năng. Đăng tin tuyển dụng và quản lý hồ sơ một cách dễ dàng và hiệu quả.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/employers">Dành cho Nhà tuyển dụng</Link>
              </Button>
            </div>
             <div className="md:w-1/2 flex justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Nhà tuyển dụng"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
                data-ai-hint="business meeting"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
