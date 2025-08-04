
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, Layers, Star, Users } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Mock data, in a real app this would be fetched based on params.id
const courseDetails = {
  id: 'tieng-nhat-giao-tiep',
  title: 'Tiếng Nhật giao tiếp cho người đi làm',
  category: 'Ngoại ngữ',
  image: 'https://placehold.co/1200x600.png',
  dataAiHint: 'Japanese language class',
  description: 'Khóa học được thiết kế đặc biệt cho người lao động tại các khu công nghiệp, tập trung vào các mẫu câu giao tiếp và từ vựng chuyên ngành thường dùng trong môi trường nhà máy Nhật Bản. Học viên sẽ được trang bị kỹ năng nghe, nói, đọc, viết cơ bản, tự tin giao tiếp với đồng nghiệp và cấp trên người Nhật.',
  instructor: {
    name: 'Tanaka sensei',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'Japanese teacher',
    title: 'Chuyên gia đào tạo ngôn ngữ',
  },
  stats: {
    students: 1258,
    rating: 4.8,
    duration: '12 tuần',
    modules: 8,
  },
  curriculum: [
    { title: 'Giới thiệu & Bảng chữ cái', lessons: ['Chào hỏi, giới thiệu bản thân', 'Học Hiragana và Katakana'] },
    { title: 'Giao tiếp cơ bản trong công việc', lessons: ['Các câu lệnh thường gặp', 'Hỏi và chỉ đường trong nhà máy'] },
    { title: 'Từ vựng chuyên ngành sản xuất', lessons: ['Tên các loại máy móc, thiết bị', 'Thuật ngữ về an toàn lao động'] },
    { title: 'Văn hóa làm việc Nhật Bản', lessons: ['Quy tắc ứng xử cơ bản', 'Làm việc nhóm hiệu quả'] },
  ]
};

const categoryColors: { [key: string]: string } = {
  'Ngoại ngữ': 'bg-accent-orange text-white',
};

export default function LearnDetailPage({ params }: { params: { id: string } }) {

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden shadow-xl">
              <CardHeader className="p-0">
                <Image src={courseDetails.image} alt={courseDetails.title} width={1200} height={600} className="w-full h-auto object-cover" data-ai-hint={courseDetails.dataAiHint} />
              </CardHeader>
              <CardContent className="p-6">
                <p className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${categoryColors[courseDetails.category]}`}>{courseDetails.category}</p>
                <CardTitle className="font-headline text-3xl mb-4">{courseDetails.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{courseDetails.description}</CardDescription>

                <div className="mt-8">
                    <h3 className="font-headline text-2xl font-bold mb-4">Chương trình học</h3>
                    <Accordion type="single" collapsible className="w-full">
                        {courseDetails.curriculum.map((module, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="font-bold text-lg hover:no-underline">Module {index + 1}: {module.title}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                                       {module.lessons.map((lesson, i) => <li key={i}>{lesson}</li>)}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Thông tin khóa học</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-muted-foreground"/>
                    <span><strong>Thời lượng:</strong> {courseDetails.stats.duration}</span>
                 </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Layers className="w-5 h-5 text-muted-foreground"/>
                    <span><strong>Số module:</strong> {courseDetails.stats.modules}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-muted-foreground"/>
                    <span><strong>Học viên:</strong> {courseDetails.stats.students.toLocaleString()}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm">
                    <Star className="w-5 h-5 text-muted-foreground text-yellow-500 fill-yellow-500"/>
                    <span><strong>Đánh giá:</strong> {courseDetails.stats.rating} / 5</span>
                 </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
                 <CardHeader>
                    <CardTitle className="font-headline text-xl">Giảng viên</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={courseDetails.instructor.avatar} alt={courseDetails.instructor.name} data-ai-hint={courseDetails.instructor.dataAiHint} />
                        <AvatarFallback>{courseDetails.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-bold">{courseDetails.instructor.name}</p>
                        <p className="text-sm text-muted-foreground">{courseDetails.instructor.title}</p>
                    </div>
                </CardContent>
            </Card>

            <Button size="lg" className="w-full bg-accent-green hover:bg-accent-green/90 text-white text-lg">
                Đăng ký học ngay
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

