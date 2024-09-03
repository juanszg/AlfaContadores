document.querySelector('.toggle-button').addEventListener('click', function() {
    var content = document.querySelector('.toggle-content');
    
    // Toggle visibility
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
