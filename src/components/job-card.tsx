import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, Phone, HelpCircle, Download, Briefcase, User, Copy, Users, MoreHorizontal } from 'lucide-react';
import { Job } from '@/lib/mock-data';
import { ZaloIcon, JpgIcon, PdfIcon } from './custom-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col">
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
            {job.salary.actual && <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black shadow-md">Thực lĩnh: {job.salary.actual} <HelpCircle className="w-3 h-3 ml-1" /></Badge>}
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-black shadow-md">Lương cơ bản: {job.salary.basic}</Badge>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3 flex-grow flex flex-col">
        <h3 className="font-bold text-sm mb-2 hover:text-primary cursor-pointer leading-tight h-10">{job.title}</h3>
        
        <div className="mt-auto space-y-3">

            <div className="flex items-center gap-2 text-xs">
              <Avatar className="w-5 h-5">
                <AvatarImage src={job.recruiter.avatar} alt={job.recruiter.name} />
                <AvatarFallback>{job.recruiter.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-blue-600">{job.recruiter.name}</span>
              <span className="text-muted-foreground">- {job.recruiter.company}</span>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge variant={job.status === 'Đang tuyển' ? 'default' : 'secondary'} className={`${job.status === 'Đang tuyển' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>{job.status}</Badge>
                         {job.applicants ? (
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {job.applicants.avatars.map((avatar, i) => (
                                        <Avatar key={i} className="w-5 h-5 border-2 border-background">
                                            <AvatarImage src={avatar} />
                                            <AvatarFallback>A</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <span className="ml-2">{job.applicants.count}</span>
                            </div>
                        ) : <p className="text-xs text-muted-foreground">0</p>}
                        <Users className="w-4 h-4" />
                    </div>
                     <span className="text-red-600 font-bold">{job.netFee}</span>
                </div>
            </div>
            
            <div className="flex justify-between items-center border-t pt-2">
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7"><Phone className="text-green-500"/></Button>
                    <ZaloIcon className="h-5 w-5 cursor-pointer" />
                    <Button variant="ghost" size="icon" className="h-7 w-7"><User/></Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7"><Briefcase/></Button>
                </div>
                <div className="text-xs text-muted-foreground">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Tải JD</DropdownMenuItem>
                            <DropdownMenuItem><JpgIcon className="mr-2 h-4 w-4" /> Tải ảnh JPG</DropdownMenuItem>
                            <DropdownMenuItem><PdfIcon className="mr-2 h-4 w-4" /> Tải ảnh PDF</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
      </div>
    </Card>
  );
};
