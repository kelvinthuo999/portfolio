document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder_header');

    folders.forEach(folder => {
        folder.addEventListener('click', function () {
            const parentFolder = this.parentElement;
            parentFolder.classList.toggle('open');

            const folderContents = this.nextElementSibling;
            folderContents.classList.toggle('show');

            const arrow = this.querySelector('.folder_arrow');
            arrow.style.transform = parentFolder.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

    const contentMap = {
        "Bio": "Hi, I’m Kelvin Ngigi, a software engineer with a passion for building thoughtful digital experiences. I blend creativity and logic to build solutions that matter.",
        "Values": "I believe in curiosity-driven learning, clean code, and meaningful collaboration. My work is grounded in integrity, empathy, and growth.",
        "Education": "B.Sc. in Computer Science, XYZ University. Certified in Full Stack Development and Cloud Engineering.",
        "Career Summary": "Over 4 years in software development, from startups to freelance gigs. Specialized in web and mobile apps, especially React and Node.js.",
        "Skills": "JavaScript, React, Node.js, Python, SQL, Docker, Git, REST APIs, Agile. Also strong in problem-solving and communication.",
        "Resume": "You can download my resume [here](#).",
        "Projects": "1. Portfolio Website\n2. Inventory App\n3. AI Chatbot\n(Descriptions coming soon...)",
        "Ongoing Work": "Currently building a personal finance tracker and contributing to open source.",
        "Collaborations": "Mentored junior developers, contributed to open-source UI library, paired on hackathon projects.",
        "Goals": "Master system design, dive deeper into DevOps, and build tools that empower others.",
        "Vision": "To lead or co-found a product team building ethical, inclusive, and impactful software."
    };

    const files = document.querySelectorAll('.file');
    const displayArea = document.querySelector('.content_display');

    files.forEach(file => {
        file.addEventListener('click', function () {
            const fileName = this.textContent.trim();
            const content = contentMap[fileName] || "Content coming soon...";
            displayArea.innerHTML = `<div class="file_content"><h2>${fileName}</h2><p>${content.replace(/\n/g, "<br>")}</p></div>`;
        });
    });
});
