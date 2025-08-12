'use client';

import Link from 'next/link';
import { Home, Sparkles, User, LogOut, PlusCircle, Shield, FileText, MessageSquareWarning, LayoutGrid, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenuSeparator } from './ui/dropdown-menu';


const mainNavLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/roadmap', label: 'Lộ trình' },
  { href: '/learn', label: 'E-Learning' },
  { href: '/handbook', label: 'Cẩm nang' },
  { href: '/about', label: 'Giới thiệu' },
];

const employerLinks = [
  { href: '/employers', label: 'Nhà tuyển dụng' },
  { href: '/dashboard', label: 'Dữ liệu' },
  { href: '/post-job', label: 'Đăng việc làm' },
  { href: '/franchise', label: 'Nhượng quyền' },
];

const quickAccessLinks = [
    { href: '/ai-profile', label: 'Tạo hồ sơ AI', icon: Sparkles },
    { href: '/post-job', label: 'Đăng tuyển dụng', icon: PlusCircle },
    { href: '/dashboard', label: 'Dữ liệu & Báo cáo', icon: FileText },
    { href: '/franchise', label: 'Nhượng quyền', icon: Shield },
    { href: '/consultant-profile', label: 'Tư vấn viên', icon: User },
    { href: '#', label: 'Góp ý', icon: MessageSquareWarning },
];

export function MobileFooter() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const footerLinks = [
    { href: '/', icon: Home, label: 'Trang chủ' },
    { href: '/ai-profile', icon: Sparkles, label: 'Tạo hồ sơ AI' },
    { href: '/candidate-profile', icon: User, label: 'Hồ sơ' },
  ];
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === '/') {
        e.preventDefault();
        window.location.reload();
      }
  }

  const MobileNavLink = ({ href, label, className, icon: Icon, onClick }: { href: string; label: string, className?: string, icon?: React.ElementType, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary py-2 block font-medium flex items-center gap-2',
        pathname === href ? 'text-primary font-bold' : 'text-foreground/80',
        className
      )}
       onClick={(e) => {
        if(onClick) onClick(e);
        setIsOpen(false)
      }}
    >
      {Icon && <Icon className="h-5 w-5 text-primary" />}
      {label}
    </Link>
  );

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="flex justify-around items-center h-16">
        {footerLinks.map(({ href, icon: Icon, label }) => {
           const isActive = pathname === href;
           return (
            <Link href={href} key={href} className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors w-1/4 pt-1">
              <Icon className={cn("h-6 w-6 mb-1", isActive ? 'text-primary' : '')} />
              <span className={cn( "text-center leading-tight", isActive ? 'text-primary font-bold' : '')}>{label}</span>
            </Link>
           )
        })}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
             <button className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors w-1/4 pt-1">
               <LayoutGrid className="h-6 w-6 mb-1" />
               <span className="text-center leading-tight">Menu</span>
             </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm flex flex-col">
            <SheetHeader>
               <SheetTitle className="sr-only">Menu</SheetTitle>
               <SheetClose asChild>
                 <Link
                  href="/"
                  className="flex items-center gap-2 mb-4"
                >
                  <Image src="/logo.svg" alt="Bbester Logo" width={120} height={40} />
                </Link>
               </SheetClose>
            </SheetHeader>
            <div className="mt-6 flex flex-col h-full overflow-y-auto pr-2">
               <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="user avatar" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1">
                    <p className="text-base font-medium leading-none">Nguyễn Quốc Việt</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      Cán bộ tuyển dụng
                    </p>
                  </div>
               </div>
               <Button asChild variant="outline" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/candidate-profile">Hồ sơ của tôi</Link>
               </Button>
              <div className="grid grid-cols-3 gap-2 p-2 mt-4">
                  {quickAccessLinks.map((link) => (
                     <Link 
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center justify-start p-2 h-20 cursor-pointer rounded-md hover:bg-accent">
                       <div className="h-8 flex items-center justify-center text-primary"><link.icon/></div>
                       <span className="text-xs text-center leading-tight">{link.label}</span>
                     </Link>
                  ))}
              </div>
               <Accordion type="multiple" className="w-full mt-4">
                  <AccordionItem value="main-nav">
                     <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Điều hướng</AccordionTrigger>
                     <AccordionContent className="pl-4">
                      {mainNavLinks.map((link) => (
                          <MobileNavLink 
                              key={link.href} 
                              {...link}
                              onClick={link.href === '/' ? handleHomeClick : undefined} 
                          />
                      ))}
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="employer-nav">
                      <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Dành cho nhà tuyển dụng</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {employerLinks.map((link) => (
                          <MobileNavLink key={link.href} {...link} className="border-b" />
                        ))}
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>

              <div className="mt-auto pt-6">
                  <DropdownMenuSeparator />
                  <div className="flex items-center justify-between mt-4">
                      <Link href="#" className="flex items-center gap-2 text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Đăng xuất</span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="outline"><X className="mr-2 h-4 w-4"/> Đóng</Button>
                      </SheetClose>
                  </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </footer>
  );
}
