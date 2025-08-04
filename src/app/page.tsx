import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Briefcase, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Giải pháp nhân lực cho Khu Công Nghiệp
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/80">
            Nền tảng thông minh, có thể mở rộng, kết nối các khu công nghiệp với nguồn nhân lực dồi dào là sinh viên và người lao động địa phương.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register">Đăng ký hồ sơ</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmap">Lộ trình nghề nghiệp</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/dashboard">Xem Dữ liệu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/franchise">Mô hình Nhượng quyền</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Tại sao chọn Domest Job?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Nguồn nhân lực quy mô lớn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tiếp cận hàng ngàn sinh viên và người lao động có trình độ, sẵn sàng làm việc tại các khu công nghiệp.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Kết nối hiệu quả</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hệ thống thông minh giúp kết nối ứng viên phù hợp nhất với nhu cầu tuyển dụng của doanh nghiệp.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                  <AreaChart className="h-10 w-10 text-primary" />
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

      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
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
              <p className="text-lg text-muted-foreground mb-6">
                Trở thành đối tác chiến lược của chúng tôi tại địa phương bạn. Tận dụng hệ thống, thương hiệu và công nghệ của Domest Job để phát triển kinh doanh và tạo ra tác động tích cực cho cộng đồng.
              </p>
              <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <Link href="/franchise">Tìm hiểu về Nhượng quyền</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
