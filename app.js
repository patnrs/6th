
function checkPassword() {
    // รวบรวมค่าจาก input ทั้งหมด
    const passcode = [
      document.getElementById('pass1').value,
      document.getElementById('pass2').value,
      document.getElementById('pass3').value,
      document.getElementById('pass4').value,
      document.getElementById('pass5').value,
      document.getElementById('pass6').value,
    ].join('');

    // ตรวจสอบรหัสผ่าน
    if (passcode === '010162') {
      Swal.fire({
        html: "<div style='font-size: 80px;'>💕👩‍❤️‍💋‍👨🤭😍</div>",
        title: "ถูกต้องนะค้าบบบ...",
        text: "ไปต่อมั้ย",
        confirmButtonText: "เริ่มเลย!!",
      }).then((result) => {
        // ถ้าผู้ใช้คลิก "เริ่มเลย!!" ให้ไปยังหน้าถัดไป
        if (result.isConfirmed) {
          window.location.href = "/page.html"; // เปลี่ยน URL ให้เป็นหน้าถัดไป
        }
      });
    } else {
        Swal.fire({
            html: "<div style='font-size: 80px;'>😡</div>",
            title: "เฮ้ย!!! จำไม่ได้หรอ",
            text: "ให้โอกาสอีกครั้งนึงงงงง.......",
            confirmButtonText:"ลองอีกครั้ง",
          });
    }
  }


  

  

    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const replayBtn = document.getElementById("replay-btn");
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    // Update duration when metadata is loaded
    audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    // Play button
    playBtn.addEventListener('click', () => {
      audio.play();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
    });

    // Pause button
    pauseBtn.addEventListener('click', () => {
      audio.pause();
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
    });

 // Replay button
  replayBtn.addEventListener("click", () => {
  audio.currentTime = 0; // Reset to start
  audio.play();         // Play audio
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});
    // Update progress and current time
    audio.addEventListener('timeupdate', () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Reset when audio ends
    audio.addEventListener('ended', () => {
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
      progressBar.style.width = '0%';
      currentTimeEl.textContent = '0:00';
    });

    // Format time in mm:ss
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }


    document.addEventListener("DOMContentLoaded", () => {
      const swiper = new Swiper(".mySwiper", {
        effect: "coverflow", // ใช้เอฟเฟกต์ Coverflow
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50, // หมุนสไลด์
          stretch: 0, // ระยะห่างระหว่างสไลด์
          depth: 100, // มิติความลึก
          modifier: 1,
          slideShadows: true, // เงาของสไลด์
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });
    