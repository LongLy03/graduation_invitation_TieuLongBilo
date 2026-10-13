// Confetti & Petals burst animation
export function triggerGraduationConfetti() {
  const colors = ['#f472b6', '#ec4899', '#db2777', '#fbcfe8', '#fb7185', '#d4af37', '#ffd700', '#ffffff'];
  const confettiCount = 80;

  for (let i = 0; i < confettiCount; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    
    const size = Math.random() * 9 + 6;
    const isRound = Math.random() > 0.4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    el.style.position = 'fixed';
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = '-20px';
    el.style.width = `${size}px`;
    el.style.height = `${isRound ? size : size * 1.6}px`;
    el.style.backgroundColor = color;
    el.style.borderRadius = isRound ? '50%' : '3px';
    el.style.opacity = Math.random() * 0.8 + 0.2;
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    el.style.transition = `all ${Math.random() * 3 + 2.5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

    document.body.appendChild(el);

    // Animate falling
    setTimeout(() => {
      const xOffset = (Math.random() - 0.5) * 300;
      el.style.top = `${window.innerHeight + 50}px`;
      el.style.transform = `translateX(${xOffset}px) rotate(${Math.random() * 720}deg)`;
      el.style.opacity = '0';
    }, 20);

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 5500);
  }
}
