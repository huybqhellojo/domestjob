
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Image src="/logo.svg" alt="Bbester Logo" width={140} height={40} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Giải pháp nhân lực toàn diện cho các khu công nghiệp tại Việt Nam.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dành cho ứng viên</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/register" className="hover:text-primary">Đăng ký hồ sơ</Link></li>
              <li><Link href="/candidate-profile" className="hover:text-primary">Xem hồ sơ</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary">Lộ trình sự nghiệp</Link></li>
              <li><Link href="/learn" className="hover:text-primary">Khóa học online</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dành cho nhà tuyển dụng</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/post-job" className="hover:text-primary">Đăng tin tuyển dụng</Link></li>
              <li><Link href="/employers" className="hover:text-primary">Danh sách công ty</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary">Báo cáo dữ liệu</Link></li>
              <li><Link href="/franchise" className="hover:text-primary">Mô hình nhượng quyền</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liên hệ</h4>
            <p className="text-sm text-muted-foreground">
              Bbester JSC<br />
              Email: contact@bbester.vn<br />
              Hotline: 1900 1234
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bbester. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
