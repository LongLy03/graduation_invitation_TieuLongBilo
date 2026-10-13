import React from 'react';
import {
  GraduationLaurelEmblem,
  ClockTimeIllustration,
  MeadowParkIllustration,
  QuillPenIllustration
} from './GraduationIllustrations';
import RsvpSection from './RsvpSection';

export default function SeeYouSection({ guestName }) {
  return (
    <section id="hen-gap" className="section-container see-you-section">
      <div className="see-you-card-wrapper">
        <div className="see-you-card-inner">

          {/* Huy hiệu tốt nghiệp nguyệt quế nghệ thuật */}
          <div className="see-you-art-crest">
            <GraduationLaurelEmblem width={60} height={60} />
          </div>

          <span className="see-you-badge">LỜI CẢM ƠN & HẸN GẶP</span>

          <h2 className="see-you-title">
            Hẹn Gặp {guestName || 'Quý Khách & Bạn Thân Mến'}!
          </h2>

          <p className="see-you-message">
            Sự hiện diện và những lời chúc tốt đẹp của bạn là niềm vinh hạnh, niềm vui vô cùng to lớn
            đối với Lý Tiểu Long trong ngày lễ tốt nghiệp đại học này.
          </p>

          <div className="see-you-time-location-box">
            <div className="stl-item">
              <span className="stl-icon" aria-hidden="true">
                <ClockTimeIllustration width={19} height={19} color="#1d4ed8" />
              </span>
              <span className="stl-label">Thời gian:</span>
              <span className="stl-value">10h00 - 12h00 trưa | Thứ Bảy, 17/10/2026</span>
            </div>
            <div className="stl-item">
              <span className="stl-icon" aria-hidden="true">
                <MeadowParkIllustration width={20} height={20} color="#1d4ed8" />
              </span>
              <span className="stl-label">Địa điểm:</span>
              <span className="stl-value">Thảm cỏ đối diện nhà thi đấu — Trường Đại học Tôn Đức Thắng</span>
            </div>
          </div>

          {/* CHỨC NĂNG XÁC NHẬN THAM GIA LỄ TỐT NGHIỆP */}
          <RsvpSection guestName={guestName} />

          <div className="see-you-signature-area">
            <span className="see-you-sub">Chân thành cảm ơn và trân trọng đón tiếp,</span>
            <div className="see-you-signature-row">
              <span className="signature-inline-icon">
                <QuillPenIllustration width={26} height={26} color="#d4af37" />
              </span>
              <span className="see-you-signature">Lý Tiểu Long</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
