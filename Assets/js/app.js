const accordian = document.querySelectorAll('.accordian');

accordian.forEach(acc => acc.addEventListener('click', function() {
    this.classList.toggle('active');

    let extra = this.nextElementSibling;
    if (extra.style.maxHeight) {
        extra.style.maxHeight = null;
    } else {
        extra.style.maxHeight = extra.scrollHeight + 'px';
    }
}));