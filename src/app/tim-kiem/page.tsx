"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobCard } from "@/components/job-card";
import { ListFilter } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { useEffect, useState } from "react";
import { Pager } from "@/lib/pager";
import { Pagination } from "@/components/pagination";
import { searchJobs } from "./actions";

const FilterSidebar = () => (
  <div className="md:col-span-1 lg:col-span-1">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Bộ lọc</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Mức lương (triệu VND)</Label>
          <Slider defaultValue={[20, 50]} max={100} step={1} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20tr</span>
            <span>100tr</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Loại hình công việc</Label>
          <div className="space-y-2">
            {["Toàn thời gian", "Bán thời gian", "Thực tập"].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={`type-${item}`} />
                <Label htmlFor={`type-${item}`} className="font-normal">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Cấp bậc</Label>
          <div className="space-y-2">
            {["Thực tập sinh", "Nhân viên", "Chuyên viên", "Trưởng nhóm"].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={`level-${item}`} />
                <Label htmlFor={`level-${item}`} className="font-normal">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full bg-primary text-white">Áp dụng</Button>
      </CardContent>
    </Card>
  </div>
);

const SearchResultsContent = () => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<any[]>([]);
  const [pager, setPager] = useState<Pager | null>(null);

  const q = searchParams.get("q") || "";
  const type = searchParams.get("type") || "";
  const location = searchParams.get("location") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 20;
  useEffect(() => {
    fetchJobs();
  }, [q, type, location, page]);

  const fetchJobs = async () => {
    const { hits, total } = await searchJobs({ q, type, location, page, pageSize });
    setResults(hits);
    setPager(new Pager(total, page, pageSize));
  };
  const buildPageLink = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", p.toString());
    return `/tim-kiem?${params.toString()}`;
  };

  return (
    <div className="w-full bg-secondary min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white pt-6 pb-2">
        <div className="container mx-auto px-4 md:px-6">
          <SearchBar />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{pager ? `Tìm thấy ${pager.totalItems} kết quả` : "Đang tìm kiếm..."}</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 md:hidden">
              <ListFilter className="w-4 h-4" />
              Lọc
            </Button>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sắp xếp theo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="relevance">Liên quan nhất</SelectItem>
                <SelectItem value="salary_desc">Lương cao đến thấp</SelectItem>
                <SelectItem value="salary_asc">Lương thấp đến cao</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <div className="grid grid-cols-1 gap-4">
              {results.map((hit) => {
                const job = { id: hit._id, ...hit._source };
                return <JobCard key={hit._id} job={job} />;
              })}
            </div>
            {pager && <Pagination pager={pager} buildLink={buildPageLink} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
