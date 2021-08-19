
// start sitting-icon

let ad = document.querySelector('.sitting-icon .icon'),
    ad1 = document.querySelector('.sitting-icon .icon i'),
    box = document.querySelector('.sitting-icon');

ad.addEventListener('click', function () {
    box.classList.toggle('open');
    ad1.classList.toggle('fa-spin');
})
document.body.ondblclick = _ => {
    box.classList.remove('open');
    ad1.classList.remove('fa-spin');
}


// change color


let main = localStorage.getItem('color-page');
document.documentElement.style.setProperty('--main-color', main)
document.querySelectorAll('.sitting-color ul li').forEach(ele => {
    ele.classList.remove('active');
    if (ele.dataset.color == main) {
        ele.classList.add('active');
    }
})
let allcolor = document.querySelectorAll('.sitting-color ul li');
allcolor.forEach((v) => {
    v.addEventListener('click', (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem('color-page', e.target.dataset.color);
        localStorage.setItem('color-active', e.target.getAttribute('className'));
        e.target.parentElement.querySelectorAll('.active').forEach(ele => {
            ele.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})


// End sitting-icon
// start landing pages.
// Start change background images.

let img = ['no1.jpg', 'no2.jpg', 'no3.jpg', 'no4.jpg'];
let land = document.getElementsByClassName('landing')[0];
setInterval(_ => {
    let i = Math.floor(Math.random() * img.length);
    land.style.backgroundImage = `url(img/${img[i]})`;
    // land.css('backgroundImage', `url(img/${img[i]})`);
}, 3000);

// End change background images.
// start writer.

mytext = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt, provident corporis autem illo doloremque officiis dicta sit earum magni sapiente voluptates iure, impedit mollitia quidem. Ipsam quam voluptatum accusantium!';
let p = document.getElementById('type');
i = 0;
let writer = setInterval(_ => {
    p.textContent += mytext[i];
    i++;
    if (i > mytext.length - 1) {
        clearInterval(writer);
    }
}, 20);

// End writer.
// End landing pages.



