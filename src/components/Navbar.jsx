import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'thiep', label: 'Thiệp Mời' },
    { id: 'thong-tin-lien-lac', label: 'Thông Tin Đón Tiếp' },
    { id: 'huong-dan-di', label: 'Hướng Dẫn Đường Đi' },
    { id: 'luu-y', label: 'Lưu Ý Nhỏ' },
    { id: 'countdown', label: 'Đếm Ngược' },
    { id: 'hen-gap', label: 'Hẹn Gặp Bạn' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        {/* Brand Logo */}
        <div className="header-brand" onClick={() => scrollTo('thiep')}>
          <div className="brand-logo-badge-tdtu">
            <img src="/location/tdtu-logo.webp" alt="Logo Trường Đại học Tôn Đức Thắng" className="navbar-tdtu-logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Lý Tiểu Long</span>
            <span className="brand-sub">Lễ Tốt Nghiệp • 2026</span>
          </div>
        </div>

        {/* Center: 6 Refined Tabs with unified font */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-tab ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
              {activeSection === link.id && <span className="active-dot"></span>}
            </button>
          ))}
        </nav>

        {/* Mobile menu hamburger toggle only (no phone button, no envelope button) */}
        <div className="header-actions-clean">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu điều hướng"
          >
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
