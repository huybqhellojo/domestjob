
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import { Search, ChevronsUpDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { industriesByJobType, type Industry } from '@/lib/industry-data';

const japanJobTypes = [
  'Thực tập sinh 3 năm',
  'Thực tập sinh 1 năm',
  'Thực tập sinh 3 Go',
  'Đặc định đầu Việt',
  'Đặc định đầu Nhật',
  'Đặc định đi mới',
  'Kỹ sư, tri thức đầu Việt',
  'Kỹ sư, tri thức đầu Nhật',
];

const japanLocations = {
  regions: [
    'Hokkaido',
    'Tohoku',
    'Kanto',
    'Chubu',
    'Kansai',
    'Chugoku',
    'Shikoku',
    'Kyushu',
  ],
  prefectures: [
    'Aichi', 'Akita', 'Aomori', 'Chiba', 'Ehime', 'Fukui', 'Fukuoka', 'Fukushima', 'Gifu', 'Gunma', 'Hiroshima', 'Hokkaido', 'Hyogo', 'Ibaraki', 'Ishikawa', 'Iwate', 'Kagawa', 'Kagoshima', 'Kanagawa', 'Kochi', 'Kumamoto', 'Kyoto', 'Mie', 'Miyagi', 'Miyazaki', 'Nagano', 'Nagasaki', 'Nara', 'Niigata', 'Oita', 'Okayama', 'Okinawa', 'Osaka', 'Saga', 'Saitama', 'Shiga', 'Shimane', 'Shizuoka', 'Tochigi', 'Tokushima', 'Tokyo', 'Tottori', 'Toyama', 'Wakayama', 'Yamagata', 'Yamaguchi', 'Yamanashi',
  ],
};

export const SearchBar = () => {
  const router = useRouter();
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [availableIndustries, setAvailableIndustries] = useState<Industry[]>([]);
  const [comboboxOpen, setComboboxOpen] = useState(false);

  const finalSearchTerm = searchQuery || selectedIndustry;

  useEffect(() => {
    let industries: Industry[] = [];
    if (!selectedJobType) {
      // Collect all industries from all types and remove duplicates
      const allIndustries = Object.values(industriesByJobType).flat();
      const uniqueIndustries = Array.from(
        new Map(allIndustries.map((item) => [item['slug'], item])).values()
      );
      industries = uniqueIndustries;
    } else {
      let jobTypeKey: keyof typeof industriesByJobType | 'Default' = 'Default';
      if (selectedJobType.includes('Thực tập sinh'))
        jobTypeKey = 'Thực tập sinh';
      else if (selectedJobType.includes('Đặc định'))
        jobTypeKey = 'Kỹ năng đặc định';
      else if (selectedJobType.includes('Kỹ sư, tri thức'))
        jobTypeKey = 'Kỹ sư, tri thức';
      industries = industriesByJobType[jobTypeKey];
    }

    setAvailableIndustries(industries);
    setSelectedIndustry('');
    setSearchQuery('');
  }, [selectedJobType]);

  const handleSearchClick = () => {
    const queryParams = new URLSearchParams();
    if (finalSearchTerm) queryParams.set('q', finalSearchTerm);
    if (selectedJobType) queryParams.set('type', selectedJobType);
    if (selectedLocation) queryParams.set('location', selectedLocation);

    router.push(`/tim-kiem?${queryParams.toString()}`);
  };

  const getFilteredIndustries = () => {
    if (!searchQuery) return availableIndustries;
    const lowercasedQuery = searchQuery.toLowerCase();
    return availableIndustries.filter(
      (industry) =>
        industry.name.toLowerCase().includes(lowercasedQuery) ||
        industry.keywords.some((keyword) =>
          keyword.toLowerCase().includes(lowercasedQuery)
        )
    );
  };

  return (
    <Card className="max-w-6xl mx-auto shadow-2xl">
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-4 space-y-2">
            <Label htmlFor="search-type" className="text-foreground">
              Loại hình, kỹ năng
            </Label>
            <Select onValueChange={setSelectedJobType} value={selectedJobType}>
              <SelectTrigger id="search-type">
                <SelectValue placeholder="Chọn loại hình" />
              </SelectTrigger>
              <SelectContent>
                {japanJobTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="search-industry" className="text-foreground">
              Ngành nghề
            </Label>
            <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={comboboxOpen}
                  className="w-full justify-between h-10 font-normal text-sm"
                >
                  <span className="truncate">
                    {finalSearchTerm || 'Tất cả ngành nghề'}
                  </span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command shouldFilter={false}>
                  <CommandInput
                    placeholder="Tìm ngành nghề..."
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                  />
                  <CommandList>
                    <CommandEmpty>Không tìm thấy.</CommandEmpty>
                    <CommandGroup>
                      {getFilteredIndustries().map((industry) => (
                        <CommandItem
                          key={industry.slug}
                          value={industry.name}
                          onSelect={(currentValue) => {
                            setSelectedIndustry(
                              currentValue === selectedIndustry
                                ? ''
                                : industry.name
                            );
                            setSearchQuery('');
                            setComboboxOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              selectedIndustry === industry.name
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                          {industry.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="md:col-span-3 space-y-2">
            <Label htmlFor="search-location" className="text-foreground">
              Địa điểm, khu vực
            </Label>
            <Select onValueChange={setSelectedLocation}>
              <SelectTrigger id="search-location">
                <SelectValue placeholder="Toàn quốc Nhật Bản" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Vùng</SelectLabel>
                  {japanLocations.regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Tỉnh/Thành phố</SelectLabel>
                  {japanLocations.prefectures.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg"
              onClick={handleSearchClick}
            >
              <Search className="mr-2 h-5 w-5" /> Tìm kiếm
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
