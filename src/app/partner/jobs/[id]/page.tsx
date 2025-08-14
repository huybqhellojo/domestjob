
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Cake, Dna, GraduationCap, MapPin, Phone, School, User, Award, Languages, Star, FileDown, Video, Image as ImageIcon, PlusCircle, Trash2, RefreshCw, X, Camera, MessageSquare, Facebook, Contact, UserCog, Trophy, PlayCircle, LogOut, Lock, ArrowLeft } from 'lucide-react';
import { PaymentDialog } from '@/components/payment-dialog';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const job = { 
    id: 1, 
    title: "Kỹ sư Vận hành Dây chuyền", 
    status: "Đang tuyển", 
    views: 1204, 
    applicants: 25, 
    location: "Khu công nghệ cao, Quận 9, TP. Hồ Chí Minh",
    industry: "Điện tử"
};

const mockCandidates = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Ứng viên ${i + 1}`,
    avatarUrl: `https://placehold.co/100x100.png?text=${i+1}`,
    dataAiHint: `professional portrait`,
    matchScore: 95 - i * 2,
    headline: 'Có 2 năm kinh nghiệm vận hành dây chuyền SMT tại Samsung.',
    skills: ['Vận hành máy', 'Kiểm tra chất lượng', 'Tiếng Nhật N4']
}));


const CandidateCard = ({ candidate, isLocked }: { candidate: typeof mockCandidates[0], isLocked: boolean }) => (
    <Card className={cn("shadow-lg transition-all", isLocked && "relative overflow-hidden")}>
        {isLocked && (
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-4">
                <Lock className="h-8 w-8 text-primary mb-4" />
                <p className="text-center font-bold text-lg">Mở khóa để xem</p>
                <p className="text-center text-muted-foreground text-sm">Nâng cấp tài khoản để xem toàn bộ ứng viên phù hợp.</p>
            </div>
        )}
        <CardContent className="p-4 flex gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={candidate.avatarUrl} alt={candidate.name} data-ai-hint={candidate.dataAiHint}/>
                <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg">{candidate.name}</h4>
                    <Badge variant="outline" className="border-green-500 text-green-600">
                        <Star className="h-3 w-3 mr-1 fill-green-500"/>
                        {candidate.matchScore}% Phù hợp
                    </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{candidate.headline}</p>
                <div className="flex flex-wrap gap-1">
                    {candidate.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function MatchingCandidatesPage({ params }: { params: { id: string } }) {
    const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);
    const [unlocked, setUnlocked] = useState(false);

    const handleUnlock = () => {
        setPaymentDialogOpen(true);
    };

    const handlePaymentSuccess = () => {
        setUnlocked(true);
        setPaymentDialogOpen(false);
    };
    
    const freeTierLimit = 5;

    return (
        <>
            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="mb-6">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/partner/dashboard"><ArrowLeft className="mr-2 h-4 w-4" />Quay lại Bảng điều khiển</Link>
                    </Button>
                </div>
                <Card className="mb-8 shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 pt-2">
                           <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4"/> {job.location}</span>
                           <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4"/> {job.industry}</span>
                        </CardDescription>
                    </CardHeader>
                </Card>

                <div className="flex justify-between items-center mb-6">
                     <h2 className="text-2xl font-bold font-headline">Ứng viên phù hợp ({mockCandidates.length})</h2>
                     {!unlocked && (
                         <Button onClick={handleUnlock}>
                            <Lock className="mr-2 h-4 w-4"/>
                            Mở khóa toàn bộ ứng viên
                         </Button>
                     )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {mockCandidates.map((candidate, index) => (
                        <CandidateCard 
                            key={candidate.id} 
                            candidate={candidate} 
                            isLocked={!unlocked && index >= freeTierLimit}
                        />
                    ))}
                </div>
            </div>
            <PaymentDialog 
                isOpen={isPaymentDialogOpen} 
                onClose={() => setPaymentDialogOpen(false)}
                onSuccess={handlePaymentSuccess}
            />
        </>
    );
}
