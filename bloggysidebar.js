document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("blog-nav");

    sidebar.innerHTML = `
    <div class="blog-item">
        <span class="date">2025-08-28</span>
        <a class="topic"
        href="bloggy.html">Bloggy beginning</a>
    </div>
    `;
});