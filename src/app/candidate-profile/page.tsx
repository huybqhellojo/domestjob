
'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Cake, Dna, Edit, GraduationCap, MapPin, Phone, School, User, Award, Languages, Star, FileDown, Video, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';


const initialCandidate = {
    name: 'Lê Thị An',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'Sinh viên năm cuối - ĐH Bách Khoa - Sẵn sàng đi làm',
    location: 'Quận 10, TP. Hồ Chí Minh',
    about: 'Là sinh viên năm cuối chuyên ngành Cơ khí Chế tạo máy, em có niềm đam mê với việc vận hành và tối ưu hóa các hệ thống sản xuất. Em học hỏi nhanh, có tinh thần trách nhiệm cao và mong muốn được áp dụng kiến thức đã học vào môi trường làm việc thực tế để đóng góp cho sự phát triển của công ty.',
    education: {
      school: 'Đại học Bách Khoa TP.HCM',
      degree: 'Kỹ sư Cơ khí Chế tạo máy',
      gradYear: 2024,
    },
    experience: [
        {
            company: 'Công ty TNHH Chính Xác ABC',
            role: 'Thực tập sinh Vận hành CNC',
            period: '06/2023 - 09/2023',
            description: 'Hỗ trợ đứng máy phay, tiện CNC. Đọc hiểu bản vẽ kỹ thuật cơ bản. Thực hiện kiểm tra chất lượng sản phẩm đầu ra theo tiêu chuẩn.'
        }
    ],
    personalInfo: {
      birthYear: 1999,
      gender: 'Nữ',
      phone: '0987 654 321',
      language: 'Tiếng Anh - Giao tiếp cơ bản'
    },
    interests: ['Cơ khí', 'Điện tử', 'IT', 'Logistics'],
    skills: ['Vận hành máy CNC', 'AutoCAD', 'Kiểm tra chất lượng', 'Làm việc nhóm', 'Giải quyết vấn đề'],
    certifications: [
        'Chứng chỉ An toàn lao động Bậc 2',
        'Bằng lái xe B2'
    ],
    desiredIndustry: 'Cơ khí/Chế tạo',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    experienceImages: [
        { src: 'https://placehold.co/600x400.png', alt: 'Làm việc với máy CNC', dataAiHint: 'CNC machine operation' },
        { src: 'https://placehold.co/600x400.png', alt: 'Kiểm tra sản phẩm', dataAiHint: 'product inspection' },
        { src: 'https://placehold.co/600x400.png', alt: 'Môi trường làm việc', dataAiHint: 'work environment' },
    ],
};

const EditDialog = ({ children, title, onSave, content }: { children: React.ReactNode, title: string, onSave: () => void, content: React.ReactNode }) => (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{title}</DialogTitle>
                <DialogDescription>
                    Cập nhật thông tin của bạn và nhấn lưu để hoàn tất.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                {content}
            </div>
            <DialogFooter>
                <Button type="submit" onClick={onSave} className="bg-primary text-white">Lưu thay đổi</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
);


export default function CandidateProfilePage() {
  const [candidate, setCandidate] = useState(initialCandidate);
  const [tempCandidate, setTempCandidate] = useState(initialCandidate);

  const handleSave = (section: keyof typeof initialCandidate) => {
    // In a real app, you would make an API call here.
    // For this demo, we just update the main state.
    setCandidate(tempCandidate);
    // You might want to close the dialog here, which can be handled by controlling the 'open' state of the Dialog.
  };

  const handleChange = (section: keyof typeof tempCandidate, field: any, value: any, index: number | null = null) => {
      setTempCandidate(prev => {
          const newCandidate = { ...prev };
          if (index !== null) {
              // @ts-ignore
              newCandidate[section][index][field] = value;
          } else {
              // @ts-ignore
              newCandidate[section][field] = value;
          }
          return newCandidate;
      });
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-2xl overflow-hidden">
             <CardHeader className="p-0">
               <div className="bg-gradient-to-tr from-primary to-accent h-32" />
                 <div className="p-6 flex flex-col md:flex-row items-center md:items-end -mt-16">
                 <Avatar className="h-32 w-32 border-4 border-background bg-background shadow-lg">
                  <AvatarImage src={candidate.avatarUrl} alt={candidate.name} data-ai-hint="professional headshot" />
                  <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h1 className="text-3xl font-headline font-bold">{candidate.name}</h1>
                  <p className="text-muted-foreground">{candidate.headline}</p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2 mt-1">
                    <MapPin className="h-4 w-4" /> {candidate.location}
                  </p>
                </div>
                 <EditDialog
                    title="Chỉnh sửa thông tin cơ bản"
                    onSave={() => handleSave('name')} // A bit of a hack, assumes all top level fields are saved together
                    content={
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name-edit">Họ và tên</Label>
                                <Input id="name-edit" value={tempCandidate.name} onChange={(e) => setTempCandidate({...tempCandidate, name: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="headline-edit">Tiêu đề hồ sơ</Label>
                                <Input id="headline-edit" value={tempCandidate.headline} onChange={(e) => setTempCandidate({...tempCandidate, headline: e.target.value})} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location-edit">Địa điểm</Label>
                                <Input id="location-edit" value={tempCandidate.location} onChange={(e) => setTempCandidate({...tempCandidate, location: e.target.value})} />
                            </div>
                        </div>
                    }
                >
                  <Button className="md:ml-auto mt-4 md:mt-0" variant="outline"><Edit /> Sửa hồ sơ</Button>
                 </EditDialog>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Giới thiệu bản thân</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Giới thiệu bản thân"
                        onSave={() => handleSave('about')}
                        content={
                            <Textarea value={tempCandidate.about} onChange={(e) => setTempCandidate({...tempCandidate, about: e.target.value})} rows={6} />
                        }
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{candidate.about}</p>
                  </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-headline text-xl flex items-center"><Video className="mr-3 text-primary"/> Video giới thiệu</CardTitle>
                        <EditDialog
                            title="Chỉnh sửa Video giới thiệu"
                            onSave={() => handleSave('videoUrl')}
                            content={
                                <div className="space-y-2">
                                    <Label htmlFor="video-url-edit">Link YouTube Video</Label>
                                    <Input id="video-url-edit" value={tempCandidate.videoUrl} onChange={(e) => setTempCandidate({...tempCandidate, videoUrl: e.target.value})} />
                                </div>
                            }
                        >
                            <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                        </EditDialog>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe className="w-full h-full" src={candidate.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Briefcase className="mr-3 text-primary"/> Kinh nghiệm làm việc</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Kinh nghiệm làm việc"
                        onSave={() => handleSave('experience')}
                        content={
                            <div className="space-y-4">
                                {tempCandidate.experience.map((exp, index) => (
                                    <div key={index} className="p-4 border rounded-lg space-y-2">
                                        <Label>Vai trò</Label>
                                        <Input value={exp.role} onChange={e => handleChange('experience', 'role', e.target.value, index)} />
                                        <Label>Công ty</Label>
                                        <Input value={exp.company} onChange={e => handleChange('experience', 'company', e.target.value, index)} />
                                        <Label>Thời gian</Label>
                                        <Input value={exp.period} onChange={e => handleChange('experience', 'period', e.target.value, index)} />
                                        <Label>Mô tả</Label>
                                        <Textarea value={exp.description} onChange={e => handleChange('experience', 'description', e.target.value, index)} />
                                    </div>
                                ))}
                             </div>
                        }
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                     </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {candidate.experience.map((exp, index) => (
                        <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                            <h4 className="font-bold">{exp.role}</h4>
                            <p className="font-semibold text-sm text-primary">{exp.company}</p>
                            <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                            <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="font-headline text-xl flex items-center"><ImageIcon className="mr-3 text-primary"/> Hình ảnh kinh nghiệm</CardTitle>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {candidate.experienceImages.map((img, index) => (
                            <Image key={index} src={img.src} alt={img.alt} width={400} height={300} className="rounded-lg object-cover aspect-video" data-ai-hint={img.dataAiHint} />
                        ))}
                    </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><GraduationCap className="mr-3 text-primary"/> Học vấn</CardTitle>
                     <EditDialog
                        title="Chỉnh sửa Học vấn"
                        onSave={() => handleSave('education')}
                        content={
                            <div className="space-y-4">
                                <Label>Trường</Label>
                                <Input value={tempCandidate.education.school} onChange={e => handleChange('education', 'school', e.target.value)} />
                                <Label>Chuyên ngành</Label>
                                <Input value={tempCandidate.education.degree} onChange={e => handleChange('education', 'degree', e.target.value)} />
                                <Label>Năm tốt nghiệp</Label>
                                <Input type="number" value={tempCandidate.education.gradYear} onChange={e => handleChange('education', 'gradYear', parseInt(e.target.value))} />
                            </div>
                        }
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold flex items-center gap-2"><School className="h-4 w-4"/> {candidate.education.school}</p>
                    <p className="text-muted-foreground ml-6">Chuyên ngành: {candidate.education.degree}</p>
                    <p className="text-muted-foreground ml-6">Tốt nghiệp năm: {candidate.education.gradYear}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1 space-y-6">
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Thông tin cá nhân</CardTitle>
                    <EditDialog
                        title="Chỉnh sửa Thông tin cá nhân"
                        onSave={() => handleSave('personalInfo')}
                        content={
                            <div className="space-y-4">
                                <Label>Năm sinh</Label>
                                <Input type="number" value={tempCandidate.personalInfo.birthYear} onChange={e => handleChange('personalInfo', 'birthYear', parseInt(e.target.value))} />
                                <Label>Giới tính</Label>
                                <Input value={tempCandidate.personalInfo.gender} onChange={e => handleChange('personalInfo', 'gender', e.target.value)} />
                                <Label>Số điện thoại</Label>
                                <Input value={tempCandidate.personalInfo.phone} onChange={e => handleChange('personalInfo', 'phone', e.target.value)} />
                                <Label>Ngoại ngữ</Label>
                                <Input value={tempCandidate.personalInfo.language} onChange={e => handleChange('personalInfo', 'language', e.target.value)} />
                            </div>
                        }
                    >
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                    </EditDialog>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="flex items-start gap-3"><Cake className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Năm sinh:</strong> {candidate.personalInfo.birthYear}</span></p>
                    <p className="flex items-start gap-3"><Dna className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Giới tính:</strong> {candidate.personalInfo.gender}</span></p>
                    <p className="flex items-start gap-3"><Phone className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>SĐT:</strong> {candidate.personalInfo.phone}</span></p>
                    <p className="flex items-start gap-3"><Languages className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Ngoại ngữ:</strong> {candidate.personalInfo.language}</span></p>
                    <p className="flex items-start gap-3"><Building className="h-4 w-4 mt-1 text-muted-foreground"/> <span><strong>Ngành mong muốn:</strong> {candidate.desiredIndustry}</span></p>
                  </CardContent>
                </Card>

                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Star className="mr-3 text-primary"/> Kỹ năng & Lĩnh vực</CardTitle>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                  </CardHeader>
                  <CardContent>
                     <h4 className="font-semibold mb-2 text-sm">Kỹ năng</h4>
                     <div className="flex flex-wrap gap-2 mb-4">
                        {candidate.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                     </div>
                     <h4 className="font-semibold mb-2 text-sm">Lĩnh vực quan tâm</h4>
                     <div className="flex flex-wrap gap-2">
                        {candidate.interests.map(interest => <Badge key={interest} className="bg-accent-blue text-white">{interest}</Badge>)}
                     </div>
                  </CardContent>
                </Card>

                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-xl flex items-center"><Award className="mr-3 text-primary"/> Chứng chỉ & Giải thưởng</CardTitle>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     {candidate.certifications.map((cert, index) => (
                         <p key={index} className="text-sm flex items-center gap-2"><Award className="h-4 w-4 text-muted-foreground"/>{cert}</p>
                     ))}
                  </CardContent>
                </Card>

                 <Button className="w-full bg-accent-green hover:bg-accent-green/90 text-white"><FileDown/> Tải CV (.pdf)</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
