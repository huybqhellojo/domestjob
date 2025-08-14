
import { notFound } from 'next/navigation';
import { jobData, type Job } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, CalendarDays, DollarSign, Heart, MapPin, Sparkles, UserCheck, FileText, Share2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';

const JobDetailSection = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon: React.ElementType }) => (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-xl"><Icon className="text-primary"/>{title}</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-muted-foreground">
            {children}
        </CardContent>
    </Card>
);


export default function JobDetailPage({ params }: { params: { id: string } }) {
    const job = jobData.find(j => j.id === params.id);

    if (!job) {
        notFound();
    }

    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="overflow-hidden">
                            <div className="p-6">
                                <Badge className="mb-4">{job.tags[1] || 'Kỹ năng đặc định'}</Badge>
                                <h1 className="text-3xl font-bold font-headline mb-3">{job.title}</h1>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                                    <p className="flex items-center gap-2"><Building className="h-4 w-4"/> {job.recruiter.company}</p>
                                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Nagasaki, Nhật Bản</p>
                                    <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Đăng {job.postedTime}</p>
                                </div>
                            </div>
                            <div className="relative h-64 w-full">
                                <Image src={job.image.src} alt={job.title} fill className="object-cover" />
                            </div>
                        </Card>

                        <JobDetailSection title="Mô tả công việc" icon={FileText}>
                            <p>Đây là phần mô tả chi tiết về công việc. Ứng viên sẽ chịu trách nhiệm vận hành các máy móc trong dây chuyền sản xuất thực phẩm, đảm bảo tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm của Nhật Bản. Công việc bao gồm kiểm tra nguyên liệu đầu vào, giám sát quá trình chế biến, và đóng gói thành phẩm.</p>
                            <ul>
                                <li>Vận hành máy trộn bột và máy tạo hình bánh.</li>
                                <li>Kiểm tra chất lượng sản phẩm theo từng công đoạn.</li>
                                <li>Vệ sinh khu vực làm việc và thiết bị sau mỗi ca.</li>
                                <li>Ghi chép nhật ký sản xuất đầy đủ.</li>
                            </ul>
                        </JobDetailSection>
                         <JobDetailSection title="Yêu cầu ứng viên" icon={UserCheck}>
                            <p>Để thành công trong vai trò này, ứng viên cần đáp ứng các yêu cầu sau:</p>
                             <ul>
                                <li>Giới tính: Nữ, độ tuổi từ 18 đến 35.</li>
                                <li>Trình độ học vấn: Tốt nghiệp THPT trở lên.</li>
                                <li>Kinh nghiệm: Không yêu cầu kinh nghiệm, sẽ được đào tạo. Ưu tiên ứng viên đã có kinh nghiệm làm trong ngành thực phẩm.</li>
                                <li>Yêu cầu khác: Có sức khỏe tốt, chăm chỉ, cẩn thận và có tinh thần trách nhiệm cao.</li>
                            </ul>
                        </JobDetailSection>

                         <JobDetailSection title="Quyền lợi & Chế độ" icon={Sparkles}>
                             <p>Chúng tôi mang đến một môi trường làm việc chuyên nghiệp cùng những quyền lợi hấp dẫn:</p>
                             <ul>
                                <li>Mức lương cơ bản hấp dẫn, cùng với các khoản phụ cấp và thưởng theo quy định.</li>
                                <li>Được hỗ trợ chi phí nhà ở và đi lại.</li>
                                <li>Được tham gia đầy đủ các loại bảo hiểm theo luật pháp Nhật Bản (y tế, hưu trí, thất nghiệp).</li>
                                <li>Có cơ hội được đào tạo nâng cao tay nghề và học tiếng Nhật.</li>
                                <li>Môi trường làm việc an toàn, sạch sẽ, đồng nghiệp thân thiện.</li>
                            </ul>
                        </JobDetailSection>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-6">
                        <Card className="sticky top-24 shadow-lg">
                            <CardContent className="p-6 space-y-4">
                               <div className="space-y-2">
                                    <p className="flex items-center gap-2 text-sm text-muted-foreground"><DollarSign className="h-4 w-4"/>Lương cơ bản</p>
                                    <p className="text-2xl font-bold text-accent-green">{job.salary.basic}</p>
                                    {job.salary.actual && <p className="text-md font-semibold text-muted-foreground">Thực lĩnh: {job.salary.actual}</p>}
                               </div>
                                <div className="flex flex-col gap-3">
                                    <Button size="lg" className="w-full bg-accent-orange text-white">Ứng tuyển ngay</Button>
                                    <Button size="lg" variant="outline" className="w-full"><Heart className="mr-2"/> Lưu tin tuyển dụng</Button>
                                </div>
                            </CardContent>
                             <div className="border-t p-6 space-y-4">
                                <h4 className="font-bold">Nhà tuyển dụng</h4>
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
                             </div>
                             <div className="border-t p-6 flex justify-center">
                                 <Button variant="ghost" className="text-muted-foreground"><Share2 className="mr-2"/>Chia sẻ tin này</Button>
                             </div>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
}