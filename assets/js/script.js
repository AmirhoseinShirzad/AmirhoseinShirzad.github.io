document.addEventListener('DOMContentLoaded', function() {
    // --- SKILLS DATA ---
    const skillsData = {
        technical: [
            { name: 'Python (ML, Deep Learning)', level: 7 },
            { name: 'Bioprocess Optimization', level: 7 },
            { name: 'Modeling & Simulation', level: 8 },
            { name: 'Statistical Analysis (DoE)', level: 8 }
        ],
        software: [
            { name: 'SuperPro Designer', level: 7 },
            { name: 'Design Expert', level: 8 },
            { name: 'Qualitek-4', level: 7 },
            { name: 'Google Colab', level: 7 },
            { name: 'MS Office Suite', level: 9 }
        ],
        lab: [
            { name: 'Fermenter Operation', level: 8 },
            { name: 'Tangential Flow Filtration (TFF)', level: 7 },
            { name: 'Spectroscopy', level: 8 },
            { name: 'HPLC', level: 6 }
        ]
    };

    // --- FUNCTION TO RENDER SKILLS ---
    function renderSkills(containerId, skills) {
        const container = document.getElementById(containerId);
        if (!container) return;

        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            
            const nameElement = document.createElement('p');
            nameElement.className = 'font-medium text-gray-700 mb-2';
            nameElement.textContent = skill.name;

            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'flex items-center space-x-1';

            for (let i = 0; i < 10; i++) {
                const dot = document.createElement('span');
                dot.className = 'w-3 h-3 rounded-full';
                if (i < skill.level) {
                    dot.classList.add('bg-blue-500');
                } else {
                    dot.classList.add('bg-gray-300');
                }
                dotsContainer.appendChild(dot);
            }

            skillElement.appendChild(nameElement);
            skillElement.appendChild(dotsContainer);
            container.appendChild(skillElement);
        });
    }

    // --- RENDER ALL SKILL SECTIONS ---
    renderSkills('technical-skills-container', skillsData.technical);
    renderSkills('software-skills-container', skillsData.software);
    renderSkills('lab-skills-container', skillsData.lab);


    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    // --- QUALIFICATION TABS ---
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all tabs
            tabs.forEach(item => {
                item.classList.remove('active');
                item.classList.add('text-gray-500');
            });
            // Activate clicked tab
            tab.classList.add('active');
            tab.classList.remove('text-gray-500');

            // Hide all content
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            // Show target content
            const target = document.querySelector(tab.dataset.target);
            if (target) {
                target.classList.remove('hidden');
            }
        });
    });
    
    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Adjusted offset
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // --- Header Shadow & Scroll Top Button ---
        if (window.scrollY >= 80) {
            header.classList.add('shadow-md');
            scrollTopBtn.classList.remove('hidden');
        } else {
            header.classList.remove('shadow-md');
            scrollTopBtn.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', scrollActive);
});