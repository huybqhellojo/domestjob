
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, CheckCircle, Handshake, LineChart, MessageSquare, PieChart, Send, ShieldCheck, Sparkles, Star, Target, Users, Phone } from 'lucide-react';
import Image from 'next/image';

const consultants = [
  {
    name: 'Nguyễn Văn A',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional man portrait',
    experience: '3 năm 2 tháng',
    mainExpertise: 'Tư vấn việc làm Kỹ năng đặc định (Tokutei) 2 đầu Nhật Việt',
    successfulCandidates: 328,
    strengths: ['Tận tình', 'Nhiều đơn', 'Hiểu rõ ngành'],
  },
  {
    name: 'Trần Thị Bích',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional woman portrait',
    experience: '4 năm',
    mainExpertise: 'Tư vấn Thực tập sinh & Du học sinh',
    successfulCandidates: 512,
    strengths: ['Nhiệt tình', 'Hỗ trợ 24/7', 'Quan hệ tốt'],
  },
  {
    name: 'Lê Minh Cường',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'expert consultant portrait',
    experience: '5 năm',
    mainExpertise: 'Tư vấn Kỹ sư & Lao động trình độ cao',
    successfulCandidates: 190,
    strengths: ['Chuyên môn sâu', 'Tỷ lệ đỗ cao', 'Nhiều đơn hiếm'],
  },
  {
    name: 'Phạm Thu Dung',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'friendly woman portrait',
    experience: '2 năm 6 tháng',
    mainExpertise: 'Tư vấn ngành thực phẩm & nhà hàng',
    successfulCandidates: 280,
    strengths: ['Am hiểu ngành', 'Hỗ trợ chi phí', 'Tư vấn tận tâm'],
  },
  {
    name: 'Hoàng Văn Em',
    avatarUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'young man portrait',
    experience: '1 năm 8 tháng',
    mainExpertise: 'Tư vấn ngành xây dựng & cơ khí',
    successfulCandidates: 155,
    strengths: ['Năng động', 'Nhiều đơn mới', 'Hỗ trợ nhanh'],
  },
];


const ZaloIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 262 263" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M131 0C58.649 0 0 58.649 0 131C0 203.351 58.649 262 131 262C203.351 262 262 203.351 262 131C262 58.649 203.351 0 131 0ZM197.838 170.368L173.962 194.244C171.139 197.067 167.247 197.68 163.639 196.223L126.541 182.903C125.129 182.413 123.824 181.711 122.625 180.892L74.832 144.37C71.748 142.029 70.832 137.989 72.585 134.577L84.975 111.758C86.728 108.347 90.722 106.889 94.276 108.347L131.374 121.612C132.786 122.102 134.091 122.748 135.29 123.623L183.083 160.145C186.167 162.486 187.083 166.526 185.33 169.937L197.838 170.368Z" fill="#0068FF"/>
    </svg>
)

const MessengerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path fill="#0099FF" d="M16 4c-6.627 0-12 4.477-12 10c0 4.29 2.765 7.94 6.703 9.426c-0.125-0.75-0.19-1.426-0.09-2.128c0.21-1.637 1.044-4.88 1.044-4.88s-0.278-0.556-0.278-1.373c0-1.286 0.74-2.25 1.664-2.25c0.785 0 1.157 0.588 1.157 1.288c0 0.787-0.498 1.96-0.758 3.048c-0.218 0.908 0.45 1.646 1.34 1.646c1.604 0 2.684-2.053 2.684-4.526c0-2.243-1.464-3.83-3.952-3.83c-2.784 0-4.47 1.89-4.47 4.13c0 0.79 0.25 1.39 0.636 1.86c0.088 0.11 0.1 0.196 0.076 0.294c-0.088 0.35-0.295 1.18-0.34 1.378c-0.056 0.23-0.21 0.28-0.38 0.192c-1.076-0.55-1.556-2.2-1.556-3.42c0-2.82 2.39-5.91 6.76-5.91c3.56 0 6.01 2.414 6.01 5.3c0 3.32-1.99 6.16-4.99 6.16c-1 0-1.92-0.51-2.22-1.11l-0.78 3.12C12.25 24.31 14.01 25 16 25c6.627 0 12-4.477 12-10S22.627 4 16 4z" />
  </svg>
)

const ConsultantCard = ({ consultant }: { consultant: typeof consultants[0] }) => {
    return (
        <Card className="shadow-xl flex flex-col">
            <CardHeader className="text-center p-6">
                <Avatar className="h-32 w-32 mx-auto border-4 border-primary shadow-lg">
                    <AvatarImage src={consultant.avatarUrl} alt={consultant.name} data-ai-hint={consultant.dataAiHint} />
                    <AvatarFallback>{consultant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-headline font-bold mt-4">{consultant.name}</h2>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {consultant.strengths.map(strength => (
                        <Badge key={strength} variant="secondary" className="bg-green-100 text-green-800 border-green-200">{strength}</Badge>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm px-6 flex-grow">
                <p className="flex items-start gap-3"><PieChart className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0"/> <span><strong>Kinh nghiệm:</strong> {consultant.experience}</span></p>
                <p className="flex items-start gap-3"><Star className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0"/> <span><strong>Chuyên môn:</strong> {consultant.mainExpertise}</span></p>
                 <p className="flex items-start gap-3"><Users className="h-5 w-5 mt-0.5 text-muted-foreground flex-shrink-0"/> <span><strong>Hỗ trợ thành công:</strong> {consultant.successfulCandidates}+ ứng viên</span></p>
            </CardContent>
            <div className="p-6 mt-auto">
                <div className="w-full bg-accent-blue text-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="flex items-center justify-center gap-3">
                        <a href="#" aria-label="Chat on Messenger" className="bg-white rounded-full p-1.5 hover:opacity-90 transition-opacity">
                            <MessengerIcon className="h-8 w-8"/>
                        </a>
                        <a href="#" aria-label="Call" className="bg-white rounded-full p-1.5 hover:opacity-90 transition-opacity">
                            <Phone className="h-8 w-8 text-green-500"/>
                        </a>
                        <a href="#" aria-label="Chat on Zalo" className="bg-white rounded-full p-1.5 hover:opacity-90 transition-opacity">
                            <ZaloIcon className="h-8 w-8"/>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default function ConsultantProfilePage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
         <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent">
            Đội ngũ tư vấn viên HelloJob
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên con đường sự nghiệp tại Nhật Bản. Hãy chọn một tư vấn viên để được hỗ trợ tốt nhất!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {consultants.map(c => <ConsultantCard key={c.name} consultant={c} />)}
        </div>
      </div>
    </div>
  );
}

    