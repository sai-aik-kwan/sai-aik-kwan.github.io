// ============================================
// COMPONENT LOADER - Loads header & footer
// ============================================

(function() {
    const data = portfolioData;
    
    // Determine current page for active nav highlighting
    const currentPath = window.location.pathname;
    let currentPage = 'home';
    if (currentPath.includes('about')) currentPage = 'about';
    if (currentPath.includes('projects')) currentPage = 'projects';
    if (currentPath.includes('contact')) currentPage = 'contact';
    
    // Build header HTML
    function buildHeader() {
        const navLinks = [
            { href: 'index.html', page: 'home', label: 'Home' },
            { href: 'about.html', page: 'about', label: 'About' },
            { href: 'projects.html', page: 'projects', label: 'Projects' },
            { href: 'contact.html', page: 'contact', label: 'Contact' }
        ];
        
        const navHTML = navLinks.map(link => 
            `<li><a href="${link.href}" class="nav-link ${currentPage === link.page ? 'active' : ''}">${link.label}</a></li>`
        ).join('');
        
        const mobileNavHTML = navLinks.map(link =>
            `<li><a href="${link.href}" class="mobile-nav-link">${link.label}</a></li>`
        ).join('');
        
        return `
        <header class="header">
            <div class="container header-container">
                <a href="index.html" class="logo">
                    <span class="logo-text">${data.personalInfo.name}</span>
                    <span class="logo-badge">.com</span>
                </a>
                
                <nav class="nav">
                    <ul class="nav-list">
                        ${navHTML}
                    </ul>
                </nav>
                
                <div class="header-actions">
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                        <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                    <a href="${data.personalInfo.github}" target="_blank" class="github-link" aria-label="GitHub">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.876.118 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.222 0 1.604-.015 2.896-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="mobile-menu" id="mobileMenu">
                <ul class="mobile-nav-list">
                    ${mobileNavHTML}
                </ul>
            </div>
        </header>
        
        <main>`;
    }
    
    // Build footer HTML
    function buildFooter() {
        return `
        </main>
        
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-info">
                        <h3>${data.personalInfo.name}</h3>
                        <p>Networking & Cybersecurity Student<br>
                        ${data.personalInfo.college}<br>
                        ${data.personalInfo.university_partner}</p>
                        <p class="footer-location">📍 ${data.personalInfo.location}</p>
                    </div>
                    
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-social">
                        <h4>Connect</h4>
                        <div class="social-links">
                            <a href="${data.personalInfo.github}" target="_blank" class="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.876.118 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.222 0 1.604-.015 2.896-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a href="${data.personalInfo.linkedin}" class="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                            <a href="mailto:${data.personalInfo.email}" class="social-link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} ${data.personalInfo.name}. All rights reserved.</p>
                    <p class="footer-credit">Built with HTML/CSS/JS • Hosted on GitHub Pages</p>
                </div>
            </div>
        </footer>`;
    }
    
    // Insert header at the start of body
    document.body.insertAdjacentHTML('afterbegin', buildHeader());
    
    // Insert footer at the end of body (before scripts)
    const existingScripts = document.querySelectorAll('script');
    const lastScript = existingScripts[existingScripts.length - 1];
    if (lastScript) {
        lastScript.insertAdjacentHTML('beforebegin', buildFooter());
    } else {
        document.body.insertAdjacentHTML('beforeend', buildFooter());
    }
})();