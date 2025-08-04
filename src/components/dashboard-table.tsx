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

export function CandidatesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tên ứng viên</TableHead>
            <TableHead>Trường/Trình độ</TableHead>
            <TableHead>Kỹ năng</TableHead>
            <TableHead>Ngành mong muốn</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{candidate.name}</TableCell>
              <TableCell>{candidate.school}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{candidate.industry}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
