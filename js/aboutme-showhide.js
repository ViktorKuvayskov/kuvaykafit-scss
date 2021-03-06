const show = function (elem) {
    elem.style.display = 'block';
};

const hide = function (elem) {
    elem.style.display = 'none';
};

const toggle = function (elem) {

    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
        hide(elem);
        return;
    }

    // Otherwise, show it
    show(elem);

};

// Listen for click events
document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    const content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

}, false);