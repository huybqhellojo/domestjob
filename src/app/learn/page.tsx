
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    id: 'tieng-nhat-giao-tiep',
    title: 'Tiếng Nhật giao tiếp cho người đi làm',
    category: 'Ngoại ngữ',
    description: 'Khóa học tập trung vào các mẫu câu giao tiếp và từ vựng chuyên ngành thường dùng trong môi trường nhà máy Nhật Bản.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Japanese language',
    color: 'orange',
  },
  {
    id: 'ky-nang-lam-viec-nhom',
    title: 'Kỹ năng làm việc nhóm hiệu quả',
    category: 'Kỹ năng mềm',
    description: 'Nâng cao khả năng hợp tác, giao tiếp và giải quyết xung đột để tối ưu hiệu suất làm việc trong đội nhóm.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'teamwork collaboration',
    color: 'blue',
  },
  {
    id: 'an-toan-lao-dong',
    title: 'An toàn lao động trong sản xuất',
    category: 'Kỹ thuật',
    description: 'Cung cấp kiến thức và quy trình cần thiết để đảm bảo an toàn cho bản thân và đồng nghiệp tại nơi làm việc.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'factory safety',
    color: 'green',
  },
   {
    id: 'tieng-han-co-ban',
    title: 'Tiếng Hàn cơ bản cho người mới bắt đầu',
    category: 'Ngoại ngữ',
    description: 'Làm quen với bảng chữ cái, phát âm và các cấu trúc ngữ pháp cơ bản của tiếng Hàn, phục vụ công việc tại các công ty Hàn Quốc.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Korean language',
    color: 'orange',
  },
  {
    id: 'quan-ly-thoi-gian',
    title: 'Quản lý thời gian và công việc',
    category: 'Kỹ năng mềm',
    description: 'Học cách sắp xếp ưu tiên, lập kế hoạch và quản lý thời gian hiệu quả để hoàn thành công việc đúng hạn và giảm căng thẳng.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'time management',
    color: 'blue',
  },
  {
    id: 'nhap-mon-cnc',
    title: 'Nhập môn vận hành máy CNC',
    category: 'Kỹ thuật',
    description: 'Cung cấp kiến thức nền tảng về nguyên lý hoạt động, lập trình và vận hành máy CNC trong ngành cơ khí.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'CNC machine',
    color: 'green',
  },
];

const categoryColors: { [key: string]: string } = {
  'Ngoại ngữ': 'text-accent-orange bg-orange-100',
  'Kỹ năng mềm': 'text-accent-blue bg-sky-100',
  'Kỹ thuật': 'text-accent-green bg-green-100',
};

const buttonColors: { [key: string]: string } = {
  orange: 'bg-accent-orange hover:bg-accent-orange/90',
  blue: 'bg-accent-blue hover:bg-accent-blue/90',
  green: 'bg-accent-green hover:bg-accent-green/90',
};

export default function LearnPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Chương trình E-Learning
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Nâng cao kỹ năng, mở rộng cơ hội. Học mọi lúc, mọi nơi với các khóa học được thiết kế riêng cho người lao động.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="p-0">
                 <Link href={`/learn/${course.id}`} className="block">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={course.dataAiHint}
                    />
                 </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                 <p className={`text-sm font-bold mb-2 inline-block px-3 py-1 rounded-full ${categoryColors[course.category]}`}>{course.category}</p>
                <Link href={`/learn/${course.id}`}>
                    <CardTitle className="font-headline text-xl mb-2 h-14 group-hover:text-primary transition-colors">{course.title}</CardTitle>
                </Link>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild className={`w-full text-white ${buttonColors[course.color]}`}>
                  <Link href={`/learn/${course.id}`}>
                    Xem chi tiết <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
