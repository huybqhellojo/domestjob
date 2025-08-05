'use client';

import Link from 'next/link';
import { Briefcase, Menu, X, Building, PlusCircle, User, LogOut, Shield, FileText, Gift, MessageSquareWarning, Settings, LifeBuoy, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
          <Image src="/logo.svg" alt="Bbester Logo" width={120} height={40} />
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost" size="icon" className="rounded-full">
                  <Grid className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex items-center gap-3">
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
                </DropdownMenuLabel>
                 <DropdownMenuItem asChild>
                    <Link href="/candidate-profile" className="cursor-pointer">
                      <Button variant="outline" className="w-full justify-center">Xem hồ sơ của bạn</Button>
                    </Link>
                 </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <DropdownMenuItem asChild>
                       <Link href="/post-job" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <PlusCircle/>
                         <span className="text-xs text-center mt-1">Dành cho nhà tuyển dụng</span>
                       </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="#" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <FileText/>
                         <span className="text-xs text-center mt-1">Quy chế & Điều khoản</span>
                       </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="#" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <Shield/>
                         <span className="text-xs text-center mt-1">Chính sách bảo mật</span>
                       </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="#" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <Gift/>
                         <span className="text-xs text-center mt-1">Mã giới thiệu</span>
                       </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="#" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <MessageSquareWarning/>
                         <span className="text-xs text-center mt-1">Góp ý cải tiến</span>
                       </Link>
                    </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="#" className="flex flex-col items-center justify-center p-2 h-auto cursor-pointer">
                         <LifeBuoy/>
                         <span className="text-xs text-center mt-1">Về Bbester</span>
                       </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="#" className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Đăng xuất</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
