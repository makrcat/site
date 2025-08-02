document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `
    <div style="display: flex; flex-direction: row; justify-content: space-between">
      <h2 style="padding-bottom: 10px;">Sitemap</h2>
      <a href="/">Home</a>
    </div>

    <div class="navlink-s">
      <div class="navlink">Home</div>
      <div class="navlink">Bloggy</div>
      <div class="navlink">Photographs ^o^</div>
      <div class="navlink">Drawing</div>
      <div class="navlink">Awesome cool stuff shrines</div>
      <div class="navlink">Room</div>
      <div class="navlink">Neighborhood!</div>
      <div class="navlink">Guestbook</div>
    </div>
    `;

    const buttons = document.getElementById("buttons");
    buttons.innerHTML = `
    <img src="button/front/w0rmleft_static.gif">
  <img src="button/front/hell.gif">
  <img src="button/front/any_browser_at.gif">
  <img src="button/front/bob.gif">
  <img src="button/front/desp-anim.gif">
  <img src="button/front/familyfriendlyacidtrip.gif">
  <img src="button/front/cat_sq.png" heigh>
  <img src="button/front/notperfect.gif">
  <img src="button/front/kool.gif">
  <img src="button/front/wii.gif">
  <img src="button/front/madoka.gif">
  <img src="button/front/vocaloid.png">
  <img src="button/front/navi.png" height="31px">
  <img src="button/front/17776.png">
  <img src="button/front/vsc.png">
  <img src="button/front/css.png">
  <img src="button/front/wa.gif">
  <img src="button/front/nerv.png">
  <img src="button/front/temptation.png">
  <img src="button/front/enabbq.png">
  <img src="button/front/angelcat3.gif">
  <img src="button/front/dream.jpg">
  <img src="button/front/sweeper.png">
  <img src="button/front/milktea.gif">
  <img src="button/front/w3schools88x31.gif">
  <img src="button/front/saturnscape.jpg">
  <img src="button/front/powered-cpp.gif">
  <img src="button/front/likecomputer.jpg">
  <img src="button/front/catscapeloader.gif">
  <img src="button/front/teto.gif">
  <img src="button/front/macosmade.gif"></img>`;

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