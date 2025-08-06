
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, FileUp, Sparkles, Send, Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AiProfilePage() {
    const router = useRouter();

    const handleSend = () => {
        // In a real app, you would handle the AI processing here.
        // For this demo, we'll just navigate to the profile page.
        router.push('/candidate-profile');
    };

    return (
        <div className="bg-secondary flex-grow flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    
                    <div className="flex justify-center items-center gap-4 mb-6">
                         <Image src="https://placehold.co/100x100.png" alt="AI Assistant" width={80} height={80} data-ai-hint="friendly robot mascot" />
                         <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Tạo hồ sơ bằng AI</h1>
                    </div>

                    <p className="text-muted-foreground text-lg mb-10">
                        Chỉ cần tải lên CV, giấy tờ hoặc mô tả về bản thân, AI của chúng tôi sẽ tự động tạo một hồ sơ chuyên nghiệp cho bạn.
                    </p>

                    <Card className="text-center p-8 md:p-12 border-2 border-dashed border-primary/20 hover:border-primary/50 transition-colors duration-300 shadow-lg">
                        <CardContent className="flex flex-col items-center justify-center gap-6">
                            <div className="w-full bg-background rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5">
                                 <Upload className="h-16 w-16 text-primary mb-4" />
                                <p className="font-bold text-xl mb-2">Tải lên hồ sơ, giấy tờ, bằng cấp</p>
                                <p className="text-muted-foreground text-sm">Hỗ trợ các định dạng PDF, DOCX, PNG, JPG...</p>
                                <Input id="ai-upload" type="file" className="sr-only" />
                            </div>
                            <div className="flex items-center gap-4 w-full">
                                <hr className="flex-grow border-border"/>
                                <span className="text-muted-foreground text-sm font-semibold">HOẶC</span>
                                <hr className="flex-grow border-border"/>
                            </div>
                             <div className="w-full relative">
                                <Textarea 
                                    placeholder="Sao chép và dán mô tả công việc, hoặc mô tả về bản thân bạn ở đây..."
                                    className="w-full h-40 text-base p-4 pr-24"
                                />
                                <Button className="absolute bottom-4 right-4 bg-primary text-white" onClick={handleSend}>
                                    <Send />
                                    Gửi
                                </Button>
                             </div>
                        </CardContent>
                    </Card>

                    <div className="mt-12">
                        <h3 className="text-xl font-headline font-bold mb-6 text-foreground">Thử một vài gợi ý:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                <FileText className="h-8 w-8 text-accent-orange mb-3" />
                                <h4 className="font-bold text-lg mb-1">Mô tả thông tin cá nhân</h4>
                                <p className="text-muted-foreground text-sm">"Tôi là sinh viên năm cuối trường X, chuyên ngành Y, đang tìm kiếm cơ hội thực tập..."</p>
                            </Card>
                             <Card className="p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                <FileUp className="h-8 w-8 text-accent-green mb-3" />
                                <h4 className="font-bold text-lg mb-1">Đăng từ hồ sơ có sẵn</h4>
                                <p className="text-muted-foreground text-sm">Tải lên CV file PDF hoặc Word để AI tự động trích xuất và điền thông tin.</p>
                            </Card>
                             <Card className="p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                <Mic className="h-8 w-8 text-accent-blue mb-3" />
                                <h4 className="font-bold text-lg mb-1">Tạo hồ sơ bằng giọng nói</h4>
                                <p className="text-muted-foreground text-sm">Chỉ cần bấm nút và mô tả về bản thân, chúng tôi sẽ lo phần còn lại.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// We need a simple Input component that is not available yet
// This is a simplified version for this page
const Input = ({ ...props }) => (
  <input {...props} />
);
