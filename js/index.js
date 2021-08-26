
// start sitting-icon

let ad = document.querySelector('.sitting-icon .icon'),
    ad1 = document.querySelector('.sitting-icon .icon i'),
    box = document.querySelector('.sitting-icon');

ad.addEventListener('click', function () {
    box.classList.add('open');
    $(ad).hide();
})
document.body.ondblclick = _ => {
    box.classList.remove('open');
    $(ad).show();
}
// jquery
$('.sitting-icon .icon').after('<span> Sitting </span>');
$('.sitting-icon .icon').hover(function () {
    $('.sitting-icon .icon + span').fadeIn();
},
    function () {
        $('.sitting-icon .icon + span').fadeOut();
    }
)



///////////////////////////////////////////////////
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
/////////////////////////////////////////////////
// change random background
var backchange = true, backInterval;
let alloption = document.querySelectorAll('.sitting-back span');
let option = localStorage.getItem('option');


alloption.forEach(function (span) {
    span.classList.remove('active');
})
if (option !== null) {
    if (option === 'true') {
        backchange = true;
        alloption[0].classList.add('active');
    }
    else {
        backchange = false;
        alloption[1].classList.add('active');
    }
    console.log(option);
}
alloption.forEach((span) => {
    span.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach((ele) => {
            ele.classList.remove('active');
        })
        e.target.classList.add('active');

        if (e.target.dataset.back === 'yes') {
            backchange = true;
            changeBack();
            console.log('yes');
        }
        else {
            backchange = false;
            clearInterval(backInterval);
            console.log("no");
        }
        localStorage.setItem('option', backchange);
    })

})

// End sitting-icon
// start landing pages.
// start fixed header

let header = document.querySelector('.landing .header');
let container = document.querySelector('.landing .container');
let fix = document.querySelector('.landing .container .fix');

window.onscroll = function () {
    if (document.scrollingElement.scrollTop > 0) {
        fix.style.backgroundColor = '#fff';
        fix.style.zIndex = '5';

    }
    else {
        fix.style.background = 'none';
    }
}


// End fixed header
//////////////////////////////////////////////
// Start change background images.
function changeBack() {
    let img = ['no1.jpg', 'no2.jpg', 'no3.jpg', 'no4.jpg'];
    let land = document.getElementsByClassName('landing')[0];
    if (backchange === true) {
        backInterval = setInterval(_ => {
            let i = Math.floor(Math.random() * img.length);
            land.style.backgroundImage = `url(img/${img[i]})`;
        }, 3000);
    }
}
changeBack();
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


//  start About us
let Servics = document.querySelector('.service');
let About = document.querySelector('.about_us');
document.onscroll = function () {
    if (document.scrollingElement.scrollTop >= 164) {
        $('.about_us').animate({ "opacity": "1" }, 500);
    }
    // service
    // window.pageYOffset > (Servics.offsetTop + Servics.offsetHeight - window.innerHeight
    if (window.pageYOffset >= (Servics.offsetTop - Servics.offsetHeight + (0.5 * window.innerHeight))) {
        let span = document.querySelectorAll('.service .skill .progress span');
        span.forEach((s) => {
            s.style.width = s.dataset.prog;
        })

    }
    //service
}


//  End About us
//  Start Servics

// if (window.pageYOffset >= (Servics.offsetTop - Servics.offsetHeight + (0.5 * window.innerHeight))) {
//     let span = document.querySelectorAll('.service .skill .progress span');
//     span.forEach((s) => {
//         s.style.width = s.dataset.prog;
//     })

// }

//  End Servics
//  Start products

let img = document.querySelectorAll('.product .imge-box img');
let over = document.createElement('div');
let popup = document.createElement('div');
let titel = document.createElement('h2');
let photo = document.createElement('img');
let close1 = document.createElement('span');

img.forEach((I) => {
    I.addEventListener('click', function () {
        over.style.display = 'block';
        over.classList.add('popup');
        document.body.appendChild(over);
        popup.classList.add("popup-box");
        titel.classList.add('T-img');
        titel.textContent = I.alt;
        photo.classList.add('photo');
        photo.src = I.src;
        close1.classList.add("close");
        close1.textContent = 'X';
        popup.appendChild(titel);
        popup.appendChild(close1);
        popup.appendChild(photo);
        over.appendChild(popup);
    })
    close1.addEventListener('click', function () {
        over.style.display = "none";
    })
})

//  End products





