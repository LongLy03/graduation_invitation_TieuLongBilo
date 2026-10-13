# 💌 HƯỚNG DẪN TẠO LINK MỜI TỪNG KHÁCH TRÊN VERCEL

Hệ thống đã được thiết lập để **tự động đọc tên người được mời từ URL**, tự động giải mã tiếng Việt, chuẩn hóa khoảng trắng và viết hoa tên khách mời thật trang trọng.

---

## 🎯 1. Các định dạng link bạn có thể dùng để gửi bạn bè

Giả sử link web sau khi bạn host lên Vercel là: `https://thiep-moi-trang.vercel.app`

### Cách 1: Dùng tham số `?to=...` (Khuyên dùng nhất, dễ nhớ nhất ⭐)
* **Gửi cho 1 người bạn:**
  ```
  https://thiep-moi-trang.vercel.app/?to=Bảo+Trân
  ```
  *(Bạn gõ dấu `+`, dấu gạch dưới `_`, dấu gạch ngang `-` hoặc dấu cách đều được, web tự đổi thành dấu cách đẹp!)*

* **Gửi cho anh/chị/thầy cô:**
  ```
  https://thiep-moi-trang.vercel.app/?to=Anh+Tuấn
  https://thiep-moi-trang.vercel.app/?to=Chị+Hồng+Ánh
  ```

* **Gửi cho nhóm / gia đình:**
  ```
  https://thiep-moi-trang.vercel.app/?to=Gia+đình+Bác+Ba
  https://thiep-moi-trang.vercel.app/?to=Team+Marketing
  ```

---

### Cách 2: Dùng tham số `?name=...` hoặc `?guest=...`
Hệ thống cũng tự động nhận diện các tham số này:
```
https://thiep-moi-trang.vercel.app/?name=Bảo+Trân
https://thiep-moi-trang.vercel.app/?guest=Anh+Hoàng
```

---

### Cách 3: Đường dẫn URL đẹp (Đã được cấu hình qua `vercel.json`)
Nhờ file cấu hình `vercel.json`, bạn có thể dùng luôn link dạng đường dẫn mà không lo bị lỗi 404:
```
https://thiep-moi-trang.vercel.app/to/Bảo-Trân
https://thiep-moi-trang.vercel.app/to/Anh-Tuấn
```

---

## ✨ 2. Các tính năng thông minh đã tích hợp sẵn:
1. **Tự động viết hoa đẹp mắt:** Nếu bạn gõ `?to=bảo trân`, hệ thống sẽ tự động chuyển thành **"Bảo Trân"**.
2. **Tự động thay dấu `+`, `_`, `-`:** Nhập `?to=Bao_Tran` hoặc `?to=Bao+Tran` hay `?to=Bao-Tran` thì web đều hiển thị chuẩn: **"Bao Tran"**.
3. **Tự động đổi tiêu đề tab trình duyệt:** Tab của khách mời sẽ hiện:
   `Thiệp Mời Lễ Tốt Nghiệp | Thân mời [Tên Khách] - Nguyễn Quỳnh Trang`
4. **Đồng bộ vào Google Sheet:** Khi khách bấm nút **"Sẽ tham dự"**, hệ thống sẽ ghi đúng tên của họ từ URL vào cột Tên trên Google Sheet.
5. **Hỗ trợ link từ Zalo / Facebook Messenger:** Khi chia sẻ qua mạng xã hội, dù link bị thêm `#` hay query, web vẫn bắt đúng tên 100%.

---

## 💡 3. Mẹo tạo hàng loạt link mời bằng Excel / Google Sheets
Nếu bạn có danh sách 30 - 50 người bạn:
1. Cột A: Tên bạn bè (VD: `Bảo Trân`, `Anh Tuấn`, `Phương Linh`...)
2. Cột B: Công thức tạo link:
   ```excel
   ="https://thiep-moi-trang.vercel.app/?to=" & ENCODEURL(A2)
   ```
3. Kéo công thức xuống, bạn sẽ có ngay danh sách link riêng cho từng người cực kỳ nhanh chóng!

---

## 🛠️ 4. Thử nghiệm ngay trên máy tính (Localhost)
Trước khi đưa lên Vercel, bạn có thể test thử ngay bây giờ bằng cách mở trình duyệt với các link sau:
- `http://localhost:5173/?to=Bảo+Trân`
- `http://localhost:5173/?to=Anh_Tuấn`
- `http://localhost:5173/?name=Chị+Mai`
- `http://localhost:5173/` (Link gốc không truyền tên -> hiển thị mặc định "Bạn Thân Mến")
