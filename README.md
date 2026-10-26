# Personal portfolio

Portfolio Full Stack Developer một trang, giao diện đen với ánh xanh dương. Nội dung giới thiệu React, Node.js và Spring Boot. Website portfolio được xây bằng React + Vite + TypeScript + Tailwind CSS + Motion và triển khai tĩnh.

## Chạy tại máy

```sh
npm ci
npm run dev
```

Mở địa chỉ Vite in ra (mặc định `http://127.0.0.1:5173`).

```sh
npm run typecheck
npm run build
npm run preview
```

## Thay nội dung mẫu

- **Chỉ cần sửa `src/portfolio.config.ts`** để thay toàn bộ thông tin cá nhân, giới thiệu, kỹ năng, dự án và metadata. `src/content.ts` chỉ giữ nhãn giao diện như menu và nút.
- `name`: tên dùng chung cho Việt/Anh, header, phần mở đầu, footer và tiêu đề trang.
- `role`: chức danh hiển thị dưới tên và trong tiêu đề trang.
- `headline`, `about`, `footer`: nội dung cá nhân, mỗi phần có bản `vi` và `en`.
- `aboutHighlights`: danh sách từ khóa được tô sáng trong khung Về tôi, dùng chung cho cả hai ngôn ngữ.
- `contact.email`, `contact.phone`, `contact.github`, `contact.linkedin`, `contact.location`: thông tin liên hệ. Để trống để ẩn, điền URL GitHub/LinkedIn đầy đủ. Email và điện thoại dùng liên kết `mailto:` và `tel:`.
- `skills`: các nhóm kỹ năng và tên theo ngôn ngữ. `category` chọn icon và màu của thẻ (`frontend`, `backend`, `databases`, `tools`); các kỹ năng hiển thị thành nhãn có logo và màu nhấn. Kỹ năng mới chưa có logo sẽ dùng icon của nhóm.
- `projects`: hiện có 4 dự án mẫu: Luma (React + Node.js), Focusly (React + Spring Boot), Slotly (React + Spring Boot) và Stockroom (React + Node.js). Chỉnh thông tin hoặc thêm/xóa phần tử để thay số dự án.
- Mỗi dự án có `demoUrl` và `githubUrl` tùy chọn. Không dùng URL giả. Đặt `sample: false` khi thay bằng dự án thật.
- Mỗi dự án có `image`, `width`, `height`; `smallImage` là ảnh 640px tùy chọn. Có thể dùng ảnh riêng và bỏ `smallImage` nếu không có biến thể nhỏ.
- Ảnh của cả 4 dự án là minh họa sinh bằng ImageGen; chức năng backend được mô tả là ý tưởng dự án mẫu, không phải API được triển khai trong website portfolio này.
- `seo.description`: mô tả Việt/Anh. `seo.siteUrl`: tên miền thực tế sau khi triển khai. `seo.image`: đường dẫn hoặc URL ảnh chia sẻ. Khi có `siteUrl`, ảnh chia sẻ được chuyển thành URL tuyệt đối tự động.
- Font Be Vietnam Pro và IBM Plex Mono được phục vụ tại máy; giấy phép đi kèm trong `public/fonts/`.
- Giao diện và nhãn hỗ trợ `?lang=vi` / `?lang=en`, mặc định `vi`. Đổi ngôn ngữ không tải lại trang.

## Triển khai

Chạy `npm run build`, đưa thư mục `dist` lên hosting tĩnh. Không cần biến môi trường hay API key. Website không dùng đường dẫn SPA lồng nhau nên không cần rewrite riêng.

Trước khi phát hành, thay nội dung mẫu và điền `seo.siteUrl` trong file cấu hình. Tiêu đề, description và Open Graph trong HTML được tạo từ cùng cấu hình khi chạy Vite/build, không cần sửa `index.html`. Có thể thay ảnh chia sẻ qua `seo.image`. Metadata mặc định được phục vụ bằng tiếng Việt; chuyển ngôn ngữ cập nhật metadata trong trình duyệt, không tạo hai trang SEO độc lập. Sau khi sửa cấu hình, build và triển khai lại `dist` để cập nhật bản online.

## Thiết kế và tương tác

- Header cố định với mục hiện tại, menu mobile đóng bằng Escape/chọn mục/nhấn bên ngoài.
- Hiệu ứng hiện theo cuộn, hover ảnh/nút/liên kết, ngoặc nhọn chuyển động nhẹ trên desktop.
- Tôn trọng `prefers-reduced-motion`; mobile không có chuyển động ngoặc nhọn.
- Nút email chỉ mở ứng dụng email của người dùng, không gửi dữ liệu tới máy chủ.

## Nội dung cần bổ sung

Tên thật, phần giới thiệu, email, liên kết GitHub/LinkedIn và thông tin dự án thực tế. Bản hiện tại là khung portfolio với nội dung minh họa có đánh dấu.
