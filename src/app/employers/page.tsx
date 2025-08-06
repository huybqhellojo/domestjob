
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Database, Layers, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ppaasFeatures = [
  { 
    icon: Cpu,
    title: 'Kiến trúc Microservices', 
    description: 'Hệ thống được xây dựng trên nền tảng microservices đám mây (GCP/AWS/Azure), đảm bảo khả năng mở rộng và độ tin cậy cao.'
  },
  { 
    icon: Database,
    title: 'Hạ tầng Multi-Tenant', 
    description: 'Mỗi Khu Công Nghiệp (KCN) là một tenant độc lập với cơ sở dữ liệu riêng (PostgreSQL/MySQL), đảm bảo an toàn và bảo mật dữ liệu.'
  },
  { 
    icon: Layers,
    title: 'API Gateway Toàn Diện', 
    description: 'Cung cấp các lớp API công khai và riêng tư (RESTful, OAuth2) cho HelloJob Holdings và các đối tác, cho phép tích hợp và khai thác dữ liệu hiệu quả.'
  },
  {
    icon: ShieldCheck,
    title: 'Bảo mật và Quản trị',
    description: 'Tuân thủ các quy định bảo mật hàng đầu (Nghị định 13, GDPR), mã hóa AES-256, và phân quyền theo vai trò (RBAC) để bảo vệ dữ liệu.'
  }
];

export default function EmployersPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section for PPaaS */}
      <section className="w-full bg-accent text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                PPaaS - Private Portal as a Service
              </h1>
              <p className="text-lg md:text-xl max-w-md mx-auto md:mx-0 text-primary-foreground/80">
                Giải pháp kiến trúc toàn diện cho các Khu Công Nghiệp để xây dựng cổng thông tin nhân sự, đào tạo và hướng nghiệp độc quyền.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/post-job">
                    <Briefcase /> Bắt đầu ngay
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
                  alt="Sơ đồ kiến trúc PPaaS"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="enterprise architecture diagram"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Features */}
      <section className="w-full py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Nền tảng Công nghệ Vững chắc</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Kiến trúc của PPaaS được thiết kế để đảm bảo hiệu suất, bảo mật và khả năng mở rộng, đáp ứng mọi nhu cầu của một Khu Công Nghiệp hiện đại.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {ppaasFeatures.map(feature => (
              <Card key={feature.title} className="text-center p-6 border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow">
                 <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                 <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                 <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
