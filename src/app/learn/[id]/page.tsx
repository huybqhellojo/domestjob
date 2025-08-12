
'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, Layers, Star, Users, PlayCircle, BookCheck } from 'lucide-react';

// Mock data, in a real app this would be fetched based on params.id
const courseDetails = {
  id: 'tieng-nhat-giao-tiep',
  title: 'Tiếng Nhật giao tiếp cho người đi làm (Minna no Nihongo)',
  category: 'Ngoại ngữ',
  description: 'Khóa học được thiết kế đặc biệt cho người lao động, bám sát giáo trình Minna no Nihongo uy tín, tập trung vào các mẫu câu giao tiếp và từ vựng chuyên ngành thường dùng trong môi trường nhà máy Nhật Bản.',
  instructor: {
    name: 'Dung Mochi',
    avatar: 'https://placehold.co/100x100.png',
    dataAiHint: 'Japanese teacher',
    title: 'Giáo viên tiếng Nhật',
  },
  stats: {
    students: 1258,
    rating: 4.8,
    lessons: 25,
    level: 'N5',
  },
  curriculum: [
    { title: 'Bài 1: Giới thiệu bản thân', duration: '15:20', videoId: 'e-kFz1d4kE8' },
    { title: 'Bài 2: Cái này, cái đó, cái kia', duration: '18:45', videoId: 'zUo2N2pG0qI' },
    { title: 'Bài 3: Địa điểm, nơi chốn', duration: '20:10', videoId: '5p2sVqGgE_I' },
    { title: 'Bài 4: Động từ và thời gian', duration: '22:55', videoId: 'zFzOqkUG4Ow' },
    { title: 'Bài 5: Di chuyển', duration: '19:30', videoId: 'V92_uXn2o5o' },
  ]
};

const categoryColors: { [key: string]: string } = {
  'Ngoại ngữ': 'bg-accent-orange text-white',
};

export default function LearnDetailPage({ params }: { params: { id: string } }) {
  const [activeVideo, setActiveVideo] = useState(courseDetails.curriculum[0].videoId);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden shadow-xl">
               <CardContent className="p-0">
                <div className="aspect-video bg-black">
                   <iframe 
                      className="w-full h-full" 
                      src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                </div>
                <div className="p-6">
                    <p className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${categoryColors[courseDetails.category]}`}>{courseDetails.category}</p>
                    <CardTitle className="font-headline text-3xl mb-4">{courseDetails.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">{courseDetails.description}</CardDescription>
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
          </div>

          {/* Sidebar - Playlist */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Nội dung khóa học</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
                 {courseDetails.curriculum.map((lesson, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActiveVideo(lesson.videoId)}
                        className={`w-full text-left p-4 rounded-lg flex items-start gap-4 transition-colors ${activeVideo === lesson.videoId ? 'bg-primary/10' : 'hover:bg-secondary'}`}
                    >
                        <PlayCircle className={`h-6 w-6 mt-1 flex-shrink-0 ${activeVideo === lesson.videoId ? 'text-primary' : 'text-muted-foreground'}`}/>
                        <div>
                            <p className={`font-semibold ${activeVideo === lesson.videoId ? 'text-primary' : ''}`}>{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                        </div>
                    </button>
                 ))}
              </CardContent>
            </Card>

            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Thông tin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <Layers className="w-5 h-5 text-muted-foreground"/>
                        <span><strong>Cấp độ:</strong> {courseDetails.stats.level}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <BookCheck className="w-5 h-5 text-muted-foreground"/>
                        <span><strong>Số bài học:</strong> {courseDetails.stats.lessons}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Users className="w-5 h-5 text-muted-foreground"/>
                        <span><strong>Học viên:</strong> {courseDetails.stats.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500"/>
                        <span><strong>Đánh giá:</strong> {courseDetails.stats.rating} / 5</span>
                    </div>
                </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
