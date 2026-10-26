import type { Language, SectionId } from './types'
export type { Language, SectionId, Project } from './types'

// UI labels only. Edit personal details and portfolio content in portfolio.config.ts.
interface Content {
  navigation: { id: SectionId; label: string }[]
  greeting: string
  introduction: string
  viewProjects: string
  contactLink: string
  about: { title: string }
  projects: { title: string; description: string; sample: string; demo: string; source: string }
  skills: { title: string }
  contact: { title: string; description: string; email: string; pending: string }
  skipLink: string
  openMenu: string
  closeMenu: string
  navigationLabel: string
  languageLabel: string
  backToTop: string
}

export const content: Record<Language, Content> = {
  vi: {
    navigation: [{ id: 'home', label: 'Trang chủ' }, { id: 'about', label: 'Giới thiệu' }, { id: 'projects', label: 'Dự án' }, { id: 'skills', label: 'Kỹ năng' }, { id: 'contact', label: 'Liên hệ' }],
    greeting: 'Xin chào,',
    introduction: 'tôi là',
    viewProjects: 'Xem dự án',
    contactLink: 'Liên hệ',
    about: { title: 'Về tôi' },
    projects: { title: 'Dự án nổi bật', description: 'Một số ý tưởng ứng dụng từ giao diện đến backend.', sample: 'Dự án mẫu', demo: 'Xem demo', source: 'GitHub' },
    skills: { title: 'Kỹ năng' },
    contact: { title: 'Cùng tạo ra điều có ích.', description: 'Bạn có ý tưởng hoặc cơ hội phù hợp? Hãy liên hệ với tôi.', email: 'Gửi email', pending: 'Thông tin liên hệ sẽ sớm được cập nhật.' },
    skipLink: 'Đi đến nội dung chính',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    navigationLabel: 'Điều hướng chính',
    languageLabel: 'Chọn ngôn ngữ',
    backToTop: 'Về đầu trang',
  },
  en: {
    navigation: [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'projects', label: 'Projects' }, { id: 'skills', label: 'Skills' }, { id: 'contact', label: 'Contact' }],
    greeting: 'Hello there,',
    introduction: 'I’m',
    viewProjects: 'View projects',
    contactLink: 'Let’s talk',
    about: { title: 'About me' },
    projects: { title: 'Selected work', description: 'A selection of application concepts, from interface to backend.', sample: 'Sample project', demo: 'Live demo', source: 'GitHub' },
    skills: { title: 'My toolkit' },
    contact: { title: 'Let’s make something meaningful.', description: 'Have an idea or an opportunity in mind? I’d love to hear from you.', email: 'Send an email', pending: 'Contact details are coming soon.' },
    skipLink: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navigationLabel: 'Main navigation',
    languageLabel: 'Choose language',
    backToTop: 'Back to top',
  },
}
