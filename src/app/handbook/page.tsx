
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LifeBuoy, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/handbook-data';
import { Badge } from '@/components/ui/badge';

export default function HandbookPage() {

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <LifeBuoy className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Cẩm nang Bbester
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
          <Link href={`/handbook/${featuredArticle.slug}`} className="group">
             <Card className="grid md:grid-cols-2 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
                  <Badge className="mb-4 w-fit">{featuredArticle.category}</Badge>
                  <CardTitle className="font-headline text-3xl xl:text-4xl mb-4 group-hover:text-primary transition-colors">{featuredArticle.title}</CardTitle>
                  <p className="text-muted-foreground text-base mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-3 font-semibold text-primary">
                      <span>Đọc bài viết</span>
                  </div>
                </div>
              </Card>
          </Link>
        </div>

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherArticles.map((article) => (
             <Link href={`/handbook/${article.slug}`} key={article.slug} className="group">
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
                    <Badge className="mb-4 w-fit">{article.category}</Badge>
                    <CardTitle className="font-headline text-xl mb-3 flex-grow group-hover:text-primary transition-colors">{article.title}</CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                  </CardContent>
                </Card>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
