
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
];

const employerLinks = [
  { href: '/employers', label: 'Nhà tuyển dụng' },
  { href: '/dashboard', label: 'Dữ liệu' },
  { href: '/post-job', label: 'Đăng việc làm' },
  { href: '/franchise', label: 'Nhượng quyền' },
];

export function MobileFooter() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const footerLinks = [
    { href: '/', icon: Home, label: 'Trang chủ' },
    { href: '/employers', icon: Briefcase, label: 'Việc làm' },
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
            <Link href={href} key={href} className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors">
              <Icon className={cn("h-6 w-6 mb-1", isActive ? 'text-primary' : '')} />
              <span className={cn(isActive ? 'text-primary font-bold' : '')}>{label}</span>
            </Link>
           )
        })}
         <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Menu className="h-6 w-6 mb-1" />
                    <span>Menu</span>
                </button>
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
                  <MobileNavLink key={link.href} {...link} className="text-lg border-b"/>
                ))}
                 <MobileNavLink href="/ai-profile" label="Tạo hồ sơ AI" icon={Sparkles} className="text-lg border-b"/>
                 <MobileNavLink href="/candidate-profile" label="Hồ sơ của tôi" className="text-lg border-b"/>
                 <MobileNavLink href="/employers" label="Việc làm" className="text-lg border-b"/>
                
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg text-foreground/80 hover:no-underline hover:text-primary font-medium py-2">Dành cho nhà tuyển dụng</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {employerLinks.map((link) => (
                        <MobileNavLink key={link.href} {...link} className="border-b" />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
      </div>
    </footer>
  );
}
