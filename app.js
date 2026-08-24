/**
 * Gate Village Church - Vanilla Interactive Runtime
 * Snaps by Rajesh design system with dynamic scroll shrinking & square slideshow
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Dynamic Scroll Shrinking & Scroll Progress Bar
  const header = document.querySelector('.main-header');
  const progressBar = document.querySelector('.scroll-progress-bar');
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Update Scroll Progress Bar
        if (progressBar) {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          progressBar.style.width = `${scrollPercent}%`;
        }

        // Header Shrink Toggler
        if (window.scrollY > 40) {
          if (header && !header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
          }
        } else {
          if (header && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links-centered');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
      }
    });
  }

  // 3. Hero Square Slideshow Auto-Cycle
  const slideshowImg = document.getElementById('slideshow-image');
  if (slideshowImg) {
    const images = [
      'frontend/public/SnapsByRajsh-10.jpg',
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    let currentIdx = 0;
    setInterval(() => {
      currentIdx = (currentIdx + 1) % images.length;
      slideshowImg.style.opacity = '0';
      setTimeout(() => {
        slideshowImg.src = images[currentIdx];
        slideshowImg.style.opacity = '1';
      }, 400);
    }, 4000);
  }

  // 4. Background Video Playlist Rotation
  const heroVideo = document.getElementById('hero-bg-video');
  if (heroVideo) {
    const videoSources = [
      'frontend/public/WORSHIP.mp4',
      'frontend/public/PRAYER.mp4'
    ];
    let currentVideoIdx = 0;

    heroVideo.addEventListener('ended', () => {
      currentVideoIdx = (currentVideoIdx + 1) % videoSources.length;
      heroVideo.src = videoSources[currentVideoIdx];
      heroVideo.play().catch(() => {});
    });
  }
});
