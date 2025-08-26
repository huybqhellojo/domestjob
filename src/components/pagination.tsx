
'use client';

import Link from 'next/link';
import { Pager } from '@/lib/pager';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  pager: Pager;
  buildLink: (page: number) => string;
}

export function Pagination({ pager, buildLink }: PaginationProps) {
  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button asChild variant="outline" size="sm" disabled={pager.currentPage === 1}>
        <Link href={buildLink(pager.currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Link>
      </Button>
      {pager.pages.map(page => (
        <Button
          key={page}
          asChild
          variant={pager.currentPage === page ? 'default' : 'outline'}
          size="sm"
        >
          <Link href={buildLink(page)}>{page}</Link>
        </Button>
      ))}
       <Button asChild variant="outline" size="sm" disabled={pager.currentPage === pager.totalPages}>
        <Link href={buildLink(pager.currentPage + 1)}>
          <span className="sr-only">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
