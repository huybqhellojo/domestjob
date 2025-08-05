
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featuredEmployers = [
  { id: 'samsung', name: 'Samsung', logo: 'https://placehold.co/150x50.png', dataAiHint: 'samsung logo' },
  { id: 'vinfast', name: 'Vinfast', logo: 'https://placehold.co/150x50.png', dataAiHint: 'vinfast logo' },
  { id: 'fpt-software', name: 'FPT Software', logo: 'https://placehold.co/150x50.png', dataAiHint: 'fpt logo' },
  { id: 'lg-electronics', name: 'LG Electronics', logo: 'https://placehold.co/150x50.png', dataAiHint: 'lg logo' },
  { id: 'hoaphat', name: 'Hòa Phát Group', logo: 'https://placehold.co/150x50.png', dataAiHint: 'hoaphat logo' },
];

export default function EmployersPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section for Employers */}
      <section className="w-full bg-accent text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                Tìm việc làm phù hợp
              </h1>
              <p className="text-lg md:text-xl max-w-md mx-auto md:mx-0 text-primary-foreground/80">
                Tiếp cận hàng ngàn ứng viên tiềm năng. Đăng tin tuyển dụng và quản lý hồ sơ một cách dễ dàng và hiệu quả.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/post-job">
                    <Briefcase /> Đăng tin tuyển dụng
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
                  <Link href="/franchise">Mô hình Nhượng quyền</Link>
                </Button>
              </div>
            </div>
             <div className="relative">
                <Image 
                  src="https://placehold.co/600x400.png"
                  alt="Nhà tuyển dụng"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="recruitment manager human resources"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Employers */}
      <section className="w-full py-20 md:py-28 bg-secondary">
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
                 <Link href={`/employers/${emp.id}`}>
                    <Image src={emp.logo} alt={emp.name} width={150} height={50} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={emp.dataAiHint}/>
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
