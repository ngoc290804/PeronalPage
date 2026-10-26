import type { PortfolioConfig } from './types'

/**
 * CHỈNH THÔNG TIN CÁ NHÂN TẠI ĐÂY.
 * Một tên dùng cho cả Việt/Anh. Nội dung dịch nằm trong vi/en.
 * Để trống email, số điện thoại hoặc URL nếu chưa muốn hiển thị.
 * Đây là cấu hình công khai: không đặt mật khẩu hay API key vào file này.
 */
export const portfolioConfig: PortfolioConfig = {
  name: 'Ngọc Nguyễn',
  role: 'Full Stack Developer',
  headline: {
    vi: 'Tôi xây dựng ứng dụng web hoàn chỉnh với React và backend Node.js hoặc Spring Boot.',
    en: 'I build complete web applications with React and a Node.js or Spring Boot backend.',
  },
  about: {
    vi: 'Tôi là lập trình viên Full Stack, phát triển sản phẩm từ giao diện đến API và cơ sở dữ liệu. Tôi làm việc với React, Node.js và Spring Boot, chú trọng trải nghiệm sử dụng, cấu trúc mã rõ ràng và khả năng mở rộng. Các dự án bên dưới là ví dụ minh họa cho hướng phát triển của tôi.',
    en: 'I’m a Full Stack Developer, building products from the interface to APIs and databases. I work with React, Node.js, and Spring Boot, with a focus on thoughtful user experiences, clear code, and room to grow. The projects below are illustrative examples of this approach.',
  },
  aboutHighlights: ['Full Stack', 'React', 'Node.js', 'Spring Boot'], // Từ khóa nổi bật trong phần Về tôi
  contact: {
    email: 'angoc29082004@gmail.com', // Ví dụ: tenban@example.com
    phone: '0975493906', // Ví dụ: +84901234567
    github: '', // URL đầy đủ tới hồ sơ GitHub
    linkedin: '', // URL đầy đủ tới hồ sơ LinkedIn
    location: { vi: 'Hà Nội', en: 'Hanoi' }, // Ví dụ: TP. Hồ Chí Minh, Việt Nam
  },
  skills: [
    {
      title: { vi: 'Frontend', en: 'Frontend' },
      category: 'frontend', // Chọn icon và màu nhấn cho nhóm
      items: [{ vi: 'React', en: 'React' }, { vi: 'TypeScript', en: 'TypeScript' }, { vi: 'HTML / CSS', en: 'HTML / CSS' }, { vi: 'Tailwind CSS', en: 'Tailwind CSS' }],
    },
    {
      title: { vi: 'Backend', en: 'Backend' },
      category: 'backend',
      items: [{ vi: 'Node.js / Express', en: 'Node.js / Express' }, { vi: 'Java / Spring Boot', en: 'Java / Spring Boot' }, { vi: 'REST API', en: 'REST APIs' }],
    },
    {
      title: { vi: 'Cơ sở dữ liệu', en: 'Databases' },
      category: 'databases',
      items: [{ vi: 'PostgreSQL', en: 'PostgreSQL' }, { vi: 'MySQL', en: 'MySQL' }, { vi: 'Redis', en: 'Redis' }],
    },
    {
      title: { vi: 'Công cụ', en: 'Tools' },
      category: 'tools',
      items: [{ vi: 'Git', en: 'Git' }, { vi: 'Docker', en: 'Docker' }, { vi: 'Postman', en: 'Postman' }, { vi: 'Vite', en: 'Vite' }],
    },
  ],
  projects: [
    {
      id: 'luma', image: '/images/luma.webp', smallImage: '/images/luma-640.webp', width: 1440, height: 1000,
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      demoUrl: '', githubUrl: '', sample: true,
      copy: {
        vi: {
          title: 'Website thương mại',
          description: 'Mẫu ứng dụng thương mại điện tử với danh mục sản phẩm, giỏ hàng và quản lý đơn hàng. Giao diện React kết nối REST API được thiết kế với Node.js.',
          role: 'Full Stack · React, API và dữ liệu sản phẩm',
          alt: 'Ảnh minh họa dự án mẫu Luma: cửa hàng đồ nội thất với giao diện sáng và tối giản.',
        },
        en: {
          title: 'A considered storefront',
          description: 'An illustrative commerce app with a product catalogue, cart, and order management. A React interface connects to a REST API designed with Node.js.',
          role: 'Full Stack · React, APIs, and product data',
          alt: 'Illustration of the Luma sample project: a light, minimal homeware storefront.',
        },
      },
    },
    {
      id: 'focusly', image: '/images/focusly.webp', smallImage: '/images/focusly-640.webp', width: 1440, height: 1000,
      technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
      demoUrl: '', githubUrl: '', sample: true,
      copy: {
        vi: {
          title: 'Ứng dụng công việc',
          description: 'Mẫu ứng dụng tổ chức công việc theo dự án, thời hạn và trạng thái. Backend Spring Boot phụ trách API công việc, phân quyền và lưu trữ dữ liệu.',
          role: 'Full Stack · Giao diện, Spring Boot API và phân quyền',
          alt: 'Ảnh minh họa dự án mẫu Focusly: ứng dụng quản lý công việc nền tối, điểm nhấn xanh dương.',
        },
        en: {
          title: 'A little more focus',
          description: 'An illustrative task app organised by project, deadline, and status. A Spring Boot backend covers task APIs, access control, and data persistence.',
          role: 'Full Stack · Interface, Spring Boot APIs, and access control',
          alt: 'Illustration of the Focusly sample project: a dark task manager with blue accents.',
        },
      },
    },
    {
      id: 'slotly', image: '/images/slotly.webp', smallImage: '/images/slotly-640.webp', width: 1440, height: 1000,
      technologies: ['React', 'Spring Boot', 'MySQL'],
      demoUrl: '', githubUrl: '', sample: true,
      copy: {
        vi: {
          title: 'Nền tảng đặt lịch',
          description: 'Mẫu nền tảng chọn dịch vụ và khung giờ phù hợp. API Spring Boot xử lý lịch trống, xác nhận lịch hẹn và kiểm tra trùng thời gian.',
          role: 'Full Stack · Luồng đặt lịch và API nghiệp vụ',
          alt: 'Ảnh minh họa dự án mẫu Slotly: lịch tháng và các khung giờ đặt lịch trên giao diện sáng.',
        },
        en: {
          title: 'An easier way to book',
          description: 'An illustrative booking platform for choosing services and available time slots. Spring Boot APIs handle availability, confirmations, and scheduling conflicts.',
          role: 'Full Stack · Booking flows and business APIs',
          alt: 'Illustration of the Slotly sample project: a light booking interface with a calendar and time slots.',
        },
      },
    },
    {
      id: 'stockroom', image: '/images/stockroom.webp', smallImage: '/images/stockroom-640.webp', width: 1440, height: 1000,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      demoUrl: '', githubUrl: '', sample: true,
      copy: {
        vi: {
          title: 'Hệ thống quản lý kho',
          description: 'Mẫu công cụ quản lý danh mục, tồn kho và đơn hàng. Backend Node.js cung cấp API tìm kiếm, cập nhật tồn kho và bộ nhớ đệm với Redis.',
          role: 'Full Stack · Dashboard, REST API và cơ sở dữ liệu',
          alt: 'Ảnh minh họa dự án mẫu Stockroom: dashboard quản lý sản phẩm với bảng tồn kho nền tối.',
        },
        en: {
          title: 'Inventory, made clearer',
          description: 'An illustrative tool for catalogues, inventory, and orders. A Node.js backend provides search APIs, stock updates, and caching with Redis.',
          role: 'Full Stack · Dashboard, REST APIs, and databases',
          alt: 'Illustration of the Stockroom sample project: a dark product dashboard with an inventory table.',
        },
      },
    },
  ],
  footer: { vi: 'Chỉn chu từ giao diện đến backend.', en: 'Thoughtful from interface to backend.' },
  seo: {
    description: {
      vi: 'Portfolio Full Stack Developer với React, Node.js và Spring Boot. Khám phá giới thiệu, dự án mẫu và kỹ năng phát triển ứng dụng web.',
      en: 'A Full Stack Developer portfolio featuring React, Node.js, and Spring Boot. Explore sample projects, skills, and a complete web development approach.',
    },
    siteUrl: '', // URL website sau khi triển khai, ví dụ https://tenban.dev
    image: '/social-preview.png', // Có thể thay bằng ảnh chia sẻ riêng
  },
}
