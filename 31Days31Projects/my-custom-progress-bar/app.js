const progress = document.querySelector('.progress-done');

setTimeout(() => {
    progress.style.height = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
}, 500)