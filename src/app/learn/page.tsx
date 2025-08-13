
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Learning: Chinh phục tiếng Nhật và Kỹ năng làm việc',
  description: 'Nâng cao kỹ năng, mở rộng cơ hội với các khóa học E-learning được thiết kế riêng cho người lao động Việt Nam muốn làm việc tại Nhật Bản.',
};


const course = {
  id: 'tieng-nhat-giao-tiep',
  title: 'Tiếng Nhật giao tiếp cho người đi làm',
  category: 'Ngoại ngữ',
  description: 'Khóa học tiếng Nhật bám sát giáo trình Minna no Nihongo, tập trung vào các mẫu câu giao tiếp và từ vựng chuyên ngành thường dùng trong môi trường nhà máy Nhật Bản. Bắt đầu hành trình chinh phục tiếng Nhật của bạn ngay hôm nay!',
  image: 'https://placehold.co/1200x600.png',
  dataAiHint: 'Japanese language class',
  features: [
    'Hệ thống bài giảng video chi tiết',
    'Tập trung vào giao tiếp thực tế',
    'Từ vựng chuyên ngành sản xuất',
    'Học mọi lúc, mọi nơi',
  ]
};

export default function LearnPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            E-Learning: Chinh phục tiếng Nhật
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Nâng cao kỹ năng, mở rộng cơ hội. Học mọi lúc, mọi nơi với các khóa học được thiết kế riêng cho người lao động.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
                 <div className="relative min-h-[300px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      data-ai-hint={course.dataAiHint}
                    />
                 </div>
                 <div className="p-8 flex flex-col justify-center">
                    <p className="text-sm font-bold mb-2 text-primary">{course.category}</p>
                    <CardTitle className="font-headline text-3xl mb-4">{course.title}</CardTitle>
                    <p className="text-muted-foreground text-base mb-6">{course.description}</p>
                    <ul className="space-y-3 mb-8">
                        {course.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild className="w-full md:w-auto bg-accent-orange hover:bg-accent-orange/90 text-white text-lg self-start">
                        <Link href={`/learn/${course.id}`}>
                            Bắt đầu học ngay <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                 </div>
            </div>
        </Card>
      </div>
    </div>
  );
}
