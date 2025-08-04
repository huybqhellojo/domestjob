import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, School, Star, Plane } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const roadmapSteps = [
  {
    icon: HardHat,
    title: 'Lao động phổ thông',
    description: 'Bắt đầu với các vị trí công việc không yêu cầu kỹ năng chuyên môn cao. Đây là bước đầu tiên để làm quen với môi trường khu công nghiệp.',
    color: 'orange',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'factory workers',
  },
  {
    icon: School,
    title: 'Học nghề & Đào tạo',
    description: 'Tham gia các khóa đào tạo nghề ngắn hạn hoặc được đào tạo trực tiếp tại doanh nghiệp để nâng cao tay nghề và kiến thức chuyên môn.',
    color: 'sky',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'vocational training',
  },
  {
    icon: Star,
    title: 'Lao động có kỹ năng',
    description: 'Trở thành người lao động có tay nghề, đảm nhận các vị trí quan trọng trong dây chuyền sản xuất và vận hành máy móc phức tạp.',
    color: 'green',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'skilled labor',
  },
  {
    icon: Plane,
    title: 'Chuyên gia & Xuất khẩu',
    description: 'Phát triển lên các vị trí kỹ sư, chuyên gia hoặc có cơ hội tham gia các chương trình xuất khẩu lao động chất lượng cao.',
    color: 'primary',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'engineer expert',
  },
];

const circleColors: { [key: string]: string } = {
  orange: 'bg-accent-orange',
  sky: 'bg-accent-blue',
  green: 'bg-accent-green',
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

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-border rounded-full hidden md:block" />

          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center group">
                {/* Timeline circle for desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center ${circleColors[step.color]} border-4 border-secondary group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                </div>

                {/* Content: Left side (even index) */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-full md:w-1/2 md:pr-8">
                       <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="font-headline text-2xl text-right">
                            <span className="text-primary/50 mr-2">Bước {index + 1}:</span> {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-right">
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                       <Image src={step.image} alt={step.title} width={500} height={300} className="rounded-lg shadow-xl" data-ai-hint={step.dataAiHint} />
                    </div>
                  </>
                )}
                
                {/* Content: Right side (odd index) */}
                {index % 2 !== 0 && (
                  <>
                    <div className="w-full md:w-1/2 md:pr-8 order-2 md:order-1 mt-4 md:mt-0">
                      <Image src={step.image} alt={step.title} width={500} height={300} className="rounded-lg shadow-xl" data-ai-hint={step.dataAiHint} />
                    </div>
                     <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2">
                       <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="font-headline text-2xl text-left">
                            <span className="text-primary/50 mr-2">Bước {index + 1}:</span> {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-left">
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
