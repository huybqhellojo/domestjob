import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Briefcase, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-gradient-to-br from-primary via-blue-800 to-blue-900 text-primary-foreground py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Giải pháp nhân lực cho Khu Công Nghiệp
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground/80">
            Nền tảng thông minh, có thể mở rộng, kết nối các khu công nghiệp với nguồn nhân lực dồi dào là sinh viên và người lao động địa phương.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/register">Đăng ký hồ sơ <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/franchise">Mô hình Nhượng quyền</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
            Tại sao chọn Domest Job?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-sky-100 rounded-full p-4 w-fit">
                  <Users className="h-10 w-10 text-sky-500" />
                </div>
                <CardTitle className="font-headline mt-4">Nguồn nhân lực quy mô lớn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tiếp cận hàng ngàn sinh viên và người lao động có trình độ, sẵn sàng làm việc tại các khu công nghiệp.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-4 w-fit">
                  <Briefcase className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="font-headline mt-4">Kết nối hiệu quả</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hệ thống thông minh giúp kết nối ứng viên phù hợp nhất với nhu cầu tuyển dụng của doanh nghiệp.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-orange-100 rounded-full p-4 w-fit">
                  <AreaChart className="h-10 w-10 text-orange-500" />
                </div>
                <CardTitle className="font-headline mt-4">Dữ liệu & Phân tích</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cung cấp các báo cáo và phân tích sâu sắc về thị trường lao động để hỗ trợ việc ra quyết định.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Mô hình nhượng quyền"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="business meeting"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Mô hình Nhượng quyền Đột phá</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Trở thành đối tác chiến lược của chúng tôi tại địa phương bạn. Tận dụng hệ thống, thương hiệu và công nghệ của Domest Job để phát triển kinh doanh và tạo ra tác động tích cực cho cộng đồng.
              </p>
              <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/franchise">Tìm hiểu về Nhượng quyền</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
