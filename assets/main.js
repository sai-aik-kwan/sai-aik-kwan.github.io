// ============================================
// THEME TOGGLE (Light/Dark Mode)
// ============================================
(function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
})();

// ============================================
// MOBILE MENU TOGGLE
// ============================================
(function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
})();

// ============================================
// ACTIVE NAV LINK (NEW - Replaces PHP logic)
// ============================================
(function() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1).replace('.html', '') || 'index';
    
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(currentPage) || (currentPage === 'index' && (href === 'index.html' || href === './' || href === '/'))) {
            link.classList.add('active');
        }
    });
})();

// ============================================
// DYNAMIC CONTENT RENDERING (NEW)
// ============================================
function renderPersonalInfo() {
    // Update all elements with data attributes or specific classes
    document.querySelectorAll('[data-field="name"]').forEach(el => el.textContent = personalInfo.name);
    document.querySelectorAll('[data-field="email"]').forEach(el => {
        el.textContent = personalInfo.email;
        if (el.tagName === 'A') el.href = `mailto:${personalInfo.email}`;
    });
}

function renderSkills() {
    const technicalCloud = document.querySelector('.skills-cloud.technical');
    const softCloud = document.querySelector('.skills-cloud.soft');
    
    if (technicalCloud) {
        technicalCloud.innerHTML = skills.technical
            .map(skill => `<span class="skill-tag">${skill}</span>`)
            .join('');
    }
    
    if (softCloud) {
        softCloud.innerHTML = skills.soft
            .map(skill => `<span class="skill-tag soft">${skill}</span>`)
            .join('');
    }
}

function renderCertifications() {
    const inProgressList = document.querySelector('.certs-list.in-progress');
    const completedList = document.querySelector('.certs-list.completed');
    
    if (inProgressList) {
        inProgressList.innerHTML = certifications.inProgress
            .map(cert => `
                <div class="cert-card in-progress">
                    <div class="cert-icon">🔒</div>
                    <div class="cert-info">
                        <h4>${cert.name}</h4>
                        <p class="cert-issuer">${cert.issuer}</p>
                        <span class="cert-status">${cert.status}</span>
                    </div>
                </div>
            `).join('');
    }
    
    if (completedList) {
        completedList.innerHTML = certifications.completed
            .map(cert => `
                <div class="cert-card completed">
                    <div class="cert-icon">💻</div>
                    <div class="cert-info">
                        <h4>${cert.name}</h4>
                        <p class="cert-issuer">${cert.issuer}</p>
                        <span class="cert-year">${cert.year}</span>
                    </div>
                </div>
            `).join('');
    }
}

function renderEducation() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = education.map(edu => `
        <div class="timeline-item ${edu.status}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${edu.degree}</h3>
                    <span class="timeline-year">${edu.year}</span>
                </div>
                <p class="timeline-institution">${edu.institution}</p>
                ${edu.partner ? `<p class="timeline-partner">${edu.partner}</p>` : ''}
                <p class="timeline-description">${edu.description}</p>
                <span class="timeline-status status-${edu.status}">
                    ${edu.status.charAt(0).toUpperCase() + edu.status.slice(1)}
                </span>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const projectGrids = document.querySelectorAll('.projects-grid');
    if (!projectGrids.length) return;
    
    projectGrids.forEach(grid => {
        grid.innerHTML = projects.map(project => `
            <div class="project-card" data-category="${project.technologies[0].toLowerCase()}">
                <div class="project-image">
                    <img src="assets/images/${project.image}" 
                         alt="${project.title}" 
                         onerror="this.src='https://via.placeholder.com/400x250/1a1a2e/00ff88?text=Homelab+Project'">
                    <div class="project-overlay">
                        <a href="${project.githubUrl}" target="_blank" class="btn btn-sm">View on GitHub</a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.githubUrl}" target="_blank" class="project-link">View on GitHub →</a>
                </div>
            </div>
        `).join('');
    });
}

function renderTestimonials() {
    const grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    
    grid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="testimonial-author">
                <strong>${t.author}</strong>
                <span>${t.position}</span>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    // Project count
    document.querySelectorAll('[data-stat="projects"]').forEach(el => {
        el.textContent = projects.length + '+';
    });
    
    // Skills count
    document.querySelectorAll('[data-stat="skills"]').forEach(el => {
        el.textContent = skills.technical.length + skills.soft.length;
    });
}

// Initialize all dynamic content
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderCertifications();
    renderEducation();
    renderProjects();
    renderTestimonials();
    updateStats();
    renderPersonalInfo();
    
    // Set current year in footer
    document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});

// ============================================
// PROJECT FILTER (Projects Page)
// ============================================
(function() {
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-btn')) return;
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card[data-category]');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const filter = e.target.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                return;
            }
            
            const techTags = card.querySelectorAll('.tech-tag');
            let match = false;
            
            techTags.forEach(tag => {
                const tech = tag.textContent.toLowerCase();
                if (filter === 'networking' && 
                    (tech.includes('vlan') || tech.includes('cisco') || 
                     tech.includes('dhcp') || tech.includes('dns') ||
                     tech.includes('vpn') || tech.includes('wireguard'))) {
                    match = true;
                } else if (filter === 'security' && 
                          (tech.includes('kali') || tech.includes('nmap') ||
                           tech.includes('wireshark') || tech.includes('firewall') ||
                           tech.includes('security'))) {
                    match = true;
                } else if (filter === 'automation' && 
                          (tech.includes('python') || tech.includes('bash') ||
                           tech.includes('script') || tech.includes('powershell'))) {
                    match = true;
                }
            });
            
            card.style.display = match ? 'block' : 'none';
        });
    });
})();

// ============================================
// TYPED TEXT EFFECT (Homepage)
// ============================================
(function() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const texts = [
        'Networking & Cybersecurity Student',
        'Homelab Enthusiast',
        'CCNA Candidate',
        'Security+ Candidate'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const fullText = texts[textIndex];
        typedElement.textContent = isDeleting 
            ? fullText.substring(0, charIndex - 1)
            : fullText.substring(0, charIndex + 1);
        
        charIndex += isDeleting ? -1 : 1;
        
        if (!isDeleting && charIndex === fullText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(typeEffect, 500);
})();

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.project-card, .focus-card, .testimonial-card, .cert-card, .stat-box')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
})();

console.log('✅ saiaikkwan.com - Scripts loaded successfully');