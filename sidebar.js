document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `
    <div style="display: flex; flex-direction: row; justify-content: space-between">
      <h2 style="padding-bottom: 10px;">Sitemap</h2>
      <a href="/">Home</a>
    </div>

    <div class="navlink-s">
      <div class="navlink">Home</div>
      <div class="navlink">About</div>
      <div class="navlink">Bloggy</div>
      <div class="navlink">Photographs ^o^</div>
      <div class="navlink">Drawing</div>
      <div class="navlink">Awesome cool stuff shrines</div>
      <div class="navlink">Room</div>
      <div class="navlink">Neighborhood!</div>
      <div class="navlink">Guestbook</div>
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