import React from 'react';
import {
  IdCardIllustration,
  StudentCodeIllustration,
  SecurityShieldBagIllustration
} from './GraduationIllustrations';

export default function NotesSection() {
  const notes = [
    {
      num: '01',
      title: 'Giấy Tờ Tùy Thân',
      art: <IdCardIllustration width={34} height={34} />,
      highlight: 'CCCD / Thẻ Sinh Viên',
      desc: 'Mang theo CCCD để xuất trình khi vào cổng (thẻ SV đối với sinh viên trường).',
    },
    {
      num: '02',
      title: 'Mã Số Sinh Viên',
      art: <StudentCodeIllustration width={34} height={34} />,
      highlight: 'MSSV: 52200168',
      desc: 'Đọc mã số sinh viên 52200168 (trường hợp bảo vệ có hỏi).',
    },
    {
      num: '03',
      title: 'Bảo Vệ Tài Sản & Tư Trang',
      art: <SecurityShieldBagIllustration width={34} height={34} />,
      highlight: 'Cẩn thận đồ có giá trị',
      desc: 'Mang ít đồ có giá trị, bảo vệ tài sản, tư trang cẩn thận phòng trường hợp đông người, kẻ xấu lợi dụng lấy cắp.',
    },
  ];

  return (
    <section id="luu-y" className="section-container notes-section">
      <div className="section-title-wrapper">
        <span className="section-badge">GỢI Ý & LƯU Ý</span>
        <h2 className="section-main-title">Những Lưu Ý Nhỏ</h2>
        <p className="section-subtitle">Một vài lưu ý quan trọng để buổi lễ tốt nghiệp diễn ra trọn vẹn và chu đáo nhất</p>
        <div className="section-title-divider"></div>
      </div>

      <div className="notes-cards-container">
        {notes.map((item, idx) => (
          <div key={idx} className="note-card-deluxe">
            <div className="note-top-badge-row">
              <span className="note-badge-tag">LƯU Ý {item.num}</span>
            </div>

            <div className="note-title-with-icon-row">
              <span className="note-inline-art">{item.art}</span>
              <h3 className="note-deluxe-title">{item.title}</h3>
            </div>

            <div className="note-deluxe-highlight">{item.highlight}</div>
            <p className="note-deluxe-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
