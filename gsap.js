// gsap.from("nav h1, h4, button",{
//     y:-10,
//     opacity:0,
// delay:1,
// duration:1,
// })
function page1(){
    var tl=gsap.timeline()
    tl.from("nav h1,h4,.btn1",{
    y:-30,
    delay:1,
    duration:0.2,
    stagger:0.2,
    opacity:0,
    
    })
    tl.from(".center-part1",{
        x:-300,
        opacity:0,
        duration:1,
    })
    tl.from(".center-part1 p",{
    x:100,
    opacity:0
    
    })
    tl.from(".center-part1 button",{
        opacity:0,
        x:100,
        duration:0.3,
    })
    tl.from(".center-part2 img",{
        opacity:0,
        duration:0.4,
        // delay:-1,
    },"-=1")
    tl.from(".section1-bottom img",{
        y:30,
        stagger:0.3,
        opacity:0,
        scrollTrigger:{
            trigger:".section1-bottom img",
            scroller:"body",
            start:"top 100%",
            end:"top -10%",
            scrub:3,
        }
    })
}
page1()

function page2(){
    gsap.from(".services ",{
        x:-400,
        delay:1,
        opacity:0,
        duartion:1,
        scrollTrigger:{
            trigger:".services ",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            scrub:2,
            end:"top 0"

        }

    })
}
page2()

var boxes=gsap.timeline()
boxes.from(".box1",{
    x:-300,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        start:"top 70%",
        end:"top 0",
        scrub:2,
    }

},"anim")


boxes.from(".box2",{
    x:400,
    opacity:0,
    delay:0.1,
    duration:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        start:"top 70%",
        end:"top 0",
        scrub:2,
    }
},"anime")

boxes.from(".box3",{
    x:-300,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        start:"top 70%",
        end:"bottom 0",
        scrub:2,
    }
},"anim2")
boxes.from(".box4",{
    x:400,
    opacity:0,
    delay:0.1,
    duration:1,
    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        start:"top 70%",
        end:"bottom 0",
        scrub:2,
    }
},"anime2")


// gsap.from(".box1",{
//     x:300,
// })