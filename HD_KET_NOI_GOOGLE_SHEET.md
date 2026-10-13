# Hướng Dẫn Kết Nối Form Xác Nhận Tham Dự Vào Google Sheet (Lý Tiểu Long)

## 1. Google Sheet Của Bạn
- **Đường link trang tính:** [https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit?gid=0#gid=0)
- **ID Sheet:** `1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs`

---

## 2. Các Bước Cài Đặt (Chỉ mất khoảng 1-2 phút)

Để Google Sheet của bạn có thể tự động nhận dữ liệu khi khách mời bấm chọn **"Sẽ tham dự"** hoặc **"Không tham dự"**, Google yêu cầu bạn tạo một Web App nhỏ (hoàn toàn miễn phí) thông qua Apps Script đi kèm với Sheet đó.

### Bước 1: Mở Google Apps Script trên Google Sheet
1. Mở trang Google Sheet của bạn: [https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit](https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit).
2. Trên thanh menu trên cùng, bấm chọn: **Tiện ích mở rộng (Extensions)** ➔ **Apps Script**.
   *(Một tab trình duyệt mới sẽ mở ra giao diện soạn thảo mã của Google)*.

### Bước 2: Dán mã Script đã chuẩn bị sẵn
1. Trong màn hình soạn thảo Apps Script, bạn xóa sạch mọi đoạn code mặc định đang có trong file `Code.gs`.
2. Mở file [google_apps_script.js](file:///d:/graduation-invitation/graduation_invitation_TieuLongBilo/google_apps_script.js) trong thư mục dự án, sao chép (Copy) toàn bộ mã và dán (Paste) vào file `Code.gs`.
3. Bấm biểu tượng đĩa mềm **Lưu dự án (Save project)** hoặc nhấn tổ hợp phím **`Ctrl + S`**.

### Bước 3: Triển khai Web App (Deploy)
1. Ở góc trên cùng bên phải màn hình Apps Script, bấm nút màu xanh **Triển khai (Deploy)** ➔ Chọn **Tùy chọn triển khai mới (New deployment)**.
2. Tại hộp thoại hiện ra, bấm vào biểu tượng bánh răng ⚙️ bên cạnh chữ *Chọn loại (Select type)* ➔ Chọn **Ứng dụng web (Web app)**.
3. Điền thông tin cấu hình như sau:
   - **Mô tả (Description):** `Xác nhận tham dự Lễ tốt nghiệp Lý Tiểu Long`
   - **Thực thi dưới dạng (Execute as):** Chọn **Tôi (tài khoản email của bạn)** *(Me)*
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)**  
     *(⚠️ Lưu ý cực kỳ quan trọng: Bắt buộc chọn "Bất kỳ ai" để khách mời có thể gửi dữ liệu trực tiếp từ web mà không bị yêu cầu đăng nhập Google!)*
4. Bấm nút **Triển khai (Deploy)**.

### Bước 4: Cấp quyền truy cập cho Script (Chỉ thực hiện lần đầu tiên)
Google sẽ hiển thị một thông báo bảo mật yêu cầu cấp quyền để script có thể ghi dữ liệu vào Sheet của bạn:
1. Bấm nút **Ủy quyền truy cập (Authorize access)**.
2. Chọn tài khoản Google đang sở hữu trang Sheet.
3. Nếu thấy cảnh báo *"Google chưa xác minh ứng dụng này"*, bạn bấm vào dòng chữ nhỏ **Nâng cao (Advanced)** ở góc dưới bên trái.
4. Bấm tiếp vào **Đi tới Dự án không có tiêu đề (không an toàn) / Go to Untitled project (unsafe)**.
5. Cuộn xuống và bấm nút **Cho phép (Allow)**.

### Bước 5: Sao chép URL Web App và hoàn tất
1. Sau khi cấp quyền xong, Google sẽ hiển thị đường dẫn Web App có định dạng:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```
2. Bấm nút **Sao chép (Copy)** đường dẫn đó.
3. Mở file [rsvpConfig.js](file:///d:/graduation-invitation/graduation_invitation_TieuLongBilo/src/config/rsvpConfig.js) trong dự án và thay thế vào dòng `SCRIPT_URL`:
   ```javascript
   export const RSVP_CONFIG = {
     SHEET_URL: 'https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit?gid=0#gid=0',
     SHEET_ID: '1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs',

     // Dán link Web App bạn vừa copy vào đây:
     SCRIPT_URL: 'https://script.google.com/macros/s/AKfycb.../exec',
   };
   ```

---

## 3. Kết Quả Thu Được Trong Google Sheet
Ngay khi khách mở thiệp và bấm vào 1 trong 2 nút:
- **Cột A (Tên người được mời):** Tự động lấy tên khách (Ví dụ: `Bảo Trân` hoặc tên theo link `?to=...`).
- **Cột B (Trạng thái lựa chọn):** 
  - `Sẽ tham dự` (tự động tô nền xanh lá cây chữ đậm)
  - `Không tham dự` (tự động tô nền hồng chữ đậm)
- **Cột C (Thời gian xác nhận):** Ngày giờ khách bấm theo múi giờ Việt Nam (GMT+7).
