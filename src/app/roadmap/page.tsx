
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, School, Star, Plane, UserCheck, ShieldCheck, TrendingUp, Briefcase, MapIcon, Compass } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lộ trình sự nghiệp (SWR) tại Nhật Bản',
  description: 'Khám phá lộ trình phát triển sự nghiệp (SWR) bền vững từ Thực tập sinh, Kỹ năng đặc định (Tokutei Ginou) 1 & 2, đến chuyên gia tay nghề cao tại Nhật Bản cùng HelloJob.',
};

const roadmapSteps = [
  {
    icon: Compass,
    title: 'Bước 1: Định hướng nghề nghiệp',
    description: 'Bắt đầu từ tốt nghiệp PTTH, HelloJob sẽ cùng bạn đánh giá năng lực, định hướng con đường phù hợp nhất để trở thành lao động lành nghề, dù là làm việc trong nước hay chinh phục thị trường Nhật Bản.',
    salary: 'Mức lương khởi điểm',
    color: 'orange',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'career guidance compass',
  },
  {
    icon: Plane,
    title: 'Bước 2: Thực tập sinh tại Nhật (3-5 năm)',
    description: 'Bắt đầu hành trình tại Nhật với vai trò Thực tập sinh kỹ năng. Đây là giai đoạn để bạn làm quen với môi trường, văn hóa làm việc chuyên nghiệp và tích lũy kinh nghiệm nền tảng đầu tiên.',
    salary: '~30 triệu VNĐ/tháng',
    color: 'light-blue',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'trainee learning japan',
  },
  {
    icon: Star,
    title: 'Bước 3: Kỹ năng đặc định 1 (Tối đa 5 năm)',
    description: 'Sau khi hoàn thành chương trình thực tập sinh, bạn sẽ được nâng cấp lên visa Kỹ năng đặc định (Tokutei Ginou 1). Tay nghề cao hơn, được phép chuyển việc trong ngành và nhận mức thu nhập cải thiện rõ rệt.',
    salary: '40-50 triệu VNĐ/tháng',
    color: 'dark-blue',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'skilled worker certificate',
  },
  {
    icon: ShieldCheck,
    title: 'Bước 4: Kỹ năng đặc định 2 (Lâu dài)',
    description: 'Đây là cấp độ cao nhất của lao động kỹ năng. Với visa Tokutei Ginou 2, bạn có cơ hội bảo lãnh gia đình sang sinh sống và làm việc, đồng thời mở ra con đường xin visa vĩnh trú tại Nhật.',
    salary: 'Tiếp tục tăng',
    color: 'green',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'family in japan',
  },
  {
    icon: TrendingUp,
    title: 'Bước 5: Chuyên gia lành nghề',
    description: 'Với sự đồng hành và đào tạo chuyên sâu từ HelloJob, bạn sẽ trở thành chuyên gia trong lĩnh vực của mình, đảm nhận những vị trí quan trọng và đạt được mức thu nhập đỉnh cao.',
    salary: '60-70 triệu VNĐ/tháng',
    color: 'dark-blue',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'expert engineer meeting',
  },
  {
    icon: Briefcase,
    title: 'Bước 6: Sự nghiệp rộng mở',
    description: 'Lựa chọn trở về Việt Nam với vị thế một chuyên gia được săn đón, hoặc tiếp tục con đường định cư và phát triển sự nghiệp lâu dài tại Nhật Bản. HelloJob luôn là đối tác tin cậy của bạn.',
    salary: 'Thu nhập chuyên gia',
    color: 'light-blue',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'manager working office',
  },
];

const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
  orange: { bg: 'bg-accent-orange', text: 'text-accent-orange', border: 'border-accent-orange' },
  'light-blue': { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
  'dark-blue': { bg: 'bg-accent', text: 'text-accent', border: 'border-accent' },
  green: { bg: 'bg-accent-green', text: 'text-accent-green', border: 'border-accent-green' },
};


export default function RoadmapPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent">
            Lộ trình phát triển sự nghiệp (SWR)
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chúng tôi cam kết đồng hành cùng bạn trên con đường phát triển sự nghiệp bền vững, từ bước đầu tiên đến khi trở thành chuyên gia tay nghề cao.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-border rounded-full hidden md:block" />

          <div className="space-y-12 md:space-y-4">
            {roadmapSteps.map((step, index) => {
              const colors = colorClasses[step.color] || colorClasses['light-blue'];
              return (
              <div key={index} className="relative flex flex-col md:flex-row items-center group md:h-80">
                {/* Timeline circle for desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                   <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center border-4 border-secondary group-hover:scale-110 transition-transform duration-300",
                        colors.bg
                    )}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                </div>
                
                {/* Mobile Icon */}
                 <div className="md:hidden flex items-center gap-4 mb-4 w-full">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", colors.bg)}>
                        <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className={cn("font-headline text-2xl", colors.text)}>{step.title}</h2>
                </div>


                {/* Content: Right side (for even index on desktop) or all on mobile */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                   <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4", colors.border)}>
                     <CardHeader className="hidden md:block">
                      <CardTitle className={cn("font-headline text-2xl", colors.text)}>
                          {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                       <div className={`font-bold text-lg ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                         <span className="text-accent-green">{step.salary}</span>
                       </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Image: Left side (for even index on desktop) */}
                <div className={`hidden md:flex w-1/2 h-full items-center ${index % 2 !== 0 ? 'md:pr-16 md:order-1' : 'md:pl-16'}`}>
                   <Image src={step.image} alt={step.title} width={500} height={300} className="rounded-lg shadow-xl object-cover w-full h-64" data-ai-hint={step.dataAiHint} />
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
