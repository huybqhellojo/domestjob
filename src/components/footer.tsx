
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
               <svg width="120" height="40" viewBox="0 0 352 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_105_2_footer)">
                <path d="M22.2539 72.7199V115.116H0.222656V0.839844H22.2539V43.4199C22.2539 52.4799 26.9339 57.0799 34.6139 57.0799C42.2939 57.0799 46.9739 52.4799 46.9739 43.4199V0.839844H68.8227V43.4199C68.8227 61.2799 58.7339 72.7199 42.6227 72.7199H34.4339C30.0539 72.7199 25.4939 72.7199 22.2539 72.7199Z" fill="#0077B6"/>
                <path d="M129.989 71.4799C110.189 71.4799 96.3891 58.0399 96.3891 36.1999C96.3891 14.3599 110.189 0.919922 129.989 0.919922C140.259 0.919922 148.629 4.39992 154.589 10.8799L141.599 23.0899C137.939 19.8799 134.279 17.9599 129.989 17.9599C119.719 17.9599 113.759 25.8799 113.759 36.1999C113.759 46.5199 119.719 54.4399 129.989 54.4399C134.279 54.4399 137.939 52.5199 141.599 49.3999L154.589 61.5199C148.629 68.0899 140.259 71.4799 129.989 71.4799Z" fill="#FBB040"/>
                <path d="M168.84 0.919922H190.68V69.7999H168.84V0.919922Z" fill="#8CC63F"/>
                <path d="M255.42 24.1999C251.58 19.3999 246.3 17.0899 238.98 17.0899C228.18 17.0899 221.7 24.7999 221.7 34.2799C221.7 42.6799 226.74 48.7999 237.21 52.9999L242.31 55.1299C246.69 56.9299 248.13 58.3399 248.13 60.7999C248.13 63.8899 245.22 65.6899 241.29 65.6899C237.54 65.6899 234.33 63.8899 231.78 60.9799L218.43 71.6899C223.35 77.9299 231.06 80.4199 241.11 80.4199C256.02 80.4199 265.5 71.2999 265.5 59.5999C265.5 49.6999 260.46 43.3999 249.03 38.8999L244.56 37.0099C240.54 35.3899 238.98 34.0999 238.98 31.6999C238.98 28.7899 241.53 26.8999 244.74 26.8999C247.65 26.8999 250.2 28.1899 252.75 30.7999L265.83 20.2099C262.29 16.3399 258.93 13.9399 255.42 13.9399V24.1999Z" fill="#00AEEF"/>
                <path d="M309.284 71.4799L283.484 39.4399L283.064 39.9199V69.7999H265.844V0.919922H283.064V31.3999L283.484 31.9699L308.864 0.919922H330.104L300.344 35.8399L330.944 69.7999H309.284Z" fill="#00AEEF"/>
                <path d="M199.191 71.4799V0.919922H216.411V71.4799H199.191Z" fill="#0077B6"/>
                <path d="M168.84 0.919922H190.68V69.7999H168.84V0.919922Z" fill="#8CC63F"/>
                <path d="M211.758 53.5999L194.538 53.5999V40.0399L211.758 40.0399V53.5999Z" fill="#00AEEF"/>
                <g clipPath="url(#clip1_105_2_footer)">
                <path d="M344.021 53.5999C348.611 53.5999 352.361 49.8499 352.361 45.2599V14.2399C352.361 9.64992 348.611 5.89992 344.021 5.89992H258.341C253.751 5.89992 250.001 9.64992 250.001 14.2399V45.2599C250.001 49.8499 253.751 53.5999 258.341 53.5999H269.471L263.321 62.4799L284.801 53.5999H344.021Z" fill="#29ABE2"/>
                <path d="M276.995 40.0399H264.455V19.3999H276.995V40.0399Z" fill="white"/>
                <path d="M305.885 40.0399C297.875 40.0399 292.835 34.6399 292.835 27.2899C292.835 19.9399 297.875 14.5999 305.885 14.5999C313.895 14.5999 318.935 19.9399 318.935 27.2899C318.935 34.6399 313.895 40.0399 305.885 40.0399ZM305.885 34.9399C310.835 34.9399 313.475 31.8199 313.475 27.2899C313.475 22.7599 310.835 19.6999 305.885 19.6999C300.935 19.6999 298.295 22.7599 298.295 27.2899C298.295 31.8199 300.935 34.9399 305.885 34.9399Z" fill="white"/>
                <path d="M344.095 40.0399H333.665L327.995 19.3999H338.885L341.225 31.5799L343.565 19.3999H350.255L344.095 40.0399Z" fill="white"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_105_2_footer">
                <rect width="352" height="115.116" fill="white" transform="translate(0.222656 0.839844)"/>
                </clipPath>
                <clipPath id="clip1_105_2_footer">
                <rect width="102.36" height="56.58" fill="white" transform="translate(250.001 5.8999)"/>
                </clipPath>
                </defs>
              </svg>
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
