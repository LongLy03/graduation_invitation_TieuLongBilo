import React, { useState, useEffect, useRef } from 'react';
import CoverScreen from './components/CoverScreen';
import Navbar from './components/Navbar';
import CardSection from './components/CardSection';
import ContactSection from './components/ContactSection';
import LocationGuideSection from './components/LocationGuideSection';
import NotesSection from './components/NotesSection';
import CountdownSection from './components/CountdownSection';
import SeeYouSection from './components/SeeYouSection';
import { triggerGraduationConfetti } from './utils/confetti';
import { getGuestNameFromUrl } from './utils/urlGuestHelper';
import './App.css';

// ====================================================================
// TÊN NGƯỜI ĐƯỢC MỜI MẶC ĐỊNH (KHI MỞ LINK GỐC KHÔNG CÓ THAM SỐ TRÊN URL):
// - Nếu gửi link có tên (VD: ?to=Bảo+Trân hoặc ?name=Anh_Tuấn) -> Web TỰ ĐỘNG lấy tên từ URL.
// - Nếu ai mở link chung không có tham số -> Web dùng tên mặc định dưới đây.
//   Bạn có thể sửa thành: 'Bạn Thân Mến', 'Bạn & Người Thương', 'Quý Khách'...
// ====================================================================
export const DEFAULT_GUEST_NAME = 'Bạn Thân Mến';

function App() {
  // Trang bìa mở thiệp (Cover Page): ban đầu là false để khách bấm "MỞ THIỆP"
  const [isOpened, setIsOpened] = useState(false);

  // Audio ref để phát nhạc nền từ folder public/music/nen.mp4
  const audioRef = useRef(null);

  // Tên người được mời: Tự động trích xuất và chuẩn hóa từ URL (?to=, ?name=, ?guest=, #/to=, /to/...)
  const [guestName, setGuestName] = useState(() => {
    return getGuestNameFromUrl(DEFAULT_GUEST_NAME);
  });

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Tự động đổi tiêu đề tab trình duyệt để cá nhân hóa theo tên khách mời
  useEffect(() => {
    if (guestName && guestName !== DEFAULT_GUEST_NAME) {
      document.title = `Thiệp Mời Lễ Tốt Nghiệp | Thân mời ${guestName} - Lý Tiểu Long`;
    } else {
      document.title = 'Thiệp Mời Lễ Tốt Nghiệp | Lý Tiểu Long';
    }
  }, [guestName]);

  // Lắng nghe nếu URL thay đổi (popstate / hashchange)
  useEffect(() => {
    const handleUrlChange = () => {
      const updated = getGuestNameFromUrl(DEFAULT_GUEST_NAME);
      setGuestName(updated);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const [activeSection, setActiveSection] = useState('thiep');

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch((err) => {
        console.log("Audio play failed:", err);
      });
    }
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    triggerGraduationConfetti();

    // Tự động phát nhạc từ folder music/nen.mp4 khi khách bấm vào thiệp
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch((err) => {
        console.log("Audio autoplay error:", err);
      });
    }

    // Cuộn mượt lên đầu thiệp
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Lắng nghe vị trí cuộn cho 6 mục
  useEffect(() => {
    if (!isOpened) return;

    const sections = [
      'thiep',
      'thong-tin-lien-lac',
      'huong-dan-di',
      'luu-y',
      'countdown',
      'hen-gap'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpened]);

  const handleAudioTimeUpdate = (e) => {
    // Chỉ lấy nhạc nền trong 31 giây đầu tiên
    if (e.currentTarget.currentTime >= 30) {
      e.currentTarget.currentTime = 0;
      e.currentTarget.play().catch(() => { });
    }
  };

  return (
    <div className="app-main-wrapper">
      {/* Âm thanh nền: phát 31 giây đầu tiên từ public/music/nen.mp4 */}
      <audio
        ref={audioRef}
        src="/music/nen.mp4"
        loop
        preload="auto"
        onTimeUpdate={handleAudioTimeUpdate}
        onPlay={() => setIsPlayingAudio(true)}
        onPause={() => setIsPlayingAudio(false)}
      />

      {/* 1. TRANG BÌA TRƯỚC KHI VÀO THIỆP */}
      {!isOpened && (
        <CoverScreen
          onOpenCard={handleOpenInvitation}
          guestName={guestName}
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={toggleAudio}
        />
      )}

      {/* 2. NỘI DUNG THIỆP CHÍNH SAU KHI BẤM "MỞ THIỆP" */}
      {isOpened && (
        <div className="opened-invitation-container animate-fade-in">

          {/* Header Navigation Bar */}
          <Navbar activeSection={activeSection} />

          <main className="main-content-flow">

            {/* MỤC 1: THIỆP */}
            <CardSection guestName={guestName} />

            {/* MỤC 2: THÔNG TIN LIÊN LẠC */}
            <ContactSection />

            {/* MỤC 3: HƯỚNG DẪN ĐI (Bố cục cố định 2 trên 2 dưới) */}
            <LocationGuideSection />

            {/* MỤC 4: LƯU Ý (Bố cục cố định 2 trên 2 dưới) */}
            <NotesSection />

            {/* MỤC 5: COUNTDOWN (Đếm ngược đến 10h trưa ngày 17/10/2026) */}
            <CountdownSection />

            {/* MỤC 6: HẸN GẶP (Lời cảm ơn & hẹn gặp, không nút bấm) */}
            <SeeYouSection guestName={guestName} />

          </main>

          {/* Floating Audio Button on main page */}
          <button
            onClick={toggleAudio}
            className="floating-audio-toggle"
            aria-label={isPlayingAudio ? "Tắt âm thanh" : "Bật âm thanh"}
            title={isPlayingAudio ? "Tắt nhạc" : "Bật nhạc"}
          >
            {isPlayingAudio ? (
              <span className="audio-icon playing">🎵</span>
            ) : (
              <span className="audio-icon muted">🔇</span>
            )}
          </button>

          {/* Footer chân trang */}
          <footer className="simple-footer">
            <p>Trường Đại học Tôn Đức Thắng • Khóa 2022 - 2026</p>
            <p className="footer-copyright">Thiệp mời Lễ tốt nghiệp Cử nhân của Lý Tiểu Long</p>
          </footer>

        </div>
      )}
    </div>
  );
}

export default App;
