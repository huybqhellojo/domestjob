'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, ListFilter, Plus } from 'lucide-react';
import { JobCard } from '@/components/job-card';
import { jobData, Job } from '@/lib/mock-data';

const jobTypes = ['Thực tập sinh', 'Kỹ năng đặc định', 'Kỹ sư, Trí thức', 'Bán thời gian'];

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('Thị trường');
  const [activeJobType, setActiveJobType] = useState('Thực tập sinh');

  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto px-2 md:px-4 py-4">
        {/* Job Type Navigation */}
        <div className="bg-background md:rounded-lg shadow-sm mb-4">
          <div className="p-2 whitespace-nowrap overflow-x-auto">
            {jobTypes.map((type) => (
              <Button
                key={type}
                variant={activeJobType === type ? 'default' : 'ghost'}
                className={`mr-2 rounded-full ${activeJobType === type ? 'bg-primary text-white' : ''}`}
                onClick={() => setActiveJobType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-background rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="flex border-b">
            <button 
              className={`flex-1 py-3 text-center font-semibold transition-colors ${activeTab === 'Thị trường' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('Thị trường')}
            >
              Thị trường
            </button>
            <button 
              className={`flex-1 py-3 text-center font-semibold transition-colors ${activeTab === 'Của bạn' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('Của bạn')}
            >
              Của bạn
            </button>
          </div>

          {/* Filters and Header */}
          <div className="p-4 flex justify-between items-center text-sm">
            <Button variant="outline" className="text-primary border-primary rounded-full px-3 py-1 h-auto">
              <Plus className="w-4 h-4 mr-1" />
              Đăng
            </Button>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-muted-foreground">3318 việc làm</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    Tuyển tại <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Nhật Bản</DropdownMenuItem>
                  <DropdownMenuItem>Việt Nam</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    Sắp xếp <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                 <DropdownMenuContent>
                  <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                  <DropdownMenuItem>Lương cao nhất</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Job Listings */}
          <div className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
