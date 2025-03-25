// Dynamic resizing handler
function adjustLayout() {
    const items = document.querySelectorAll('.musicicons .IMG');
    const screenWidth = window.innerWidth;

    // Desktop dynamic adjustment
    if (screenWidth > 768) {
        let itemsPerRow = 5; // Default

        if (screenWidth < 1000) {
            itemsPerRow = 4;
        } else if (screenWidth > 1400) {
            itemsPerRow = 6;
        }

        const widthPercentage = (100 / itemsPerRow) - 1;
        items.forEach(item => {
            item.style.width = `calc(${widthPercentage}% - 12px)`;
        });
    }
}

// Initial call and event listeners
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);