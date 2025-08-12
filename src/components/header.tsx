
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
  { href: '/ai-profile', label: 'Tạo hồ sơ AI', icon: Sparkles },
  { href: '/roadmap', label: 'Lộ trình' },
  { href: '/learn', label: 'E-Learning' },
  { href: '/handbook', label: 'Cẩm nang'},
  { href: '/about', label: 'Giới thiệu' },
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
  const pathname = usePathname();

  const NavLink = ({ href, label, className, icon: Icon, onClick }: { href: string; label: string, className?: string, icon?: React.ElementType, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary py-2 block font-medium flex items-center gap-2',
        pathname === href ? 'text-primary font-bold' : 'text-foreground/80',
        className
      )}
       onClick={(e) => {
        if(onClick) onClick(e);
      }}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </Link>
  );
  
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === '/') {
        e.preventDefault();
        window.location.reload();
      }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Bbester Logo" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {mainNavLinks.map((link) => (
             <NavLink 
                key={link.href} 
                {...link}
                onClick={link.href === '/' ? handleHomeClick : undefined} 
             />
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
            {/* The Sheet component is now in MobileFooter, this button can be removed or repurposed if needed */}
        </div>
      </div>
    </header>
  );
}
