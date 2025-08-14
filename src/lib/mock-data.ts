
export interface Job {
    id: string;
    isRecording: boolean;
    image: {
      src: string;
      type: 'minhhoa' | 'thucte';
    };
    likes: string;
    salary: {
      actual?: string;
      basic: string;
    };
    title: string;
    support?: string[];
    recruiter: {
      name: string;
      avatar: string;
      company: string;
    };
    status: 'Đang tuyển' | 'Tạm dừng';
    interviewDate: string;
    interviewRounds: number;
    netFee: string;
    target: string;
    backFee?: string;
    tags: string[];
    applicants?: {
        count: number;
        avatars: string[];
    };
    postedTime: string;
    details: {
        description: string;
        requirements: string;
        benefits: string;
    };
}
  
export const jobData: Job[] = [
    {
        id: 'JP-KRSBA015',
        isRecording: true,
        image: { src: 'https://placehold.co/600x400.png', type: 'minhhoa' },
        likes: '8k2',
        salary: { actual: '25,5tr', basic: '30tr' },
        title: 'Thực tập sinh 3 năm, Chế biến thực phẩm, Nagasaki, 3 Nữ, 18 - 35 tuổ...',
        support: ['lành nghề'],
        recruiter: { name: 'Nguyễn Thị Ngân', avatar: 'https://placehold.co/32x32.png', company: 'Hoàng Long H...' },
        status: 'Đang tuyển',
        interviewDate: '19/02/2024',
        interviewRounds: 3,
        netFee: '110tr(4k2)',
        target: '5tr',
        tags: ['Thực phẩm', 'Nữ'],
        applicants: { count: 10, avatars: [] },
        postedTime: '12:58 06/10/2024',
        details: {
            description: '<p>Công việc chính là chế biến, đóng gói các sản phẩm cơm hộp, sushi, salad cho chuỗi siêu thị và cửa hàng tiện lợi. Môi trường làm việc sạch sẽ, hiện đại, đảm bảo vệ sinh an toàn thực phẩm.</p><ul><li>Vận hành máy trộn, máy cắt rau củ, máy đóng gói tự động.</li><li>Kiểm tra chất lượng nguyên liệu và thành phẩm.</li><li>Tuân thủ nghiêm ngặt các quy định về vệ sinh cá nhân và khu vực làm việc.</li></ul>',
            requirements: '<p>Yêu cầu ứng viên chăm chỉ, cẩn thận và có trách nhiệm. Cụ thể:</p><ul><li>Độ tuổi: 18 - 35 tuổi.</li><li>Giới tính: Nữ.</li><li>Sức khỏe tốt, không mắc các bệnh truyền nhiễm.</li><li>Không yêu cầu kinh nghiệm, sẽ được đào tạo bài bản.</li><li>Ưu tiên ứng viên có kinh nghiệm làm trong ngành thực phẩm.</li></ul>',
            benefits: '<p>Mức lương và chế độ đãi ngộ hấp dẫn:</p><ul><li>Lương cơ bản: 160,000 JPY/tháng (chưa tính tăng ca).</li><li>Thực lĩnh (sau khi trừ thuế, bảo hiểm, nhà ở): Khoảng 120,000 JPY/tháng.</li><li>Được tham gia đầy đủ bảo hiểm xã hội, y tế, thất nghiệp.</li><li>Hỗ trợ nhà ở ký túc xá đầy đủ tiện nghi.</li><li>Có cơ hội gia hạn hợp đồng và phát triển lâu dài.</li></ul>'
        }
    },
    {
        id: 'JP-ACABA055',
        isRecording: true,
        image: { src: 'https://placehold.co/600x400.png', type: 'thucte' },
        likes: '1',
        salary: { basic: '30tr' },
        title: 'Kỹ sư, tri thức đầu Nhật có tiếng, N3, N2, Công nghệ thông tin, Kỹ sư cầu nối, Nam, 22-32 tuổi, Tuyển nhân viê...',
        support: ['lành nghề'],
        recruiter: { name: 'Của bạn', avatar: 'https://placehold.co/32x32.png', company: '<chưa rõ>' },
        status: 'Tạm dừng',
        interviewDate: '19/02/2024',
        interviewRounds: 3,
        netFee: 'Liên hệ',
        target: '',
        backFee: '12tr',
        tags: ['IT', 'Kỹ sư', 'N2'],
        applicants: {
            count: 3,
            avatars: ['https://placehold.co/24x24.png', 'https://placehold.co/24x24.png', 'https://placehold.co/24x24.png'],
        },
        postedTime: '12:58 06/10/2024',
        details: { description: '', requirements: '', benefits: '' }
    },
    {
        id: 'JP-ATXAA015',
        isRecording: true,
        image: { src: 'https://placehold.co/600x400.png', type: 'minhhoa' },
        likes: '5k1',
        salary: { actual: '26tr', basic: '31tr' },
        title: 'Tuyển 10 nữ dán giấy tường nội thất tại Fukuoka, Nhật Bản. Lương 32tr/tháng.',
        support: [],
        recruiter: { name: 'Trần Văn Mạnh', avatar: 'https://placehold.co/32x32.png', company: 'Vinamex' },
        status: 'Đang tuyển',
        interviewDate: '25/02/2024',
        interviewRounds: 2,
        netFee: '100tr',
        target: '10tr',
        tags: ['Xây dựng', 'Nữ'],
        applicants: { count: 12, avatars: [] },
        postedTime: '11:30 06/10/2024',
        details: { description: '', requirements: '', benefits: '' }
    },
    {
        id: 'JP-KBSBA045',
        isRecording: false,
        image: { src: 'https://placehold.co/600x400.png', type: 'thucte' },
        likes: '12k',
        salary: { basic: '29tr' },
        title: 'Kỹ sư cơ khí làm việc tại Osaka, yêu cầu N4, có kinh nghiệm vận hành máy phay CNC.',
        support: ['lành nghề'],
        recruiter: { name: 'Lê Thuỳ Trang', avatar: 'https://placehold.co/32x32.png', company: 'Esuhai' },
        status: 'Đang tuyển',
        interviewDate: '05/03/2024',
        interviewRounds: 2,
        netFee: 'Liên hệ',
        target: '2tr',
        tags: ['Cơ khí', 'Kỹ sư', 'N4'],
        applicants: {
            count: 5,
            avatars: ['https://placehold.co/24x24.png', 'https://placehold.co/24x24.png', 'https://placehold.co/24x24.png'],
        },
        postedTime: '10:05 06/10/2024',
        details: { description: '', requirements: '', benefits: '' }
    },
    {
      id: 'JP-XYZ001',
      isRecording: false,
      image: { src: 'https://placehold.co/600x400.png', type: 'minhhoa'},
      likes: '3k5',
      salary: { actual: '28tr', basic: '33tr'},
      title: 'Tuyển dụng 5 Nam TTS Hàn xì làm việc tại Aichi. Yêu cầu có kinh nghiệm.',
      support: [],
      recruiter: { name: 'Hoàng An', avatar: 'https://placehold.co/32x32.png', company: 'JapanWorks'},
      status: 'Đang tuyển',
      interviewDate: '15/03/2024',
      interviewRounds: 2,
      netFee: '105tr',
      target: '8tr',
      tags: ['Cơ khí', 'Hàn', 'Nam'],
       applicants: { count: 8, avatars: [] },
      postedTime: '09:00 07/10/2024',
      details: { description: '', requirements: '', benefits: '' }
    }
];
