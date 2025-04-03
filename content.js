function hideVideos() {
    let videoPlayer = document.querySelector("video");
    if (videoPlayer) {
        videoPlayer.style.display = "none"; // Hide the video
    }
}

function forceAds() {
    let mainVideo = document.querySelector("video");
    let adVideo = document.querySelector(".video-ads video");

    if (mainVideo) {
        mainVideo.pause(); // Pause main video
        if (adVideo) {
            adVideo.play(); // Play ads if available
        }
    }
}

function randomFastForward() {
    let video = document.querySelector("video");
    if (video && video.readyState >= 2 && video.duration && !isNaN(video.duration)) {
        let newTime = Math.random() * video.duration; // Jump to a random time
        video.currentTime = newTime;
    }
}

function randomSpeedChange() {
    let video = document.querySelector("video");
    if (video) {
        let speeds = [0.25, 0.5, 1, 1.5, 2];
        let randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
        video.playbackRate = randomSpeed;
    }
}

function pauseOnHover() 
{
    let playButton = document.querySelector(".ytp-play-button");
    if (playButton) {
        playButton.addEventListener("mouseenter", function () {
            let video = document.querySelector("video");
            if (video) {
                video.pause(); // Pause video when hovering over play button
            }
        });
    }
}

// Run the functions at intervals
setInterval(hideVideos, 1200);
setInterval(forceAds, 3000);
setInterval(randomFastForward, 2500);
setInterval(randomSpeedChange, 4000);
pauseOnHover();
