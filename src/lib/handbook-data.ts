export type HandbookArticle = {
  slug: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  dataAiHint: string;
  excerpt: string;
  content: {
    slug: string;
    title: string;
    body: string;
  }[];
};

export const articles: HandbookArticle[] = [
  {
    slug: 'tokutei-ginou-la-gi',
    title: 'Kỹ năng đặc định (Tokutei Ginou) là gì? Toàn bộ thông tin cần biết 2024',
    category: 'Kỹ năng đặc định',
    author: 'HelloJob Team',
    readTime: '8 phút',
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'tokyo city japan',
    excerpt: 'Tokutei Ginou là một loại visa lao động mới của Nhật Bản, mở ra cơ hội lớn cho người lao động Việt Nam. Hãy cùng tìm hiểu chi tiết về điều kiện, quyền lợi và các ngành nghề tuyển dụng.',
    content: [
      {
        slug: 'gioi-thieu',
        title: 'Giới thiệu về visa Kỹ năng đặc định',
        body: `
          <p>Visa Kỹ năng đặc định (特定技能 - Tokutei Ginou) là một loại tư cách lưu trú mới dành cho lao động người nước ngoài tại Nhật Bản, được chính phủ Nhật Bản triển khai từ tháng 4 năm 2019. Mục đích chính của chương trình này là để giải quyết tình trạng thiếu hụt lao động trầm trọng trong một số ngành công nghiệp cụ thể của Nhật Bản.</p>
          <p>Chương trình này được chia thành 2 loại chính:</p>
          <ul>
            <li><strong>Kỹ năng đặc định loại 1 (Tokutei Ginou 1):</strong> Dành cho lao động có trình độ kỹ năng và kiến thức chuyên môn nhất định, có thể làm việc ngay mà không cần qua đào tạo nhiều. Thời gian lưu trú tối đa là 5 năm và không được bảo lãnh gia đình.</li>
            <li><strong>Kỹ năng đặc định loại 2 (Tokutei Ginou 2):</strong> Dành cho lao động có kỹ năng tay nghề cao, chuyên nghiệp. Sau khi hoàn thành chương trình loại 1, lao động có thể thi chuyển lên loại 2 để được ở lại Nhật Bản lâu dài, có cơ hội xin vĩnh trú và bảo lãnh người thân sang sinh sống.</li>
          </ul>
        `
      },
      {
        slug: 'dieu-kien-tham-gia',
        title: 'Điều kiện tham gia chương trình',
        body: `
          <p>Để tham gia chương trình Kỹ năng đặc định, người lao động cần đáp ứng các điều kiện cơ bản sau:</p>
          <ol>
            <li><strong>Độ tuổi:</strong> Đủ 18 tuổi trở lên.</li>
            <li><strong>Kỳ thi năng lực tiếng Nhật:</strong> Đạt chứng chỉ năng lực tiếng Nhật JLPT cấp độ N4 trở lên hoặc các kỳ thi tương đương như JFT-Basic.</li>
            <li><strong>Kỳ thi kỹ năng tay nghề:</strong> Vượt qua kỳ thi đánh giá kỹ năng chuyên môn (技能測定試験) cho ngành nghề mà mình đăng ký. Kỳ thi này được tổ chức tại Nhật Bản và một số quốc gia khác, bao gồm cả Việt Nam.</li>
            <li><strong>Sức khỏe:</strong> Đảm bảo đủ điều kiện sức khỏe để làm việc tại Nhật Bản, không mắc các bệnh truyền nhiễm theo quy định.</li>
          </ol>
          <p>Đối với các bạn Thực tập sinh kỹ năng đã hoàn thành chương trình 3 năm hoặc 5 năm, có thể được miễn một số kỳ thi khi chuyển đổi sang visa Tokutei Ginou nếu ngành nghề tương đồng.</p>
        `
      },
      {
        slug: 'quyen-loi',
        title: 'Quyền lợi của người lao động',
        body: `
          <p>Tham gia chương trình Kỹ năng đặc định mang lại nhiều quyền lợi hấp dẫn cho người lao động:</p>
          <ul>
            <li><strong>Mức lương:</strong> Mức lương của lao động Tokutei Ginou được quy định tương đương hoặc cao hơn so với người Nhật cùng vị trí, đảm bảo thu nhập ổn định và xứng đáng.</li>
            <li><strong>Chế độ đãi ngộ:</strong> Hưởng đầy đủ các chế độ bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp như người Nhật.</li>
            <li><strong>Cơ hội chuyển việc:</strong> Người lao động được phép chuyển việc trong cùng một ngành nghề nếu có lý do chính đáng và được công ty mới chấp nhận.</li>
            <li><strong>Phát triển dài hạn:</strong> Có cơ hội phát triển sự nghiệp lâu dài tại Nhật, đặc biệt khi chuyển lên được visa loại 2.</li>
          </ul>
        `
      },
    ],
  },
  {
    slug: 'chi-phi-sinh-hoat-o-nhat',
    title: 'Chi phí sinh hoạt ở Nhật Bản hết bao nhiêu một tháng?',
    category: 'Cuộc sống ở Nhật',
    author: 'Mai Linh',
    readTime: '6 phút',
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'japanese food market',
    excerpt: 'Lập kế hoạch tài chính là bước quan trọng trước khi đến Nhật. Bài viết này sẽ phân tích chi tiết các khoản chi phí sinh hoạt hàng tháng bạn cần chuẩn bị.',
    content: [
      {
        slug: 'cac-khoan-chi-phi-chinh',
        title: 'Các khoản chi phí chính',
        body: '<p>Chi phí sinh hoạt hàng tháng tại Nhật Bản có thể dao động tùy thuộc vào thành phố bạn sống và phong cách chi tiêu của bạn. Tuy nhiên, các khoản chính bao gồm:</p><ul><li>Tiền thuê nhà</li><li>Tiền ăn uống</li><li>Tiền đi lại</li><li>Tiền điện, nước, gas, internet</li><li>Thuế và bảo hiểm</li><li>Chi phí cá nhân khác</li></ul>'
      },
      {
        slug: 'chi-phi-trung-binh',
        title: 'Chi phí trung bình tại các thành phố lớn',
        body: '<p>Tại các thành phố lớn như Tokyo, Osaka, chi phí thuê nhà và sinh hoạt sẽ cao hơn đáng kể so với các vùng nông thôn. Một người độc thân sống ở Tokyo có thể tốn khoảng 120,000 - 150,000 yên/tháng. Trong khi đó ở các tỉnh lẻ, con số này có thể chỉ khoảng 80,000 - 100,000 yên.</p>'
      },
    ],
  },
   {
    slug: 'kinh-nghiem-phong-van-tokutei',
    title: '5 Kinh nghiệm phỏng vấn Tokutei Ginou chắc chắn đậu',
    category: 'Kỹ năng đặc định',
    author: 'HelloJob Team',
    readTime: '7 phút',
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'job interview japan',
    excerpt: 'Buổi phỏng vấn là bước quyết định để bạn có được công việc mơ ước tại Nhật. Hãy chuẩn bị thật kỹ với 5 kinh nghiệm quý báu được đúc kết từ các chuyên gia.',
    content: [
      {
        slug: 'chuan-bi-ky-luong',
        title: 'Chuẩn bị kỹ lưỡng trước phỏng vấn',
        body: '<p>Tìm hiểu kỹ về công ty, ngành nghề ứng tuyển. Chuẩn bị câu trả lời cho các câu hỏi thường gặp và luyện tập giới thiệu bản thân (Jikoshoukai) thật trôi chảy.</p>'
      },
      {
        slug: 'tac-phong-chuyen-nghiep',
        title: 'Tác phong chuyên nghiệp',
        body: '<p>Trang phục lịch sự, thái độ khiêm tốn, lễ phép và luôn đúng giờ là những yếu tố cực kỳ quan trọng trong văn hóa Nhật Bản.</p>'
      },
    ],
  },
];
