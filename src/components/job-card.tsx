import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, Phone, HelpCircle, Download, Briefcase, User, Copy, Users, MoreHorizontal, MapPin } from 'lucide-react';
import { Job } from '@/lib/mock-data';
import { ZaloIcon, JpgIcon, PdfIcon } from './custom-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 flex flex-row items-stretch w-full">
      {/* Left side: Image */}
      <div className="relative w-1/3 flex-shrink-0 aspect-[4/3]">
        <Image src={job.image.src} alt={job.title} fill className="object-cover" />
         <div className="absolute top-1 left-1 bg-black/50 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
          <div className={cn("w-1.5 h-1.5 rounded-full", job.isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400')}></div>
          <span>{job.id}</span>
        </div>
        <div className="absolute bottom-1 right-1 flex items-center gap-2">
            <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <span>{job.likes}</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-2/3 p-3 flex-grow flex flex-col justify-between">
        <div>
            <h3 className="font-bold text-sm mb-2 hover:text-primary cursor-pointer leading-tight">{job.title}</h3>
            <div className="flex flex-wrap gap-1 mb-2">
                {job.salary.actual && <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Thực lĩnh: {job.salary.actual}</Badge>}
                <Badge variant="secondary" className="text-xs">Cơ bản: {job.salary.basic}</Badge>
            </div>
             <p className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                <MapPin className="h-3 w-3" />
                <span>Nagasaki</span>
            </p>
        </div>
        
        <div className="mt-auto space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <Avatar className="w-6 h-6">
                <AvatarImage src={job.recruiter.avatar} alt={job.recruiter.name} />
                <AvatarFallback>{job.recruiter.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold text-blue-600 truncate">{job.recruiter.name}</p>
                <p className="text-muted-foreground truncate">{job.recruiter.company}</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-2">
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7"><Phone className="text-green-500 h-5 w-5"/></Button>
                    <ZaloIcon className="h-5 w-5 cursor-pointer" />
                    <Button variant="ghost" size="icon" className="h-7 w-7"><User className="h-5 w-5"/></Button>
                </div>
                <div>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Briefcase className="mr-2 h-4 w-4" /> Chi tiết đơn</DropdownMenuItem>
                            <DropdownMenuSeparator />
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
