document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `
    <div style="display: flex; flex-direction: row; justify-content: space-between">
      <h2 style="padding-bottom: 10px;">Sitemap</h2>
      <a href="">Home</a>
    </div>

    <div class="navlink-s">
      <a class="navlink" href="index.html">Home</a>
      <a class="navlink" href="about.html">About</a>
      <a class="navlink" href="bloggy.html">Bloggy</a>
      <a class="navlink" href="photog.html">Photographs ^o^</a>
      <a class="navlink">Drawing</a>
      <a class="navlink">Awesome cool stuff shrines</a>
      <a class="navlink">Room</a>
      <a class="navlink">Neighborhood!</a>
      <a class="navlink">Guestbook</a>
    </div>
    `;

  const tuxW = document.getElementById("tux-widget");
  tuxW.innerHTML = `
  <div class="outer-wrapper-windows-div" 
      style="position: relative;width: 250px;min-height: 30px; margin-bottom: 20px;">
        <div class="bar bar-blue">terminal tux</div>

        <div style="position: relative">
          <div class="inner">
            <div id="fortune" style="white-space: pre;">
              help
            </div>

            <img src="assets/small/fortune-cookie.png" style="position: absolute; bottom: 5px; left: 150px; opacity: 0.5;">
            <button style="position: absolute; bottom: 70px; left: 150px;" onclick="getRandomFortune()">go
              again</button>
          </div>
        </div>
      </div>`
});