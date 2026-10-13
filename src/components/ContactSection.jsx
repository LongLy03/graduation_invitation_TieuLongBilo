import React from 'react';
import {
  GraduationCapIllustration,
  FlowerBouquetIllustration,
  VintagePhoneIllustration,
  SealedLetterIllustration,
  MeadowParkIllustration
} from './GraduationIllustrations';

export default function ContactSection() {
  const contacts = [
    {
      role: 'Tân Cử Nhân - Lý Tiểu Long',
      phone: '036 4127 144',
      desc: 'Liên hệ khi đến trường',
      illustration: <GraduationCapIllustration width={44} height={44} />,
      zaloUrl: 'https://zalo.me/0364127144',
    },
    {
      role: 'Đại Diện Gia Đình',
      phone: '093 883 4124',
      desc: 'Hỗ trợ đón tiếp khách mời',
      illustration: <FlowerBouquetIllustration width={44} height={44} />,
      zaloUrl: 'https://zalo.me/0938834124',
    },
  ];

  return (
    <section id="thong-tin-lien-lac" className="section-container contact-section">
      <div className="section-title-wrapper">
        <span className="section-badge">LIÊN HỆ & ĐÓN TIẾP</span>
        <h2 className="section-main-title">Thông Tin Liên Lạc</h2>
        <p className="section-subtitle">
          Quý khách vui lòng liên hệ nếu cần hỗ trợ khi đến tham dự buổi lễ
        </p>
        <div className="section-title-divider"></div>
      </div>

      <div className="contact-cards-grid">
        {contacts.map((c, idx) => (
          <div key={idx} className="contact-card-box">
            <div className="contact-art-halo">
              {c.illustration}
            </div>

            <div className="contact-role-pill">{c.role}</div>
            <p className="contact-person-desc">{c.desc}</p>

            <div className="contact-phone-display">
              <div className="phone-line-header">
                <span className="phone-inline-icon">
                  <VintagePhoneIllustration width={18} height={18} color="#1d4ed8" />
                </span>
                <span className="phone-label">Điện thoại liên hệ</span>
              </div>
              <strong className="phone-number-text">{c.phone}</strong>
            </div>

            <div className="contact-btn-group">
              <a href={c.zaloUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-zalo-now">
                <SealedLetterIllustration width={18} height={18} color="#0068ff" />
                <span>Nhắn Zalo</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="hall-reception-notice">
        <div className="reception-art-badge">
          <MeadowParkIllustration width={34} height={34} />
        </div>
        <div className="hall-reception-text">
          <div className="reception-line-primary">
            <strong>Địa điểm gặp mặt & đón tiếp:</strong> Thảm cỏ đối diện nhà thi đấu — Trường Đại học Tôn Đức Thắng.
          </div>
          <div className="reception-line-secondary">
            Gia đình và Tiểu Long trân trọng đón tiếp em/bạn/anh chị vào lúc 10h00 - 12h00 trưa.
          </div>
        </div>
      </div>
    </section>
  );
}
