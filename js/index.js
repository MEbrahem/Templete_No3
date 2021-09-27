// handle active state
let allcolor = document.querySelectorAll('.sitting-color ul li');
let alloption = document.querySelectorAll('.sitting-back span');
let imgBollets = document.querySelectorAll('.img-bollets .Bimg');
let AllBollets = document.querySelectorAll(".nav-bollets .bollet");
let contantBollets = document.querySelector(".nav-bollets");
let land = document.getElementsByClassName('landing')[0];
let posbollets = document.querySelectorAll(".sitting-icon .sitting-Bollets span");

function handleActive(ev) {
    ev.forEach((one) => {
        one.addEventListener("click", function (e) {
            e.target.parentElement.querySelectorAll('.active').forEach((Ac) => {
                Ac.classList.remove("active");
            })
            e.target.classList.add("active");
        })
    })
}


handleActive(allcolor)
handleActive(alloption)
handleActive(imgBollets)
handleActive(AllBollets)
handleActive(posbollets)
// Reload page

let reload = document.querySelector(".Reload");
let loading = document.querySelectorAll(".Reload .span-Reload span");
window.onload = setTimeout(function () {
    reload.style.display = "none";
    loading.forEach(load => {
        load.style.animationPlayState = "paused";
    })
}, 5000)

// End Relad Page
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
allcolor.forEach((v) => {
    v.addEventListener('click', (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem('color-page', e.target.dataset.color);
        localStorage.setItem('color-active', e.target.getAttribute('className'));
    })
})
/////////////////////////////////////////////////
// change random background
var backchange = true, backInterval;
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
        if (e.target.dataset.back === 'yes') {
            backchange = true;
            changeBack();
        }
        else {
            backchange = false;
            clearInterval(backInterval);
        }
        localStorage.setItem('option', backchange);
    })

})

// //////////////////////////////////////////////////////////////////

// start display and hide bollets


let retbollet = localStorage.getItem("bollet");
let status1 = localStorage.getItem("status");
if (retbollet !== null) {

    posbollets.forEach((span) => {
        span.classList.remove("active");
    })
    posbollets[status1].classList.add("active")
    contantBollets.style.display = retbollet;


}
posbollets[0].addEventListener("click", function () {
    contantBollets.style.display = 'block';
    localStorage.setItem("bollet", "block");
    localStorage.setItem("status", 0);
})

posbollets[1].addEventListener("click", function () {
    contantBollets.style.display = 'none';
    localStorage.setItem("bollet", "none");
    localStorage.setItem("status", 1);
})



// End display and hide bollets

// End sitting-icon
// ////////////////////////////////////////////////////////////////
// Start Nav-Bollets

AllBollets.forEach(Bollets => {
    Bollets.addEventListener("click", function () {
        let name = document.querySelector(".nav-bollets .bollet.active").dataset.section;
        console.log(name);
        document.querySelector(name).scrollIntoView({
            behavior: "smooth"
        })
    })
})
// End Nav-Bollets

// Start img-bollets
imgBollets.forEach((B) => {
    B.addEventListener("click", function (e) {
        land.style.backgroundImage = `url(img/${e.target.dataset.section})`;

    })
})

// End img-bollets


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
    // let img = ['no1.jpg', 'no2.jpg', 'no3.jpg', 'no4.jpg'];
    // let land = document.getElementsByClassName('landing')[0];
    if (backchange === true) {
        backInterval = setInterval(_ => {
            let i = Math.floor(Math.random() * imgBollets.length);
            imgBollets.forEach((e) => {
                e.parentElement.querySelectorAll(".active").forEach((S) => {
                    S.classList.remove("active")
                })
            })
            imgBollets[i].classList.add("active")
            land.style.backgroundImage = `url(img/${imgBollets[i].dataset.section})`;
        }, 3000);
    }
}
changeBack();
// End change background images.
// start writer.


function writer(text, pos, sec) {
    let i = 0;
    let one = setInterval(_ => {
        pos.textContent += text[i];
        i++;
        if (i > text.length - 1) {
            clearInterval(one);
        }
    }, sec);

}
mytext = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt, provident corporis autem illo doloremque officiis dicta sit earum magni sapiente voluptates iure, impedit mollitia quidem. Ipsam quam voluptatum accusantium!';
let p = document.getElementById('type');

mytext2 = 'Loading...';
let p2 = document.querySelector(".Reload .text h2");

writer(mytext2, p2, 100);
writer(mytext, p, 30);

// End writer./////////////////////////////////////////////////////////////
// End landing pages.////////////////////////////////////////////////////


//  start About us///////////////////////////////////////////////////////
let Servics = document.querySelector('.service');
let About = document.querySelector('.about_us');
document.onscroll = function () {
    if (document.scrollingElement.scrollTop >= 164) {
        $('.about_us').animate({ "opacity": "1" }, 500);
    }
    // service
    // window.pageYOffset > (Servics.offsetTop + Servics.offsetHeight - window.innerHeight
    // if (Servics.offsetTop >= 1136) {
    //     let span = document.querySelectorAll('.service .skill .progress span');
    //     span.forEach((s) => {
    //         // s.style.width = s.dataset.prog;
    //         s.style.animationPlayState = 'running';
    //     })

    // }
    //service
    if (document.scrollingElement.scrollTop >= 1136) {
        $(".service .skill .progress span").each(function () {
            $(this).animate({
                width: $(this).data("prog")
            }, 10)
        })
    }


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




// button reset

document.querySelector(".sitting-icon .reset").onclick = function () {
    localStorage.clear() //to remove all var on localstorage 
    // localStorage.removeItem("name var")
    window.location.reload();
}

// contact-us

document.querySelector(".contact-us .contant .part-two .two").onclick = function (e) {
    e.preventDefault();
}