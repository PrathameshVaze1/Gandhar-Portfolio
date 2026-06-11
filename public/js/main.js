/**
 * Alex Thorne - Video Editor Portfolio JS Logic
 * High-performance, clean, modular JavaScript.
 */

// SVG Icons Map (feather-inspired, pixel-perfect, clean SVG lines)
const SVGIcons = {
  video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
  smartphone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
  film: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
  layers: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polygon points="2 17 12 22 22 17"></polygon><polygon points="2 12 12 17 22 12"></polygon></svg>',
  'volume-2': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>',
  palette: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34776 19.4996 5.34776 20.3004 4.85857 20.8C4.36938 21.2996 3.57864 21.2996 3.08945 20.8C0.94191 18.6067 -0.218557 15.4419 0.0270036 12.08C0.370399 7.37894 3.98774 3.39958 8.64724 2.25C17.7032 0.0163914 24.3164 7.6322 23.9785 15.65C23.7719 20.55 19.3486 24 14.5 24C13.1193 24 12 23.1046 12 22Z"></path><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="11.5" cy="7.5" r="1.5"></circle><circle cx="16.5" cy="9.5" r="1.5"></circle></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  'message-circle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
  youtube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
};

// Application State
let appData = null;
let currentProjectFilter = 'All';

// Elements Cache
const DOM = {
  header: document.querySelector('.header'),
  menuToggle: document.querySelector('.menu-toggle'),
  navMenu: document.querySelector('.nav-menu'),
  
  // Hero
  heroTagline: document.querySelector('.hero-tagline'),
  heroDesc: document.querySelector('.hero-desc'),
  heroPrimaryCTA: document.getElementById('hero-primary-cta'),
  heroSecondaryCTA: document.getElementById('hero-secondary-cta'),
  tickerTrack: document.getElementById('ticker-track'),
  
  // About
  aboutDesc: document.getElementById('about-desc'),
  experienceYears: document.getElementById('experience-years'),
  experienceText: document.getElementById('experience-text'),
  profileImg: document.getElementById('profile-img'),
  
  // Showreel
  showreelContainer: document.getElementById('showreel-container'),
  showreelThumb: document.getElementById('showreel-thumb'),
  showreelTitle: document.getElementById('showreel-title'),
  showreelDuration: document.getElementById('showreel-duration'),
  
  // Services
  servicesGrid: document.getElementById('services-grid'),
  
  // Portfolio
  portfolioFilters: document.getElementById('portfolio-filters'),
  portfolioGrid: document.getElementById('portfolio-grid'),
  
  // Stats
  statsGrid: document.getElementById('stats-grid'),
  
  // Testimonials
  testimonialsSlider: document.getElementById('testimonials-slider'),
  testimonialsPrev: document.getElementById('testimonials-prev'),
  testimonialsNext: document.getElementById('testimonials-next'),
  
  // Contact
  contactEmail: document.getElementById('contact-email'),
  contactPhone: document.getElementById('contact-phone'),
  contactAddress: document.getElementById('contact-address'),
  socialLinksContainer: document.getElementById('social-links-container'),
  contactForm: document.getElementById('contact-form'),
  formStatus: document.getElementById('form-status'),
  
  // Footer
  footerDesc: document.getElementById('footer-desc'),
  footerSocials: document.getElementById('footer-socials'),
  footerYear: document.getElementById('footer-year'),
  
  // Lightbox Modal
  videoModal: document.getElementById('video-modal'),
  modalIframe: document.getElementById('modal-iframe'),
  modalClose: document.getElementById('modal-close')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  fetchPortfolioData();
  setupEventListeners();
});

// Fetch Data from JSON File
async function fetchPortfolioData() {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`Failed to load data.json (Status: ${response.status})`);
    }
    appData = await response.json();
    populateWebsite(appData);
  } catch (error) {
    console.error('Error fetching data:', error);
    showFetchError();
  }
}

// Global Event Listeners
function setupEventListeners() {
  // Navigation Sticky Styling on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      DOM.header.classList.add('header-scrolled');
    } else {
      DOM.header.classList.remove('header-scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Menu Toggle
  if (DOM.menuToggle) {
    DOM.menuToggle.addEventListener('click', () => {
      DOM.menuToggle.classList.toggle('active');
      DOM.navMenu.classList.toggle('active');
    });
  }

  // Close Mobile Menu when clicking links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      DOM.menuToggle.classList.remove('active');
      DOM.navMenu.classList.remove('active');
    });
  });

  // Modal Lightbox Interactions
  if (DOM.modalClose) {
    DOM.modalClose.addEventListener('click', closeLightbox);
  }
  if (DOM.videoModal) {
    DOM.videoModal.addEventListener('click', (e) => {
      if (e.target === DOM.videoModal) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.videoModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Testimonial Navigation Controls
  if (DOM.testimonialsPrev && DOM.testimonialsNext) {
    DOM.testimonialsPrev.addEventListener('click', () => {
      scrollTestimonials('left');
    });
    DOM.testimonialsNext.addEventListener('click', () => {
      scrollTestimonials('right');
    });
  }

  // Form Validation and Action
  if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', handleFormSubmit);
    
    // Clean validation border when user types
    DOM.contactForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  }
}

// Populate Website Content
function populateWebsite(data) {
  // 1. Personal & Hero Section
  DOM.heroTagline.innerHTML = `<span>${data.personal.tagline}</span>`;
  DOM.heroDesc.textContent = data.personal.description;
  
  if (DOM.heroPrimaryCTA) {
    DOM.heroPrimaryCTA.textContent = data.personal.cta.primary.text;
    DOM.heroPrimaryCTA.href = data.personal.cta.primary.link;
  }
  if (DOM.heroSecondaryCTA) {
    DOM.heroSecondaryCTA.textContent = data.personal.cta.secondary.text;
    DOM.heroSecondaryCTA.href = data.personal.cta.secondary.link;
  }

  // Ticker marquee track population (multiply items to ensure seamless infinite looping)
  const tickerItems = [
    'Storytelling', 
    'Retention Editing', 
    'Cinematic Color', 
    'Motion Graphics', 
    'Sound Design', 
    'Visual Pacing'
  ];
  let tickerHtml = '';
  // Repeat items multiple times to fit standard monitors
  for (let i = 0; i < 4; i++) {
    tickerItems.forEach(item => {
      tickerHtml += `
        <div class="ticker-item">
          <span>${item}</span>
          <span class="ticker-separator">&nbsp;&nbsp;+&nbsp;&nbsp;</span>
        </div>
      `;
    });
  }
  DOM.tickerTrack.innerHTML = tickerHtml;

  // 2. About & Experience Section
  DOM.aboutDesc.textContent = data.personal.description;
  DOM.experienceYears.textContent = `${data.personal.experienceYears}+`;
  DOM.experienceText.textContent = `Years editing professional formats`;
  DOM.profileImg.src = data.personal.profileImage;
  DOM.profileImg.alt = data.personal.name;

  // 3. Showreel Section
  DOM.showreelThumb.src = data.personal.showreel.thumbnail;
  DOM.showreelThumb.alt = data.personal.showreel.title;
  DOM.showreelTitle.textContent = data.personal.showreel.title;
  DOM.showreelDuration.textContent = data.personal.showreel.duration;
  DOM.showreelContainer.addEventListener('click', () => {
    openLightbox(data.personal.showreel.videoUrl);
  });

  // 4. Services Offered
  let servicesHtml = '';
  data.services.forEach((service, index) => {
    const iconSvg = SVGIcons[service.icon] || SVGIcons.video;
    servicesHtml += `
      <div class="service-card reveal delay-${(index % 3) * 100}">
        <div class="service-icon-wrap">
          ${iconSvg}
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-text">${service.description}</p>
      </div>
    `;
  });
  DOM.servicesGrid.innerHTML = servicesHtml;

  // 5. Featured Projects & Filters
  renderPortfolioFilters(data.projects);
  renderPortfolioGrid(data.projects);

  // 6. Stats Counter Section
  let statsHtml = '';
  data.stats.forEach(stat => {
    statsHtml += `
      <div class="stat-item">
        <div class="stat-number" data-target="${stat.number}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `;
  });
  DOM.statsGrid.innerHTML = statsHtml;

  // 7. Testimonials Section
  let testimonialsHtml = '';
  data.testimonials.forEach(testimonial => {
    testimonialsHtml += `
      <div class="testimonial-card">
        <p class="testimonial-quote">${testimonial.comment}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${testimonial.avatar}</div>
          <div class="author-info">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.role} &bull; ${testimonial.company}</p>
          </div>
        </div>
      </div>
    `;
  });
  DOM.testimonialsSlider.innerHTML = testimonialsHtml;

  // 8. Contact Details & Social Links
  DOM.contactEmail.textContent = data.contact.email;
  DOM.contactEmail.href = `mailto:${data.contact.email}`;
  DOM.contactPhone.textContent = data.contact.phone;
  DOM.contactPhone.href = `tel:${data.contact.phone.replace(/[^+\d]/g, '')}`;
  
  DOM.contactAddress.innerHTML = `
    <span style="display: flex; align-items: center; gap: 8px;">
      ${SVGIcons.mapPin} ${data.contact.address}
    </span>
  `;

  // Render social handles (filter out inactive platform properties)
  let socialLinksHtml = '';
  let footerSocialsHtml = '';
  data.socials.forEach(social => {
    if (social.enabled) {
      const socialSvg = SVGIcons[social.icon] || SVGIcons.mail;
      socialLinksHtml += `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="${social.name}">
          ${socialSvg}
        </a>
      `;
      footerSocialsHtml += `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="${social.name}">
          ${socialSvg}
        </a>
      `;
    }
  });
  DOM.socialLinksContainer.innerHTML = socialLinksHtml;
  DOM.footerSocials.innerHTML = footerSocialsHtml;

  // 9. Footer Text
  DOM.footerDesc.textContent = `${data.personal.name} is a professional video editor with 4+ years of expertise. Making high-end corporate, commercials, shorts, and YouTube productions.`;
  DOM.footerYear.textContent = new Date().getFullYear();

  // Setup animations scroll trigger
  setupScrollReveal();
}

// Render Project Filter Category Tabs
function renderPortfolioFilters(projects) {
  // Extract unique categories, adding 'All' to the front
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  let filterButtonsHtml = '';
  categories.forEach(category => {
    const isActive = category === currentProjectFilter ? 'active' : '';
    filterButtonsHtml += `
      <button class="filter-btn ${isActive}" data-category="${category}">
        ${category}
      </button>
    `;
  });
  DOM.portfolioFilters.innerHTML = filterButtonsHtml;

  // Click handler
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Toggle Active Button
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      // Filter and Re-render
      currentProjectFilter = e.target.getAttribute('data-category');
      filterProjects(projects);
    });
  });
}

// Render Project Grid Cards
function renderPortfolioGrid(projects) {
  let gridHtml = '';
  
  projects.forEach((project, index) => {
    gridHtml += `
      <div class="portfolio-item reveal" data-category="${project.category}" data-video="${project.videoUrl}">
        <div class="portfolio-thumb-wrap">
          <span class="portfolio-tag">${project.category}</span>
          <span class="portfolio-duration">${project.duration}</span>
          <img class="portfolio-thumb" src="${project.thumbnail}" alt="${project.title}" loading="lazy">
          <div class="portfolio-card-overlay">
            <div class="portfolio-play-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="portfolio-info">
          <span class="portfolio-client">${project.client}</span>
          <h3 class="portfolio-item-title">${project.title}</h3>
          <p class="portfolio-desc">${project.description}</p>
        </div>
      </div>
    `;
  });

  DOM.portfolioGrid.innerHTML = gridHtml;

  // Add click listeners to play projects in modal
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      const videoUrl = item.getAttribute('data-video');
      openLightbox(videoUrl);
    });
  });
}

// Client-Side Filter Action
function filterProjects(projects) {
  const cards = document.querySelectorAll('.portfolio-item');
  
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    // Add fade scale transition out
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      if (currentProjectFilter === 'All' || category === currentProjectFilter) {
        card.style.display = 'flex';
        // Fade in
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    }, 300);
  });
}

// Lightbox modal mechanics
function openLightbox(videoUrl) {
  if (!videoUrl) return;
  
  // Format embed video URL if standard URL
  let embedUrl = videoUrl;
  if (videoUrl.includes('youtube.com/watch?v=')) {
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (videoUrl.includes('youtu.be/')) {
    const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (videoUrl.includes('vimeo.com/')) {
    const videoId = videoUrl.split('vimeo.com/')[1].split('?')[0];
    embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  } else if (!videoUrl.includes('embed') && !videoUrl.includes('player.vimeo')) {
    // Inject Autoplay toggle
    embedUrl = `${videoUrl}?autoplay=1`;
  }

  DOM.modalIframe.src = embedUrl;
  DOM.videoModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeLightbox() {
  DOM.videoModal.classList.remove('active');
  DOM.modalIframe.src = '';
  document.body.style.overflow = ''; // Unlock scroll
}

// Scroll Testimonials Panel
function scrollTestimonials(direction) {
  const scrollAmount = DOM.testimonialsSlider.clientWidth;
  if (direction === 'left') {
    DOM.testimonialsSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    DOM.testimonialsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Scroll Reveal Observer Setup
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .service-card, .portfolio-item');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('reveal'); // Ensure class exists
    observer.observe(el);
  });

  // Setup stats count-up observer
  setupStatsCountUp();
}

// Stat Counter Animations
function setupStatsCountUp() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  if (DOM.statsGrid) {
    statsObserver.observe(DOM.statsGrid);
  }
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'), 10);
    const suffix = stat.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();
    
    stat.classList.add('count-up-active');

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (Ease out Quad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      stat.textContent = `${currentVal}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = `${target}${suffix}`;
      }
    }
    
    requestAnimationFrame(updateCount);
  });
}

// Update Active Nav Link on Scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

// Handle Form Submit (Validation + Mock Submission State)
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = form.querySelector('button[type="submit"]');
  const btnText = submitBtn.querySelector('span:first-child');
  
  let hasError = false;

  // Simple Validation
  if (!nameInput.value.trim()) {
    nameInput.classList.add('error');
    hasError = true;
  }
  
  if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    hasError = true;
  }
  
  if (!subjectInput.value.trim()) {
    subjectInput.classList.add('error');
    hasError = true;
  }
  
  if (!messageInput.value.trim()) {
    messageInput.classList.add('error');
    hasError = true;
  }

  if (hasError) {
    showFormStatus('error', 'Please fill out all fields correctly.');
    return;
  }

  // Submit Simulation
  submitBtn.disabled = true;
  const originalBtnText = btnText.textContent;
  btnText.textContent = 'Sending Message...';
  DOM.formStatus.className = 'form-status'; // hide state
  DOM.formStatus.style.display = 'none';

  setTimeout(() => {
    // Success State
    showFormStatus('success', 'Message sent successfully! Alex will reply within 24 hours.');
    form.reset();
    submitBtn.disabled = false;
    btnText.textContent = originalBtnText;
  }, 1800);
}

// Email Regex helper
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Show form feedback bar
function showFormStatus(type, message) {
  DOM.formStatus.textContent = message;
  DOM.formStatus.className = `form-status ${type}`;
  
  // Smooth scroll to status
  DOM.formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render fallback error if load fails
function showFetchError() {
  document.body.innerHTML = `
    <div style="min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #09090b; color: #f4f4f5; text-align: center; padding: 24px; font-family: sans-serif;">
      <h1 style="color: #ff5722; font-size: 2.5rem; margin-bottom: 16px;">Failed to Load Portfolio</h1>
      <p style="color: #a1a1aa; font-size: 1.1rem; max-width: 500px; margin-bottom: 24px;">Could not retrieve portfolio configurations from data.json. Ensure the website files are served by a local development server.</p>
      <button onclick="window.location.reload()" style="background-color: #ff5722; color: white; border: none; padding: 12px 24px; font-weight: bold; border-radius: 4px; cursor: pointer;">Retry Loading</button>
    </div>
  `;
}
