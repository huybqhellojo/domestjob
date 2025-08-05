
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, Briefcase, Heart } from 'lucide-react';
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
};

type JobCardProps = {
    job: Job;
};

export function JobCard({ job }: JobCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
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
                <Badge className="absolute top-3 right-3 bg-red-500 text-white">Nổi bật</Badge>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                 <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10 border">
                        <AvatarImage src={job.companyLogo} alt={job.companyName} data-ai-hint={`${job.companyName} logo`}/>
                        <AvatarFallback>{job.companyName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <Link href={`/employers/${job.companyId}`} className="hover:underline">
                            <h4 className="font-bold text-sm text-muted-foreground">{job.companyName}</h4>
                        </Link>
                        <CardTitle className="font-headline text-lg leading-tight group-hover:text-primary transition-colors">
                            <Link href={`/employers/${job.companyId}`}>{job.title}</Link>
                        </CardTitle>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                    <p className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-green-500" /> Lương: <span className="font-semibold text-foreground">{job.salary}</span></p>
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-500" /> {job.location}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto bg-secondary/50">
                 <div className="flex justify-between items-center w-full">
                    <Button asChild size="sm">
                        <Link href={`/employers/${job.companyId}`}>
                            Ứng tuyển <Briefcase className="ml-2"/>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500">
                        <Heart />
                    </Button>
                 </div>
            </CardFooter>
        </Card>
    );
}
