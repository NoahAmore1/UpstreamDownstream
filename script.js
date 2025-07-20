// Main website initialization function
function initializeWebsite() {
    try {
        // Initialize enhanced scroll animations
        initScrollAnimations();
        
        // Initialize navigation
        initNavigation();
        
        // Initialize contact form
        initContactForm();
        
        // Initialize back to top button
        initBackToTop();
        
        // Initialize founder bio toggle
        setupFounderBio();
        
        // Initialize image loading
        initImageLoading();
        
        // Initialize smooth scrolling for navigation links
        initSmoothScrollForNavigation();
        
        // Initialize additional scroll effects
        initAdvancedScrollEffects();
        
    } catch (error) {
        console.log('Some features may not load properly:', error);
    }
}

// Enhanced scroll reveal animations
function initScrollAnimations() {
    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
    });
    
    // Section observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.8s ease';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Initialize enhanced element animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay before adding the visible class for better effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                
                // Remove observer after animation to improve performance
                elementObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(element => {
        elementObserver.observe(element);
    });
    
    // Add special animations for specific elements
    addSpecialAnimations();
}

// Add special animations for specific elements
function addSpecialAnimations() {
    // Add slide-right animation to images
    const images = document.querySelectorAll('.strategies-img, .contact-image');
    images.forEach(img => {
        img.classList.add('slide-right');
    });
    
    // Add scale-up animation to service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.classList.add('scale-up');
    });
    
    // Add rotate-in animation to focus areas
    const focusAreas = document.querySelectorAll('.focus-area');
    focusAreas.forEach(area => {
        area.classList.add('rotate-in');
    });
    
    // Add slide-left animation to the founder profile
    const founderProfile = document.querySelector('.founder-profile-sidebar');
    if (founderProfile) {
        founderProfile.classList.add('slide-left');
    }
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    if (hamburger && sidebar && closeSidebarBtn) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('open');
            });
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrollForNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Advanced scroll effects
function initAdvancedScrollEffects() {
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add scroll-based header effects
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Add subtle parallax to images
    const images = document.querySelectorAll('.strategies-img, .contact-image');
    images.forEach(img => {
        window.addEventListener('scroll', () => {
            const rect = img.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1;
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                img.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Founder bio toggle
function setupFounderBio() {
    window.toggleFounderBio = function() {
        const bio = document.getElementById('founderBio');
        const btn = document.querySelector('.bio-toggle-btn span');
        if (bio && btn) {
            bio.classList.toggle('expanded');
            btn.textContent = bio.classList.contains('expanded') ? '-' : '+';
        }
    };
}

// Basic image loading
function initImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// Page loading animation
document.addEventListener('DOMContentLoaded', function() {
    const pageLoading = document.getElementById('pageLoading');
    
    // Hide loading screen after a short delay
    if (pageLoading) {
        setTimeout(() => {
            pageLoading.classList.add('hidden');
        }, 1500);
    }
    
    // Initialize all other functionality
    initializeWebsite();
});

// Contact form handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple success message
            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Toggle + icons in what-we-do section
function setupServiceAreaToggles() {
    document.querySelectorAll('.service-area h4').forEach(h4 => {
        h4.addEventListener('click', function() {
            const area = this.parentElement;
            const expanded = area.classList.contains('expanded');
            document.querySelectorAll('.service-area').forEach(a => a.classList.add('collapsed'));
            document.querySelectorAll('.service-area').forEach(a => a.classList.remove('expanded'));
            if (!expanded) {
                area.classList.remove('collapsed');
                area.classList.add('expanded');
            }
        });
    });
}

// Modern Approach Section with Scroll Control
function initApproachSection() {
    const approachSteps = document.querySelectorAll('.approach-step');
    const approachSection = document.querySelector('.approach-section');
    
    // Enhanced scroll-based step animation with staggered reveals
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const stepIndex = parseInt(entry.target.dataset.step);
                
                // Staggered animation delay for visual appeal
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Add a subtle bounce effect to the step number
                    const stepNumber = entry.target.querySelector('.step-number');
                    if (stepNumber) {
                        stepNumber.style.animation = 'none';
                        stepNumber.offsetHeight; // Trigger reflow
                        stepNumber.style.animation = 'numberPop 0.6s ease-out';
                    }
                }, stepIndex * 150); // Staggered delay
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '-30px 0px -30px 0px'
    });
    
    // Add accessibility and observe steps
    approachSteps.forEach((step, index) => {
        step.setAttribute('tabindex', '0');
        step.setAttribute('role', 'article');
        step.setAttribute('aria-label', `Approach step ${index + 1}: ${step.querySelector('h4').textContent}`);
        stepObserver.observe(step);
        
        // Add click interaction for better engagement
        step.addEventListener('click', () => {
            step.style.animation = 'modernCardSlideIn 0.4s ease-out';
        });
        
        // Keyboard navigation
        step.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                step.click();
            }
        });
    });
    
    // Smooth scroll control for the section
    let isScrolling = false;
    const handleSmoothScroll = () => {
        if (!approachSection || isScrolling) return;
        
        const rect = approachSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
            isScrolling = true;
            
            // Add a subtle parallax effect to the background
            const scrollProgress = Math.max(0, Math.min(1, 
                (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
            ));
            
            const backgroundElement = approachSection.querySelector('::before');
            if (backgroundElement) {
                approachSection.style.setProperty('--scroll-progress', scrollProgress);
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 100);
        }
    };
    
    // Throttled scroll listener for performance
    let ticking = false;
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleSmoothScroll();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial setup
    handleSmoothScroll();
}

// Add the number pop animation CSS
const numberPopStyle = document.createElement('style');
numberPopStyle.textContent = `
@keyframes numberPop {
  0% { 
    transform: scale(0.8) rotate(0deg);
    opacity: 0.7;
  }
  50% { 
    transform: scale(1.2) rotate(5deg);
    opacity: 1;
  }
  100% { 
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
`;
document.head.appendChild(numberPopStyle);

window.addEventListener('DOMContentLoaded', () => {
    setupServiceAreaToggles();
    initApproachSection();
    // Animate home headline words
    const headline = document.querySelector('.home-headline');
    if (headline) {
        const words = headline.querySelectorAll('span');
        words.forEach((word, i) => {
            setTimeout(() => {
                word.style.opacity = 1;
            }, 200 + i * 400);
        });
    }
    // Fade in headline after image loads or short delay
    const fadeHeadline = document.querySelector('.fade-in-after-image');
    if (fadeHeadline) {
        setTimeout(() => {
            fadeHeadline.classList.add('visible');
        }, 800); // Adjust delay as needed
    }
    // ... existing code ...
});

// Enhanced Collapsible for About Us section
function setupCollapsible() {
    document.querySelectorAll('.collapsible').forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.collapsible-icon');
            const isOpen = content.classList.contains('open');
            
            if (isOpen) {
                content.classList.remove('open');
                icon.textContent = '+';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('open');
                icon.textContent = '−';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Setup collapsible functionality on page load
document.addEventListener('DOMContentLoaded', function() {
    setupCollapsible();
});

// Animate on scroll
function animateOnScroll() {
    const animatedEls = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => observer.observe(el));
}

// Staggered fade-in-up for list items
function setStaggeredListAnimation() {
    document.querySelectorAll('.about-text ul, .service-item ul, .focus-area ul').forEach(ul => {
        ul.querySelectorAll('li').forEach((li, i) => {
            li.style.setProperty('--i', i);
        });
    });
}

// Parallax effect for hero background
function setupParallaxHero() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        hero.style.backgroundPosition = `center ${y * 0.4}px`;
    });
}

// Parallax image scroll animation
function animateSectionImages() {
    const imgs = document.querySelectorAll('.section-img-parallax');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    imgs.forEach(img => observer.observe(img));
}

// Enhanced Card Stacking Effects
function setupCardStackingEffects() {
    const cardStacks = document.querySelectorAll('.card-stack');
    
    cardStacks.forEach((card, index) => {
        // Add staggered entrance animation
        card.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        
        // Mouse parallax effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) / 20;
            const deltaY = (e.clientY - centerY) / 20;
            
            card.style.transform = `translateY(-12px) scale(1.02) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });

        // Intersection observer for scroll-based stacking
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('stack-visible');
                    // Staggered reveal animation
                    setTimeout(() => {
                        entry.target.classList.add('stack-animate');
                    }, index * 150);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
    });
}

// Enhanced scrolling experience with momentum-based card reveals
function setupMomentumCardReveal() {
    let lastScrollY = window.scrollY;
    let momentum = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        momentum = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;
        
        // Apply momentum-based effects to cards
        document.querySelectorAll('.card-stack').forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (isInView) {
                const momentumScale = Math.min(momentum / 50, 0.3);
                card.style.setProperty('--momentum-scale', momentumScale);
            }
        });
    });
}

// Enhanced color transitions based on scroll position
function setupDynamicColorTransitions() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply section-specific color themes
                    document.body.classList.remove('theme-blue', 'theme-green', 'theme-cream');
                    
                    if (section.classList.contains('about-section')) {
                        document.body.classList.add('theme-blue');
                    } else if (section.classList.contains('services-section')) {
                        document.body.classList.add('theme-green');
                    } else if (section.classList.contains('approach-section')) {
                        document.body.classList.add('theme-cream');
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(section);
    });
}

// Enhanced image loading with progressive blur removal
function setupProgressiveImageLoading() {
    const images = document.querySelectorAll('img[src$=".png"], img[src$=".jpg"], img[src$=".JPG"]');
    
    images.forEach(img => {
        img.style.filter = 'blur(5px)';
        img.style.transition = 'filter 0.5s ease-out';
        
        if (img.complete) {
            img.style.filter = 'none';
        } else {
            img.addEventListener('load', () => {
                setTimeout(() => {
                    img.style.filter = 'none';
                }, 100);
            });
        }
    });
}

// Initialize all enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    setupCollapsible();
    setupCardStackingEffects();
    setupMomentumCardReveal();
    setupDynamicColorTransitions();
    setupProgressiveImageLoading();
    animateOnScroll();
    setStaggeredListAnimation();
    setupParallaxHero();
    animateSectionImages();
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / docHeight) * 100;
  document.getElementById('scroll-progress').style.width = progress + '%';
});

// Sticky Nav Auto-Hide
let lastScrollTop = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  let st = window.scrollY || document.documentElement.scrollTop;
  if (nav) nav.classList.toggle('nav-hidden', st > lastScrollTop);
  lastScrollTop = st <= 0 ? 0 : st;
});

// Floating Action Button (FAB)
const fab = document.getElementById('fab');
if(fab) {
  fab.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

// About Us Slideshow
const aboutCards = document.querySelectorAll('.about-slide-card');
const aboutLeft = document.querySelector('.about-arrow-left');
const aboutRight = document.querySelector('.about-arrow-right');
let aboutIndex = 0;
function showAboutCard(idx) {
  aboutCards.forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
}
if (aboutLeft && aboutRight) {
  aboutLeft.addEventListener('click', () => {
    aboutIndex = (aboutIndex - 1 + aboutCards.length) % aboutCards.length;
    showAboutCard(aboutIndex);
  });
  aboutRight.addEventListener('click', () => {
    aboutIndex = (aboutIndex + 1) % aboutCards.length;
    showAboutCard(aboutIndex);
  });
}
showAboutCard(aboutIndex);

// Our Approach: Card Stacking on Scroll
const approachCards = document.querySelectorAll('.approach-card');
function showApproachStack() {
  let topIdx = 0;
  const stackTop = document.querySelector('.approach-stack').getBoundingClientRect().top;
  const winH = window.innerHeight;
  if (stackTop < winH * 0.5) {
    topIdx = Math.min(approachCards.length - 1, Math.floor(((winH * 0.5 - stackTop) / 80)));
  }
  approachCards.forEach((card, i) => {
    card.classList.toggle('visible', i === topIdx);
  });
}
window.addEventListener('scroll', showApproachStack);
showApproachStack();

// What We Do: Interactive Service Cards
const serviceItems = document.querySelectorAll('.service-item.interactive');
serviceItems.forEach(item => {
  item.addEventListener('click', () => {
    serviceItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
});

// Page Load Fade-in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Enhanced About Us Slideshow
function initAboutSlideshow() {
    const slides = document.querySelectorAll('.about-slide-card');
    const leftArrow = document.querySelector('.about-arrow-left');
    const rightArrow = document.querySelector('.about-arrow-right');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    if (leftArrow && rightArrow && slides.length > 0) {
        leftArrow.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        rightArrow.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        // Auto-advance slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 4000);
    }
}

// Enhanced Focus Areas Interactions
function initFocusAreasInteractions() {
    const focusCards = document.querySelectorAll('.enhanced-focus-card');
    
    focusCards.forEach((card, index) => {
        // Add staggered entrance animation
        card.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.03)';
            card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
            
            // Animate focus details
            const details = card.querySelectorAll('.focus-details li');
            details.forEach((detail, i) => {
                setTimeout(() => {
                    detail.style.transform = 'translateX(8px)';
                    detail.style.color = '#2c5530';
                }, i * 50);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            
            // Reset focus details
            const details = card.querySelectorAll('.focus-details li');
            details.forEach(detail => {
                detail.style.transform = 'translateX(0)';
                detail.style.color = '#555';
            });
        });
        
        // Click interaction
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-12px) scale(1.03)';
            }, 150);
        });
    });
}

// Enhanced Service Cards Interactions
function initServiceInteractions() {
    const serviceCards = document.querySelectorAll('.service-item.interactive');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.15)';
            card.style.background = '#f8f5e6';
            
            // Animate list items
            const items = card.querySelectorAll('li');
            items.forEach((item, i) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(8px)';
                    item.style.color = '#2c5530';
                }, i * 30);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            card.style.background = '#fff';
            
            // Reset list items
            const items = card.querySelectorAll('li');
            items.forEach(item => {
                item.style.transform = 'translateX(0)';
                item.style.color = '#555';
            });
        });
        
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });
}

// Enhanced About Us Cards Interactions
function initAboutCardsInteractions() {
    const aboutCards = document.querySelectorAll('.interactive-card');
    
    aboutCards.forEach((card, index) => {
        // Add entrance animation delay
        card.style.animationDelay = `${index * 0.2}s`;
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
            card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
            
            // Animate card icon
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
            
            // Animate highlight tags
            const tags = card.querySelectorAll('.highlight-tag');
            tags.forEach((tag, i) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                }, i * 50);
            });
            
            // Animate value items
            const valueItems = card.querySelectorAll('.value-item');
            valueItems.forEach((item, i) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(8px)';
                    item.style.color = '#2c5530';
                }, i * 30);
            });
            
            // Animate stats
            const stats = card.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1.1)';
                stat.style.color = '#6ba043';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            
            // Reset card icon
            const icon = card.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
            
            // Reset highlight tags
            const tags = card.querySelectorAll('.highlight-tag');
            tags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
            
            // Reset value items
            const valueItems = card.querySelectorAll('.value-item');
            valueItems.forEach(item => {
                item.style.transform = 'translateX(0)';
                item.style.color = '#333';
            });
            
            // Reset stats
            const stats = card.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1)';
                stat.style.color = '#3a7ca5';
            });
        });
        
        // Click interaction for cards
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-12px) scale(1.02)';
            }, 150);
        });
    });
}

// Founder Bio Toggle Function
function toggleFounderBio() {
    const bio = document.getElementById('founderBio');
    const button = document.querySelector('.bio-toggle-btn');
    const buttonSpan = button.querySelector('span') || button;
    
    // Add smooth button animation
    button.style.transform = "scale(0.8) rotate(180deg)";
    
    setTimeout(() => {
        if (bio.style.display === "none" || bio.style.display === "") {
            bio.style.display = "block";
            bio.classList.add('expanded');
            buttonSpan.textContent = "−";
            button.style.transform = "scale(1) rotate(180deg)";
        } else {
            bio.style.display = "none";
            bio.classList.remove('expanded');
            buttonSpan.textContent = "+";
            button.style.transform = "scale(1) rotate(0deg)";
        }
    }, 150);
}

// Enhanced Founder Profile Interactions
function initFounderProfileInteractions() {
    const founderCard = document.querySelector('.founder-card-simple');
    
    // Card hover effects
    if (founderCard) {
        founderCard.addEventListener('mouseenter', () => {
            founderCard.style.transform = 'translateY(-4px)';
        });
        
        founderCard.addEventListener('mouseleave', () => {
            founderCard.style.transform = 'translateY(0)';
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"], .sidebar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile sidebar if open
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    });
}

// Mobile navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }
    
    if (closeSidebar && sidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar && sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !hamburger.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.content-card, .service-item, .enhanced-focus-card, .approach-step');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Contact form enhancement
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add form submission animation
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.style.transform = 'scale(0.95)';
                button.textContent = 'Sending...';
                
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                    button.textContent = 'Message Sent!';
                    button.style.background = '#5a8e37';
                    
                    setTimeout(() => {
                        button.textContent = 'submit';
                        button.style.background = '#6ba043';
                        form.reset();
                    }, 2000);
                }, 1000);
            }
        });
        
        // Enhanced input focus effects
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.transform = 'scale(1.02)';
                input.style.boxShadow = '0 4px 16px rgba(58, 124, 165, 0.15)';
            });
            
            input.addEventListener('blur', () => {
                input.style.transform = 'scale(1)';
                input.style.boxShadow = 'none';
            });
        });
    }
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero-section');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Interactive Scroll Cards Animation
class ScrollCardAnimator {
    constructor() {
        this.cards = document.querySelectorAll('.scroll-card');
        this.containers = document.querySelectorAll('.scroll-cards-container');
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollListener();
        this.addScrollTriggers();
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const card = entry.target;
                const index = parseInt(card.dataset.index);
                
                if (entry.isIntersecting) {
                    // Add visible class with delay based on index
                    setTimeout(() => {
                        card.classList.add('visible');
                        this.animateCardContent(card);
                    }, (index - 1) * 150);
                } else {
                    card.classList.remove('visible');
                }
            });
        }, options);

        this.cards.forEach(card => {
            this.observer.observe(card);
        });
    }

    setupScrollListener() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateCardStacking();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateCardStacking() {
        this.cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isSticky = rect.top <= 120;
            const isVisible = card.classList.contains('visible');
            
            if (isSticky && isVisible) {
                card.classList.add('stacked');
                // Add progressive scaling for stacked cards
                const stackIndex = Array.from(card.parentNode.children)
                    .filter(c => c.classList.contains('stacked'))
                    .indexOf(card);
                
                card.style.transform = `translateY(-${stackIndex * 20}px) scale(${1 - stackIndex * 0.05})`;
                card.style.zIndex = 100 - stackIndex;
            } else {
                card.classList.remove('stacked');
                card.style.transform = '';
                card.style.zIndex = '';
            }
        });
    }

    animateCardContent(card) {
        const content = card.querySelector('.scroll-card-content');
        const icon = card.querySelector('.card-icon');
        const title = card.querySelector('h4, h5');
        const details = card.querySelectorAll('p');

        // Animate icon
        if (icon) {
            icon.style.animation = 'none';
            setTimeout(() => {
                icon.style.animation = 'float 3s ease-in-out infinite';
            }, 100);
        }

        // Animate title
        if (title) {
            title.style.opacity = '0';
            title.style.transform = 'translateY(20px)';
            setTimeout(() => {
                title.style.transition = 'all 0.6s ease';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 200);
        }

        // Animate details with stagger
        details.forEach((detail, index) => {
            detail.style.opacity = '0';
            detail.style.transform = 'translateY(20px)';
            setTimeout(() => {
                detail.style.transition = 'all 0.6s ease';
                detail.style.opacity = '1';
                detail.style.transform = 'translateY(0)';
            }, 300 + index * 100);
        });
    }

    addScrollTriggers() {
        this.containers.forEach(container => {
            const cards = container.querySelectorAll('.scroll-card');
            cards.forEach((card, index) => {
                const trigger = document.createElement('div');
                trigger.className = 'scroll-trigger';
                trigger.style.top = `${(index + 1) * 100}vh`;
                container.appendChild(trigger);
            });
        });
    }
}

// Enhanced scroll effects for better UX
class SmoothScrollEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addScrollIndicator();
        this.setupScrollSnapping();
    }

    addScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-progress';
        indicator.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            document.querySelector('.scroll-progress-bar').style.width = `${scrollPercent}%`;
        });
    }

    setupScrollSnapping() {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Optional: Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                this.scrollToNextCard();
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                this.scrollToPrevCard();
            }
        });
    }

    scrollToNextCard() {
        const visibleCard = document.querySelector('.scroll-card.visible');
        if (visibleCard) {
            const nextCard = visibleCard.nextElementSibling;
            if (nextCard && nextCard.classList.contains('scroll-card')) {
                nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    scrollToPrevCard() {
        const visibleCard = document.querySelector('.scroll-card.visible');
        if (visibleCard) {
            const prevCard = visibleCard.previousElementSibling;
            if (prevCard && prevCard.classList.contains('scroll-card')) {
                prevCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAboutSlideshow();
    initFocusAreasInteractions();
    initServiceInteractions();
    initAboutCardsInteractions();
    initFounderProfileInteractions();
    initSmoothScrolling();
    initMobileNavigation();
    initScrollAnimations();
    initContactForm();
    initParallaxEffect();
    
    // Add loaded class for any CSS animations
    document.body.classList.add('loaded');
    
    console.log('Enhanced website features initialized');
    
    new ScrollCardAnimator();
    new SmoothScrollEnhancer();
});

// Enhanced Interactive Website Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize modern loading system first
    initPageLoadingAnimation();
    
    // Initialize all interactive features after loading
    setTimeout(() => {
        initScrollAnimations();
        initHoverEffects();
        initProgressiveDisclosure();
        initSmoothScrolling();
        initImageAnimations();
        initFormInteractions();
        initNavbarInteractions();
        initApproachSectionInteractions();
        initParallaxEffects();
        initLoadingAnimations();
        initScrollProgress();
        initBackToTop();
        initMicroInteractions();
        initFocusAreasAnimations();
        initServiceItemAnimations();
        initModernSectionReveals();
        initEnhancedImageLoading();
        initAdvancedHoverEffects();
        initEnhancedFormInteractions();
    }, 1500);
});

// 1. Enhanced Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-in, .approach-step-item, .approach-description-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
}

// 2. Interactive Hover Effects
function initHoverEffects() {
    // Enhanced image hover effects
    const images = document.querySelectorAll('img:not(.logo img)');
    images.forEach(img => {
        img.style.transition = 'all 0.3s ease';
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.filter = 'brightness(1.1)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(1)';
        });
    });
    
    // Interactive service items
    const serviceItems = document.querySelectorAll('.service-item, .focus-area');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
            item.style.boxShadow = '0 15px 30px rgba(107, 160, 67, 0.2)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// 3. Progressive Disclosure Features
function initProgressiveDisclosure() {
    // Expandable content sections
    const expandableItems = document.querySelectorAll('.service-item, .focus-area');
    expandableItems.forEach(item => {
        const heading = item.querySelector('h4');
        const content = item.querySelector('ul, p:last-child');
        
        if (heading && content) {
            // Add expand/collapse functionality
            heading.style.cursor = 'pointer';
            heading.innerHTML += ' <span class="expand-icon">+</span>';
            
            const icon = heading.querySelector('.expand-icon');
            content.style.maxHeight = '0';
            content.style.overflow = 'hidden';
            content.style.transition = 'max-height 0.3s ease';
            
            let isExpanded = false;
            heading.addEventListener('click', () => {
                if (isExpanded) {
                    content.style.maxHeight = '0';
                    icon.textContent = '+';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.textContent = '−';
                    icon.style.transform = 'rotate(180deg)';
                }
                isExpanded = !isExpanded;
            });
            
            icon.style.transition = 'transform 0.3s ease';
            icon.style.display = 'inline-block';
            icon.style.marginLeft = '10px';
            icon.style.fontWeight = 'bold';
            icon.style.color = 'var(--color-primary)';
        }
    });
}

// 4. Enhanced Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Add loading indicator
                const loader = document.createElement('div');
                loader.className = 'scroll-loader';
                loader.innerHTML = '⬇️';
                loader.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 2em;
                    z-index: 9999;
                    animation: bounce 0.5s infinite alternate;
                `;
                document.body.appendChild(loader);
                
                setTimeout(() => {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    loader.remove();
                }, 100);
            }
        });
    });
    
    // Add CSS for bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0% { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-50%, -55%) scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

// 5. Interactive Image Animations
function initImageAnimations() {
    const images = document.querySelectorAll('.strategies-img, .contact-image');
    
    images.forEach(img => {
        // Add loading shimmer effect
        img.style.position = 'relative';
        img.style.overflow = 'hidden';
        
        // Create shimmer overlay
        const shimmer = document.createElement('div');
        shimmer.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 2s infinite;
            pointer-events: none;
        `;
        
        img.parentNode.style.position = 'relative';
        img.parentNode.appendChild(shimmer);
        
        // Remove shimmer when image loads
        img.addEventListener('load', () => {
            setTimeout(() => shimmer.remove(), 1000);
        });
    });
    
    // Add shimmer animation
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent = `
        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
    document.head.appendChild(shimmerStyle);
}

// 6. Enhanced Form Interactions
function initFormInteractions() {
    const form = document.querySelector('.contact-form');
    const inputs = form?.querySelectorAll('input, textarea');
    
    inputs?.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', () => {
            input.parentNode.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 0 0 3px rgba(107, 160, 67, 0.2)';
        });
        
        input.addEventListener('blur', () => {
            input.parentNode.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
        
        // Add typing animation
        input.addEventListener('input', () => {
            if (input.value.length > 0) {
                input.style.background = 'linear-gradient(45deg, #f0f8ff, #ffffff)';
            } else {
                input.style.background = '#fafafa';
            }
        });
    });
    
    // Enhanced submit button
    const submitBtn = form?.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'var(--color-secondary)';
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = '✓ Sent!';
                submitBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'var(--color-primary)';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// 7. Interactive Navbar
function initNavbarInteractions() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
    
    // Add active link indicator
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
            link.style.textShadow = '0 2px 4px rgba(107, 160, 67, 0.3)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.textShadow = 'none';
        });
    });
}

// 8. Modern Approach Section with Advanced Animations
function initApproachSectionInteractions() {
    const approachSection = document.querySelector('.approach-section');
    const approachItems = document.querySelectorAll('.approach-step-item');
    const descriptionBox = document.querySelector('.approach-description-box');
    
    // Initialize loading skeleton effect
    initSkeletonLoading();
    
    // Advanced staggered scroll animations
    initAdvancedScrollAnimations();
    
    // Parallax effects
    initApproachParallax();
    
    // Enhanced interactions
    initEnhancedInteractions();
    
    // Magnetic hover effects
    initMagneticEffects();
    
    function initSkeletonLoading() {
        // Add skeleton loading effect on page load
        approachItems.forEach((item, index) => {
            item.classList.add('loading');
            
            setTimeout(() => {
                item.classList.remove('loading');
                item.style.animation = `skeletonFadeOut 0.5s ease forwards`;
            }, 800 + (index * 200));
        });
        
        // Add skeleton fade out animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes skeletonFadeOut {
                from {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                }
                to {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.7) 100%);
                    background-size: 100% 100%;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function initAdvancedScrollAnimations() {
        // Create a more sophisticated intersection observer
        const observerOptions = {
            threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const target = entry.target;
                const ratio = entry.intersectionRatio;
                
                if (entry.isIntersecting) {
                    if (target.classList.contains('approach-description-box')) {
                        setTimeout(() => {
                            target.classList.add('visible');
                            // Add staggered text animation
                            animateTextContent(target);
                        }, 200);
                    }
                    
                    if (target.classList.contains('approach-step-item')) {
                        const index = Array.from(approachItems).indexOf(target);
                        setTimeout(() => {
                            target.classList.add('visible');
                            // Add morphing effect
                            addMorphingEffect(target);
                            // Add text typewriter effect
                            typewriterEffect(target);
                        }, index * 150 + 400);
                    }
                }
                
                // Continuous parallax based on scroll ratio
                if (target.classList.contains('approach-step-item')) {
                    const parallaxOffset = (1 - ratio) * 20;
                    target.style.setProperty('--parallax-y', `${parallaxOffset}px`);
                }
            });
        }, observerOptions);
        
        // Observe elements
        if (descriptionBox) observer.observe(descriptionBox);
        approachItems.forEach(item => observer.observe(item));
    }
    
    function animateTextContent(element) {
        const text = element.querySelector('p');
        if (!text) return;
        
        const words = text.textContent.split(' ');
        text.innerHTML = words.map((word, index) => 
            `<span class="word" style="opacity: 0; transform: translateY(20px); transition: all 0.4s ease ${index * 0.05}s;">${word}</span>`
        ).join(' ');
        
        setTimeout(() => {
            element.querySelectorAll('.word').forEach(word => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0)';
            });
        }, 100);
    }
    
    function addMorphingEffect(element) {
        // Add morphing border effect
        element.style.setProperty('--morph-progress', '0%');
        
        const morphAnimation = element.animate([
            { '--morph-progress': '0%' },
            { '--morph-progress': '100%' }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        });
    }
    
    function typewriterEffect(element) {
        const heading = element.querySelector('h4');
        const text = element.querySelector('p');
        
        if (heading) {
            const headingText = heading.textContent;
            heading.textContent = '';
            
            [...headingText].forEach((char, index) => {
                setTimeout(() => {
                    heading.textContent += char;
                    if (char !== ' ') {
                        heading.style.animation = 'none';
                        heading.offsetHeight; // Trigger reflow
                        heading.style.animation = 'typewriterBlink 0.1s ease';
                    }
                }, index * 50 + 300);
            });
        }
        
        // Add typewriter blink animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes typewriterBlink {
                0%, 50% { border-right: 2px solid var(--color-primary); }
                51%, 100% { border-right: 2px solid transparent; }
            }
        `;
        document.head.appendChild(style);
    }
    
    function initApproachParallax() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        function updateParallax() {
            if (!approachSection) return;
            
            const rect = approachSection.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, 
                (window.innerHeight - rect.top) / (rect.height + window.innerHeight)
            ));
            
            // Apply parallax to description box
            if (descriptionBox) {
                const offset = (scrollProgress - 0.5) * 30;
                descriptionBox.style.transform = `translateY(${offset}px) scale(${1 + scrollProgress * 0.02})`;
            }
            
            // Apply parallax to step items
            approachItems.forEach((item, index) => {
                const itemOffset = (scrollProgress - 0.5) * (15 + index * 5);
                const rotateOffset = (scrollProgress - 0.5) * 2;
                item.style.transform = `translateY(${itemOffset}px) rotateY(${rotateOffset}deg)`;
            });
            
            // Add floating background elements
            approachSection.style.setProperty('--bg-float', `${Math.sin(scrollProgress * Math.PI) * 10}px`);
        }
    }
    
    function initEnhancedInteractions() {
        approachItems.forEach((item, index) => {
            // Enhanced click interactions
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active from all items
                approachItems.forEach(i => i.classList.remove('active'));
                
                // Add enhanced active state
                item.classList.add('active');
                
                // Create ripple effect at click position
                createRippleEffect(e, item);
                
                // Add pulsing animation
                item.style.animation = 'pulseGlow 0.6s ease-in-out';
                
                // Auto-remove active state
                setTimeout(() => {
                    item.classList.remove('active');
                    item.style.animation = '';
                }, 2500);
            });
            
            // Enhanced hover effects
            let hoverTimeout;
            item.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                item.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                
                // Add floating effect
                item.style.transform = 'translateX(12px) translateY(-8px) scale(1.02) rotateY(2deg)';
                
                // Add glow effect
                item.style.boxShadow = `
                    0 20px 60px rgba(107, 160, 67, 0.15),
                    0 8px 24px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `;
            });
            
            item.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(() => {
                    item.style.transform = 'translateX(0) translateY(0) scale(1) rotateY(0deg)';
                    item.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.04)';
                }, 100);
            });
            
            // Keyboard navigation with enhanced effects
            item.setAttribute('tabindex', '0');
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
        
        // Add pulse glow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulseGlow {
                0%, 100% {
                    box-shadow: 0 16px 48px rgba(107, 160, 67, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
                }
                50% {
                    box-shadow: 
                        0 20px 60px rgba(107, 160, 67, 0.25), 
                        0 8px 24px rgba(0, 0, 0, 0.15),
                        0 0 0 4px rgba(107, 160, 67, 0.1);
                    transform: translateX(12px) scale(1.05);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function createRippleEffect(event, element) {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(107, 160, 67, 0.3) 0%, transparent 70%);
            pointer-events: none;
            animation: rippleExpand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            z-index: 0;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
        
        // Add ripple expand animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rippleExpand {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    function initMagneticEffects() {
        approachItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const deltaX = (e.clientX - centerX) * 0.1;
                const deltaY = (e.clientY - centerY) * 0.1;
                
                item.style.transform = `
                    translateX(${12 + deltaX}px) 
                    translateY(${-8 + deltaY}px) 
                    scale(1.02) 
                    rotateY(${deltaX * 0.1}deg) 
                    rotateX(${-deltaY * 0.1}deg)
                `;
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0) translateY(0) scale(1) rotateY(0deg) rotateX(0deg)';
            });
        });
    }
}

// 9. Parallax Effects
function initParallaxEffects() {
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// 10. Loading Animations
function initLoadingAnimations() {
    // Add page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    // Add section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
}

// 11. Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// 12. Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        // Add a fun spin animation
        backToTopBtn.style.animation = 'spin 0.5s ease';
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            backToTopBtn.style.animation = '';
        }, 500);
    });
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `;
    document.head.appendChild(spinStyle);
}

// 13. Micro-Interactions
function initMicroInteractions() {
    // Add click ripple effect to buttons
    const buttons = document.querySelectorAll('button, .start-convo-btn, a[href^="#"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                animation: ripple 0.6s linear;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Add typing indicator for form inputs
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(input => {
        let typingTimer;
        
        input.addEventListener('input', () => {
            clearTimeout(typingTimer);
            input.style.borderColor = 'var(--color-accent)';
            
            typingTimer = setTimeout(() => {
                input.style.borderColor = '#e8e8e8';
            }, 1000);
        });
    });
    
    // Add subtle animation to logo
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.animation = 'logoFloat 1s ease-in-out';
        });
        
        logo.addEventListener('animationend', () => {
            logo.style.animation = '';
        });
    }
    
    // Add logo float animation
    const logoStyle = document.createElement('style');
    logoStyle.textContent = `
        @keyframes logoFloat {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.05) rotate(1deg); }
            75% { transform: scale(1.05) rotate(-1deg); }
        }
    `;
    document.head.appendChild(logoStyle);
}

// 14. Modern Focus Areas Card Animation
function initFocusAreasAnimations() {
    const focusAreas = document.querySelectorAll('.focus-area');
    const focusSection = document.querySelector('.focus-areas-section');
    
    if (!focusAreas.length || !focusSection) return;
    
    console.log('Initializing Focus Areas Animation for', focusAreas.length, 'cards');
    
    let hasAnimated = false;
    
    // Add initial styles to ensure cards are hidden
    focusAreas.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) scale(0.95)';
        card.style.transition = 'none';
    });
    
    // Create modern staggered card reveal animation
    function revealCards() {
        if (hasAnimated) return;
        hasAnimated = true;
        
        console.log('Starting card reveal animation');
        
        // Temporarily pause scrolling for smooth effect
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        
        // Animate each card with staggered timing
        focusAreas.forEach((card, index) => {
            setTimeout(() => {
                // Enable transitions
                card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                
                // Reveal with modern entrance effect
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                
                // Add a subtle bounce effect at the end
                setTimeout(() => {
                    card.style.transform = 'translateY(-5px) scale(1.02)';
                    setTimeout(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 150);
                }, 400);
                
                // Add visual indicator that card is ready
                card.classList.add('animate-in');
                
                console.log(`Card ${index + 1} animated`);
                
            }, index * 300); // 300ms delay between cards
        });
        
        // Re-enable scrolling after animation completes
        setTimeout(() => {
            document.body.style.overflow = originalOverflow;
            console.log('Animation complete, scrolling re-enabled');
        }, (focusAreas.length * 300) + 800);
    }
    
    // Enhanced intersection observer for better triggering
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                console.log('Focus section is visible, starting animation');
                revealCards();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(focusSection);
    
    // Enhanced interactive effects
    focusAreas.forEach((area, index) => {
        // Modern hover effects
        area.addEventListener('mouseenter', function() {
            if (!this.style.transition.includes('hover')) {
                this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
            this.style.transform = 'translateY(-12px) scale(1.03)';
            this.style.boxShadow = '0 20px 40px rgba(23, 162, 184, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)';
        });
        
        area.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        // Modern click effects with ripple
        area.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: linear-gradient(45deg, rgba(23, 162, 184, 0.3), rgba(107, 160, 67, 0.2));
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: modernRipple 0.6s ease-out;
                pointer-events: none;
                z-index: 10;
            `;
            
            this.appendChild(ripple);
            
            // Card punch effect
            this.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-12px) scale(1.03)';
            }, 100);
            
            setTimeout(() => ripple.remove(), 600);
        });
        
        // Accessibility improvements
        area.setAttribute('tabindex', '0');
        area.setAttribute('role', 'article');
        area.setAttribute('aria-label', `Focus area: ${area.querySelector('h4').textContent}`);
        
        area.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                area.click();
            }
        });
        
        // Add focus styles for keyboard navigation
        area.addEventListener('focus', function() {
            this.style.outline = '3px solid rgba(23, 162, 184, 0.5)';
            this.style.outlineOffset = '2px';
        });
        
        area.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add dynamic CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modernRipple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }
        
        .focus-area {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            will-change: transform, opacity, box-shadow;
        }
        
        .focus-area.animate-in {
            animation-fill-mode: forwards;
        }
        
        .focus-area::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s ease;
        }
        
        .focus-area:hover::after {
            left: 100%;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .focus-area {
                opacity: 1 !important;
                transform: none !important;
                transition: none !important;
            }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
            .focus-area:hover {
                transform: translateY(-5px) scale(1.01) !important;
            }
        }
    `;
    document.head.appendChild(style);
    
         // Fallback: Show cards after 3 seconds if animation hasn't triggered
     setTimeout(() => {
         if (!hasAnimated) {
             console.log('Fallback: Showing cards after timeout');
             focusAreas.forEach(card => {
                 card.style.opacity = '1';
                 card.style.transform = 'translateY(0) scale(1)';
                 card.style.transition = 'all 0.3s ease';
             });
         }
     }, 3000);
}

// 15. Modern Page Loading Animation
function initPageLoadingAnimation() {
    const pageLoading = document.getElementById('pageLoading');
    const loadingText = document.querySelector('.loading-text');
    
    if (!pageLoading) return;
    
    const loadingTexts = [
        'Loading Experience...',
        'Preparing Content...',
        'Almost Ready...',
        'Welcome!'
    ];
    
    let textIndex = 0;
    
    // Animate loading text
    const textInterval = setInterval(() => {
        if (textIndex < loadingTexts.length - 1) {
            textIndex++;
            if (loadingText) {
                loadingText.style.opacity = '0';
                setTimeout(() => {
                    loadingText.textContent = loadingTexts[textIndex];
                    loadingText.style.opacity = '1';
                }, 200);
            }
        }
    }, 800);
    
    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(textInterval);
            pageLoading.classList.add('hidden');
            
            // Start revealing page content
            document.body.style.overflow = '';
            initPageRevealAnimation();
            
        }, 1200);
    });
}

function initPageRevealAnimation() {
    // Reveal sections with staggered animation
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// 16. Service Items Animation
function initServiceItemAnimations() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    if (!serviceItems.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    serviceItems.forEach(item => observer.observe(item));
}

// 17. Modern Section Reveals
function initModernSectionReveals() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate child elements
                const children = entry.target.querySelectorAll('h2, h3, p, .service-item, .focus-area');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// 18. Enhanced Image Loading
function initEnhancedImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Create container if doesn't exist
        if (!img.parentElement.classList.contains('image-container')) {
            const container = document.createElement('div');
            container.className = 'image-container';
            img.parentNode.insertBefore(container, img);
            container.appendChild(img);
        }
        
        // Handle image loading
        if (img.complete) {
            handleImageLoad(img);
        } else {
            img.addEventListener('load', () => handleImageLoad(img));
            img.addEventListener('error', () => handleImageError(img));
        }
    });
}

function handleImageLoad(img) {
    img.classList.add('loaded');
    if (img.parentElement.classList.contains('image-container')) {
        img.parentElement.classList.add('loaded');
    }
    
    // Add entrance animation
    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 100);
}

function handleImageError(img) {
    img.style.opacity = '0.5';
    img.alt = 'Image failed to load';
    if (img.parentElement.classList.contains('image-container')) {
        img.parentElement.classList.add('loaded');
    }
}

// 19. Advanced Hover Effects
function initAdvancedHoverEffects() {
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.service-item, .focus-area, .approach-step-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Add magnetic effect
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.1;
            const deltaY = (e.clientY - centerY) * 0.1;
            
            this.style.transform = `
                translateX(${deltaX}px) 
                translateY(${deltaY - 8}px) 
                scale(1.02) 
                rotateY(${deltaX * 0.1}deg) 
                rotateX(${-deltaY * 0.1}deg)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0) scale(1) rotateY(0deg) rotateX(0deg)';
        });
    });
    
    // Enhanced navbar scroll effects
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// 20. Enhanced Form Interactions
function initEnhancedFormInteractions() {
    const form = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (!form) return;
    
    // Enhanced input animations
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            this.style.transform = 'translateY(0)';
        });
        
        // Typing indicator
        input.addEventListener('input', function() {
            this.style.borderColor = 'var(--color-primary)';
            clearTimeout(this.typingTimer);
            
            this.typingTimer = setTimeout(() => {
                this.style.borderColor = '#e8e8e8';
            }, 1000);
        });
    });
    
    // Enhanced form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        submitBtn.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                Sending...
            </div>
        `;
        
        // Simulate form processing
        setTimeout(() => {
            submitBtn.innerHTML = '✓ Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = 'Send Message';
                submitBtn.style.background = 'linear-gradient(135deg, var(--color-primary), #5a8f3a)';
            }, 2000);
            
        }, 2000);
    });
} 