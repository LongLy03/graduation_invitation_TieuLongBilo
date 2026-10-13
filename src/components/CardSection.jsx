import React from 'react';
import { 
  CalendarDateIllustration, 
  CompassRoseIllustration, 
  ClockTimeIllustration, 
  MeadowParkIllustration,
  GraduationLaurelEmblem
} from './GraduationIllustrations';

export default function CardSection({ guestName }) {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Lễ Tốt Nghiệp của Lý Tiểu Long");
    const details = encodeURIComponent(
      "Trân trọng kính mời tham dự Lễ tốt nghiệp cử nhân của Lý Tiểu Long.\nĐịa điểm: Thảm cỏ đối diện nhà thi đấu - Trường Đại học Tôn Đức Thắng.\nThời gian: từ 10h00 tới 12h00 trưa."
    );
    const location = encodeURIComponent("Thảm cỏ đối diện nhà thi đấu, Trường Đại học Tôn Đức Thắng - 19 Nguyễn Hữu Thọ, Phường Tân Hưng, TP.HCM");
    const dates = "20261017T030000Z/20261017T050000Z";
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <section id="thiep" className="card-section-wrapper">
      {/* TẤM THIỆP CHÍNH THIẾT KẾ HOÀNG GIA SANG TRỌNG */}
      <div className="card-outer-sheet cool-academic-card luxury-card-elevation">

        {/* Khung viền chỉ vàng hoàng gia & hoa văn góc nghệ thuật */}
        <div className="card-royal-corner corner-tl" aria-hidden="true" />
        <div className="card-royal-corner corner-tr" aria-hidden="true" />
        <div className="card-royal-corner corner-bl" aria-hidden="true" />
        <div className="card-royal-corner corner-br" aria-hidden="true" />

        {/* 1. Huy hiệu đỉnh thiệp: Nguyệt quế cử nhân & Tên trường */}
        <div className="card-heraldic-header">
          <div className="card-crest-halo">
            <GraduationLaurelEmblem width={54} height={54} color="#d97706" leafFill="#fef3c7" capFill="#fffbeb" tasselColor="#b45309" />
          </div>
          <div className="card-institution-badge">
            <span className="inst-sub">TRƯỜNG ĐẠI HỌC TÔN ĐỨC THẮNG</span>
            <div className="inst-batch-pill">
              <span className="batch-star">✦</span>
              <span>KHÓA 2022 - 2026</span>
              <span className="batch-star">✦</span>
            </div>
          </div>
        </div>

        {/* 2. Tiêu đề thiệp: Lễ Tốt Nghiệp */}
        <div className="card-header-calligraphy">
          <div className="card-sub-cursive">
            <span className="title-flourish">✦</span>
            <span>Thư mời tham dự</span>
            <span className="title-flourish">✦</span>
          </div>
          <h2 className="card-main-title">LỄ TỐT NGHIỆP</h2>
          <div className="card-title-separator">
            <span className="separator-line"></span>
            <span className="separator-gem">◆</span>
            <span className="separator-line"></span>
          </div>
        </div>

        {/* 3. KHỐI VINH DANH HOÀNG GIA (BẢNG VINH DANH & KÍNH GỬI) */}
        <div className="card-honor-showcase-box royal-plaque-theme">

          {/* Dòng kính gửi người được mời */}
          <div className="card-guest-pill-badge">
            <span className="guest-badge-prefix">Kính gửi:</span>
            <span className="guest-badge-name">{guestName || 'Bạn Thân Mến'}</span>
          </div>

          <div className="plaque-inner-divider">
            <span className="divider-flourish">✧</span>
          </div>

          {/* Tên tân cử nhân */}
          <div className="graduate-identity-block">
            <div className="graduate-role-badge">
              <span>TÂN CỬ NHÂN</span>
            </div>
            <h3 className="graduate-signature-name">LÝ TIỂU LONG</h3>
            <div className="graduate-major-badge">
              <span className="major-icon">🎓</span>
              <span className="major-name">Khoa Công Nghệ Thông Tin</span>
            </div>
          </div>

        </div>

        {/* 4. THÔNG TIN THỜI GIAN & ĐỊA ĐIỂM (ICON NẰM CHUNG HÀNG VỚI CHỮ) */}
        <div className="card-event-info-pill cool-navy-pill">
          <div className="card-info-item">
            <span className="card-info-icon" aria-hidden="true">
              <ClockTimeIllustration width={22} height={22} color="#1d4ed8" />
            </span>
            <div className="card-info-text">
              <span className="info-main-date">Thứ Bảy, ngày 17/10/2026</span>
              <span className="info-sub-time">Thời gian đón tiếp: <strong>Từ 10h00 đến 12h00 trưa</strong></span>
            </div>
          </div>

          <div className="card-info-item">
            <span className="card-info-icon" aria-hidden="true">
              <MeadowParkIllustration width={24} height={24} color="#1d4ed8" />
            </span>
            <div className="card-info-text">
              <strong className="info-main-venue">Thảm cỏ đối diện nhà thi đấu — Trường Đại học Tôn Đức Thắng</strong>
              <span className="info-sub-address">Số 19 Nguyễn Hữu Thọ, Phường Tân Hưng, TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>

        {/* 5. NÚT THAO TÁC TIỆN ÍCH */}
        <div className="card-cta-row">
          <button onClick={handleAddToCalendar} className="btn-add-calendar cool-calendar-btn">
            <CalendarDateIllustration width={20} height={20} color="#ffffff" />
            <span>Thêm vào Google Calendar</span>
          </button>
          <a href="#huong-dan-di" className="btn-view-map-jump cool-map-jump">
            <CompassRoseIllustration width={20} height={20} color="#1d4ed8" />
            <span>Xem hướng dẫn đường đi</span>
          </a>
        </div>

      </div>
    </section>
  );
}
