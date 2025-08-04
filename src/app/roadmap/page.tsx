import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, School, Star, Plane } from 'lucide-react';

const roadmapSteps = [
  {
    icon: HardHat,
    title: 'Lao động phổ thông',
    description: 'Bắt đầu với các vị trí công việc không yêu cầu kỹ năng chuyên môn cao. Đây là bước đầu tiên để làm quen với môi trường khu công nghiệp.',
  },
  {
    icon: School,
    title: 'Học nghề & Đào tạo',
    description: 'Tham gia các khóa đào tạo nghề ngắn hạn hoặc được đào tạo trực tiếp tại doanh nghiệp để nâng cao tay nghề và kiến thức chuyên môn.',
  },
  {
    icon: Star,
    title: 'Lao động có kỹ năng',
    description: 'Trở thành người lao động có tay nghề, đảm nhận các vị trí quan trọng trong dây chuyền sản xuất và vận hành máy móc phức tạp.',
  },
  {
    icon: Plane,
    title: 'Kỹ sư hoặc Xuất khẩu lao động',
    description: 'Phát triển lên các vị trí kỹ sư, chuyên gia hoặc có cơ hội tham gia các chương trình xuất khẩu lao động chất lượng cao đến các thị trường phát triển.',
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Lộ trình phát triển nghề nghiệp
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chúng tôi cam kết đồng hành cùng bạn trên con đường phát triển sự nghiệp, từ những bước đầu tiên đến khi trở thành chuyên gia.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative flex items-center md:justify-center">
                <div className="md:w-1/2 flex md:justify-end md:pr-8">
                  <Card className="w-full md:max-w-md shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-3">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-headline text-xl">
                        Bước {index + 1}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary hidden md:block" />
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
