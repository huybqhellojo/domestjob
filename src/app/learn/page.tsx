import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const courses = [
  {
    title: 'Tiếng Nhật giao tiếp cho người đi làm',
    category: 'Ngoại ngữ',
    description: 'Khóa học tập trung vào các mẫu câu giao tiếp và từ vựng chuyên ngành thường dùng trong môi trường nhà máy Nhật Bản.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Japanese language',
  },
  {
    title: 'Kỹ năng làm việc nhóm hiệu quả',
    category: 'Kỹ năng mềm',
    description: 'Nâng cao khả năng hợp tác, giao tiếp và giải quyết xung đột để tối ưu hiệu suất làm việc trong đội nhóm.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'teamwork collaboration',
  },
  {
    title: 'An toàn lao động trong sản xuất',
    category: 'Kỹ thuật',
    description: 'Cung cấp kiến thức và quy trình cần thiết để đảm bảo an toàn cho bản thân và đồng nghiệp tại nơi làm việc.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'factory safety',
  },
   {
    title: 'Tiếng Hàn cơ bản cho người mới bắt đầu',
    category: 'Ngoại ngữ',
    description: 'Làm quen với bảng chữ cái, phát âm và các cấu trúc ngữ pháp cơ bản của tiếng Hàn, phục vụ công việc tại các công ty Hàn Quốc.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'Korean language',
  },
  {
    title: 'Quản lý thời gian và công việc',
    category: 'Kỹ năng mềm',
    description: 'Học cách sắp xếp ưu tiên, lập kế hoạch và quản lý thời gian hiệu quả để hoàn thành công việc đúng hạn và giảm căng thẳng.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'time management',
  },
  {
    title: 'Nhập môn vận hành máy CNC',
    category: 'Kỹ thuật',
    description: 'Cung cấp kiến thức nền tảng về nguyên lý hoạt động, lập trình và vận hành máy CNC trong ngành cơ khí.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'CNC machine',
  },
];

export default function LearnPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Chương trình E-Learning
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Nâng cao kỹ năng, mở rộng cơ hội. Học mọi lúc, mọi nơi với các khóa học được thiết kế riêng cho người lao động.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                 <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={course.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                 <p className="text-sm font-semibold text-primary mb-1">{course.category}</p>
                <CardTitle className="font-headline text-xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>Học thử ngay</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
