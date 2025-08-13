

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Scroll, Timer, UserCircle, Briefcase, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import { articles, type HandbookArticle } from '@/lib/handbook-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { jobData } from '@/lib/mock-data';
import { JobCard } from '@/components/job-card';
import { Button } from '@/components/ui/button';


export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const [activeId, setActiveId] = useState('');
  
  const resolvedParams = use(params);
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  useEffect(() => {
    if (!article) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    article.content.forEach((section) => {
      const el = document.getElementById(section.slug);
      if (el) observer.observe(el);
    });

    return () => {
       article.content.forEach((section) => {
        const el = document.getElementById(section.slug);
        if (el) observer.unobserve(el);
      });
    };
  }, [article]);

  if (!article) {
    notFound();
  }
  
  const otherArticles = articles.filter(a => a.slug !== resolvedParams.slug).slice(0, 3);
  const hotJobs = jobData.slice(0, 3); // Demo with first 3 jobs

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Article Outline */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center text-accent">
                <Scroll className="mr-2" />
                Nội dung bài viết
              </h3>
              <ul className="space-y-3">
                {article.content.map((section) => (
                  <li key={section.slug}>
                    <a
                      href={`#${section.slug}`}
                      className={cn(
                        "block text-sm transition-colors hover:text-primary",
                        activeId === section.slug
                          ? 'text-primary font-bold border-l-2 border-primary pl-3'
                          : 'text-muted-foreground pl-3.5'
                      )}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
               <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="text-base font-bold">Việc làm nổi bật</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {hotJobs.slice(0,2).map(job => (
                      <Link href="#" key={job.id} className="group block">
                         <p className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">{job.title}</p>
                         <p className="text-xs text-muted-foreground">{job.recruiter.company}</p>
                      </Link>
                    ))}
                     <Button asChild variant="outline" size="sm" className="w-full">
                       <Link href="/jobs">Xem thêm việc làm <ChevronRight /></Link>
                    </Button>
                  </CardContent>
               </Card>
            </div>
          </aside>

          {/* Main Article Content */}
          <main className="lg:col-span-9 xl:col-span-6">
            <article>
              <header className="mb-8">
                <Badge className="mb-4 bg-accent-orange text-white">{article.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-accent">{article.title}</h1>
                <div className="flex items-center text-sm text-muted-foreground gap-6">
                  <div className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-5 w-5" />
                    <span>{article.readTime} đọc</span>
                  </div>
                </div>
              </header>

              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                 <Image src={article.image} alt={article.title} fill className="object-cover" data-ai-hint={article.dataAiHint} />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="lead">{article.excerpt}</p>
                {article.content.map((section, index) => (
                  <div key={index} id={section.slug} className="pt-8 scroll-mt-24">
                    <h2>{section.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                ))}
              </div>
            </article>

            {/* Hot Jobs Section */}
            <section className="mt-16 pt-8 border-t">
                 <h2 className="text-3xl font-headline font-bold mb-6 flex items-center text-accent">
                    <Briefcase className="mr-3 text-primary" />
                    Việc làm nổi bật liên quan
                </h2>
                <div className="space-y-4">
                    {hotJobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </section>
          </main>
          
          {/* Related Articles */}
          <aside className="hidden xl:block xl:col-span-3">
             <div className="sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-accent">Bài viết liên quan</h3>
              <div className="space-y-6">
                {otherArticles.map(other => (
                  <Link href={`/handbook/${other.slug}`} key={other.slug} className="group block">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-video w-full">
                          <Image src={other.image} alt={other.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={other.dataAiHint} />
                        </div>
                        <div className="p-4">
                           <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">{other.title}</p>
                           <p className="text-xs text-muted-foreground mt-1">{other.category}</p>
                        </div>
                      </Card>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
