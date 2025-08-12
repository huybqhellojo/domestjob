'use client';

import Link from 'next/link';
import { Home, Briefcase, Sparkles, User, Menu } from 'lucide-react';
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


const mainNavLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/roadmap', label: 'Lộ trình' },
  { href: '/learn', label: 'E-Learning' },
  { href: '/handbook', label: 'Cẩm nang' },
  { href: '/about', label: 'Giới thiệu' },
];

const employerLinks = [
  { href: '/jobs', label: 'Nhà tuyển dụng' },
  { href: '/dashboard', label: 'Dữ liệu' },
  { href: '/post-job', label: 'Đăng việc làm' },
  { href: '/franchise', label: 'Nhượng quyền' },
];

export function MobileFooter() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const footerLinks = [
    { href: '/', icon: Home, label: 'Trang chủ' },
    { href: '/jobs', icon: Briefcase, label: 'Việc làm' },
    { href: '/ai-profile', icon: Sparkles, label: 'Tạo hồ sơ AI' },
    { href: '/candidate-profile', icon: User, label: 'Hồ sơ' },
  ];

  const MobileNavLink = ({ href, label, className, icon: Icon }: { href: string; label: string, className?: string, icon?: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary py-2 block font-medium flex items-center gap-2',
        pathname === href ? 'text-primary font-bold' : 'text-foreground/80',
        className
      )}
      onClick={() => setIsOpen(false)}
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
      </div>
    </footer>
  );
}
