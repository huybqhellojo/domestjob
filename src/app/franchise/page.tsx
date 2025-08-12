'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Handshake, LineChart, TrendingUp, User, Users, FileSignature, Rocket } from 'lucide-react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FranchiseSteps = [
    {
        icon: FileSignature,
        title: "Bước 1: Đăng ký & Tìm hiểu",
        description: "Để lại thông tin để nhận bộ tài liệu nhượng quyền chi tiết và trao đổi sơ bộ cùng đội ngũ phát triển của chúng tôi."
    },
    {
        icon: Handshake,
        title: "Bước 2: Thẩm định & Ký kết",
        description: "Chúng ta sẽ cùng nhau thảo luận chi tiết về mô hình, các điều khoản và tiến đến ký kết hợp đồng hợp tác chiến lược."
    },
    {
        icon: Rocket,
        title: "Bước 3: Đào tạo & Triển khai",
        description: "Bạn sẽ được tham gia các buổi đào tạo chuyên sâu về hệ thống, quy trình vận hành, marketing và bắt đầu triển khai tại địa phương."
    }
];

export default function FranchisePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Mô hình Nhượng quyền Bbester
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-primary-foreground/80">
            Trở thành đối tác chiến lược và cùng chúng tôi kiến tạo tương lai cho nguồn nhân lực Việt Nam.
          </p>
           <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
              <a href="#contact-form">Đăng ký tư vấn ngay</a>
            </Button>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 md:py-28 bg-secondary">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                 <h2 className="text-3xl font-headline font-bold text-primary">Thị trường Kỹ năng Đặc định - Cơ hội rộng mở</h2>
                 <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">Nhu cầu tuyển dụng lao động có tay nghề theo chương trình Tokutei Ginou tại Nhật Bản ngày càng tăng cao, mở ra cơ hội khổng lồ cho các đối tác tuyển dụng có tầm nhìn.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader><Users className="h-12 w-12 mx-auto text-accent-blue" /></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">~345,000</p>
                        <p className="text-muted-foreground mt-2">Lao động Tokutei Ginou dự kiến được tiếp nhận trong 5 năm tới.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader><TrendingUp className="h-12 w-12 mx-auto text-accent-green" /></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">12 ngành</p>
                        <p className="text-muted-foreground mt-2">Nhu cầu tuyển dụng đa dạng ở nhiều lĩnh vực như thực phẩm, cơ khí, điều dưỡng...</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader><LineChart className="h-12 w-12 mx-auto text-accent-orange" /></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">2-5x</p>
                        <p className="text-muted-foreground mt-2">Tỷ suất lợi nhuận kỳ vọng so với các mô hình kinh doanh truyền thống.</p>
                    </CardContent>
                </Card>
            </div>
         </div>
      </section>

      {/* How it works & Benefits Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Nắm bắt cơ hội, làm chủ thị trường</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Chúng tôi tìm kiếm các nhà đầu tư có tầm nhìn tại mỗi tỉnh/thành phố để cùng triển khai và vận hành nền tảng Bbester. Đối tác nhượng quyền sẽ là đại diện độc quyền của chúng tôi tại địa phương, chịu trách nhiệm kết nối các đối tác tuyển dụng tại Nhật với nguồn lao động và sinh viên dồi dào.
              </p>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Hợp tác nhượng quyền"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="business handshake"
              />
            </div>
            <div>
              <Card className="shadow-xl border-t-4 border-accent-green">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Lợi ích toàn diện cho đối tác</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <TrendingUp className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Mô hình kinh doanh hiệu quả</h3>
                      <p className="text-muted-foreground text-sm">Khai thác thị trường nhân sự đầy tiềm năng với một mô hình đã được chứng minh, chi phí vận hành thấp và lợi nhuận hấp dẫn.</p>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <Handshake className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Hệ thống & Thương hiệu</h3>
                      <p className="text-muted-foreground text-sm">Sử dụng toàn bộ hệ thống công nghệ, branding chuyên nghiệp và quy trình vận hành chuẩn hóa từ Bbester.</p>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <CheckCircle className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Hỗ trợ toàn diện 24/7</h3>
                      <p className="text-muted-foreground text-sm">Được đào tạo, hỗ trợ về marketing, kỹ thuật và chiến lược kinh doanh trong suốt quá trình hợp tác.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Steps to become a partner section */}
      <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-headline font-bold text-primary">3 bước đơn giản để trở thành đối tác</h2>
                 <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">Quy trình của chúng tôi được thiết kế để đảm bảo sự minh bạch, hiệu quả và nhanh chóng.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {FranchiseSteps.map(step => (
                    <div key={step.title} className="flex flex-col items-center">
                         <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                             <step.icon className="h-10 w-10"/>
                         </div>
                         <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>
                         <p className="text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Success Story Section */}
       <section className="py-20 md:py-28 bg-background">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                     <Image
                        src="https://placehold.co/500x500.png"
                        alt="Đối tác thành công"
                        width={500}
                        height={500}
                        className="rounded-full shadow-xl mx-auto"
                        data-ai-hint="smiling businessman portrait"
                      />
                </div>
                <div>
                     <blockquote className="border-l-4 border-primary pl-6">
                        <p className="text-xl text-muted-foreground italic">"Trở thành đối tác nhượng quyền của Bbester là quyết định kinh doanh đúng đắn nhất của tôi. Mô hình thông minh, sự hỗ trợ tận tình và tiềm năng thị trường khổng lồ đã giúp chúng tôi đạt được thành công ngoài mong đợi chỉ sau 1 năm."</p>
                        <footer className="mt-4">
                            <p className="font-bold text-lg text-primary">Ông Trần Văn Hùng</p>
                            <p className="text-sm">Đối tác Nhượng quyền tại Bắc Ninh</p>
                        </footer>
                     </blockquote>
                </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="bg-gradient-to-r from-blue-600 to-sky-500 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">Sẵn sàng để hợp tác?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">Để lại thông tin để nhận bộ tài liệu nhượng quyền chi tiết và được đội ngũ của chúng tôi tư vấn trực tiếp.</p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      Tôi muốn nhận tài liệu nhượng quyền
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">Đăng ký nhận tư vấn</DialogTitle>
                        <DialogDescription>
                            Vui lòng để lại thông tin của bạn. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Họ và tên</Label>
                            <Input id="name" placeholder="Nguyễn Văn A" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">Số điện thoại</Label>
                            <Input id="phone" placeholder="0987654321" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="bg-primary text-white">Gửi thông tin</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
      </section>
    </>
  );
}
