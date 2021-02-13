function pageTransition() {
    try {
        var tl = gsap.timeline();
        tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2});
        tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1});
    } catch (e) {

    }
}

function homeAnimation() {
    try {
        var tl = gsap.timeline();
        tl.from('.img-home', {scale: 0, ease: 'elastic', duration: 1.6, delay: .8})
            .from('.name-home', {scale: 0, ease: 'elastic', duration: 1.6}, 1)
            .from('.job-home', {scale: 0, ease: 'elastic', duration: 1.6}, 1.2)
            .from('.social-home', {scale: 0, ease: 'elastic', duration: 1.6}, 1.4);
    } catch (e) {

    }
}

function aboutAnimation() {
    try {
        var tl = gsap.timeline();
        tl.from('.section-title', {scale: 0, ease: 'back.out', delay: .8})
            .from('.about-gsap', {autoAlpha: 0, duration: 2}, 1.2);
    } catch (e) {

    }
}

function projectAnimation() {
    try {
        var tl = gsap.timeline();
        tl.from('.btn-item', {scale: 2, autoAlpha: 0, stagger: .5, delay: .5, ease: 'back.out'}, .5)
            .from('.blog-item', {scale: 0, x: "550px", opacity: 0, stagger: .5, delay: .8, ease: 'back.out'}, 2);

        // portofotio awal
        const filterController = document.querySelector(".blog-filter"),
            filterBtn = filterController.children,
            totalFilterBtn = filterBtn.length,
            portofolioItems = document.querySelector(".blog-items").children,
            potofolioItemLeght = portofolioItems.length;

        for (let i = 0; i < totalFilterBtn; i++) {
            filterBtn[i].addEventListener("click", function () {
                filterController.querySelector(".active").classList.remove("active");
                this.classList.add("active");

                const filterValue = this.getAttribute("data-filter");
                for (let k = 0; k < potofolioItemLeght; k++) {
                    if (filterValue === portofolioItems[k].getAttribute("data-category") || filterValue === "all") {
                        portofolioItems[k].classList.add("show");
                        portofolioItems[k].classList.remove("hide");
                    } else {
                        portofolioItems[k].classList.add("hide");
                        portofolioItems[k].classList.remove("show");
                    }
                }
            })
        }
        // portofotio akhir
    } catch (e) {
        // console.log("just fine");
    }
}

function contactAnimation() {
    try {
        var tl = gsap.timeline();
        tl.from('.contact-info-item', {scale: 0, x: "550px", opacity: 0, stagger: .5, delay: .8, ease: 'back.out'}, .5);
        tl.from('.form-item', {scale: 0, x: "-550px", opacity: 0, stagger: .5, delay: .8, ease: 'back.out'}, 1.4);
    } catch (e) {

    }
}

function delay(time) {
    time = time || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, time)
    })
}

function activeLink(data) {
    const oks = document.querySelectorAll('li.link a');
    oks.forEach(function (ok) {
        ok.classList.remove('active');
    });
    oks.forEach(function (ok) {
        if (data.next.url.href === ok.href) {
            ok.classList.add('active');
        }
    });
}

//barba start
barba.init({
    sync: true,
    transitions: [{

        async afterEnter(data) {
            homeAnimation();
            aboutAnimation();
            projectAnimation();
            contactAnimation();
        },

        async once(data) {
            homeAnimation();
            aboutAnimation();
            projectAnimation();
            contactAnimation();
        },

        async leave(data) {
            const done = this.async();
            await delay(800);
            pageTransition();
            await delay(1500);
            done();
        },

        async after(data) {
            activeLink(data)
        }
    }]
});
//barba end