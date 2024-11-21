// script.js

document.addEventListener('DOMContentLoaded', function () {
    let videos = document.querySelectorAll('video');
    
    // عند النقر على الفيديو، إيقاف الآخرين
    videos.forEach(video => {
        video.addEventListener('play', function () {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});
