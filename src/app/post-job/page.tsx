
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, Send } from "lucide-react";

export default function PostJobPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-4xl">Đăng tin tuyển dụng</CardTitle>
              <CardDescription className="!mt-3 text-lg">
                Tiếp cận hàng ngàn ứng viên tiềm năng trên hệ thống Domest Job.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form className="space-y-8">
                {/* Job Information */}
                <div className="space-y-4 p-6 border rounded-lg">
                  <h3 className="text-xl font-bold font-headline">Thông tin việc làm</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Chức danh</Label>
                      <Input id="job-title" placeholder="VD: Kỹ sư vận hành máy CNC" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-industry">Ngành</Label>
                      <Select>
                        <SelectTrigger id="job-industry"><SelectValue placeholder="Chọn ngành nghề" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">Công nghệ thông tin</SelectItem>
                          <SelectItem value="cokhi">Cơ khí</SelectItem>
                          <SelectItem value="detmay">Dệt may</SelectItem>
                          <SelectItem value="dientu">Điện tử</SelectItem>
                           <SelectItem value="logistics">Logistics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="job-type">Loại hình công việc</Label>
                      <Select>
                        <SelectTrigger id="job-type"><SelectValue placeholder="Chọn loại hình" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Toàn thời gian</SelectItem>
                          <SelectItem value="part-time">Bán thời gian</SelectItem>
                          <SelectItem value="internship">Thực tập</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="job-location">Địa điểm làm việc</Label>
                      <Input id="job-location" placeholder="VD: Khu công nghệ cao, Q.9, TP.HCM" />
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div className="space-y-4 p-6 border rounded-lg">
                   <h3 className="text-xl font-bold font-headline">Mô tả chi tiết</h3>
                   <div className="space-y-2">
                      <Label htmlFor="job-description">Mô tả công việc</Label>
                      <Textarea id="job-description" placeholder="Mô tả công việc, trách nhiệm..." rows={5}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-requirements">Yêu cầu ứng viên</Label>
                      <Textarea id="job-requirements" placeholder="Yêu cầu về kỹ năng, kinh nghiệm, học vấn..." rows={5}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-benefits">Quyền lợi</Label>
                      <Textarea id="job-benefits" placeholder="Phúc lợi, lương thưởng, cơ hội phát triển..." rows={3}/>
                    </div>
                </div>

                 {/* Contact Information */}
                <div className="space-y-4 p-6 border rounded-lg">
                   <h3 className="text-xl font-bold font-headline">Thông tin liên hệ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Người liên hệ</Label>
                          <Input id="contact-name" placeholder="Nguyễn Văn B" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email liên hệ</Label>
                          <Input id="contact-email" type="email" placeholder="hr@congty.com" />
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">Tôi đồng ý với các <a href="#" className="underline text-primary">điều khoản dịch vụ</a> của Domest Job.</Label>
                </div>

                <div className="text-center pt-4">
                    <Button size="lg" className="bg-primary text-white w-full md:w-auto">
                        <Send className="mr-2"/> Đăng tin ngay
                    </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
