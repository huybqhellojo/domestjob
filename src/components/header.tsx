'use client';

import Link from 'next/link';
import { Briefcase, Menu, X, Building, PlusCircle, User, LogOut, Shield, FileText, Gift, MessageSquareWarning, Settings, LifeBuoy, Grid, Sparkles, BookOpen, Compass, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetTrigger } from '@/components/ui/sheet';
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
  { href: '/', label: 'Trang chủ'},
  { href: '/jobs', label: 'Việc làm' },
  { href: '/ai-profile', label: 'Tạo hồ sơ AI', icon: Sparkles },
  { href: '/roadmap', label: 'Lộ trình' },
  { href: '/learn', label: 'E-Learning' },
  { href: '/handbook', label: 'Cẩm nang', icon: Compass },
];

const employerLinks = [
  { href: '/post-job', label: 'Đăng việc làm' },
  { href: '/dashboard', label: 'Dữ liệu' },
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


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className, icon: Icon }: { href: string; label: string, className?: string, icon?: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary py-2 block font-medium flex items-center gap-2',
        pathname === href ? 'text-primary font-bold' : 'text-foreground/80',
        className
      )}
      onClick={() => setIsOpen(false)}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Bbester Logo" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {mainNavLinks.map((link) => (
             <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline">
              <Link href="/candidate-profile">Hồ sơ của tôi</Link>
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
                      <Button variant="outline" className="w-full justify-center">Hồ sơ của tôi</Button>
                    </Link>
                 </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <div className="grid grid-cols-3 gap-2 p-2">
                     {quickAccessLinks.map((link) => (
                         <DropdownMenuItem asChild key={link.href}>
                           <Link href={link.href} className="flex flex-col items-center justify-start p-2 h-20 cursor-pointer rounded-md hover:bg-accent">
                             <div className="h-8 flex items-center justify-center"><link.icon/></div>
                             <span className="text-xs text-center leading-tight">{link.label}</span>
                           </Link>
                        </DropdownMenuItem>
                     ))}
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
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm">
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
                  <div className="mt-6 flex flex-col h-full">
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
                     <Button asChild variant="outline" className="mt-4 w-full">
                        <Link href="/candidate-profile" onClick={() => setIsOpen(false)}>Hồ sơ của tôi</Link>
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
                                <NavLink key={link.href} {...link} className="border-b" />
                            ))}
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="employer-nav">
                            <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Dành cho nhà tuyển dụng</AccordionTrigger>
                            <AccordionContent className="pl-4">
                              {employerLinks.map((link) => (
                                <NavLink key={link.href} {...link} className="border-b" />
                              ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-auto pb-6">
                        <DropdownMenuSeparator />
                        <Link href="#" className="flex items-center gap-2 mt-4 text-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Đăng xuất</span>
                        </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
        </div>
      </div>
    </header>
  );
}
