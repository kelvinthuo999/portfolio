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
            title: 'Expertise',
            content: `
                <h4>Technical Skills</h4>
                <ul>
                    <li><strong>Languages:</strong> JavaScript, Python, Java</li>
                    <li><strong>Frameworks:</strong> React, Node.js, Django, Spring Boot</li>
                    <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL</li>
                    <li><strong>DevOps & Tools:</strong> Docker, Git, AWS, GitHub Actions</li>
                    <li><strong>Testing:</strong> Jest, Mocha, Selenium</li>
                </ul>
                <h4>Soft Skills</h4>
                <ul>
                    <li>Problem-solving mindset and logical reasoning</li>
                    <li>Clear communicator, written and verbal</li>
                    <li>Comfortable leading and mentoring junior engineers</li>
                    <li>Fast learner and highly adaptable</li>
                </ul>
            `
        },
        'Workflow': {
            title: 'Workflow',
            content: `
                <h4>How I Work 🛠️</h4>
                <ul>
                    <li><strong>User-Centric Development:</strong> I prioritize understanding user needs before writing a line of code.</li>
                    <li><strong>Agile Methodology:</strong> Experienced with both Scrum and Kanban for flexible, iterative development.</li>
                    <li><strong>Version Control:</strong> Git is second nature — branching, PR reviews, atomic commits.</li>
                    <li><strong>Testing Culture:</strong> I integrate testing from day one — unit, integration, and end-to-end.</li>
                    <li><strong>CI/CD Pipelines:</strong> I automate builds, tests, and deployments to ensure rapid and safe releases.</li>
                    <li><strong>Documentation:</strong> I write clear, useful docs that aid both onboarding and long-term maintainability.</li>
                </ul>
                <p>I believe software is not just about code — it's about clarity, collaboration, and delivering value continuously.</p>
            `
        },
        'Collaborations': {
            title: 'Collaborations',
            content: `
                <h4>Working Together 🤝</h4>
                <p>I thrive in collaborative environments where team synergy drives great results.</p>
                <ul>
                    <li><strong>Open Source:</strong> Contributed to [Project Name], improving [feature/performance/UX].</li>
                    <li><strong>Hackathons:</strong> Participated in [Event Name], where our team built a [brief description of the app] in under 48 hours.</li>
                    <li><strong>Team Projects:</strong> Developed a [project type] in a cross-functional team, where I handled [your role or contribution].</li>
                    <li><strong>Mentorship & Reviews:</strong> Regularly paired with junior devs for pair programming, code reviews, and technical guidance.</li>
                </ul>
                <p>I believe great software comes from diverse ideas, mutual respect, and open collaboration.</p>
            `
        },
        'Career': {
            title: 'Career',
            content: `
                <h4>Professional Journey 🧭</h4>
                <div>
                    <strong>Software Engineer</strong><br>
                    <em>Company Name | Location | 2023 – Present</em>
                    <ul>
                        <li>Designed and deployed scalable web applications using React, Node.js, and PostgreSQL.</li>
                        <li>Led a 4-person team in delivering an internal tool used across 3 departments.</li>
                        <li>Improved system performance by 30% through architectural refactoring and query optimization.</li>
                    </ul>
                </div>
                <div>
                    <strong>Junior Developer</strong><br>
                    <em>Company Name | Location | 2021 – 2023</em>
                    <ul>
                        <li>Contributed to front-end development of customer dashboard used by 5,000+ users.</li>
                        <li>Worked closely with designers to improve accessibility and responsiveness.</li>
                        <li>Wrote unit and integration tests that reduced bugs by 25% in production.</li>
                    </ul>
                </div>
                <div>
                    <strong>Intern Developer</strong><br>
                    <em>Company Name | Location | 2020</em>
                    <ul>
                        <li>Built internal scripts to automate data entry, reducing manual tasks by 40%.</li>
                        <li>Gained hands-on experience with Git workflows, Jira, and agile practices.</li>
                    </ul>
                </div>
            `
        },
        'Education': {
            title: 'Education',
            content: `
                <h4>Academic Background 🎓</h4>
                <p><strong>Bachelor of Science in Computer Science</strong><br>
                University Name | Graduation Year<br>
                Relevant Courses: Algorithms, Data Structures, Systems Design, AI.</p>

                <h4>Certifications</h4>
                <ul>
                    <li>Google Cloud Associate Engineer — 2023</li>
                    <li>Meta Front-End Developer Certificate (Coursera) — 2022</li>
                    <li>Scrum Master Certification — 2021</li>
                </ul>

                <h4>Other Training</h4>
                <ul>
                    <li>Full-Stack Web Development Bootcamp – freeCodeCamp / Udemy</li>
                </ul>
            `
        },
        'Resume': {
            title: 'Resume',
            content: `
                <p>You can view or download my full resume below:</p>
                <a href="resume.pdf" target="_blank" class="text-accent-color font-medium">📄 Download Resume</a>
                <p>If the preview doesn't load, use the download link above.</p>
                <iframe src="resume.pdf" width="100%" height="500px" style="border:1px solid #ccc;"></iframe>
            `
        },
        'Highlights': {
            title: 'Highlights',
            content: `
                <p>Here are a few standout projects that reflect both my technical capabilities and design thinking.</p>

                <h4>DevTrack – Developer Productivity Dashboard</h4>
                <ul>
                    <li><strong>Role:</strong> Full-Stack Developer</li>
                    <li><strong>Stack:</strong> React, Node.js, MongoDB, Chart.js</li>
                    <li>Designed and implemented a dashboard to visualize developer performance using GitHub API integrations.</li>
                    <li>Helped teams reduce cycle time by 20% through visibility and insights.</li>
                    <li><a href="#">View Project</a></li>
                </ul>

                <h4>EcoCart – Sustainable E-Commerce</h4>
                <ul>
                    <li><strong>Role:</strong> Backend Engineer</li>
                    <li><strong>Stack:</strong> Django, PostgreSQL, Stripe API</li>
                    <li>Built an online store with carbon-tracking checkout and vendor dashboards.</li>
                    <li>Scaled to 500+ transactions/day after launch.</li>
                    <li><a href="#">View Project</a></li>
                </ul>
            `
        },
        'Ongoing': {
            title: 'Ongoing',
            content: `
                 <p>I’m actively working on a number of exciting, experimental, and passion-driven builds.</p>

                <h4>MentorMatch – Career Mentorship Platform</h4>
                <ul>
                    <li><strong>Status:</strong> MVP in progress</li>
                    <li><strong>Stack:</strong> Next.js, Firebase, Tailwind</li>
                    <li>Connects early-career developers with industry mentors. Features scheduling, chat, and profile verification.</li>
                </ul>

                <h4>AI Code Helper – Smart Dev Assistant</h4>
                <ul>
                    <li><strong>Status:</strong> Prototype</li>
                    <li><strong>Stack:</strong> React, FastAPI, OpenAI API</li>
                    <li>Aims to streamline code snippets, documentation, and debugging within VS Code environment.</li>
                </ul>
            `
        },
        'Launches': {
            title: 'Live Projects & Launches',
            content: `
                <p>These are projects that have been deployed and are live in production or actively used.</p>

                <h4>CampusMate – Student Life Management Tool</h4>
                <ul>
                    <li><strong>Live:</strong> <a href="#">campusmate.io</a></li>
                    <li><strong>Stack:</strong> MERN (MongoDB, Express, React, Node)</li>
                    <li>Helps students track assignments, grades, and activities in one place. Launched in 3 campuses.</li>
                </ul>

                <h4>Eventify – Virtual Event Hosting Platform</h4>
                <ul>
                    <li><strong>Live:</strong> <a href="#">eventify.live</a></li>
                    <li><strong>Stack:</strong> Laravel, Vue.js, MySQL</li>
                    <li>Used by 10+ organizations to run webinars, Q&A sessions, and live broadcasts.</li>
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
