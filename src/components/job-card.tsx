import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, Phone, HelpCircle, Download, Briefcase, ChevronUp, User, Copy, Check, Users } from 'lucide-react';
import { Job } from '@/lib/mock-data';
import { ZaloIcon, JpgIcon, PdfIcon } from './custom-icons';

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300">
      {/* Image Header */}
      <div className="relative">
        <Image src={job.image.src} alt={job.title} width={600} height={400} className="w-full h-40 object-cover" />
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${job.isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <span>{job.id}</span>
          <Copy className="w-3 h-3 cursor-pointer" />
        </div>
        <div className={`absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 ${job.image.type === 'minhhoa' ? 'bg-orange-500' : 'bg-green-500'}`} style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 20% 50%, 0 0)'}}>
          {job.image.type === 'minhhoa' ? 'ẢNH MINH HỌA' : 'ẢNH THỰC TẾ'}
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-2">
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <span>{job.likes}</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
        </div>
         <div className="absolute bottom-2 left-2 flex flex-col gap-1">
            {job.salary.actual && <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black">Thực lĩnh: {job.salary.actual} <HelpCircle className="w-3 h-3 ml-1" /></Badge>}
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black">Lương cơ bản: {job.salary.basic}</Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3">
        <h3 className="font-bold text-sm mb-2 hover:text-primary cursor-pointer">{job.title}</h3>
        
        {job.support?.includes('lành nghề') && (
            <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200 text-xs">
                <Check className="w-3 h-3 mr-1"/> Hỗ trợ lành nghề
            </Badge>
        )}

        <div className="mt-3 flex items-center gap-2 text-xs">
          <Avatar className="w-5 h-5">
            <AvatarImage src={job.recruiter.avatar} alt={job.recruiter.name} />
            <AvatarFallback>{job.recruiter.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-blue-600">{job.recruiter.name}</span>
          <span className="text-muted-foreground">- {job.recruiter.company}</span>
        </div>

        <div className="mt-2 space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
                <Badge variant={job.status === 'Đang tuyển' ? 'default' : 'secondary'} className={job.status === 'Đang tuyển' ? 'bg-green-500' : 'bg-yellow-500'}>{job.status}</Badge>
                {job.status === 'Đang tuyển' && <Download className="w-4 h-4 text-primary" />}
            </div>
            <p><strong>Phỏng vấn:</strong> {job.interviewDate} ({job.interviewRounds} vòng)</p>
            <p><strong>Phí NET:</strong> <span className="text-red-600 font-bold">{job.netFee}</span></p>
            <p><strong>Chỉ tiêu:</strong> <span className="text-red-600 font-bold">{job.target}</span></p>
            {job.backFee && <p><strong>Back:</strong> <span className="text-red-600 font-bold">{job.backFee}</span></p>}
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
            {job.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
        </div>
        
        <div className="mt-3 text-xs text-muted-foreground flex justify-between items-center">
             {job.applicants ? (
                <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                        {job.applicants.avatars.map((avatar, i) => (
                            <Avatar key={i} className="w-5 h-5 border-2 border-background">
                                <AvatarImage src={avatar} />
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                    <span>{job.applicants.count} ứng viên thị trường phù hợp</span>
                </div>
            ) : <p>Chưa có ứng viên của bạn phù hợp</p>}
        </div>
        
        <div className="mt-3 flex justify-between items-center border-t pt-2">
            <div className="flex items-center gap-1.5">
                <JpgIcon className="h-5 w-5 cursor-pointer" />
                <PdfIcon className="h-5 w-5 cursor-pointer" />
                <Button variant="ghost" size="icon" className="h-6 w-6"><Phone className="text-green-500"/></Button>
                <ZaloIcon className="h-5 w-5 cursor-pointer" />
                <Button variant="ghost" size="icon" className="h-6 w-6"><User/></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6"><Briefcase/></Button>
            </div>
            <div className="text-xs text-muted-foreground">
                <p>Đăng lúc: {job.postedTime}</p>
            </div>
        </div>
      </div>
    </Card>
  );
};
