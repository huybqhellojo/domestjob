
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Cake, Dna, Edit, GraduationCap, MapPin, Phone, School, User, Award, Languages, Star, FileDown } from 'lucide-react';

export default function CandidateProfilePage() {
  // Mock data for a candidate
  const candidate = {
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
                <Button className="md:ml-auto mt-4 md:mt-0" variant="outline"><Edit /> Sửa hồ sơ</Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Giới thiệu bản thân</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{candidate.about}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><Briefcase className="mr-3 text-primary"/> Kinh nghiệm làm việc</CardTitle>
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
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><GraduationCap className="mr-3 text-primary"/> Học vấn</CardTitle>
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
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><User className="mr-3 text-primary"/> Thông tin cá nhân</CardTitle>
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
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><Star className="mr-3 text-primary"/> Kỹ năng & Lĩnh vực</CardTitle>
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
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><Award className="mr-3 text-primary"/> Chứng chỉ & Giải thưởng</CardTitle>
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
