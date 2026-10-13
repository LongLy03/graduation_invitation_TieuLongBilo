import React, { useState } from 'react';
import {
  CompassRoseIllustration,
  MeadowParkIllustration,
  MapBlueprintIllustration,
  UniversityGateIllustration,
  MonumentIllustration
} from './GraduationIllustrations';

export default function LocationGuideSection() {
  const [selectedLocationImg, setSelectedLocationImg] = useState(null);

  const address = "Trường Đại học Tôn Đức Thắng - Số 19 Nguyễn Hữu Thọ, Phường Tân Hưng, TP. Hồ Chí Minh";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Trường Đại học Tôn Đức Thắng, 19 Nguyễn Hữu Thọ, Phường Tân Hưng, Hồ Chí Minh")}`;

  const locationGuides = [
    {
      img: '/location/toa-a.webp',
      tag: 'ĐỊA ĐIỂM GẶP MẶT',
      art: <MeadowParkIllustration width={24} height={24} color="#b83358" />,
      title: 'Thảm Cỏ Đối Diện Nhà Thi Đấu — Điểm Hẹn Gặp & Chụp Ảnh',
      desc: 'Khu vực thảm cỏ thoáng mát đối diện nhà thi đấu là địa điểm gặp mặt, đón tiếp khách mời và chụp ảnh kỷ niệm cùng Tiểu Long lúc 10h00 - 12h00 trưa. Hướng dẫn đường đi đến thảm cỏ là đi qua cầu phía sau Tòa A.',
    },
    {
      img: '/location/ban-do-chi-tiet.webp',
      tag: 'SƠ ĐỒ TỔNG THỂ',
      art: <MapBlueprintIllustration width={24} height={24} color="#b83358" />,
      title: 'Bản Đồ Chi Tiết Khuôn Viên Trường',
      desc: 'Sơ đồ định vị toàn bộ khuôn viên trường: Vị trí Cổng 7, bãi đỗ xe máy và ô tô, Tòa A và lối đi qua cầu đến thảm cỏ đối diện nhà thi đấu.',
    },
    {
      img: '/location/cac-cong-truong-tdtu.webp',
      tag: 'CỔNG VÀO TRƯỜNG',
      art: <UniversityGateIllustration width={24} height={24} color="#b83358" />,
      title: 'Hướng Dẫn Cổng Vào & Bãi Đỗ Xe (Cổng 7)',
      desc: 'Xe máy và xe ô tô đi vào bằng Cổng 7. Sau khi vào trường, theo hướng dẫn đường đi đến thảm cỏ là đi qua cầu phía sau Tòa A.',
    },
    {
      img: '/location/tuong-dai-bac-ton.webp',
      tag: 'ĐIỂM CHECK-IN',
      art: <MonumentIllustration width={24} height={24} color="#b83358" />,
      title: 'Tượng Đài Bác Tôn — Check-in Kỷ Niệm',
      desc: 'Khu vực quảng trường Tượng đài Bác Tôn nằm ngay trung tâm trường, là điểm chụp ảnh kỷ niệm tuyệt đẹp cùng tân cử nhân sau buổi lễ.',
    },
  ];

  return (
    <section id="huong-dan-di" className="section-container location-guide-section">
      <div className="section-title-wrapper">
        <div className="school-logo-badge">
          <img src="/location/tdtu-logo.webp" alt="Logo Trường Đại học Tôn Đức Thắng" className="school-logo-img" />
        </div>
        <span className="section-badge">ĐỊA ĐIỂM & CHỈ ĐƯỜNG</span>
        <h2 className="section-main-title">Hướng Dẫn Đường Đi</h2>
        <p className="section-subtitle">
          Thông tin chi tiết các tòa nhà, cổng vào và sơ đồ khuôn viên Trường Đại học Tôn Đức Thắng
        </p>
        <div className="section-title-divider"></div>
      </div>

      {/* Main Address Banner */}
      <div className="location-address-card">
        <div className="address-left-info">
          <div className="addr-tag-row">
            <span className="addr-inline-icon">
              <CompassRoseIllustration width={20} height={20} color="#b83358" />
            </span>
            <span className="addr-tag">ĐỊA ĐIỂM GẶP MẶT & ĐÓN TIẾP:</span>
          </div>
          <h3 className="addr-title">Thảm Cỏ Đối Diện Nhà Thi Đấu — Trường Đại học Tôn Đức Thắng</h3>
          <p className="addr-desc">{address}</p>

          <div className="parking-notes-list">
            <div className="parking-note-row">
              <span className="parking-note-text"><strong>Thời gian đón tiếp:</strong> 10h00 - 12h00 trưa | Thứ Bảy, 17/10/2026</span>
            </div>
            <div className="parking-note-row">
              <span className="parking-note-text"><strong>Cổng vào & gửi xe:</strong> Xe máy và xe ô tô đi vào bằng Cổng 7.</span>
            </div>
            <div className="parking-note-row">
              <span className="parking-note-text"><strong>Đường đi đến thảm cỏ:</strong> Đi qua cầu phía sau Tòa A.</span>
            </div>
          </div>
        </div>

        <div className="address-right-action">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-maps-large"
          >
            <CompassRoseIllustration width={18} height={18} color="#ffffff" />
            <span>Mở Google Maps</span>
          </a>
        </div>
      </div>

      {/* Visual Guide Cards with Location Images */}
      <div className="location-gallery-grid">
        {locationGuides.map((item, idx) => (
          <div
            key={idx}
            className="location-card-item"
            onClick={() => setSelectedLocationImg(item)}
          >
            <div className="location-img-wrapper">
              <img
                src={item.img}
                alt={item.title}
                className="location-guide-img"
                loading="lazy"
              />
              <span className="location-pill-tag">{item.tag}</span>
              <div className="location-img-overlay">
                <span className="overlay-zoom-text">Bấm để phóng to ảnh</span>
              </div>
            </div>
            <div className="location-card-content">
              <div className="location-card-title-row">
                <span className="location-title-art">{item.art}</span>
                <h4 className="location-card-title">{item.title}</h4>
              </div>
              <p className="location-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Interactive Map */}
      <div className="location-embed-map-box">
        <div className="embed-map-header">
          <span>Bản đồ trực tuyến — Trường Đại học Tôn Đức Thắng</span>
        </div>
        <iframe
          title="Bản Đồ Trường Đại học Tôn Đức Thắng"
          src="https://maps.google.com/maps?q=19%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D,%20T%C3%A2n%20Phong,%20Qu%E1%BA%ADn%207,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: '0 0 20px 20px', display: 'block' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Lightbox Modal for Location Images */}
      {selectedLocationImg && (
        <div className="lightbox-backdrop" onClick={() => setSelectedLocationImg(null)}>
          <div className="lightbox-modal location-lightbox" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedLocationImg(null)}
              aria-label="Đóng"
            >
              &times;
            </button>
            <img
              src={selectedLocationImg.img}
              alt={selectedLocationImg.title}
              className="lightbox-full-img"
            />
            <div className="lightbox-caption-bar">
              <h4>{selectedLocationImg.title}</h4>
              <p>{selectedLocationImg.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
