function openProject(projectId)
{
    const modal = document.getElementById(projectId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
}

function closeProject(projectId)
{
    const modal = document.getElementById(projectId);
    modal.classList.remove('visible');
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
        modal.classList.remove('active');
    }, 300); // Match the CSS transition duration
}

// Close on escape key
document.addEventListener('keydown', function(e)
{
    if (e.key === 'Escape')
        {
        const activeModal = document.querySelector('.project-details.active');
        if (activeModal)
            {
            const modalId = activeModal.id;
            closeProject(modalId);
        }
    }
});

// Close when clicking outside
document.querySelectorAll('.project-details').forEach(modal => { modal.addEventListener('click', function(e)
    {
        if (e.target === this)
            {
            const modalId = this.id;
            closeProject(modalId);
        }
    });
});

// Slideshow functionality
function changeSlide(n, button) {
    const slideshow = button.closest('.slideshow-container');
    const slides = slideshow.querySelectorAll('.slide');
    const dots = slideshow.querySelectorAll('.dot');
    
    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    let newIndex = currentIndex + n;
    
    // Wrap around
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    
    // Update slides
    slides[currentIndex].classList.remove('active');
    slides[newIndex].classList.add('active');
    
    // Update dots
    dots[currentIndex].classList.remove('active');
    dots[newIndex].classList.add('active');
}

function currentSlide(n, dot) {
    const slideshow = dot.closest('.slideshow-container');
    const slides = slideshow.querySelectorAll('.slide');
    const dots = slideshow.querySelectorAll('.dot');
    
    // Hide all slides and remove active from dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Show selected slide
    slides[n-1].classList.add('active');
    dots[n-1].classList.add('active');
}