
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, FileUp, Sparkles, Send, Mic, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createProfile, CandidateProfile } from "@/ai/flows/create-profile-flow";
import { extractAvatar } from "@/ai/flows/extract-avatar-flow";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type ProfileWithAvatar = CandidateProfile & { avatarUrl?: string };


export default function AiProfilePage() {
    const router = useRouter();
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Đang phân tích...");
    const [fileInputKey, setFileInputKey] = useState(Date.now()); // Used to reset file input
    const [analysisResult, setAnalysisResult] = useState<ProfileWithAvatar | null>(null);
    const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);
    const [textInput, setTextInput] = useState('');
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsLoading(true);

        try {
            setLoadingMessage("Đang đọc và phân tích tệp...");
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            const dataUriPromise = new Promise<string>((resolve, reject) => {
                 fileReader.onload = (e) => resolve(e.target?.result as string);
                 fileReader.onerror = (e) => reject(new Error("File reading failed"));
            });

            const dataUri = await dataUriPromise;
            
            // Start both AI profile creation and avatar extraction in parallel
            setLoadingMessage("AI đang trích xuất thông tin...");
            const profilePromise = createProfile({ document: dataUri });

            let avatarPromise: Promise<string | null> = Promise.resolve(null);
            // Only attempt to extract avatar if the file is an image
            if (file.type.startsWith('image/')) {
                 avatarPromise = extractAvatar(dataUri);
            }
            
            // Wait for both promises to complete
            const [profileData, avatarUrl] = await Promise.all([profilePromise, avatarPromise]);

            const finalProfile: ProfileWithAvatar = { ...profileData, avatarUrl: avatarUrl || undefined };

            setAnalysisResult(finalProfile);
            setIsResultDialogOpen(true);
             toast({
                title: "Phân tích thành công!",
                description: "AI đã phân tích và trích xuất thông tin từ tệp của bạn.",
            });

        } catch (error: any) {
            console.error("Profile Generation Error:", error);
            toast({
                variant: "destructive",
                title: "Đã có lỗi xảy ra",
                description: error.message || "Không thể xử lý tệp của bạn. Vui lòng thử lại.",
            });
        } finally {
            setIsLoading(false);
            setFileInputKey(Date.now());
            setLoadingMessage("Đang phân tích...");
        }
    };

    const handleTextSubmit = async () => {
        if (!textInput.trim()) {
            toast({
                variant: "destructive",
                title: "Vui lòng nhập thông tin",
                description: "Bạn cần nhập mô tả bản thân hoặc dán CV vào ô văn bản.",
            });
            return;
        }

        setIsLoading(true);
        setLoadingMessage("AI đang phân tích văn bản...");
        try {
            const profileData = await createProfile({ text: textInput });
            setAnalysisResult(profileData); // No avatar from text input
            setIsResultDialogOpen(true);
             toast({
                title: "Phân tích thành công!",
                description: "AI đã phân tích và trích xuất thông tin từ văn bản của bạn.",
            });

        } catch (error) {
            console.error("AI Profile Generation Error (Text):", error);
            toast({
                variant: "destructive",
                title: "Đã có lỗi xảy ra",
                description: "Không thể phân tích văn bản. Vui lòng thử lại.",
            });
        } finally {
            setIsLoading(false);
            setLoadingMessage("Đang phân tích...");
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
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="h-16 w-16 text-primary mb-4 animate-spin" />
                                            <p className="font-bold text-xl mb-2">{loadingMessage}</p>
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
                                                accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
                                    <Button className="absolute bottom-4 right-4 bg-primary text-white" onClick={handleTextSubmit} disabled={isLoading}>
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
                     {analysisResult?.avatarUrl && (
                        <div className="my-4 text-center">
                            <p className="font-semibold mb-2">Ảnh đại diện đề xuất:</p>
                             <Image 
                                src={analysisResult.avatarUrl} 
                                alt="Ảnh đại diện được tạo bởi AI" 
                                width={128} 
                                height={128} 
                                className="rounded-full mx-auto border-4 border-primary shadow-lg"
                             />
                        </div>
                     )}
                    <div className="my-4 max-h-[50vh] overflow-y-auto rounded-lg bg-secondary p-4">
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

    