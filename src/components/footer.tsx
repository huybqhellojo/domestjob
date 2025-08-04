import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">Domest Job</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Giải pháp nhân lực toàn diện cho các khu công nghiệp tại Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dành cho ứng viên</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/register" className="hover:text-primary">Đăng ký hồ sơ</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary">Lộ trình sự nghiệp</Link></li>
              <li><Link href="/learn" className="hover:text-primary">Khóa học online</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dành cho nhà đầu tư</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="hover:text-primary">Báo cáo dữ liệu</Link></li>
              <li><Link href="/franchise" className="hover:text-primary">Mô hình nhượng quyền</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <p className="text-sm text-muted-foreground">
              Domest Job JSC<br />
              Email: contact@domestjob.vn<br />
              Hotline: 1900 1234
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Domest Job. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
