import React, { useState, useEffect } from 'react';
import { triggerGraduationConfetti } from '../utils/confetti';
import {
  FireworksIllustration,
  GraduationCapIllustration
} from './GraduationIllustrations';

export default function CountdownSection() {
  // Thời gian lễ tốt nghiệp: 10:00 - 12:00 trưa ngày 17/10/2026
  const targetDate = new Date('2026-10-17T10:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="section-container countdown-section">
      <div className="section-title-wrapper">
        <span className="section-badge">ĐẾM NGƯỢC THỜI GIAN</span>
        <h2 className="section-main-title">Chờ Đón Khoảnh Khắc Tốt Nghiệp</h2>
        <p className="section-subtitle">Chỉ còn ít thời gian nữa là đến giờ phút thiêng liêng và ý nghĩa</p>
        <div className="section-title-divider"></div>
      </div>

      <div className="countdown-board-card">
        {/* Nón cử nhân trên đỉnh bảng đếm ngược */}
        <div className="countdown-top-art">
          <GraduationCapIllustration width={40} height={40} />
        </div>

        <div className="countdown-time-boxes">
          <div className="countdown-box">
            <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="countdown-label">NGÀY</div>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-box">
            <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">GIỜ</div>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-box">
            <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">PHÚT</div>
          </div>
          <span className="countdown-colon">:</span>
          <div className="countdown-box highlight-second">
            <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">GIÂY</div>
          </div>
        </div>

        <div className="countdown-footer-msg">
          <p>
            Hẹn gặp bạn vào lúc <strong>10h00 - 12h00 trưa Thứ Bảy, 17/10/2026</strong> tại Thảm cỏ đối diện nhà thi đấu — Trường Đại học Tôn Đức Thắng nhé!
          </p>
          <button
            onClick={triggerGraduationConfetti}
            className="btn-primary btn-celebrate"
          >
            <FireworksIllustration width={20} height={20} color="#ffffff" />
            <span>Bắn pháo hoa chúc mừng</span>
          </button>
        </div>
      </div>
    </section>
  );
}

