let gallery = document.querySelector('.container');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.back');

gallery.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
    gallery.style.scrollBehavior = "auto";
});

nextBtn.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += gallery.offsetWidth;
});

prevBtn.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= gallery.offsetWidth;
});