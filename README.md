# Người cầm lái — Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam
### Học phần: HCM202 · Nhóm thực hiện: GROUP7

Dự án ứng dụng web tương tác (Concept Map) kết hợp cơ sở dữ liệu học thuật phục vụ báo cáo chuyên đề **Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam**.

Dự án được xây dựng bằng HTML5, CSS3 và JavaScript thuần (Vanilla JS), chạy độc lập, offline, không phụ thuộc vào thư viện ngoài, không cần cài đặt môi trường Node.js hay cơ sở dữ liệu backend.

---

## 1. Thông tin học phần & Nhóm nghiên cứu

- **Môn học:** Tư tưởng Hồ Chí Minh (Mã môn: **HCM202**)
- **Đơn vị:** Đại học FPT
- **Nhóm thực hiện:** **GROUP7** (Nhóm 7)
- **Chủ đề nghiên cứu:** *"Người cầm lái — Bản chất, vai trò lãnh đạo và yêu cầu xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh"*

---

## 2. Cấu trúc kịch bản báo cáo (30 phút — 9 Chặng)

Khớp với kịch bản thuyết trình đề tài:

| Chặng | Nội dung trọng tâm | Phương thức thể hiện | Thời lượng |
| :---: | :--- | :--- | :---: |
| **01** | **Mở đầu:** Giới thiệu môn học HCM202, nhóm GROUP7 và câu hỏi dẫn nhập | Màn hình Hero & câu hỏi tương tác | 2 phút |
| **02** | **Bản đồ tổng quan:** Hai nhánh lớn (I, II) và mối quan hệ hữu cơ | Concept Map tương tác mở dần | 2 phút |
| **03** | **Tính tất yếu & vai trò lãnh đạo:** Người cầm lái, 3 yếu tố, tính tất yếu lịch sử | Map kết hợp khung giải thích & trích dẫn | 5 phút |
| **04** | **Đảng là đạo đức, là văn minh:** Mục đích, đường lối, đảng viên, nhân dân, quốc tế | 5 nhóm nội dung có dẫn chứng kinh điển | 4 phút |
| **05** | **Nguyên tắc hoạt động:** 5 nguyên tắc và tập thể lãnh đạo - cá nhân phụ trách | Sơ đồ quan hệ và tình huống giải định | 5 phút |
| **06** | **Cán bộ, đảng viên:** Tiêu chuẩn vừa hồng vừa chuyên, 4 khâu công tác cán bộ | Nhánh mở rộng & phân tích vận dụng | 4 phút |
| **07** | **Liên hệ thực tiễn:** Trường hợp Kết luận 21-KL/TW & Quy định 144-QĐ/TW | Phân tích từ lý luận đến thực tiễn | 3 phút |
| **08** | **Thảo luận & tổng kết:** Khảo sát định lượng & câu hỏi mở nhiều người tham gia | Bình chọn trực tiếp & xuất kết quả | 3 phút |
| **09** | **Nguồn & minh bạch AI:** Danh mục thư tịch chính thống & báo cáo độc lập của nhóm | Thư mục trích dẫn & phụ lục AI | 2 phút |

---

## 3. Cấu trúc tệp tin trong dự án

| Tập tin | Vai trò và Nội dung chính |
| :--- | :--- |
| `index.html` | Cấu trúc trang chuẩn ngữ nghĩa, tích hợp lộ trình 9 bước, case study thực tiễn, diễn đàn thảo luận, khảo sát và phụ lục AI. |
| `css/styles.css` | Hệ thống thiết kế phong cách vintage học thuật cổ điển, tương thích đa nền tảng (Responsive desktop, tablet, mobile), hỗ trợ giảm chuyển động (`prefers-reduced-motion`). |
| `js/concept-data.js` | Cơ sở dữ liệu lý luận phân cấp: 2 phần lớn (I & II), 7 nhánh con, 22 luận điểm chi tiết kèm trích dẫn nguyên văn và phân tích độc lập của GROUP7. |
| `js/app.js` | Điều khiển đóng/mở nhánh Concept Map, vẽ đường nối SVG động mở ô Reader đối chiếu nguồn, hệ thống bình chọn tỷ lệ phần trăm theo thời gian thực và quản lý thu thập ý kiến thảo luận nhiều người (`localStorage`, xuất file JSON). |

---

## 4. Danh mục nguồn tư liệu tham khảo chính thống

1. **Giáo trình chính:**
   - *Bộ Giáo dục và Đào tạo:* **Giáo trình Tư tưởng Hồ Chí Minh** (Dành cho bậc đại học hệ không chuyên lý luận chính trị), Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021 (Chương II, tr. 69–78).
2. **Tác phẩm kinh điển trích dẫn:**
   - **Hồ Chí Minh: Toàn tập** (Xuất bản lần thứ ba), 15 tập, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2011:
     - *Đường cách mệnh* (1927), t. 2, tr. 288–289.
     - *Sửa đổi lối làm việc* (1947), t. 5, tr. 280, tr. 309, tr. 313–330.
     - *Bài nói tại Lễ kỷ niệm 30 năm ngày thành lập Đảng* (1960), t. 12, tr. 403.
     - *Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân* (1969), t. 15, tr. 546–548.
     - *Di chúc của Chủ tịch Hồ Chí Minh* (1969), t. 15, tr. 611–618.
3. **Văn kiện Đảng & Pháp lý thời sự:**
   - *Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII*, Nxb Chính trị quốc gia Sự thật, Hà Nội, 2021.
   - *Kết luận số 21-KL/TW* ngày 25/10/2021 của Hội nghị Trung ương 4 khóa XIII.
   - *Quy định số 144-QĐ/TW* ngày 09/05/2024 của Bộ Chính trị về chuẩn mực đạo đức cách mạng của cán bộ, đảng viên trong giai đoạn mới.

---

## 5. Hướng dẫn chạy và sử dụng dự án

### Mở trực tiếp trên trình duyệt:
1. Nhấp đúp vào tệp `index.html` trong File Explorer (trên Google Chrome, Microsoft Edge hoặc Firefox).
2. Trang web sẽ chạy hoàn toàn offline không cần kết nối mạng.

### Chạy bằng máy chủ cục bộ (nếu có Python):
```powershell
python -m http.server 5500
```
Truy cập `http://localhost:5500`.

### Tương tác khảo sát & Thu thập ý kiến:
- Khi người xem bình chọn tình huống trắc nghiệm, tỷ lệ phần trăm sẽ tự động cập nhật ngay trên thanh biểu đồ.
- Khi người xem gửi quan điểm thảo luận ở câu hỏi mở, ý kiến sẽ được lưu vào danh sách và đếm số lượng đóng góp.
- Nhấn nút **"Xuất dữ liệu khảo sát (CSV/JSON)"** để tải toàn bộ phản hồi của cả lớp về máy phục vụ báo cáo.
- Nhấn nút **"Sao chép tổng hợp"** để sao chép nhanh báo cáo tóm tắt vào bộ nhớ tạm (Clipboard).
