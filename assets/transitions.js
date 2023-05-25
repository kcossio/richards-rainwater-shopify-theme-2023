!function(){
    const activeTrans = document.querySelector('body').dataset.trans;
    barba.init({
        sync: true,
        debug: true,
        // prevent: ({ el }) => el.classList && el.classList.contains('full-unstyled-link'),
       views: [{
            namespace: 'home',
            beforeEnter(data) {
             
            },
            enter(data) {
                
            },
            once(data) {
                
            },
            afterLeave(data) {
            }
        },
        {
            namespace: 'pdp',
            async beforeEnter(data){
              console.log('pdp');
            }
        }
        ],
        transitions: [{
            async leave() {
                let done = this.async();
                pageTrans();
                pageOut();
                await delay(500);
                done();
            },
            async enter() {
                
                pageIn();

                // animation function
                animation_setup();
                //Reinitialize Select2
                jQuery('select').select2({
                    minimumResultsForSearch: 5
                });
                //Force resize so scrollTriggers and sliders work properly
                window.dispatchEvent(new Event('resize'));                
                //pageTransitionIn(next.container);

            },
            async once() {
                
                pageIn();

                animation_setup();  
                slickSliders();
            },
            beforeEnter(data) {
                // Run before entering - kill all Scrolltriggers and then reinitialize with animation_setup function in the enter transition
				ScrollTrigger.getAll().forEach(t => t.kill());
                
			},
            after(data) {
                console.log('after all loaded');
                // Look for a hashtag and scroll to that if available. If not, jump to the top of the page.
                var hash = window.location.hash.substr(1);
                if(window.location.hash) { 
                     //console.log('The hashtag location is: '+ hash);
                 
                    const element = document.querySelector('#'+hash)
                    const topPos = element.getBoundingClientRect().top + window.pageYOffset

                    window.scrollTo({
                      top: topPos, // scroll so that the element is at the top of the view
                      behavior: 'smooth' // smooth scroll
                    });
                } else {   
                    window.scrollTo(0, 0);
                }
                
                
                //Reload scripts in the container. This is required to re-run all inline scripts.
                let js = data.next.container.querySelectorAll('.content-for-layout script');
                if(js != null){
                        js.forEach((item) => {
                            //console.log(js) // Log scripts if debugging
                            eval(item.innerHTML);
                        });
                }    
                slickSliders();
                
			},
        }]
    })

    barba.hooks.enter(function () {
        window.scrollTo(0, 0);
    });
    barba.hooks.leave(function () {
        window.scrollTo(0, 0);
    });
    if (window.document.documentMode){
        barba.destroy();
    }
}();


const delay = (t) => {
    t = t || 1000;
    return new Promise(function(done){
        setTimeout(function() {
            done();
        }, t);
    });
}

const pageIn = (e) => {
    const tl = new TimelineMax({
        ease: Expo.easeInOut
    });
    tl.set(".content", {
        opacity: 1,
    })
        .to(".content", .5, {
            opacity: 1,
        }, .1)
}

const pageTrans = (e) => {
    const tl = new TimelineMax();
    tl.set('.trans-pane', {
        y: '-100%',
        display: 'block'
    })
        .staggerTo('.trans-pane', .3, {
            y: 0,
        }, .1)
        .staggerTo('.trans-pane', .3, {
            y: '100%',
        }, .1)
        .set('.trans-pane', { display: 'none' })
}

const pageOut = (e) => {
    const tl = new TimelineMax({
        ease: Expo.easeInOut
    });
    tl.to(".content", .5, {
        opacity: 0
    })
}