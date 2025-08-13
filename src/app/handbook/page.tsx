

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LifeBuoy, Search, ArrowRight, ChevronRight, BookText, Building2, Smile, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { articles, HandbookArticle } from '@/lib/handbook-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cẩm nang HelloJob - Thông tin việc làm & cuộc sống tại Nhật',
  description: 'Tất cả thông tin bạn cần về Kỹ năng đặc định (Tokutei Ginou), kinh nghiệm phỏng vấn, thủ tục visa, và cuộc sống tại Nhật Bản được cập nhật liên tục.',
};


const categoryIcons: { [key: string]: React.ElementType } = {
  'Kỹ năng đặc định': Briefcase,
  'Cuộc sống ở Nhật': Smile,
  'Kinh nghiệm phỏng vấn': BookText,
  'Thủ tục & Visa': Building2,
};

const HandbookCategoryCard = ({ category, description }: { category: string, description: string }) => {
  const Icon = categoryIcons[category] || Briefcase;
  return (
    <Card className="group relative flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-t-4 border-primary">
      <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <h3 className="font-headline text-xl font-bold mb-2 text-foreground">{category}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
      <Button variant="ghost" size="sm" className="text-primary font-semibold">
        Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </Card>
  )
};

const ArticleCardSmall = ({ article }: { article: HandbookArticle }) => (
  <Link href={`/handbook/${article.slug}`} key={article.slug} className="group block">
    <Card className="flex h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-1/3 flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          data-ai-hint={article.dataAiHint}
        />
      </div>
      <div className="p-4 flex flex-col justify-center w-2/3">
        <Badge className="mb-2 w-fit bg-accent-green/20 text-accent-green border-accent-green/30">{article.category}</Badge>
        <h4 className="font-headline text-base font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h4>
      </div>
    </Card>
  </Link>
);


export default function HandbookPage() {

  const featuredArticle = articles[0];
  const topicArticles = articles.slice(1, 4);
  const latestArticles = articles.slice(4);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <LifeBuoy className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent">
            Cẩm nang HelloJob
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Tất cả thông tin bạn cần biết về thị trường lao động, kỹ năng và cuộc sống tại Nhật Bản.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="relative">
             <Input placeholder="Tìm kiếm bài viết (VD: Tokutei, chi phí...)" className="pl-12 h-12 text-lg rounded-full shadow-lg"/>
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Bài viết nổi bật</h2>
          <Link href={`/handbook/${featuredArticle.slug}`} className="group">
             <Card className="grid md:grid-cols-2 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
                <div className="relative min-h-[300px] md:min-h-[450px]">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={featuredArticle.dataAiHint}
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-accent-orange text-white">{featuredArticle.category}</Badge>
                  <CardTitle className="font-headline text-3xl xl:text-4xl mb-4 group-hover:text-primary transition-colors">{featuredArticle.title}</CardTitle>
                  <p className="text-muted-foreground text-base mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-3 font-bold text-primary">
                      <span>Đọc bài viết</span>
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Chủ đề phổ biến</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HandbookCategoryCard category="Kỹ năng đặc định" description="Tất tần tật về visa Tokutei, điều kiện, ngành nghề và cơ hội." />
                <HandbookCategoryCard category="Cuộc sống ở Nhật" description="Khám phá văn hóa, chi phí sinh hoạt và các mẹo hữu ích khi sống tại Nhật." />
                <HandbookCategoryCard category="Kinh nghiệm phỏng vấn" description="Bí quyết chinh phục nhà tuyển dụng Nhật Bản, từ Jikoshoukai đến tác phong." />
                <HandbookCategoryCard category="Thủ tục & Visa" description="Hướng dẫn chi tiết các loại giấy tờ, quy trình cần thiết để sang Nhật làm việc." />
            </div>
        </div>

        {/* Latest Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
                <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Mới nhất</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {topicArticles.map((article) => (
                    <Link href={`/handbook/${article.slug}`} key={article.slug} className="group">
                        <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl">
                        <CardHeader className="p-0">
                            <div className="relative aspect-video">
                                <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                                data-ai-hint={article.dataAiHint}
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <Badge className={cn("mb-4 w-fit", 
                                article.category === 'Kỹ năng đặc định' ? 'bg-accent-blue/20 text-accent-blue border-accent-blue/30' : 
                                'bg-accent-green/20 text-accent-green border-accent-green/30'
                            )}>{article.category}</Badge>
                            <CardTitle className="font-headline text-xl mb-3 flex-grow group-hover:text-primary transition-colors">{article.title}</CardTitle>
                            <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                        </CardContent>
                        </Card>
                    </Link>
                ))}
                </div>
            </div>
            <div className="lg:col-span-4">
                 <h2 className="text-3xl font-headline font-bold mb-6 text-foreground">Dành cho bạn</h2>
                 <div className="space-y-4">
                    {latestArticles.map((article) => (
                        <ArticleCardSmall key={article.slug} article={article} />
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
