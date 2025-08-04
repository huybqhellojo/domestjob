'use client';

import Link from 'next/link';
import { Briefcase, Menu, X, Building, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const mainNavLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/roadmap', label: 'Lộ trình' },
  { href: '/learn', label: 'E-Learning' },
];

const candidateLinks = [
  { href: '/register', label: 'Đăng ký hồ sơ' },
  { href: '/candidate-profile', label: 'Hồ sơ của tôi' },
];

const employerLinks = [
  { href: '/employers', label: 'Danh sách công ty' },
  { href: '/dashboard', label: 'Dữ liệu' },
  { href: '/post-job', label: 'Đăng việc làm' },
  { href: '/franchise', label: 'Nhượng quyền' },
];


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary py-2 block',
        pathname === href ? 'text-primary font-bold' : 'text-foreground/80',
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Domest Job Logo" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {mainNavLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
           <NavLink href="/employers" label="Nhà tuyển dụng" />
           <NavLink href="/dashboard" label="Dữ liệu" />
        </nav>
        <div className="hidden md:flex items-center gap-2">
            <Button asChild>
              <Link href="/register">Ứng viên</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/post-job">Đăng tin</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
               <SheetClose asChild>
                 <Link
                  href="/"
                  className="flex items-center gap-2 mb-4"
                >
                  <Image src="/logo.svg" alt="Domest Job Logo" width={120} height={40} />
                </Link>
               </SheetClose>
              <div className="flex flex-col gap-2 mt-6">
                 {mainNavLinks.map((link) => (
                  <NavLink key={link.href} {...link} className="text-lg border-b"/>
                ))}
                
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Dành cho ứng viên</AccordionTrigger>
                    <AccordionContent className="pl-4">
                       {candidateLinks.map((link) => (
                        <NavLink key={link.href} {...link} className="border-b" />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Dành cho nhà tuyển dụng</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {employerLinks.map((link) => (
                        <NavLink key={link.href} {...link} className="border-b" />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
