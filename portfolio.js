document.addEventListener('DOMContentLoaded', () => {
    // Store DOM elements
    const folders = document.querySelectorAll('.folder');
    const files = document.querySelectorAll('.file');
    const contentPlaceholder = document.querySelector('.content_placeholder');
    const fileContent = document.querySelector('.file_content');
    const contentDisplay = document.querySelector('.content_display');

    // Content mapping 
    const contentMap = {
        'Overview': {
            title: 'Profile Overview',
            content: `
                <p>Hi, I'm <strong>Kelvin Ngigi</strong> 👋<br>
                I'm a software engineer who thrives on building purposeful and practical technology solutions.</p>

                <p>With a strong foundation in <strong>full-stack development</strong>, I've clocked over 
                <strong>2,600+ hours</strong> writing code — time tracked through WakaTime while building applications 
                that are scalable, efficient, and impactful. My focus lies in crafting reliable software 
                while continuously improving how I work and collaborate.</p>

                <p>I thrive in teams that value innovation, thoughtful engineering, and continuous learning. 
                For me, software is not just about solving problems — it's about creating meaningful experiences.</p>

                <h4 class="overview-subheader">Core Values</h4>
                <ul class="core-values-list">
                    <li><i class="fas fa-balance-scale"></i> <strong class="value-label">Integrity: </strong> I believe in doing the right thing, even when no one's watching.</li>
                    <li><i class="fas fa-lightbulb"></i> <strong class="value-label">Curiosity: </strong> I ask questions, explore ideas, and never stop learning.</li>
                    <li><i class="fas fa-bullseye"></i> <strong class="value-label">Impact: </strong> I build with intention — my goal is to make tech that matters.</li>
                    <li><i class="fas fa-users"></i> <strong class="value-label">Collaboration: </strong> Great things are built by great teams.</li>
                </ul>

                <p>Outside of code, I’m often on the road — I love taking long road trips as a way to recharge, reflect, 
                and refocus on what matters most.</p>
                `
        },
        'Aspirations': {
            title: 'My Vision & Aspirations',
            content: `
                <div class="aspirations-container">
                    <p>I see myself evolving into a lead engineer and strategist — someone who builds, mentors, and influences technical direction with purpose. My goal is to create meaningful systems that serve real people, not just abstract problems.</p>

                    <div class="aspirations-section">
                        <h4><i class="fa-solid fa-mountain-sun"></i> Short-Term Goals</h4>
                        <ul class="aspirations-list">
                            <li><strong>Master Systems Design:</strong> Deepen my architecture and scalability knowledge.</li>
                            <li><strong>Open Source:</strong> Contribute meaningfully to community-driven projects.</li>
                            <li><strong>AI Integration:</strong> Explore ways to responsibly implement AI/ML into useful applications.</li>
                            <li><strong>Mentorship & Writing:</strong> Share what I learn through documentation and peer guidance.</li>
                        </ul>
                    </div>

                    <div class="aspirations-section">
                        <h4><i class="fa-solid fa-binoculars"></i> Long-Term Vision</h4>
                        <p>My long-term goal is to lead efforts that use technology as a tool for empowerment — in education, access, and equity. I aim to build or support platforms that drive real change and open doors for more people to thrive.</p>

                        <div class="aspirations-quote">
                            <i class="fa-solid fa-quote-left quote-icon"></i>
                            <blockquote>The best way to predict the future is to create it.</blockquote>
                            <span class="quote-author">— Peter Drucker</span>
                        </div>
                    </div>

                    <div class="aspirations-section">
                        <h4><i class="fa-solid fa-compass"></i> Guiding Principles</h4>
                        <div class="aspirations-principles">
                            <div class="principle">
                                <i class="fa-solid fa-heart principle-icon"></i>
                                <span>Build with purpose</span>
                            </div>
                            <div class="principle">
                                <i class="fa-solid fa-lightbulb principle-icon"></i>
                                <span>Learn continuously</span>
                            </div>
                            <div class="principle">
                                <i class="fa-solid fa-handshake principle-icon"></i>
                                <span>Collaborate openly</span>
                            </div>
                            <div class="principle">
                                <i class="fa-solid fa-code principle-icon"></i>
                                <span>Craft quality</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'Expertise': {
            title: 'Core Competencies',
            content: `
                <h4><i class="fa-solid fa-code"></i> Technical Skills</h4>
                <ul class="expertise-list">
                    <li><strong>Languages:</strong> Python, C, JavaScript</li>
                    <li><strong>Frameworks & Tools:</strong> React, React Native, Flutter, Django, Node.js</li>
                    <li><strong>Authentication:</strong> OAuth2, Social Logins, Role-based Access Control</li>
                    <li><strong>Version Control & CI/CD:</strong> Git, GitHub, GitHub Actions</li>
                    <li><strong>Deployment & Debugging:</strong> Docker, browser dev tools, runtime debugging (ALX experience)</li>
                </ul>

                <h4><i class="fa-solid fa-terminal"></i> Projects & Problem Solving</h4>
                <p>
                    I bring a problem-solving mindset grounded in strong engineering fundamentals. Whether it's optimizing performance, designing scalable architectures, or debugging edge-case issues under pressure, I focus on delivering practical, high-impact solutions. My experience across freelance and open-source environments has shaped a sharp, adaptable approach to real-world software challenges.
                </p>


                <h4><i class="fa-solid fa-comments"></i> Communication & Soft Skills</h4>
                <ul class="expertise-list">
                    <li><strong>Effective Technical Communication:</strong> Capable of translating complex systems into accessible concepts across teams.</li>
                    <li><strong>Detail-Oriented Execution:</strong> Strong eye for edge cases, spec adherence, and test coverage.</li>
                    <li><strong>Collaborative Engineering:</strong> Proven ability to contribute in asynchronous, distributed, and cross-functional teams.</li>
                </ul>

                <h4><i class="fa-solid fa-seedling"></i> Currently Improving</h4>
                <ul class="expertise-list">
                <li>Diving deeper into backend architecture and API design patterns</li>
                <li>Strengthening test-driven development and debugging workflows</li>
                <li>Exploring system design fundamentals and scalable application patterns</li>
                <li>Building this portfolio in vanilla HTML, CSS, and JavaScript to reinforce core principles</li>
                </ul> `
        },
        'Workflow': {
            title: 'Process & Collaboration',
            content: `
                <h4>How I Build & Deliver 🛠️</h4>
                <ul>
                <li><strong>Impact-Driven Development:</strong> I focus on solving the right problems and building scalable, user-centered systems that create tangible value.</li>
                <li><strong>Visual Planning:</strong> I map out user flows and data architecture using wireframes and tools like Figma or draw.io before writing a single line of code.</li>
                <li><strong>Agile Execution:</strong> I thrive in Scrum, Kanban, or hybrid setups — integrating feedback early and often to adapt quickly and deliver iteratively.</li>
                <li><strong>Collaborative Tooling:</strong> My workflow includes GitHub for version control and PR reviews, Postman for API testing, Notion and Slack for team sync, and Loom for async updates.</li>
                <li><strong>Quality-First Approach:</strong> I practice test-driven development using Jest, Mocha, or Cypress to ensure confidence and stability throughout the stack.</li>
                <li><strong>CI/CD & Delivery:</strong> I deploy through automated pipelines (GitHub Actions, Vercel, Netlify) for seamless releases and reduced regressions.</li>
                <li><strong>Maintainable Systems:</strong> I write clean, well-documented code that supports onboarding, scaling, and future handoff with ease.</li>
                </ul>

                <h4>My Development Cycle 🔄</h4>
                <div class="workflow-timeline-wrapper">
                    <div class="workflow-timeline">
                        <div class="workflow-step">
                            <div class="workflow-icon">🧠</div>
                            <h5>Understand</h5>
                            <p>Clarify the problem, define success metrics, and align on expectations.</p>
                        </div>
                        <div class="workflow-arrow">→</div>
                        <div class="workflow-step">
                            <div class="workflow-icon">📐</div>
                            <h5>Design</h5>
                            <p>Create wireframes and flowcharts to surface edge cases and user journeys.</p>
                        </div>
                        <div class="workflow-arrow">→</div>
                        <div class="workflow-step">
                            <div class="workflow-icon">💻</div>
                            <h5>Build</h5>
                            <p>Develop modular, testable code — backend, frontend, or full stack as needed.</p>
                        </div>
                        <div class="workflow-arrow">→</div>
                        <div class="workflow-step">
                            <div class="workflow-icon">🧪</div>
                            <h5>Test</h5>
                            <p>Validate functionality, catch regressions, and review logic across edge cases.</p>
                        </div>
                        <div class="workflow-arrow">→</div>
                        <div class="workflow-step">
                            <div class="workflow-icon">🚀</div>
                            <h5>Deploy</h5>
                            <p>Automate deployment and monitor releases with clarity and traceability.</p>
                        </div>
                        <div class="workflow-arrow">→</div>
                        <div class="workflow-step">
                            <div class="workflow-icon">🔁</div>
                            <h5>Iterate</h5>
                            <p>Use feedback loops and usage data to continuously refine and improve.</p>
                        </div>
                    </div>
                </div>


                <h4>Tooling Philosophy 🧰</h4>
                <p>
                I choose tools based on context — not comfort. Whether it's GitHub, VS Code, Figma, Postman, or something new, I prioritize simplicity, adaptability, and team alignment to get the job done well.
                </p>

                <p>I view software as a team sport — where clean execution, continuous learning, and user-centered thinking lead to products that truly make an impact.</p>
            `
            },
        'Collaborations': {
            title: 'Cross-Team Impact',
            content: `
                <section class="collab-section">
                <h4><i class="fa-solid fa-people-group"></i> Working Together to Build Better</h4>
                <p class="collab-intro">
                    I bring a team-first mindset to every project — balancing independent execution with active collaboration.
                    Whether it's shipping features, mentoring peers, or aligning cross-functionally, I believe the best work comes 
                    from diverse perspectives and shared ownership.
                </p>

                <div class="collab-cards">
                    <div class="collab-card">
                    <h5><i class="fa-brands fa-github"></i> Open Source Contributions</h5>
                    <p>Improved code quality and performance in community projects by fixing bugs, refining UX, and documenting APIs.</p>
                    </div>

                    <div class="collab-card">
                    <h5><i class="fa-solid fa-laptop-code"></i> Hackathon Teams</h5>
                    <p>Delivered functional prototypes in 48-hour sprints — blending design, development, and agile problem-solving.</p>
                    </div>

                    <div class="collab-card">
                    <h5><i class="fa-solid fa-handshake"></i> Freelance Collaborations</h5>
                    <p>Worked closely with clients and designers to translate business needs into user-centered applications.</p>
                    </div>

                    <div class="collab-card">
                    <h5><i class="fa-solid fa-user-graduate"></i> Peer Mentorship</h5>
                    <p>Reviewed pull requests, co-debugged blockers, and provided guidance to junior developers and peers.</p>
                    </div>
                </div>

                <p class="collab-closer">
                    My goal is always the same: build useful things, elevate the people around me, and move projects forward — together.
                </p>
                </section>
            `
            },
        'Career': {
            title: 'Professional Journey',
            content: `
                <h4>Experience & Impact 🧭</h4>
                <p>
                My journey as a developer has been shaped through a blend of contract work, freelance projects, and a hands-on internship experience. Across every opportunity, I've focused on delivering real-world impact—whether building mobile-first applications, establishing backend systems, or collaborating closely with diverse teams to bring ideas to life.
                </p>

                <div class="career-role">
                <strong>Software Developer (Contract)</strong><br>
                <em>Upwork / Remote | 2024 – Present</em>
                <ul>
                    <li><strong>Clengo App:</strong> Co-developed a cross-platform task scheduling app using React Native.</li>
                    <li>Led frontend architecture, implemented reusable components, and enhanced delivery velocity.</li>
                    <li>Contributed to backend design with Node.js and Express, focusing on scalable APIs and secure auth flows.</li>
                </ul>
                </div>

                <div class="career-role">
                <strong>Android Developer</strong><br>
                <em>Freelance Project | 2023 – Present</em>
                <ul>
                    <li><strong>Tunda App:</strong> Built a mobile platform connecting fruit vendors with freelance delivery riders.</li>
                    <li>Integrated vendor dashboards, order management, geolocation, and Firebase for backend analytics.</li>
                    <li>Launched on Android with continued maintenance and usability improvements based on user feedback.</li>
                </ul>
                </div>

                <div class="career-role">
                <strong>Software Engineering Intern</strong><br>
                <em>Climate Wavers | Remote | Jun 2024 – Dec 2024</em>
                <ul>
                    <li>Established the company’s static site and supported backend development using Django.</li>
                    <li>Built internal tools for logistics use cases and contributed to early product planning discussions.</li>
                    <li>Practiced GitHub-based workflows and collaborated across async, cross-functional teams.</li>
                </ul>
                </div>
            `
            },
        'Education': {
            title: 'Education',
            content: `
                <h4>Learning & Growth 🎓</h4>

                <div class="education-entry">
                <strong>Data Structures & Algorithms Program</strong><br>
                <em>Africa to Silicon Valley (A2SV) | 2025 – Present</em>
                <ul>
                    <li>Focused training in problem solving, algorithmic thinking, and communication through high-impact DSA problems.</li>
                    <li>Hands-on experience with competitive programming patterns and deep dives into time-space tradeoffs.</li>
                </ul>
                </div>

                <div class="education-entry">
                <strong>Software Engineering Program</strong><br>
                <em>ALX | 2023 – 2024</em>
                <ul>
                    <li>12-month intensive, project-led program covering systems programming, full-stack web development, and infrastructure tooling.</li>
                    <li>Built and deployed web apps from scratch using HTML, CSS, JavaScript, Python, and C; implemented load balancers and web servers.</li>
                    <li>Final project: Created a custom Shell in C with process handling, tokenization, and basic job control.</li>
                </ul>
                </div>

                <div class="education-entry">
                <strong>Technical Transition & Self-Study</strong><br>
                <em>2019 – 2023 | Independent</em>
                <ul>
                    <li>Actively transitioned into software engineering by self-studying programming fundamentals and applying engineering principles from my instrumentation background.</li>
                    <li>Built automation scripts and explored Python and Bash tools while preparing for formal technical training.</li>
                    <li>This period laid the foundation for my structured education and hands-on engineering practice.</li>
                </ul>
                </div>

                <div class="education-entry">
                <strong>BSc. Control & Instrumentation</strong><br>
                <em>Jomo Kenyatta University of Agriculture and Technology | 2015 – 2019</em>
                <ul>
                    <li>Learned systems design, automation, and control theory — forming a strong analytical foundation for engineering problem-solving.</li>
                    <li>Capstone project involved building a prototype for real-time temperature monitoring and regulation.</li>
                </ul>
                </div>
            `
            },
        Resume: {
            title: 'Resume',
            content: `
                <h4>Kelvin Thuo — Resume Snapshot 📄</h4>

                <p><strong>Software Engineer</strong> — Proven experience in building and deploying full-stack applications, mobile apps, and custom tools across freelance and internship roles. Over 2800+ hours of hands-on development.</p>

                <h5>Key Experience:</h5>
                <ul>
                <li><strong>Climate Wavers (Intern):</strong> Django backend, team leadership, chatbot dev, and social auth integration.</li>
                <li><strong>Freelance (Upwork/Fiverr):</strong> Built video tools (MoviePy), web charts (JS + ECharts), and contributed to mobile/web platforms.</li>
                <li><strong>Projects:</strong> 
                    <ul>
                    <li><strong>TundaApp:</strong> Android app for informal vendors using SQLite + Flutter.</li>
                    <li><strong>Shell:</strong> Built from scratch in C to learn memory and process execution.</li>
                    <li><strong>Airbnb Clone:</strong> Full-stack with Flask, MySQL, Redis, and front-end stack.</li>
                    </ul>
                </li>
                </ul>

                <h5>Technical Stack:</h5>
                <ul>
                <li><strong>Languages:</strong> C, Python, JavaScript, Dart</li>
                <li><strong>Backend:</strong> Django, Flask, Node.js</li>
                <li><strong>Frontend:</strong> HTML, CSS, Tailwind, Flutter</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, MongoDB, Redis</li>
                </ul>

                <h5>Education:</h5>
                <ul>
                <li><strong>ALX Africa:</strong> Software Engineering Certificate (2023–2024)</li>
                <li><strong>JKUAT:</strong> BSc. Control & Instrumentation (2015–2019)</li>
                </ul>

                <p><a href="https://docs.google.com/document/d/your-doc-id-here" target="_blank">📄 View Full Resume on Google Docs</a></p>
            `
            },
        'Highlights': {
            title: 'Impactful Builds',
            content: `
                <p>These are a few real-world projects where I translated ideas into usable, impactful products — from mobile-first apps to scalable backend systems.</p>

                <h4>Clengo – Cleaning Service Coordination Platform</h4>
                <ul>
                <li><strong>Role:</strong> Mobile Engineer & Backend Collaborator</li>
                <li><strong>Stack:</strong> React Native, Node.js, MongoDB</li>
                <li>Co-developed mobile apps for both clients and cleaners, supporting scheduling, job selection, and notifications.</li>
                <li>Implemented modular UI components and contributed to scalable backend architecture with secure authentication flows.</li>
                <li><a href="#">View Project</a></li>
                </ul>

                <h4>Tunda – Local Produce Delivery Network</h4>
                <ul>
                <li><strong>Role:</strong> Full-Stack Developer</li>
                <li><strong>Stack:</strong> Flutter, Node.js, MySQL</li>
                <li>Built vendor-facing features and delivery-side flow to coordinate fruit order deliveries via freelance riders.</li>
                <li>Integrated Firebase for push notifications and analytics; implemented clean backend architecture and order tracking.</li>
                <li><a href="#">View Project</a></li>
                </ul>

                <h4>Swerise – Multi-Branch Retail Management App</h4>
                <ul>   
                <li><strong>Role:</strong> Mobile Developer</li>
                <li><strong>Stack:</strong> React Native, SQLite, Firebase</li> 
                <li><strong>Situation:</strong> The business owner was manually traveling to five petroleum retail shops 
                    to reconcile physical sales records with cash, Mpesa, and debt — a time-consuming and costly task.</li> 
                <li><strong>Task:</strong> Design and develop a system that digitizes sales logging and reduces the need for frequent shop visits, 
                    especially in areas with limited internet connectivity.</li> 
                <li><strong>Action:</strong> 
                    <ul> 
                    <li>Developed two separate Android apps — one for employees, one for the owner — using an offline-first architecture.</li> 
                    <li>Employee app: Enabled daily sales logging with local storage, syncing data to the cloud once internet became available.</li> 
                    <li>Owner app: Built a live dashboard with cross-branch visibility and offline support for onsite operations.</li> 
                    <li>Implemented secure data sync strategies to ensure consistency and prevent data loss in low-connectivity environments.</li> 
                    </ul> 
                <li><strong>Result:</strong> 
                    <ul> 
                        <li>Reduced management costs by over <strong>70%</strong> — replacing high weekly travel expenses with low mobile data usage and fewer physical shop visits.</li> 
                        <li>Saved approximately <strong>10+ hours/week</strong> for the owner by eliminating manual reconciliation and travel, enabling focus on strategic business decisions.</li> 
                        <li>Provided real-time operational visibility and boosted decision-making confidence through synced cross-branch sales dashboards.</li> 
                        <li>Enabled successful launch of a <strong>6th branch</strong> within 3 months, thanks to regained time, clarity, and system scalability.</li> 
                    </ul> 
                </li>
                </li> <li><a href="https://www.upwork.com/freelancers/~01f8a36662a7a28681?p=1930658933494726656">View Project</a></li> </ul>
            `
            },
        'Ongoing': {
            title: 'Active Builds',
            content: `
                <p>I’m actively building tools that solve real-world logistical and operational challenges. These projects reflect both my technical growth and long-term vision.</p>

                <h4>Clengo – Admin Dashboard & Backend Overhaul</h4>
                <ul>
                <li><strong>Status:</strong> In Development</li>
                <li><strong>Stack:</strong> React (Admin UI), Node.js, Express, MongoDB</li>
                <li>Designing and implementing an admin interface for job management and cleaner performance analytics.</li>
                <li>Refactoring backend architecture to improve maintainability, performance, and security.</li>
                </ul>

                <h4>TripOptima – Integrated Travel & Transport Platform</h4>
                <ul>
                <li><strong>Status:</strong> Design Phase</li>
                <li><strong>Stack:</strong> To Be Determined</li>
                <li>Planning a unified platform for car hire, hotel transfers, tours, and chauffeur services.</li>
                <li>Current focus on user experience flows, service modeling, and multi-role access design.</li>
                </ul>
            `
            },
        'Launches': {
            title: 'Launches',
            content: `
                <p>These are tools, applications, and scripts I’ve brought to life — functional, shipped, and used in real-world scenarios.</p>

                <h4>DodgeBall Data Scraper</h4>
                <ul>
                <li><strong>Role:</strong> Python Developer</li>
                <li><strong>Tech:</strong> Python, BeautifulSoup, Requests</li>
                <li>Built a web scraping utility to collect match data from a dodgeball tournament site for post-game analysis and reporting.</li>
                <li>Automated daily data pulls and structured output for downstream analytics teams.</li>
                </ul>

                <h4>Tunda (Launch)</h4>
                <ul>
                <li><strong>Role:</strong> Product Creator</li>
                <li><strong>Tech:</strong> Flutter, Node.js, MySQL</li>
                <li>Released an Android app connecting fruit vendors with freelance riders, with live usage in local markets.</li>
                <li>Integrated Firebase for analytics and notifications post-launch.</li>
                </ul>

                <h4>Swerise (Launch)</h4>
                <ul>
                <li><strong>Role:</strong> Developer</li>
                <li><strong>Tech:</strong> React Native</li>
                <li>Shipped a retail management tool for petroleum shop chains with offline-first features and cross-location sync.</li>
                </ul>
            `
            }
    };    

    const SMALL_CONTENT_KEYS = ['Bio', 'Values', 'Goals', 'Vision'];

    folders.forEach(folder => {
        const header = folder.querySelector('.folder_header');
        const contents = folder.querySelector('.folder_contents');
        const arrow = folder.querySelector('.folder_arrow');

        header.addEventListener('click', () => {
            folder.classList.toggle('active');
            if (folder.classList.contains('active')) {
                contents.style.maxHeight = contents.scrollHeight + 'px';
                arrow.style.transform = 'rotate(180deg)';
            } else {
                contents.style.maxHeight = '0px';
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    files.forEach(file => {
        file.addEventListener('click', () => {
            files.forEach(f => f.classList.remove('active'));
            file.classList.add('active');

            const contentKey = file.getAttribute('data-content-key');
            const content = contentMap[contentKey];
            const fileLabel = file.textContent.trim();
            const isTitleRedundant = content.title.trim().toLowerCase() === fileLabel.toLowerCase();

            if (content) {
                contentPlaceholder.style.display = 'none';
                fileContent.style.opacity = '0';

                setTimeout(() => {
                    fileContent.style.display = 'block';
                    fileContent.classList.remove('small-content', 'large-content');

                    if (SMALL_CONTENT_KEYS.includes(contentKey)) {
                        fileContent.classList.add('small-content');
                    } else {
                        fileContent.classList.add('large-content');
                    }

                    fileContent.innerHTML = `
                        ${isTitleRedundant ? '' : `<h2>${content.title}</h2>`}
                        ${content.content}
                    `;

                    setTimeout(() => {
                        fileContent.style.opacity = '1';
                    }, 50);
                }, 200);
            }
        });
    });

    folders.forEach(folder => {
        const contents = folder.querySelector('.folder_contents');
        contents.style.maxHeight = '0px';
    });

    const style = document.createElement('style');
    style.textContent = `
        .folder_contents {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
        }

        .folder_arrow {
            transition: transform 0.3s ease;
        }

        .file.active {
            background-color: var(--accent-color);
            color: var(--white);
        }

        .file_content {
            transition: opacity 0.3s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});
