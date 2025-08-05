
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HardHat, School, Star, Plane, UserCheck, ShieldCheck } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const roadmapSteps = [
  {
    icon: UserCheck,
    title: 'Định hướng & Đánh giá ban đầu',
    description: 'Ứng viên thực hiện các bài đánh giá năng lực và sở thích để hệ thống gợi ý ngành nghề, lộ trình phát triển phù hợp nhất ngay từ đầu.',
    color: 'orange',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'career assessment test',
  },
  {
    icon: HardHat,
    title: 'Lao động phổ thông',
    description: 'Bắt đầu với các vị trí công việc không yêu cầu chuyên môn cao. Đây là bước đầu tiên để làm quen với môi trường khu công nghiệp, tích lũy kinh nghiệm thực tế và được định hướng nghề nghiệp.',
    color: 'sky',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'factory workers',
  },
  {
    icon: School,
    title: 'Học nghề & Đào tạo kỹ năng',
    description: 'Tham gia các khóa đào tạo trên nền tảng E-learning hoặc tại doanh nghiệp để nâng cao tay nghề, học ngoại ngữ (Nhật, Hàn), sẵn sàng cho các vị trí yêu cầu kỹ năng cao hơn.',
    color: 'blue',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'vocational training online',
  },
  {
    icon: Star,
    title: 'Lao động có kỹ năng & Chứng nhận',
    description: 'Trở thành lao động tay nghề cao, được hệ thống xác nhận và cấp chứng nhận kỹ năng, đảm nhận các vị trí quan trọng và nhận mức lương, đãi ngộ tốt hơn.',
    color: 'green',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'skilled labor certificate',
  },
  {
    icon: ShieldCheck,
    title: 'Chuyên viên / Tổ trưởng',
    description: 'Phát triển lên các vị trí quản lý cấp trung như tổ trưởng, chuyền trưởng, chuyên viên kỹ thuật. Đây là bước quan trọng để trở thành nòng cốt của doanh nghiệp.',
    color: 'teal',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'factory team leader',
  },
  {
    icon: Plane,
    title: 'Chuyên gia & Lao động hồi hương',
    description: 'Phát triển lên các vị trí chuyên gia, kỹ sư, hoặc tham gia chương trình xuất khẩu lao động. Hệ thống cũng chào đón và kết nối việc làm cho lực lượng lao động chất lượng cao từ nước ngoài trở về.',
    color: 'primary',
    image: 'https://placehold.co/500x300.png',
    dataAiHint: 'engineer expert manager',
  },
];

const circleColors: { [key: string]: string } = {
  orange: 'bg-accent-orange',
  sky: 'bg-sky-500',
  blue: 'bg-blue-500',
  green: 'bg-accent-green',
  teal: 'bg-teal-500',
  primary: 'bg-primary',
};

export default function RoadmapPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Lộ trình phát triển sự nghiệp (SWR)
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chúng tôi cam kết đồng hành cùng bạn trên con đường phát triển sự nghiệp bền vững, từ bước đầu tiên đến khi trở thành chuyên gia tay nghề cao.
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

                {/* Content: Right side (for odd index on desktop) or all on mobile */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pl-8' : 'md:pr-8'} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                   <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className={`font-headline text-2xl ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <>
                          <span className="text-primary/50 mr-2">Bước {index + 1}:</span> {step.title}
                        </>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Image: Left side (for odd index on desktop) or all on mobile */}
                <div className={`w-full md:w-1/2 mt-6 md:mt-0 ${index % 2 !== 0 ? 'md:pr-8' : 'md:pl-8'} ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                   <Image src={step.image} alt={step.title} width={500} height={300} className="rounded-lg shadow-xl" data-ai-hint={step.dataAiHint} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
