console.log("JavaScript file is linked correctly!");

document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById('profile-pic');
    const originalSrc = profilePic.src; // Automatically uses the config.yml value for current-pic
    const hoverSrc = "{{ site.hover_logo }}"; // Fetch hover-pic from config.yml

    // When mouse enters the image area
    profilePic.addEventListener('mouseover', function() {
        profilePic.src = hoverSrc;
    });

    // When mouse leaves the image area
    profilePic.addEventListener('mouseout', function() {
        profilePic.src = originalSrc;
    });
});
