function pagemainAnimation(){
    gsap.to("#f-top>h1",{
        left: "-47%",
        duration: 5,
        ease:"power1"
    },"same1")
    
    gsap.to("#ft-boxes #top-boxes",{
        left: "-25%",
        duration: 6,
        delay: 1,
        ease: "power3",
        opacity: 1
    },"same1")
    
    gsap.to("#ft-boxes #mid-boxes",{
        left: "10%",
        duration: 6,
        delay: 1,
        ease: "power3",
        opacity: 1,
    },"same1")
    
    
    gsap.to("#ft-boxes #btm-boxes",{
        left: "-45%",
        duration: 6,
        delay: 1,
        ease: "power3",
        opacity: 1
    },"same1")
    
    gsap.to("#f-top #first-img",{
        rotate: "180deg",
        delay: 1,
        duration: 6,
        ease: "power1",
        opacity: 1
    },"same1")
    
    gsap.to("#first #f-cir",{
        top: "-50%",
        scale: "3",
        delay: 3.2,
        ease: "power1",
    },"same1")
    
    gsap.to("#first",{
        opacity: 0,
        delay: 4,
    },"same1")
    
    gsap.to("#home0",{
        opacity: 1,
        delay: 4
    },"same1")
    
    var t4 = gsap.timeline({
        scrollTrigger:{
            trigger: "#h1-top",
            start: "top center",
            scrub: 1,
        }
    })
    t4.to("#h1-top .h1t-text",{
        top: "0%",
        duration: 2
    },"same1")
}

function pagehome2Animation(){
    var t5 = gsap.timeline({
        scrollTrigger:{
            trigger: "#home2",
            start: "top top",
            end: "+=2000px",
            pin: true,
            scrub: 1,
        }
    })
    
    t5.to("#overlay-h2",{
        x: -4000,
        duration: 5,
        ease: "power1"
    },"same1")
    
    t5.to("#lines",{
        left: "3%",
        duration: 2,
        ease: "power1"
    },"same1")
    
    t5.to("#h2-tl , #h2-bl",{
        opacity: 1,
        delay: 1.5
    },"same1")
    
    t5.to("#h2-boxes",{
        left: "0.5%",
        delay: .2,
        duration: 2,
        ease: "power1"
    },"same1")
    
}

function pagehome0Animation(){
    var t3 = gsap.timeline({
        scrollTrigger:{
            trigger: "#h0- circle",
            start: "top top",
            pin: true,
            scrub: 1,
        }
    })
    
    t3.to("#circles",{
        x: -500,
        duration: 5,
        ease: "power4",
    },"same1")
    
    t3.to("#h0-circle .cir-img",{
        rotate: "180deg",
        duration: 5,
        ease: "power4"
    },"same1")

}

function pagehomeAnimation(){
    var t1 = gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top top",
            end: "+3000px",
            pin: true,
            scrub: 1,
        }
    })
    
    t1.to("#box",{
        ease: "power1",
        right: "34%"
    })
    
    t1.to("#box h4,h5",{
        ease: "power1",
        opacity: 0,
        duration: .1
    },"same1")
    
    t1.to("#box .box-img",{
        ease: "power1",
        delay: .1,
        scale: 0,
        duration: .25
    },"same1")
    
    t1.to("#c-btm img",{
        ease: "power1",
        rotate: "-180deg",
        scale: ".5",
        stagger: .04,
    },"same1")
    
    t1.to("#c-top img",{
        ease: "power1",
        scale: ".5",
    },"same1")
    
    t1.to("#center",{
        ease: "power1",
        scale: "0",
    },"same1")
    
    t1.to("#circle",{
        ease: "power1",
        scale: ".6",
    },"same1")
    
    t1.to("#overlay>h1",{
        ease: "power1",
        bottom: "-30%",
        duration: .2
    },"same1")
    
    t1.to("#overlay>h2",{
        ease: "power1",
        bottom: "0%",
        duration: .1,
        rotate: "0deg"
    },"same2")
    
    t1.to("#side-box",{
        ease: "power1",
        top: "-100%",
        delay: .1,
        duration: 3
    },"same2")
    
    t1.to("#overlay #small-cir",{
        ease: "power1",
        scale: 1,
        duration: .3,
        top: "42%"
    },"same1")
    
    t1.to("#circle",{
        ease: "power1",
        scale: "0",
    },"same2")
    
    t1.to("#overlay #small-cir",{
        ease: "power1",
        opacity: 0,
        duration: .2,
    },"same2")
    
    t1.to("#top-nav .l-top img:first-child",{
        ease: "power1",
        opacity: 0,
        duration: .15,
    },"same1")
    
    t1.to("#top-nav .r-top img:first-child",{
        ease: "power1",
        opacity: 0,
        duration: .15,
    },"same1")
    
    t1.to("#btm-nav .l-btm img:first-child",{
        ease: "power1",
        opacity: 0,
        duration: .1,
    },"same1")
    
    t1.to("#btm-nav .r-btm img:first-child",{
        ease: "power1",
        opacity: 0,
        duration: .15,
    },"same1")

    t1.to("#overlay #arrow",{
        ease: "power1",
        right: "0",
        opacity: 1,
        delay: .2,
    },"same2")

    t1.to("#overlay #arrow img",{
        ease: "power1",
        cursor: "pointer",
    },"same2")

    t1.to("#overlay #arrow",{
        ease: "power1",
        display: "none",
        delay: 1.5
    },"same2")

}

function pagesecAnimation(){
    var t2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#sec",
        start: "top top",
        end: "+3000px",
        pin: true,
        scrub: 1,
    }
})

t2.to("#circle-pi",{
    ease: "power1",
    top: "35%",
    scale: 1,
    duration: .4,
    delay: .8
},"same1")

t2.to("#circle-pr",{
    ease: "power1",
    top: "35%",
    scale: 1,
    duration: .4,
    delay: .9
},"same1")

t2.to("#circle-pi",{
    ease: "power1",
    left: "45%"
},"same2")

t2.to("#circle-pr",{
    ease: "power1",
    left: "45%"
},"same2")

t2.to("#circle-pi",{
    ease: "power1",
    scale: .7
},"same3")

t2.to("#circle-pr",{
    ease: "power1",
    opacity: 0,
    scale: .7,
    display: "none"
},"same3")

t2.to("#circle-pi",{
    ease: "power1",
    scale: 6
},"same4")

t2.to("#sec-top>h1",{
    ease: "power1",
    left: "-100%",
    duration: 3,
    delay: .8
},"same4")

t2.to("#circle-pi",{
    ease: "power1",
    background: `linear-gradient(to right, #d5a7b4, #b4aad5, #b4aad5)`,
    ease: "power1",
    duration: 3,
    delay: .8
},"same4")

t2.to("#no",{
    ease: "power1",
    top: "15%",
},"same4")

t2.to("#no",{
    ease: "power1",
    top: "-3%",
    delay: 2
},"same4")

t2.to("#text .text-one",{
    ease: "power1",
    opacity: 0,
    delay: .5,
    duration: 1
},"same4")

t2.to("#text .text-two",{
    ease: "power1",
    opacity: 1,
    delay: .5,
    duration: 1
},"same4")

t2.to("#sec-top-box .box-one",{
    ease: "power1",
    top: "0%",
    delay: 2.5,
    duration: 1,
},"same4")

t2.to("#sec-top-box .box-two",{
    ease: "power1",
    top: "0%",
    delay: 2.8,
    duration: 1,
},"same4")

t2.to("#sec-top-box .box-three",{
    ease: "power1",
    top: "0%",
    delay: 3,
    duration: 1,
},"same4")

t2.to("#sec-top-box .box-four",{
    ease: "power1",
    top: "0%",
    delay: 3.2,
    duration: 1,
},"same4")

t2.to("#sec-top-box .box-five",{
    ease: "power1",
    top: "0%",
    delay: 3.4,
    duration: 1,
},"same4")

t2.to("#btm-lines .bl-two",{
    ease: "power1",
    left: "3.3%",
    duration: 2.5,
    delay: .1
},"same2")

t2.to("#btm-lines .bl-three",{
    ease: "power1",
    left: "3.3%",
    duration: 2.5,
    delay: 2.6
},"same3")
}

function pagesec0Animation(){
    
var t6 = gsap.timeline({
    scrollTrigger:{
        trigger: "#sec0",
        start: "top top",
        scrub: 1,
        end: "+=3200px"
    }
})

t6.to("#sec2 .sec2-box3",{
    rotate: "270deg",
    ease: "power1",
    duration: 5,
},"same6")

t6.to("#sec3 #line-box",{
    left: "-100%",
    duration: 4,
    ease: "power1"
},"same6")

t6.to("#sec3 #rays",{
    width: "100%",
    duration: 3,
    delay: 3.5
},"same6")

t6.to("#sec3-text>h1",{
    x: 220,
    duration: 3,
    ease: "power4",
    delay: 4.5
},"same6")

t6.to("#sec3-text>h2",{
    x: -130,
    duration: 3,
    ease: "power4",
    delay: 4.5
},"same6")

t6.to("#sec4 #sec4-box2",{
    top: "45%",
    duration: 3,
    delay: 7,
    ease: "power1"
},"same6")

t6.to("#sec4 #sec4-box3",{
    top: "65%",
    duratin: 10,
    delay: 8,
    ease: "power1"
},"same6")

t6.to("#sec4 .pink",{
    left: "-100%",
    duratin: 10,
    delay: 7,
    ease: "power1"
},"same6")

t6.to("#sec4 .color",{
    scale: 5,
    delay: 10,
    duration: 3,
    ease: "power1",
},"same6")
}

function pagelast0Animation(){
    var t7 = gsap.timeline({
        scrollTrigger:{
            trigger: "#last0",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=2000px"
        }
    })
    
    t7.to("#images1",{
        top: "5",
        delay: .1,
        rotate: 10,
        ease: "power1"
    },"same")
    
    t7.to("#images2",{
        top: "5",
        delay: .4,
        rotate: -10,
        ease: "power1"
    },"same")
    
    t7.to("#images3",{
        top: "5",
        delay: .8,
        rotate: 15,
        ease: "power1"
    },"same")
    
    t7.to("#images4",{
        top: "5",
        rotate: -20,
        delay: 1.2,
        ease: "power1"
    },"same")
    
    t7.to("#images5",{
        top: "5",
        delay: 1.6,
        rotate: 25,
        ease: "power1"
    },"same")
    
    t7.to("#images6",{
        top: "5",
        delay: 2,
        ease: "power1"
    },"same")
    
}


pagemainAnimation();
pagehome2Animation();
pagehome0Animation();
pagehomeAnimation();
pagesecAnimation();
pagesec0Animation();
pagelast0Animation();

document.querySelector("#arrow img")
.addEventListener("mouseenter", function(){
    document.querySelector("#back-img").style.opacity = 1;
    document.querySelector("#side-box").style.opacity = 0;
    document.querySelector("#pink").style.opacity = 0;
    document.querySelector("#overlay #top-nav").style.opacity = 0;
    document.querySelector("#overlay #btm-nav").style.opacity = 0;
    document.querySelector("#arrow img").style.opacity = 0;
});

document.querySelector("#arrow img")
.addEventListener("mouseleave", function(){
    document.querySelector("#back-img").style.opacity = 0;
    document.querySelector("#side-box").style.opacity = 1;
    document.querySelector("#pink").style.opacity = 1;
    document.querySelector("#overlay #top-nav").style.opacity = 1;
    document.querySelector("#overlay #btm-nav").style.opacity = 1;
    document.querySelector("#arrow img").style.opacity = 1;
});
