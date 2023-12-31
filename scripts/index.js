const youtubeVideos = [
    {
        description: "സ്റ്റാറ്റസ് എങ്ങനെ ഉണ്ടാക്കണം? | ANIL BALACHANDRAN THE KING MAKER | അനിൽ ബാലചന്ദ്രൻ",
        image: "./images/yt-thumpnails/anil-balachandran.webp",
        author: "Dr Anil Balachandran",
        views: "2M",
        date: "2 years ago",
        profileImage: "./images/yt-profile/anil.jpg",
        duration: "11:20",
        videoLink: "https://www.youtube.com/watch?v=MfcxlUta8_c"
    },
    {
        description: "Part 01 Introduction | Python Django Tutorial | Brototype Malayalam",
        image: "./images/yt-thumpnails/brototype.webp",
        author: "Brototype Malayalam",
        views: "4M",
        date: "3 years ago",
        profileImage: "./images/yt-profile/brototype.jpg",
        duration: "10:20",
        videoLink: "https://www.youtube.com/watch?v=2VfM_n74HHI"
    },
    {
        description: "$1 vs $100,000,000 Car!",
        image: "./images/yt-thumpnails/mrbeast.webp",
        author: "MrBeast",
        views: "786k",
        date: "12 days ago",
        profileImage: "./images/yt-profile/mrbeast.jpg",
        duration: "6:00",
        videoLink: "https://www.youtube.com/watch?v=KrLj6nc516A"
    },
    {
        description: "Match Highlights | Kerala Blasters vs Mumbai City FC | ISL 2023-24 | Malayalam | JioCinema",
        image: "./images/yt-thumpnails/jio.webp",
        author: "JioCinema Sports",
        views: "5.4M",
        date: "1 years ago",
        profileImage: "./images/yt-profile/jio.jpg",
        duration: "16:00",
        videoLink: "https://www.youtube.com/watch?v=XlW147clhMw"
    },
    {
        description: "3 സെക്കന്റിൽ നടക്കുന്ന അത്ഭുതം | Joseph Annamkutty Jose",
        image: "./images/yt-thumpnails/joseph.webp",
        author: "Mirchi Malayalam",
        views: "4k",
        date: "3 months ago",
        profileImage: "./images/yt-profile/joseph.jpg",
        duration: "25:20",
        videoLink: "https://www.youtube.com/watch?v=Q4noAiSFmJ8"
    },
    {
        description: "Oru Sanchariyude Diary Kurippukal | EPI 519 | BY SANTHOSH GEORGE KULANGARA | SAFARI TV",
        image: "./images/yt-thumpnails/safari.webp",
        author: "Safari",
        views: "2M",
        date: "2 years ago",
        profileImage: "./images/yt-profile/safari.jpg",
        duration: "18:00",
        videoLink: "https://www.youtube.com/watch?v=lZoPhC-CXso"
    },
    {
        description: "HTML & CSS Full Course - Beginner to Pro",
        image: "./images/yt-thumpnails/supersimpledev.webp",
        author: "SuperSimpleDev",
        views: "4M",
        date: "3 years ago",
        profileImage: "./images/yt-profile/supersimpledev.jpg",
        duration: "9:35",
        videoLink: "https://www.youtube.com/watch?v=G3e-cpL7ofc"
    },
    {
        description: "Samsung Galaxy s23 Ultra | Detailed Review | Malayalam with Eng Sub",
        image: "./images/yt-thumpnails/shazzem.webp",
        author: "CalMeShazzam Vines",
        views: "8k",
        date: "1 day ago",
        profileImage: "./images/yt-profile/shazzam.jpg",
        duration: "8:20",
        videoLink: "https://www.youtube.com/watch?v=inYHvgD0OK8"
    }
]

const sideBarIconsAndText = [
    {
        iconImage: "./images/icons/home.svg",
        iconText: "Home"
    },
    {
        iconImage: "./images/icons/explore.svg",
        iconText: "Explore"
    },
    {
        iconImage: "./images/icons/subscriptions.svg",
        iconText: "Subscriptions"
    },
    {
        iconImage: "./images/icons/originals.svg",
        iconText: "Originals"
    },
    {
        iconImage: "./images/icons/youtube-music.svg",
        iconText: "YouTube Music"
    },
    {
        iconImage: "./images/icons/library.svg",
        iconText: "Library"
    }
]

const videoContainer = document.querySelector('.video-grid');
const sideBarContainer = document.querySelector('.sidebar');
let ytVideoContainer = '';
let ytSideBarContainer = '';

youtubeVideos.forEach((video) => {
    ytVideoContainer +=
        `<div class="video-preview">
            <div class="video-thumpnail-info">
                <a href="${video.videoLink}" target="_blank"><img class="video-thumpnail" src="${video.image}" alt=""></a>
                <div class="video-duration">${video.duration}</div>
            </div>
            <div class="yt-video-info">
                <div class="channel-profile-img">
                    <img class="video-profile-img" src="${video.profileImage}" alt="">
                </div>
                <div class="channel-info">
                    <p class="video-description">
                    ${video.description}
                    </p>
                    <p class="video-author">
                    ${video.author}
                    </p>
                    <p class="video-status">
                    ${video.views} views &sdot; ${video.date}
                    </p>
                </div> 
            </div>
    </div>
    `
})

videoContainer.innerHTML = ytVideoContainer;

sideBarIconsAndText.forEach((iconAndText) => {
    ytSideBarContainer +=
        `
    <div class="side-bar-link">
        <img src="${iconAndText.iconImage}" alt="" class="side-bar-logo">
        <div class="side-bar-text">${iconAndText.iconText}</div>
    </div>
    `
})

sideBarContainer.innerHTML = ytSideBarContainer;