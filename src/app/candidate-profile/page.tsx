
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Cake, Dna, Edit, GraduationCap, MapPin, Phone, School, User } from 'lucide-react';

export default function CandidateProfilePage() {
  // Mock data for a candidate
  const candidate = {
    name: 'Lê Thị An',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'Sinh viên năm cuối - ĐH Bách Khoa - Sẵn sàng đi làm',
    location: 'Quận 10, TP. Hồ Chí Minh',
    education: {
      school: 'Đại học Bách Khoa TP.HCM',
      degree: 'Kỹ sư Phần mềm',
      gradYear: 2024,
    },
    personalInfo: {
      birthYear: 1999,
      gender: 'Nữ',
      phone: '0987 654 321',
    },
    interests: ['Cơ khí', 'Điện tử', 'IT', 'Logistics'],
    skills: ['Lập trình', 'Tiếng Anh', 'Vận hành máy', 'Kiểm tra chất lượng'],
    desiredIndustry: 'IT/Phần mềm',
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
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
                <Button className="md:ml-auto mt-4 md:mt-0" variant="outline"><Edit className="mr-2"/> Sửa hồ sơ</Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
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

                 <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><Briefcase className="mr-3 text-primary"/> Kỹ năng & Lĩnh vực quan tâm</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <h4 className="font-semibold mb-3">Kỹ năng</h4>
                     <div className="flex flex-wrap gap-2 mb-4">
                        {candidate.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                     </div>
                     <h4 className="font-semibold mb-3">Lĩnh vực quan tâm</h4>
                     <div className="flex flex-wrap gap-2">
                        {candidate.interests.map(interest => <Badge key={interest} className="bg-accent-blue text-white">{interest}</Badge>)}
                     </div>
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
                    <p className="flex items-center gap-3"><Cake className="h-4 w-4 text-muted-foreground"/> <strong>Năm sinh:</strong> {candidate.personalInfo.birthYear}</p>
                    <p className="flex items-center gap-3"><Dna className="h-4 w-4 text-muted-foreground"/> <strong>Giới tính:</strong> {candidate.personalInfo.gender}</p>
                    <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-muted-foreground"/> <strong>SĐT:</strong> {candidate.personalInfo.phone}</p>
                     <p className="flex items-center gap-3"><Building className="h-4 w-4 text-muted-foreground"/> <strong>Ngành mong muốn:</strong> {candidate.desiredIndustry}</p>
                  </CardContent>
                </Card>
                 <Button className="w-full bg-accent-green hover:bg-accent-green/90 text-white">Tải CV (.pdf)</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
