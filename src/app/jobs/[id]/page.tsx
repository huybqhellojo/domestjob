
'use client';

import { notFound } from 'next/navigation';
import { jobData, type Job } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, CalendarDays, DollarSign, Heart, MapPin, Sparkles, UserCheck, FileText, Share2, Users, ClipboardCheck, Wallet, UserRound, ArrowLeft, Video, Image as ImageIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

const JobDetailSection = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon: React.ElementType }) => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-xl"><Icon className="text-primary h-6 w-6"/>{title}</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-muted-foreground prose-sm md:prose-base">
            {children}
        </CardContent>
    </Card>
);

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const job = jobData.find(j => j.id === resolvedParams.id);

    if (!job) {
        notFound();
    }

    const InfoPill = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
        <div className="flex flex-col items-center justify-center p-3 bg-secondary rounded-lg text-center">
            <Icon className="h-6 w-6 text-primary mb-2" />
            <p className="text-xs text-muted-foreground font-semibold">{label}</p>
            <p className="text-sm font-bold">{value}</p>
        </div>
    );

    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="mb-6">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/jobs"><ArrowLeft className="mr-2 h-4 w-4" />Quay lại danh sách</Link>
                    </Button>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{job.tags[0]}</Badge>
                                <h1 className="text-2xl md:text-3xl font-bold font-headline mb-3">{job.title}</h1>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                                    <p className="flex items-center gap-2"><Building className="h-4 w-4"/> {job.recruiter.company}</p>
                                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Nagasaki, Nhật Bản</p>
                                    <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Đăng {job.postedTime}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                             <InfoPill icon={Users} label="Số lượng tuyển" value={`${job.applicants?.count || 'N/A'} người`} />
                             <InfoPill icon={CalendarDays} label="Ngày thi tuyển" value={job.interviewDate} />
                             <InfoPill icon={ClipboardCheck} label="Số vòng thi" value={`${job.interviewRounds} vòng`} />
                             <InfoPill icon={Wallet} label="Phí xuất cảnh" value={job.netFee} />
                        </div>

                        <JobDetailSection title="Mô tả công việc" icon={FileText}>
                            <div dangerouslySetInnerHTML={{ __html: job.details.description }} />
                        </JobDetailSection>
                         <JobDetailSection title="Yêu cầu ứng viên" icon={UserCheck}>
                             <div dangerouslySetInnerHTML={{ __html: job.details.requirements }} />
                        </JobDetailSection>

                         <JobDetailSection title="Quyền lợi & Chế độ" icon={Sparkles}>
                             <div dangerouslySetInnerHTML={{ __html: job.details.benefits }} />
                        </JobDetailSection>

                        { (job.details.videoUrl || (job.details.images && job.details.images.length > 0)) &&
                            <JobDetailSection title="Hình ảnh & Video công việc" icon={ImageIcon}>
                                <div className="space-y-6">
                                    {job.details.videoUrl && (
                                        <div className="aspect-video">
                                            <iframe className="w-full h-full rounded-lg" src={job.details.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    )}
                                    {job.details.images && job.details.images.length > 0 && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {job.details.images.map((image, index) => (
                                                <Image key={index} src={image.src} alt={image.alt} width={600} height={400} className="rounded-lg object-cover" data-ai-hint={image.dataAiHint} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </JobDetailSection>
                        }

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
                        <Card className="shadow-lg">
                            <CardContent className="p-6 space-y-4">
                               <div className="space-y-2 text-center">
                                    <p className="text-sm text-muted-foreground">Lương cơ bản</p>
                                    <p className="text-3xl font-bold text-accent-green">{job.salary.basic}</p>
                                    {job.salary.actual && <p className="text-lg font-semibold text-muted-foreground">Thực lĩnh: ~{job.salary.actual}</p>}
                               </div>
                                <div className="flex flex-col gap-3">
                                    <Button size="lg" className="w-full bg-accent-orange text-white">Ứng tuyển ngay</Button>
                                    <Button size="lg" variant="outline" className="w-full"><Heart className="mr-2"/> Lưu tin</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                             <CardHeader>
                                <CardTitle className="text-lg font-bold flex items-center gap-2"><UserRound/>Nhà tuyển dụng</CardTitle>
                             </CardHeader>
                             <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                     <Avatar className="h-12 w-12">
                                        <AvatarImage src={job.recruiter.avatar} alt={job.recruiter.name} />
                                        <AvatarFallback>{job.recruiter.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-primary">{job.recruiter.name}</p>
                                        <p className="text-sm text-muted-foreground">{job.recruiter.company}</p>
                                    </div>
                                </div>
                                <Button variant="secondary" className="w-full">Xem trang công ty</Button>
                             </CardContent>
                             <div className="border-t p-4 flex justify-center">
                                 <Button variant="ghost" className="text-muted-foreground text-sm"><Share2 className="mr-2 h-4 w-4"/>Chia sẻ tin này</Button>
                             </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}
