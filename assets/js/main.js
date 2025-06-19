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
