import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const candidates = [
  { name: 'Lê Thị An', school: 'ĐH Bách Khoa', skills: ['Lập trình', 'Tiếng Anh'], industry: 'IT' },
  { name: 'Trần Văn Bình', school: 'CĐ Kỹ thuật Cao Thắng', skills: ['Vận hành máy', 'Sửa chữa'], industry: 'Cơ khí' },
  { name: 'Phạm Thị Cúc', school: 'ĐH Công nghiệp', skills: ['Kiểm tra chất lượng'], industry: 'Dệt may' },
  { name: 'Nguyễn Hùng Dũng', school: 'THPT', skills: ['Lắp ráp'], industry: 'Điện tử' },
  { name: 'Võ Thị Em', school: 'ĐH Kinh tế', skills: ['Tiếng Nhật', 'Logistics'], industry: 'Logistics' },
  { name: 'Đặng Văn Giang', school: 'CĐ Nghề', skills: ['Vận hành máy'], industry: 'Cơ khí' },
  { name: 'Hoàng Thị Hoa', school: 'ĐH Sư phạm Kỹ thuật', skills: ['Kiểm tra chất lượng', 'Tiếng Hàn'], industry: 'Điện tử' },
  { name: 'Lý Văn Ích', school: 'THPT', skills: ['Lắp ráp'], industry: 'Dệt may' },
  { name: 'Bùi Thị Kim', school: 'ĐH Khoa học Tự nhiên', skills: ['Lập trình', 'Phân tích dữ liệu'], industry: 'IT' },
  { name: 'Dương Văn Long', school: 'CĐ Giao thông Vận tải', skills: ['Vận hành xe nâng'], industry: 'Logistics' },
];

const industryColors: { [key: string]: string } = {
  IT: 'bg-sky-100 text-sky-700',
  'Cơ khí': 'bg-orange-100 text-orange-700',
  'Dệt may': 'bg-indigo-100 text-indigo-700',
  'Điện tử': 'bg-blue-100 text-blue-700',
  'Logistics': 'bg-green-100 text-green-700',
};

export function CandidatesTable() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary">
            <TableHead className="w-[200px]">Tên ứng viên</TableHead>
            <TableHead>Trường/Trình độ</TableHead>
            <TableHead>Kỹ năng</TableHead>
            <TableHead>Ngành mong muốn</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate, index) => (
            <TableRow key={index} className="hover:bg-secondary/50">
              <TableCell className="font-medium">{candidate.name}</TableCell>
              <TableCell>{candidate.school}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge className={`font-semibold ${industryColors[candidate.industry] || 'bg-gray-100 text-gray-700'}`}>{candidate.industry}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
