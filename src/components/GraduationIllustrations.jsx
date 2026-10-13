import React from 'react';

/**
 * BỘ HÌNH VẼ NGHỆ THUẬT TỐT NGHIỆP DÀNH RIÊNG CHO THIỆP MỜI NGUYỄN QUỲNH TRANG
 * Thiết kế thủ công theo phong cách Fine-Line Art / Rose Gold & Deep Mist Pink
 * Tuyệt đối không dùng icon có sẵn hay emoji
 */

// 1. NÓN TỐT NGHIỆP NGHỆ THUẬT (Graduation Mortarboard Cap)
export function GraduationCapIllustration({ width = 36, height = 36, color = "#b83358", secondaryColor = "#e87a98", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Đỉnh nón tốt nghiệp hình thoi 3D */}
      <path
        d="M24 8L44 18L24 28L4 18L24 8Z"
        fill="url(#capGrad)"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Vành dưới ôm trán */}
      <path
        d="M12 22.5V30.5C12 30.5 17 35 24 35C31 35 36 30.5 36 30.5V22.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Khuy tròn trên chóp nón */}
      <circle cx="24" cy="18" r="2.2" fill={color} />
      {/* Tua nón rủ sang bên (Tassel) */}
      <path
        d="M24 18C29 19 37 20 38 27C38.5 30 38.2 33 38 36"
        stroke={secondaryColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Chùm tua rua ở đuôi tua nón */}
      <path
        d="M36 36L40 36L39 41L37 41L36 36Z"
        fill={color}
        stroke={color}
        strokeWidth="0.8"
      />
      <circle cx="38" cy="36" r="1.5" fill={color} />
      <defs>
        <linearGradient id="capGrad" x1="4" y1="8" x2="44" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff2f6" />
          <stop offset="0.5" stopColor="#ffe6ee" />
          <stop offset="1" stopColor="#fed2df" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. HUY HIỆU VÒNG NGUYỆT QUẾ VÀ NÓN CỬ NHÂN (Laurel Wreath Emblem)
export function GraduationLaurelEmblem({ 
  width = 48, 
  height = 48, 
  color = "#d97706", 
  leafFill = "#fef3c7", 
  capFill = "#fffbeb", 
  tasselColor = "#b45309", 
  className = "" 
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 54 54" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldLaurelGrad" x1="10" y1="10" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="0.5" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Cành nguyệt quế bên trái */}
      <path d="M14 38C10 32 10 21 17 14" stroke="url(#goldLaurelGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 33C8 32 7 28 10 26C11 28 13 30 12 33Z" fill={leafFill} stroke={color} strokeWidth="1.2" />
      <path d="M11 24C8 22 8 18 12 17C12.5 19 13 22 11 24Z" fill={leafFill} stroke={color} strokeWidth="1.2" />
      <path d="M15 17C13 14 15 10 18 11C18 13 18 15 15 17Z" fill={leafFill} stroke={color} strokeWidth="1.2" />

      {/* Cành nguyệt quế bên phải */}
      <path d="M40 38C44 32 44 21 37 14" stroke="url(#goldLaurelGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M42 33C46 32 47 28 44 26C43 28 41 30 42 33Z" fill={leafFill} stroke={color} strokeWidth="1.2" />
      <path d="M43 24C46 22 46 18 42 17C41.5 19 41 22 43 24Z" fill={leafFill} stroke={color} strokeWidth="1.2" />
      <path d="M39 17C41 14 39 10 36 11C36 13 36 15 39 17Z" fill={leafFill} stroke={color} strokeWidth="1.2" />

      {/* Nón cử nhân ở giữa */}
      <path d="M27 18L37 23.5L27 29L17 23.5L27 18Z" fill={capFill} stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21 26V30.5C21 30.5 23.5 33 27 33C30.5 33 33 30.5 33 30.5V26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M27 23.5C31 24 35 25 35 29V34" stroke={tasselColor} strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Nơ buộc dưới chân nguyệt quế */}
      <path d="M24 40C22 38 18 39 19 42C20 44 24 42 27 41C30 42 34 44 35 42C36 39 32 38 30 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="40.5" r="1.5" fill={color} />
    </svg>
  );
}

// 3. BẰNG TỐT NGHIỆP CUỘN BUỘC NƠ LỤA (Diploma Scroll)
export function DiplomaScrollIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Cuộn giấy bằng tốt nghiệp nằm nghiêng */}
      <rect x="10" y="16" width="24" height="12" rx="2" transform="rotate(-25 10 16)" fill="#fff5f8" stroke={color} strokeWidth="1.8" />
      {/* Mép giấy cuộn hai đầu */}
      <ellipse cx="9" cy="18" rx="2.5" ry="5.5" transform="rotate(-25 9 18)" fill="#fedae3" stroke={color} strokeWidth="1.8" />
      <ellipse cx="29" cy="8.5" rx="2.5" ry="5.5" transform="rotate(-25 29 8.5)" fill="#fedae3" stroke={color} strokeWidth="1.8" />
      {/* Dải ruy băng đỏ/hồng buộc giữa */}
      <path d="M18 12L22 21" stroke="#d8456f" strokeWidth="3.5" strokeLinecap="round" />
      {/* Nơ ruy băng */}
      <circle cx="20" cy="16.5" r="2" fill={color} />
      <path d="M20 18.5C18 22 17 26 16 28" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M21 18.5C23 22 25 26 26 27" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// 4. TRANG PHỤC TỐT NGHIỆP DRESS CODE (Graduation Gown & Dress Hanger)
export function DressCodeIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Móc treo thanh lịch */}
      <path d="M22 8C20 8 19 10 20 12C21 14 22 14.5 22 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 21L22 16L32 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cổ áo & Váy lễ trang nhã */}
      <path d="M16 20L19 26H25L28 20" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Thân váy dạ hội / lễ phục xếp ly nhẹ */}
      <path
        d="M19 26L14 39C19 40 25 40 30 39L25 26Z"
        fill="#fff2f6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Nơ thắt eo xinh xắn */}
      <path d="M19 26C21 27 23 27 25 26" stroke="#d8456f" strokeWidth="2.2" strokeLinecap="round" />
      {/* Dải nếp gấp váy mềm mại */}
      <path d="M22 27V38" stroke="#f48ea8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 2" />
    </svg>
  );
}

// 5. ĐỒNG HỒ THỜI GIAN ĐÓN KHÁCH 10H00 (Classic Clock showing 10:00)
export function ClockTimeIllustration({ width = 34, height = 34, color = "#1e3a8a", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Quai đồng hồ bỏ túi cổ điển */}
      <circle cx="22" cy="7" r="3" stroke={color} strokeWidth="1.8" />
      <rect x="20.5" y="9.5" width="3" height="3" fill={color} rx="1" />
      {/* Mặt đồng hồ tròn viền đôi */}
      <circle cx="22" cy="24" r="16" fill="#f0f9ff" stroke={color} strokeWidth="2" />
      <circle cx="22" cy="24" r="13.5" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2 2" />
      {/* Trục kim trung tâm */}
      <circle cx="22" cy="24" r="2" fill={color} />
      {/* Kim phút chỉ đúng 12 giờ (hướng thẳng lên trên) */}
      <path d="M22 24V14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Kim giờ chỉ đúng 10 giờ (10:00 trưa) */}
      <path d="M22 24L16 19" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      {/* Vạch giờ 12, 3, 6, 9 */}
      <circle cx="22" cy="11.5" r="1" fill={color} />
      <circle cx="34.5" cy="24" r="1" fill={color} />
      <circle cx="22" cy="36.5" r="1" fill={color} />
      <circle cx="9.5" cy="24" r="1" fill={color} />
    </svg>
  );
}

// 6. BÓ HOA TƯƠI TỐT NGHIỆP (Graduation Flower Bouquet)
export function FlowerBouquetIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Giấy bọc hoa hình phễu */}
      <path
        d="M14 22L20 38C21 40 23 40 24 38L30 22C25 24 19 24 14 22Z"
        fill="#fedae3"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Nơ ruy băng buộc bó hoa */}
      <ellipse cx="22" cy="30" rx="3.5" ry="2" fill="#fff" stroke={color} strokeWidth="1.4" />
      <path d="M20 31L18 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 31L26 36" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Hoa hồng trung tâm */}
      <circle cx="22" cy="15" r="6" fill="#fff" stroke={color} strokeWidth="1.8" />
      <path d="M20 14C20.5 13 23 13 23.5 15C24 17 21 17 21 15" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Bông hoa hai bên */}
      <circle cx="14" cy="18" r="4.5" fill="#ffe0ea" stroke={color} strokeWidth="1.6" />
      <circle cx="30" cy="18" r="4.5" fill="#ffe0ea" stroke={color} strokeWidth="1.6" />
      {/* Cành lá xanh điểm xuyết */}
      <path d="M12 12C15 12 16 15 16 15" stroke="#a3264b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M32 12C29 12 28 15 28 15" stroke="#a3264b" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 6C23 8 23 10 22 10" stroke="#a3264b" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// 7. MÁY ẢNH NGHỆ THUẬT LƯU NIỆM (Vintage Camera with Flash Sparkle)
export function CameraIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Thân máy ảnh */}
      <rect x="6" y="14" width="32" height="22" rx="5" fill="#fff5f8" stroke={color} strokeWidth="2" />
      {/* Gù ngắm trên đỉnh */}
      <path d="M15 14L18 9H26L29 14" fill="#ffe6ee" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      {/* Nút chụp */}
      <rect x="31" y="10" width="4" height="4" rx="1" fill={color} />
      {/* Ống kính tròn lồng nhau */}
      <circle cx="22" cy="25" r="8" fill="#fff" stroke={color} strokeWidth="2" />
      <circle cx="22" cy="25" r="5" fill="#fedae3" stroke={color} strokeWidth="1.4" />
      <circle cx="24" cy="23" r="1.5" fill="#fff" />
      {/* Ánh đèn flash lấp lánh (Sparkle) */}
      <path d="M11 9L11 5" stroke="#d8456f" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 7L13 7" stroke="#d8456f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 8. THẢM CỎ XANH KHUÔN VIÊN & CÔNG VIÊN (Park Meadow & University Pavilion)
export function MeadowParkIllustration({ width = 36, height = 36, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Đường chân trời bãi cỏ uốn lượn */}
      <path d="M4 36C14 33 22 36 32 34C38 33 42 35 44 36" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Các nhánh cỏ xanh mướt nghệ thuật */}
      <path d="M12 34C11 26 14 20 18 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 34C15 28 19 23 23 21" stroke="#d8456f" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M21 34C22 27 25 22 28 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25 34C27 28 30 25 34 23" stroke="#d8456f" strokeWidth="1.6" strokeLinecap="round" />
      {/* Bông hoa nhỏ nở rộ trên thảm cỏ */}
      <circle cx="18" cy="15" r="2.5" fill="#fff0f4" stroke={color} strokeWidth="1.4" />
      <circle cx="28" cy="17" r="2.5" fill="#fff0f4" stroke={color} strokeWidth="1.4" />
      {/* Vầng thái dương nhẹ / cánh chim bay thanh bình */}
      <path d="M33 11C35 9 37 9 39 11C41 9 43 9 45 11" stroke="#d8456f" strokeWidth="1.4" strokeLinecap="round" />
      {/* Gốc thảm cỏ bo tròn */}
      <path d="M6 38C16 38 32 38 42 38" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

// 9. SƠ ĐỒ BẢN ĐỒ TỔNG THỂ (Campus Map & Compass Rose)
export function MapBlueprintIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Trang bản đồ gấp nếp 3 phần */}
      <path
        d="M6 10L16 6L28 10L38 6V34L28 38L16 34L6 38V10Z"
        fill="#fff5f8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Nếp gấp bản đồ */}
      <path d="M16 6V34" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M28 10V38" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Lộ trình nét đứt trên bản đồ */}
      <path d="M11 26C15 24 18 28 22 24C25 21 28 25 33 20" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="2 2" />
      {/* Điểm đích đến (Đánh dấu hình thoi sao) */}
      <circle cx="33" cy="20" r="3" fill="#fff" stroke={color} strokeWidth="1.6" />
      <circle cx="33" cy="20" r="1.2" fill={color} />
    </svg>
  );
}

// 10. CỔNG TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG (University Grand Gate Portal)
export function UniversityGateIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Hai cột cổng chính */}
      <rect x="7" y="12" width="6" height="26" rx="1.5" fill="#fff0f4" stroke={color} strokeWidth="1.8" />
      <rect x="31" y="12" width="6" height="26" rx="1.5" fill="#fff0f4" stroke={color} strokeWidth="1.8" />
      {/* Chóp cột cổng */}
      <path d="M5 12H15L10 7L5 12Z" fill="#fedae3" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M29 12H39L34 7L29 12Z" fill="#fedae3" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      {/* Vòm cổng phía trên kết nối 2 bên */}
      <path d="M13 18C18 13 26 13 31 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13 22C18 17 26 17 31 22" stroke="#d8456f" strokeWidth="1.4" strokeLinecap="round" />
      {/* Họa tiết song sắt cổng uốn lượn */}
      <path d="M22 15V38" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 24V38" stroke="#f48ea8" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M27 24V38" stroke="#f48ea8" strokeWidth="1.2" strokeLinecap="round" />
      {/* Mặt đất / tam cấp */}
      <path d="M4 38H40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 11. TƯỢNG ĐÀI BÁC TÔN CHECK-IN (Memorial Monument Pedestal)
export function MonumentIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Bệ đài tam cấp */}
      <rect x="8" y="34" width="28" height="4" rx="1" fill="#fedae3" stroke={color} strokeWidth="1.6" />
      <rect x="12" y="29" width="20" height="5" rx="1" fill="#fff5f8" stroke={color} strokeWidth="1.6" />
      {/* Trụ tượng đài vươn cao */}
      <path d="M15 29L17 12H27L29 29Z" fill="#fff0f4" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      {/* Ngôi sao danh dự & vòng nguyệt quế trên tượng đài */}
      <circle cx="22" cy="18" r="4.5" fill="#fff" stroke={color} strokeWidth="1.4" />
      <path d="M22 15L23 17.5H25.5L23.5 19L24.5 21.5L22 20L19.5 21.5L20.5 19L18.5 17.5H21L22 15Z" fill="#d8456f" />
      {/* Tia sáng rạng rỡ */}
      <path d="M22 8V5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 8L16 10" stroke="#d8456f" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M30 8L28 10" stroke="#d8456f" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// 12. PHÁO HOA CHÚC MỪNG TỐT NGHIỆP (Celebration Fireworks Starburst)
export function FireworksIllustration({ width = 32, height = 32, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Tâm sao rực rỡ */}
      <circle cx="20" cy="20" r="2.5" fill={color} />
      {/* Các tia pháo hoa chính */}
      <path d="M20 13V5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 27V35" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M13 20H5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M27 20H35" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Các tia chéo vút lên */}
      <path d="M15 15L9 9" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25 25L31 31" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25 15L31 9" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 25L9 31" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" />
      {/* Các đốm sáng lấp lánh (sparkle dots) */}
      <circle cx="20" cy="2" r="1.2" fill="#d8456f" />
      <circle cx="38" cy="20" r="1.2" fill="#d8456f" />
      <circle cx="20" cy="38" r="1.2" fill="#d8456f" />
      <circle cx="2" cy="20" r="1.2" fill="#d8456f" />
    </svg>
  );
}

// 13. BÚT LÔNG NGỖNG KÝ TÊN TÂN CỬ NHÂN (Quill Pen & Signature Ink)
export function QuillPenIllustration({ width = 34, height = 34, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ngòi lông ngỗng uốn lượn */}
      <path
        d="M34 6C34 6 22 10 18 20C15 27 12 34 11 37L15 36C18 31 23 26 29 20C34 15 36 8 34 6Z"
        fill="#fff0f4"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sống lông vũ */}
      <path d="M33 7L11 37" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Nét mực ký uốn lượn dưới ngòi bút */}
      <path d="M8 38C11 36 14 40 18 38C22 36 24 39 28 38" stroke="#d8456f" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 14. ĐIỆN THOẠI CỔ ĐIỂN TINH TẾ (Classic Handset Phone Line-Art)
export function VintagePhoneIllustration({ width = 28, height = 28, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Ống nghe điện thoại mềm mại */}
      <path
        d="M8 12C9 9 12 8 14 10L16 12C17.5 13.5 17 15.5 15.5 17C18.5 20 20 21.5 23 24.5C24.5 23 26.5 22.5 28 24L30 26C32 28 31 31 28 32C23 33.5 15 27 8 20C5 17 4 14 8 12Z"
        fill="#fff0f4"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sóng âm thanh lan tỏa */}
      <path d="M22 9C25 10 27 12 28 15" stroke="#d8456f" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M25 6C29 8 32 11 33 15" stroke="#f48ea8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// 15. LÁ THƯ GẮN DẤU NIÊM PHONG (Sealed Letter Message)
export function SealedLetterIllustration({ width = 28, height = 28, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Phong bì thư nét vẽ tay */}
      <rect x="4" y="8" width="28" height="20" rx="3" fill="#fff5f8" stroke={color} strokeWidth="1.8" />
      <path d="M5 9L18 20L31 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dấu sáp trái tim niêm phong */}
      <circle cx="18" cy="20" r="3.8" fill="#e4577e" stroke="#fff" strokeWidth="1" />
      <path d="M18 19C17 17.5 15.5 18 15.5 19.2C15.5 20.5 18 22 18 22C18 22 20.5 20.5 20.5 19.2C20.5 18 19 17.5 18 19Z" fill="#fff" />
    </svg>
  );
}

// 16. LỊCH ĐỂ BÀN NGÀY LỄ TỐT NGHIỆP (Graduation Date Calendar Sketch)
export function CalendarDateIllustration({ width = 24, height = 24, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="26" height="22" rx="3" fill="#fff5f8" stroke={color} strokeWidth="1.8" />
      <path d="M3 13H29" stroke={color} strokeWidth="1.6" />
      {/* 2 khuy treo lịch */}
      <path d="M9 3V7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M23 3V7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Con số ngày 17 thanh mảnh */}
      <text x="16" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Playfair Display, serif" fill={color}>17</text>
    </svg>
  );
}

// 17. KIM LA BÀN CHỈ ĐƯỜNG (Elegant Compass Motif)
export function CompassRoseIllustration({ width = 24, height = 24, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth="1.8" />
      <circle cx="16" cy="16" r="10.5" stroke="#f48ea8" strokeWidth="1" strokeDasharray="2 2" />
      {/* Kim hoa tiêu 4 hướng */}
      <path d="M16 6L18.5 16L16 14L13.5 16L16 6Z" fill={color} />
      <path d="M16 26L13.5 16L16 18L18.5 16L16 26Z" fill="#fedae3" stroke={color} strokeWidth="0.8" />
      <path d="M6 16L16 13.5L14 16L16 18.5L6 16Z" fill="#fedae3" stroke={color} strokeWidth="0.8" />
      <path d="M26 16L16 18.5L18 16L16 13.5L26 16Z" fill="#fedae3" stroke={color} strokeWidth="0.8" />
      <circle cx="16" cy="16" r="1.5" fill="#fff" stroke={color} strokeWidth="1" />
    </svg>
  );
}

// 18. THẺ CĂN CƯỚC CCCD / THẺ SINH VIÊN (ID Card Illustration)
export function IdCardIllustration({ width = 38, height = 38, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Khung thẻ bo tròn */}
      <rect x="5" y="10" width="34" height="24" rx="4" fill="#fff5f8" stroke={color} strokeWidth="1.8" />
      {/* Dải khuy kẹp dây đeo thẻ ở trên */}
      <path d="M18 10V6C18 4.8 19 4 20 4H24C25 4 26 4.8 26 6V10" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="22" cy="7" r="1.2" fill={color} />
      {/* Khung ảnh thẻ chân dung bên trái */}
      <rect x="9" y="15" width="9" height="11" rx="1.5" fill="#fedae3" stroke={color} strokeWidth="1.2" />
      <circle cx="13.5" cy="18.5" r="2.2" fill={color} />
      <path d="M10.5 24.5C11 22.5 12 21.5 13.5 21.5C15 21.5 16 22.5 16.5 24.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Các dòng thông tin thẻ */}
      <line x1="22" y1="16" x2="34" y2="16" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="22" y1="20" x2="32" y2="20" stroke="#f48ea8" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="22" y1="24" x2="29" y2="24" stroke="#f48ea8" strokeWidth="1.3" strokeLinecap="round" />
      {/* Chip từ vi mạch bảo mật */}
      <rect x="9" y="28" width="6" height="3.5" rx="0.8" fill="#d8456f" />
    </svg>
  );
}

// 19. MÃ SỐ SINH VIÊN & HUY HIỆU XÁC MINH (Student Code Verification Crest)
export function StudentCodeIllustration({ width = 38, height = 38, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Tấm thẻ / Bảng mã số trang nhã */}
      <rect x="6" y="8" width="32" height="28" rx="4" fill="#fff5f8" stroke={color} strokeWidth="1.8" />
      {/* Nón tốt nghiệp nhỏ ở góc trên */}
      <path d="M16 13L22 10L28 13L22 16L16 13Z" fill="#fedae3" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M19 14.5V17C19 17 20.5 18 22 18C23.5 18 25 17 25 17V14.5" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      {/* Dấu tích kiểm tra / xác thực an ninh */}
      <circle cx="31" cy="12" r="3.5" fill="#fff" stroke="#d8456f" strokeWidth="1.3" />
      <path d="M29.5 12L30.8 13.3L32.8 10.8" stroke="#d8456f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Khung số MSSV nổi bật */}
      <rect x="10" y="21" width="24" height="9" rx="2" fill="#ffe0ea" stroke={color} strokeWidth="1" strokeDasharray="2 1.5" />
      {/* Vạch mã số sinh viên */}
      <line x1="13" y1="24" x2="13" y2="27" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="16" y2="27" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="19" y1="24" x2="19" y2="27" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="22" y1="24" x2="22" y2="27" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="25" y1="24" x2="25" y2="27" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="24" x2="28" y2="27" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="31" y1="24" x2="31" y2="27" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Nét đáy */}
      <line x1="12" y1="32" x2="32" y2="32" stroke="#f48ea8" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// 20. BẢO VỆ TÀI SẢN & TƯ TRANG CẨN THẬN (Security Lock & Personal Handbag)
export function SecurityShieldBagIllustration({ width = 38, height = 38, color = "#b83358", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Túi xách / ví tay trang nhã */}
      <path
        d="M9 19L11 36C11 37.5 12.5 38.5 14 38.5H30C31.5 38.5 33 37.5 33 36L35 19C35 17.5 33.8 16 32 16H12C10.2 16 9 17.5 9 19Z"
        fill="#fff5f8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Quai túi thanh lịch */}
      <path d="M16 16V11C16 8 18.5 6 22 6C25.5 6 28 8 28 11V16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Nắp túi uốn lượn */}
      <path d="M9 19C15 23 29 23 35 19" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Ổ khóa an toàn bảo vệ tài sản */}
      <rect x="18.5" y="24" width="7" height="6" rx="1.5" fill="#d8456f" stroke="#fff" strokeWidth="0.8" />
      <path d="M20 24V21.5C20 20.5 20.8 19.5 22 19.5C23.2 19.5 24 20.5 24 21.5V24" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="22" cy="27" r="0.8" fill="#fff" />
      {/* Khiên bảo vệ nhẹ nhàng xung quanh */}
      <path d="M6 24C6 33 13 38 22 41" stroke="#f48ea8" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M38 24C38 33 31 38 22 41" stroke="#f48ea8" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

// 21. HUÂN CHƯƠNG TỐT NGHIỆP CỬ NHÂN XUẤT SẮC (Graduation Honor Medal)
export function AwardMedalIllustration({ width = 38, height = 38, color = "#f59e0b", className = "" }) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" className={`grad-illustration ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Dải ruy băng rủ hai bên */}
      <path d="M16 6L11 22L18 20L19 12" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M28 6L33 22L26 20L25 12" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Vòng huy chương vàng tròn */}
      <circle cx="22" cy="27" r="12" fill="#fffbeb" stroke={color} strokeWidth="2" />
      <circle cx="22" cy="27" r="9.5" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 1.5" />
      {/* Ngôi sao cử nhân ở giữa huy chương */}
      <path
        d="M22 21L23.8 24.6L27.8 25.2L24.9 28L25.6 32L22 30.1L18.4 32L19.1 28L16.2 25.2L20.2 24.6L22 21Z"
        fill={color}
        stroke="#d97706"
        strokeWidth="0.8"
      />
    </svg>
  );
}


