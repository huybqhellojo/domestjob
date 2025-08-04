import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, School, Star, Plane, Briefcase } from 'lucide-react';
import React from 'react';

const roadmapSteps = [
  {
    icon: HardHat,
    title: 'Lao động phổ thông',
    description: 'Bắt đầu với các vị trí công việc không yêu cầu kỹ năng chuyên môn cao. Đây là bước đầu tiên để làm quen với môi trường khu công nghiệp.',
    color: 'orange',
  },
  {
    icon: School,
    title: 'Học nghề & Đào tạo',
    description: 'Tham gia các khóa đào tạo nghề ngắn hạn hoặc được đào tạo trực tiếp tại doanh nghiệp để nâng cao tay nghề và kiến thức chuyên môn.',
    color: 'sky',
  },
  {
    icon: Star,
    title: 'Lao động có kỹ năng',
    description: 'Trở thành người lao động có tay nghề, đảm nhận các vị trí quan trọng trong dây chuyền sản xuất và vận hành máy móc phức tạp.',
    color: 'green',
  },
  {
    icon: Plane,
    title: 'Chuyên gia & Xuất khẩu',
    description: 'Phát triển lên các vị trí kỹ sư, chuyên gia hoặc có cơ hội tham gia các chương trình xuất khẩu lao động chất lượng cao.',
    color: 'primary',
  },
];

const iconColors: { [key: string]: string } = {
  orange: 'bg-orange-100 text-orange-500',
  sky: 'bg-sky-100 text-sky-500',
  green: 'bg-green-100 text-green-600',
  primary: 'bg-primary/10 text-primary',
};

const circleColors: { [key: string]: string } = {
  orange: 'bg-orange-500',
  sky: 'bg-sky-500',
  green: 'bg-green-500',
  primary: 'bg-primary',
};

export default function RoadmapPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Lộ trình phát triển nghề nghiệp
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chúng tôi cam kết đồng hành cùng bạn trên con đường phát triển sự nghiệp, từ những bước đầu tiên đến khi trở thành chuyên gia.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-border rounded-full" />

          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative flex items-start md:items-center group">
                {/* Icon and Card - aligned based on odd/even index for desktop */}
                <div className={`w-full flex items-start gap-8 md:w-1/2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                  <div className={`relative z-10 flex-shrink-0 md:hidden`}>
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${circleColors[step.color]}`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                  </div>
                  <Card className="w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <CardHeader className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <CardTitle className="font-headline text-2xl">
                        <span className="text-primary/50 mr-2">Bước {index + 1}:</span> {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline circle for desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center ${circleColors[step.color]} border-4 border-secondary group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                </div>
                 {/* Empty div for spacing on the other side on desktop */}
                 <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
