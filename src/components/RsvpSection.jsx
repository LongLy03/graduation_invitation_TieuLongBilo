import React, { useState } from 'react';
import {
  GraduationCapIllustration,
  FlowerBouquetIllustration,
  SealedLetterIllustration
} from './GraduationIllustrations';
import { triggerGraduationConfetti } from '../utils/confetti';
import { RSVP_CONFIG, getRsvpScriptUrl } from '../config/rsvpConfig';

export default function RsvpSection({ guestName }) {
  // Lấy trạng thái đã lưu trước đó từ localStorage (nếu có)
  const [status, setStatus] = useState(() => {
    if (typeof window === 'undefined') return '';
    try {
      const saved = localStorage.getItem('graduation_rsvp_record');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.status) return parsed.status;
      }
    } catch {
      // ignore
    }
    return '';
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingStatus, setPendingStatus] = useState('');

  // Hàm xử lý khi bấm vào 1 trong 2 nút: "Sẽ tham dự" hoặc "Không tham dự"
  const handleSelectStatus = async (chosenStatus) => {
    if (isSubmitting) return;

    const currentGuestName = guestName || 'Khách quý';
    setPendingStatus(chosenStatus);
    setIsSubmitting(true);

    const scriptUrl = getRsvpScriptUrl();
    let synced = false;

    // Gửi thông tin vào Google Sheet qua Webhook Google Apps Script
    if (scriptUrl) {
      try {
        const formData = new URLSearchParams();
        // Cột 1: Tên người được mời
        formData.append('name', currentGuestName);
        // Cột 2: Trạng thái họ chọn
        formData.append('status', chosenStatus);

        // Gửi qua POST
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });
        synced = true;
      } catch (err) {
        console.warn('Lỗi khi gửi POST, thử gửi qua GET:', err);
        try {
          const getUrl = `${scriptUrl}?name=${encodeURIComponent(currentGuestName)}&status=${encodeURIComponent(chosenStatus)}`;
          await fetch(getUrl, { mode: 'no-cors' });
          synced = true;
        } catch (e2) {
          console.error('Lỗi khi gửi dữ liệu sang Google Sheet:', e2);
        }
      }
    }

    const newRecord = {
      name: currentGuestName,
      status: chosenStatus,
      time: new Date().toLocaleString('vi-VN'),
      syncedToSheet: synced,
    };

    // Lưu vào localStorage trên máy khách
    try {
      localStorage.setItem('graduation_rsvp_record', JSON.stringify(newRecord));
    } catch (e) {
      console.warn('Lỗi lưu localStorage:', e);
    }

    setStatus(chosenStatus);
    setIsSubmitting(false);
    setPendingStatus('');

    // Nếu chọn Sẽ tham dự, kích hoạt hiệu ứng pháo hoa chúc mừng
    if (chosenStatus === 'Sẽ tham dự') {
      triggerGraduationConfetti();
    }
  };

  return (
    <div className="rsvp-container-box">
      <div className="rsvp-inner-frame">

        {/* Tiêu đề ngắn gọn, trang nhã */}
        <div className="rsvp-header-group">
          <span className="rsvp-mini-badge">
            <SealedLetterIllustration width={15} height={15} color="#1d4ed8" />
            <span>XÁC NHẬN THAM DỰ</span>
          </span>
          <h3 className="rsvp-main-heading">
            Bạn Sẽ Đến Chung Vui Cùng Tiểu Long Chứ?
          </h3>
          <p className="rsvp-sub-desc">
            Vui lòng chọn để Lý Tiểu Long và gia đình sắp xếp đón tiếp chu đáo nhất nhé!
          </p>
        </div>

        {/* CHỈ CÓ 2 NÚT BẤM DUY NHẤT: SẼ THAM DỰ VÀ KHÔNG THAM DỰ */}
        <div className="rsvp-buttons-row">

          {/* NÚT 1: SẼ THAM DỰ */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSelectStatus('Sẽ tham dự')}
            className={`btn-rsvp-choice btn-rsvp-yes ${status === 'Sẽ tham dự' ? 'is-selected' : ''}`}
          >
            <div className="btn-choice-icon-wrap">
              {isSubmitting && pendingStatus === 'Sẽ tham dự' ? (
                <span className="spinner-loader-small"></span>
              ) : status === 'Sẽ tham dự' ? (
                <span className="btn-choice-check">✓</span>
              ) : (
                <GraduationCapIllustration width={28} height={28} color="#1d4ed8" />
              )}
            </div>
            <div className="btn-choice-text-group">
              <strong className="btn-choice-main-title">Sẽ tham dự</strong>
              <span className="btn-choice-sub-desc">Chắc chắn đến chung vui 🎉</span>
            </div>
          </button>

          {/* NÚT 2: KHÔNG THAM DỰ */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSelectStatus('Không tham dự')}
            className={`btn-rsvp-choice btn-rsvp-no ${status === 'Không tham dự' ? 'is-selected' : ''}`}
          >
            <div className="btn-choice-icon-wrap">
              {isSubmitting && pendingStatus === 'Không tham dự' ? (
                <span className="spinner-loader-small"></span>
              ) : status === 'Không tham dự' ? (
                <span className="btn-choice-check">✓</span>
              ) : (
                <FlowerBouquetIllustration width={28} height={28} color="#64748b" />
              )}
            </div>
            <div className="btn-choice-text-group">
              <strong className="btn-choice-main-title">Không tham dự</strong>
              <span className="btn-choice-sub-desc">Rất tiếc không thể đến 💐</span>
            </div>
          </button>

        </div>

        {/* THÔNG BÁO XÁC NHẬN NGAY BÊN DƯỚI KHI ĐÃ CHỌN */}
        {status && (
          <div className="rsvp-feedback-banner animate-fade-in">
            {status === 'Sẽ tham dự' ? (
              <div className="feedback-content feedback-yes">
                <span className="feedback-icon">🎉</span>
                <p>
                  Đã ghi nhận: <strong>{guestName || 'Bạn'} sẽ tham dự</strong>.
                  Hẹn gặp bạn lúc 10h00 - 12h00 trưa ngày 17/10/2026 nhé!
                </p>
              </div>
            ) : (
              <div className="feedback-content feedback-no">
                <span className="feedback-icon">💙</span>
                <p>
                  Đã ghi nhận: <strong>{guestName || 'Bạn'} không thể tham dự</strong>.
                  Lý Tiểu Long cảm ơn tình cảm và lời chúc của bạn nhiều lắm!
                </p>
              </div>
            )}
          </div>
        )}

        {/* TIỆN ÍCH DÀNH CHO CHỦ TIỆC: THEO DÕI VÀ KẾT NỐI GOOGLE SHEET
        <div className="rsvp-sheet-tools">
          <a 
            href={RSVP_CONFIG.SHEET_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rsvp-sheet-link-btn"
            title="Mở Google Sheet để xem dữ liệu phản hồi"
          >
            <span>📊 Xem Google Sheet của bạn</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div> */}

      </div>
    </div>
  );
}
