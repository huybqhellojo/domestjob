import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Handshake, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function FranchisePage() {
  return (
    <>
      <section className="w-full bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Mô hình Nhượng quyền KCN Connector
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-primary-foreground/80">
            Trở thành đối tác chiến lược và cùng chúng tôi kiến tạo tương lai cho nguồn nhân lực Việt Nam.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-4">Cách thức tham gia</h2>
              <p className="text-muted-foreground mb-6">
                Chúng tôi tìm kiếm các nhà đầu tư có tầm nhìn tại mỗi tỉnh/thành phố để cùng triển khai và vận hành nền tảng KCN Connector. Đối tác nhượng quyền sẽ là đại diện độc quyền của chúng tôi tại địa phương, chịu trách nhiệm kết nối doanh nghiệp trong các khu công nghiệp với nguồn lao động và sinh viên.
              </p>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Hợp tác nhượng quyền"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="business handshake"
              />
            </div>
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline">Lợi ích dành cho đối tác</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <TrendingUp className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Mô hình kinh doanh hiệu quả</h3>
                      <p className="text-muted-foreground">Khai thác thị trường nhân sự đầy tiềm năng với một mô hình đã được chứng minh, chi phí vận hành thấp và lợi nhuận hấp dẫn.</p>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <Handshake className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Hệ thống & Thương hiệu</h3>
                      <p className="text-muted-foreground">Sử dụng toàn bộ hệ thống công nghệ, branding chuyên nghiệp và quy trình vận hành chuẩn hóa từ KCN Connector.</p>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <CheckCircle className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Hỗ trợ toàn diện</h3>
                      <p className="text-muted-foreground">Được đào tạo, hỗ trợ về marketing, kỹ thuật và chiến lược kinh doanh trong suốt quá trình hợp tác.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">Sẵn sàng để hợp tác?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Để lại thông tin để nhận bộ tài liệu nhượng quyền chi tiết và được đội ngũ của chúng tôi tư vấn trực tiếp.</p>
            <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              Tôi muốn nhận tài liệu nhượng quyền
            </Button>
        </div>
      </section>
    </>
  );
}
