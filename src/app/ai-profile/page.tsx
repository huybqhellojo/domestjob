
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, FileUp, Sparkles, Send, Mic, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProfile, CandidateProfile } from "@/ai/flows/create-profile-flow";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function AiProfilePage() {
    const router = useRouter();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [fileInputKey, setFileInputKey] = useState(Date.now()); // Used to reset file input
    const [analysisResult, setAnalysisResult] = useState<CandidateProfile | null>(null);
    const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsLoading(true);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const document = reader.result as string;
            
            try {
                const profileData = await createProfile({ document });

                toast({
                    title: "Phân tích thành công!",
                    description: "AI đã phân tích và trích xuất thông tin từ hồ sơ của bạn.",
                    className: "bg-accent-green text-white",
                });
                
                setAnalysisResult(profileData);
                setIsResultDialogOpen(true);

            } catch (error) {
                console.error("AI Profile Generation Error:", error);
                toast({
                    variant: "destructive",
                    title: "Đã có lỗi xảy ra",
                    description: "Không thể phân tích hồ sơ. Vui lòng thử lại.",
                });
            } finally {
                setIsLoading(false);
                setFileInputKey(Date.now());
            }
        };
        reader.onerror = (error) => {
            console.error("File Reading Error:", error);
            toast({
                variant: "destructive",
                title: "Lỗi đọc tệp",
                description: "Không thể đọc tệp bạn đã chọn. Vui lòng thử lại.",
            });
            setIsLoading(false);
            setFileInputKey(Date.now());
        };
    };

    const handleSend = async () => {
        if (!textInput.trim()) {
            toast({
                variant: "destructive",
                title: "Vui lòng nhập thông tin",
                description: "Bạn cần nhập mô tả bản thân hoặc dán CV vào ô văn bản.",
            });
            return;
        }

        setIsLoading(true);
        try {
            const profileData = await createProfile({ text: textInput });

            toast({
                title: "Phân tích thành công!",
                description: "AI đã phân tích và trích xuất thông tin từ văn bản của bạn.",
                className: "bg-accent-green text-white",
            });
            
            setAnalysisResult(profileData);
            setIsResultDialogOpen(true);

        } catch (error) {
            console.error("AI Profile Generation Error (Text):", error);
            toast({
                variant: "destructive",
                title: "Đã có lỗi xảy ra",
                description: "Không thể phân tích văn bản. Vui lòng thử lại.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleProceed = () => {
        if (analysisResult) {
            localStorage.setItem('generatedCandidateProfile', JSON.stringify(analysisResult));
            router.push('/candidate-profile');
        }
    };

    return (
        <>
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
                                 <div className="relative w-full bg-background rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5">
                                    {isLoading && !analysisResult ? (
                                        <>
                                            <Loader2 className="h-16 w-16 text-primary mb-4 animate-spin" />
                                            <p className="font-bold text-xl mb-2">Đang phân tích...</p>
                                            <p className="text-muted-foreground text-sm">Vui lòng đợi trong giây lát.</p>
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="h-16 w-16 text-primary mb-4" />
                                            <p className="font-bold text-xl mb-2">Tải lên hồ sơ, giấy tờ, bằng cấp</p>
                                            <p className="text-muted-foreground text-sm">Hỗ trợ các định dạng PDF, DOCX, PNG, JPG...</p>
                                            <Input 
                                                key={fileInputKey}
                                                id="ai-upload" 
                                                type="file" 
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                                onChange={handleFileChange}
                                                accept="image/*,.pdf,.doc,.docx"
                                                disabled={isLoading}
                                            />
                                        </>
                                    )}
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
                                        value={textInput}
                                        onChange={(e) => setTextInput(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Button className="absolute bottom-4 right-4 bg-primary text-white" onClick={handleSend} disabled={isLoading}>
                                        {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
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

            <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
                <DialogContent 
                    className="sm:max-w-2xl"
                    onInteractOutside={(e) => {
                        e.preventDefault();
                    }}
                >
                    <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">Kết quả phân tích từ AI</DialogTitle>
                        <DialogDescription>
                            Đây là dữ liệu thô mà AI đã trích xuất được. Kiểm tra và nhấn "Tiếp tục" để điền vào hồ sơ của bạn.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4 max-h-[60vh] overflow-y-auto rounded-lg bg-secondary p-4">
                        <pre className="text-sm">
                            <code>
                                {JSON.stringify(analysisResult, null, 2)}
                            </code>
                        </pre>
                    </div>
                    <div className="flex justify-end gap-2">
                         <Button variant="outline" onClick={() => setIsResultDialogOpen(false)}>Đóng</Button>
                         <Button onClick={handleProceed} className="bg-primary text-white">Tiếp tục</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
