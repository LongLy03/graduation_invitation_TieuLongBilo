import React from 'react';
import { triggerGraduationConfetti } from '../utils/confetti';

export default function CoverScreen({ onOpenCard, guestName, isPlayingAudio, onToggleAudio }) {
  const handleOpen = () => {
    triggerGraduationConfetti();
    onOpenCard();
  };

  return (
    <div className="cover-screen-container cover-centered-theme">
      {/* Lớp nền gradient chuyển sắc mát mẻ mang không khí tốt nghiệp (Royal Deep Navy & Gold Glow) */}
      <div className="cover-cool-gradient-overlay" aria-hidden="true" />

      {/* Hiệu ứng bụi sao lấp lánh nhẹ nhàng */}
      <div className="cover-celestial-stars" aria-hidden="true">
        <span className="star-point star-1">✦</span>
        <span className="star-point star-2">✧</span>
        <span className="star-point star-3">✦</span>
        <span className="star-point star-4">✧</span>
        <span className="star-point star-5">✦</span>
        <span className="star-point star-6">✨</span>
      </div>

      {/* Bố cục chính: CĂN GIỮA TOÀN BỘ THEO ĐÚNG HÌNH 1 */}
      <div className="cover-centered-stage">

        {/* 1. Nón tốt nghiệp 3D ánh kim vàng rực rỡ với các tia sao lấp lánh */}
        <div className="cover-cap-hero-wrap">
          <span className="cap-sparkle cap-sparkle-top">✨</span>
          <span className="cap-sparkle cap-sparkle-left">✦</span>
          <span className="cap-sparkle cap-sparkle-right">✦</span>
          <span className="cap-sparkle cap-sparkle-bot">✧</span>

          <svg
            className="cover-golden-mortarboard-3d"
            width="88"
            height="88"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Nón cử nhân tốt nghiệp vàng ánh kim"
          >
            <defs>
              {/* Ánh kim vàng trên đỉnh nón */}
              <linearGradient id="goldCapTopGrad" x1="10" y1="20" x2="90" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="25%" stopColor="#f59e0b" />
                <stop offset="55%" stopColor="#d97706" />
                <stop offset="85%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              {/* Mặt vát dưới của nón */}
              <linearGradient id="goldCapUnderGrad" x1="20" y1="42" x2="80" y2="65" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>

              {/* Vành ôm đầu */}
              <linearGradient id="goldCapSkullGrad" x1="30" y1="48" x2="70" y2="78" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>

              {/* Tua nón vàng sáng */}
              <linearGradient id="goldTasselGrad" x1="50" y1="36" x2="86" y2="82" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>

              {/* Ánh hào quang tỏa ra */}
              <radialGradient id="capGlow" cx="50" cy="50" r="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#d97706" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Vòng hào quang nhẹ phía sau nón */}
            <circle cx="50" cy="46" r="42" fill="url(#capGlow)" />

            {/* Vành mũ ôm đầu */}
            <path
              d="M26 44V58C26 65 37 72 50 72C63 72 74 65 74 58V44"
              fill="url(#goldCapSkullGrad)"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />

            {/* Đáy chóp nón tạo khối 3D */}
            <polygon
              points="50,49 88,33 50,21 12,33"
              fill="url(#goldCapUnderGrad)"
            />

            {/* Đỉnh chóp nón hình thoi vát cạnh 3D */}
            <polygon
              points="50,47 88,31 50,15 12,31"
              fill="url(#goldCapTopGrad)"
              stroke="#fef08a"
              strokeWidth="1.6"
            />

            {/* Khuy tròn ở trung tâm chóp nón */}
            <circle cx="50" cy="31" r="3.2" fill="#fef08a" stroke="#b45309" strokeWidth="1" />

            {/* Dây tua nón uốn lượn sang phải */}
            <path
              d="M50 31 Q68 33 75 48 Q78 56 77 68"
              fill="none"
              stroke="url(#goldTasselGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Vòng khóa tua nón */}
            <circle cx="77" cy="68" r="2.4" fill="#fef08a" />

            {/* Chùm tua rua rủ xuống */}
            <path
              d="M74 70 L80 70 L81 83 L73 83 Z"
              fill="url(#goldTasselGrad)"
              stroke="#d97706"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* 2. Dòng chữ nghệ thuật: "✦ Thư mời tham dự ✦" */}
        <div className="cover-cursive-line">
          <span className="cursive-star-left">✦</span>
          <span className="cursive-main-phrase">Thư mời tham dự</span>
          <span className="cursive-star-right">✦</span>
        </div>

        {/* 3. Tiêu đề in hoa sang trọng: "LỄ TỐT NGHIỆP" */}
        <div className="cover-heading-container">
          <h1 className="cover-ceremony-gold-title">LỄ TỐT NGHIỆP</h1>
        </div>

        {/* 4. Từ nối nhẹ nhàng: "của" */}
        <div className="cover-connector-cursive">
          của
        </div>

        {/* 5. Tên cử nhân nổi bật to rõ: "LÝ TIỂU LONG" */}
        <div className="cover-graduate-gold-name">
          LÝ TIỂU LONG
        </div>

        {/* 6. Thêm tên người được mời (Yêu cầu 1) */}
        {guestName && (
          <div className="cover-guest-honor-badge">
            <span className="guest-badge-label">Kính gửi:</span>
            <span className="guest-badge-target-name">{guestName}</span>
          </div>
        )}

        {/* 7. Nút bấm MỞ THIỆP tròn dạng viên thuốc màu vàng như hình 1 */}
        <div className="cover-action-wrapper">
          <button
            onClick={handleOpen}
            className="cover-gold-pill-button"
            id="btn-open-invitation"
            aria-label="Mở thiệp tốt nghiệp"
          >
            <span>MỞ THIỆP</span>
            <span className="pill-arrow-icon" aria-hidden="true">→</span>
          </button>
        </div>

      </div>

      {/* 8. Nút bật/tắt âm thanh tròn nhỏ góc dưới bên trái (giống hình 1) */}
      <button
        onClick={onToggleAudio}
        className="cover-audio-circle-toggle"
        aria-label={isPlayingAudio ? "Tắt âm thanh nền" : "Bật âm thanh nền"}
        title={isPlayingAudio ? "Tắt âm thanh" : "Bật âm thanh"}
      >
        {isPlayingAudio ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#f8fafc"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#f8fafc"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>

    </div>
  );
}
