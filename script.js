function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const timestamp = Date.now();
    
    // Format time as HH:MM:SS
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Get milliseconds
    const milliseconds = timestamp % 1000;
    
    // Combine formatted time with milliseconds
    timeElement.innerHTML = `<span class="time-label">Time:</span> ${timeString}.${milliseconds}`;
    timeElement.setAttribute('title', now.toLocaleString());
}

// Update time more frequently for smoother milliseconds display
updateTime();
setInterval(updateTime, 10);

// Add image upload functionality
const avatarUpload = document.getElementById('avatar-upload');
const avatarImg = document.getElementById('avatar');

avatarUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            avatarImg.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }
});