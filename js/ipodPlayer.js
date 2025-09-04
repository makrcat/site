class IpodPlayer {
  constructor({ songsPath, ipodElement }) {
    this.songsPath = songsPath;
    this.ipod = ipodElement;

    this.audio = new Audio();
    this.tracks = [];
    this.currentIndex = 0;

    // UI elements
    this.trackInfo = this.ipod.querySelector("#track-info");
    this.playStatus = this.ipod.querySelector("#play-status");

    // Wheel buttons
    this.ipod.querySelector(".p:nth-child(2)").addEventListener("click", () => this.next());
    this.ipod.querySelector(".p:nth-child(3)").addEventListener("click", () => this.prev());
    this.ipod.querySelector(".p:nth-child(4)").addEventListener("click", () => this.togglePlay());

    // Optional: debug any playback errors
    this.audio.addEventListener("error", (e) => {
      console.error("Audio load error:", e, this.audio.src);
    });

    this.loadTracks();
  }

  async loadTracks() {
    this.tracks = [
      "Blue Soda.mp3",
      "bossa uh.mp3",
      "breakfast.mp3"
    ];

    // URL-encode filenames so spaces work
    this.tracks = this.tracks.map(f => `${this.songsPath}/${encodeURIComponent(f)}`);

    this.loadTrack(0);
  }

  loadTrack(index) {
    this.currentIndex = index;
    const src = this.tracks[this.currentIndex];
    this.audio.src = src;

    // Show fallback filename
    this.updateUI();

    // Fetch ID3 metadata (async)
    this.fetchMetadata(src);
  }

  play() {
    this.audio.play().catch(err => console.error("Play failed:", err));
    this.playStatus.textContent = "⏸";
  }

  pause() {
    this.audio.pause();
    this.playStatus.textContent = "▶";
  }

  togglePlay() {
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.tracks.length;
    this.loadTrack(this.currentIndex);
    this.play();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length;
    this.loadTrack(this.currentIndex);
    this.play();
  }

  updateUI() {
    const filename = decodeURIComponent(this.tracks[this.currentIndex].split("/").pop());
    this.trackInfo.textContent = filename.replace(/\.mp3$/, "");
  }

  fetchMetadata(src) {
    jsmediatags.read(src, {
      onSuccess: (tag) => {
        const tags = tag.tags;
        const title = tags.title || decodeURIComponent(src.split("/").pop().replace(/\.mp3$/, ""));
        const artist = tags.artist || "Unknown Artist";

        // Update track info with title + artist
        this.trackInfo.textContent = `${title} – ${artist}`;

        // Album art
        if (tags.picture) {
          const { data, format } = tags.picture;
          let base64String = "";
          for (let i = 0; i < data.length; i++) {
            base64String += String.fromCharCode(data[i]);
          }
          const imageUrl = `data:${format};base64,${btoa(base64String)}`;
          const art = this.ipod.querySelector("#album-art");
          if (art) art.src = imageUrl;
        }
      },
      onError: (error) => {
        console.warn("Metadata error:", error);
        // fallback already handled by updateUI()
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const ipod = document.querySelector(".ipod");
  new IpodPlayer({ songsPath: "/songs", ipodElement: ipod });
});
