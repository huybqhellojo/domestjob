
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Briefcase, Heart, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Job = {
    id: string;
    companyId: string;
    companyName: string;
    companyLogo: string;
    title: string;
    image: string;
    dataAiHint: string;
    location: string;
    salary: string;
    tags: string[];
    isJapanJob?: boolean;
};

type JobCardProps = {
    job: Job;
};

const ZaloIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 12.1C22.5 6.4 17.9 1.7 12.2 1.7C6.4 1.7 1.7 6.4 1.7 12.1C1.7 17.2 5.5 21.5 10.4 22.3V14.9H7.9V12.1H10.4V9.9C10.4 7.4 11.9 6 14.2 6C15.3 6 16.4 6.2 16.4 6.2V8.6H15.1C13.8 8.6 13.5 9.4 13.5 10.2V12.1H16.2L15.8 14.9H13.5V22.4C18.7 21.6 22.5 17.3 22.5 12.1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export function JobCard({ job }: JobCardProps) {
    const cardContent = (
        <>
            <CardHeader className="p-0 relative">
                <Link href={`/employers/${job.companyId}`} className="block">
                    <Image
                        src={job.image}
                        alt={job.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={job.dataAiHint}
                    />
                </Link>
                {!job.isJapanJob && <Badge className="absolute top-3 right-3 bg-red-500 text-white">Nổi bật</Badge>}
                 {job.isJapanJob && <Badge className="absolute top-3 left-3 bg-black/60 text-white">{job.id.toUpperCase()}</Badge>}
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                 <div className="flex items-start gap-3 mb-3">
                     {!job.isJapanJob &&
                        <Avatar className="h-10 w-10 border">
                            <AvatarImage src={job.companyLogo} alt={job.companyName} data-ai-hint={`${job.companyName} logo`}/>
                            <AvatarFallback>{job.companyName.charAt(0)}</AvatarFallback>
                        </Avatar>
                     }
                    <div>
                        <Link href={`/employers/${job.companyId}`} className="hover:underline">
                            <h4 className="font-bold text-sm text-muted-foreground">{job.isJapanJob ? job.location : job.companyName}</h4>
                        </Link>
                        <CardTitle className="font-headline text-lg leading-tight group-hover:text-primary transition-colors">
                            <Link href={`/employers/${job.companyId}`}>{job.title}</Link>
                        </CardTitle>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                    <p className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-500" /> 
                        <span className="font-semibold text-foreground">{job.salary}</span>
                    </p>
                    {!job.isJapanJob && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-500" /> {job.location}</p> }
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto bg-secondary/50">
                 <div className="flex justify-between items-center w-full gap-2">
                    {job.isJapanJob ? (
                         <>
                            <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600 flex-1">
                                <Link href="#"><ZaloIcon/></Link>
                            </Button>
                             <Button asChild size="sm" className="bg-green-500 hover:bg-green-600 flex-1">
                                <Link href="#"><Phone/></Link>
                            </Button>
                            <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary flex-1">
                                <Link href={`/employers/${job.companyId}`}>Ứng tuyển</Link>
                            </Button>
                         </>
                    ) : (
                        <>
                            <Button asChild size="sm">
                                <Link href={`/employers/${job.companyId}`}>
                                    Ứng tuyển <Briefcase className="ml-2"/>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
                                <Heart />
                            </Button>
                        </>
                    )}
                 </div>
            </CardFooter>
        </>
    );

    return (
        <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
           {cardContent}
        </Card>
    );
}
