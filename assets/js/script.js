document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(accordion => {
        const accordionButton = accordion;
        const accordionContent = accordion.nextElementSibling;
        const accordionIcon = accordion.querySelector('.accordion-icon');
        const accordionContainer = accordion.parentElement;

        accordionButton.addEventListener('click', function () {
            accordionContent.classList.toggle('hidden');
            accordionIcon.textContent = accordionContent.classList.contains('hidden') ? '+' : '-';
            // Toggle background color on open/close
            if (accordionContent.classList.contains('hidden')) {
                accordionContainer.classList.remove('bg-[#F3F5F6]');
            } else {
                accordionContainer.classList.add('bg-[#F3F5F6]');
            }
        });
    });
});