(function( $ ) {

    

    

    // --------------------------------- GSAP/ScrollTrigger - scrolling and tweens ----------------------------- //

    // Register Plugins
    gsap.registerPlugin(ScrollTrigger); // register the ScrollTrigger plugin first 
    gsap.registerPlugin(MotionPathPlugin);

    gsap.config({
      autoSleep: 60,
      force3D: "auto",
      nullTargetWarn: false,
        invalidateOnRefresh: true,
        markers:true
    });

    // ------ Header Scroll Behavior ------//
    window.addEventListener("load", (event) => {
        console.log('page is loaded. Now run scroll stuff please.');
        jQuery(window).scroll(function() // Do stuff on scroll
        {   
            var bannerHeight = jQuery('.site-header').height();
            if (jQuery(window).scrollTop()>= bannerHeight )    // If we've scrolled past the height of the top banner image
                {

                jQuery('.site-header').addClass('scrolling'); // Add the class "floater" to the header	
                }
                else
                {
                jQuery('.site-header').removeClass('scrolling'); // Remove the class when we're back at the top
                }

        });

        /*
        const showAnim = gsap.from('.site-header', { 
        yPercent: -100,
        paused: true,
        duration: 0.25
        }).progress(1);

        ScrollTrigger.create({
        start: "top -80px",
        end: 99999,
        onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
        });
        */
        
    });


    
    // ----- Set up Animation function to run on page load ------ //
    var animation_setup = function(){

        console.log('animation has been set up');


        // ------------- ScrollTriggers for elements that can appear multiple times per page -------- //

        //Parallax Background
        const bgParallax = gsap.utils.toArray('.bg-parallax');
        bgParallax.forEach(box => {
            if(jQuery(box).hasClass('alignright')) {
                var pos_start = "100% 0%";
                var pos_end = "100% 100%";
            }
            else {
                var pos_start = "50% 0%";
                var pos_end = "50% 100%";
            }
            gsap.set(box, {objectPosition: pos_start});
            gsap.to(box, { 

                scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true, 
                    toggleClass: "onscreen",
                    toggleActions: "play none none none"
                },        
                objectPosition: pos_end,
                ease: "none"
            
            })
        });

        //Parallax Background
        const bgParallaxSVG = gsap.utils.toArray('.bg-parallax-svg');
        bgParallaxSVG.forEach(box => {
            gsap.set(box, {yPercent: 10});
            gsap.to(box, { 
                scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true, 
                    toggleClass: "onscreen",
                    toggleActions: "play none none none"
                },        
                yPercent: -10,
                ease: "none"
            
            })
        });
        //Destini Reveal on Load
        var destini_tl = gsap.timeline({repeat: 0, delay: .25});
        destini_tl.to(".destini-inner .overlay", {   
            scaleY: 0,
            ease: "power1.out",
            duration: 1.25,
            onStart: function() {
                //jQuery('.home-grid').addClass('animated');
                //jQuery('.home-grid-title h2').addClass('animated'); 
            }
            }
        );
        

    // Product Main
    gsap.to(".section-product-main", {
        scrollTrigger: {
            trigger: ".section-product-main", // start the animation when ".box" enters the viewport (once),
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
            //onEnter: refreshProductPage,
            onLeave: refreshProductPage,
            onEnterBack: refreshProductPage,
            onLeaveBack: refreshProductPage
        },        
      });
      function refreshProductPage() {
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('resize'));
        console.log('we have exited the product main section');
      }


            // Slide title
        const slideTitle = gsap.utils.toArray('.slide-title');
        slideTitle.forEach(box => {
            gsap.to(box, { 
                ease: "Strong.easeInOut",
                scrollTrigger: {
                trigger: box,
                start: "top bottom",
            end: "bottom top",        
            toggleClass: "onscreen",
            toggleActions: "play none none none"
            }
            })
        });

            // Scrub Clouds
            const scrubClouds = gsap.utils.toArray('.scrub');
            scrubClouds.forEach(box => {
                gsap.to(box, { 
                    scrollTrigger: {
                    trigger: box,
                    start: "top bottom",
                    end: "bottom top",        
                    toggleClass: "scrubbing",
                    scrub: true
                },
                xPercent: -15,
                ease:"ease"
                })
            });

        const animateMe = gsap.utils.toArray('.animate');
        animateMe.forEach(box => {
            gsap.to(box, { 
                ease: "Strong.easeInOut",
                scrollTrigger: {
                trigger: box,
                start: "top 110%",
            end: "bottom top",        
            toggleClass: "onscreen",
            toggleActions: "play reverse play reverse"
            }
            })
        });

        const animateBottles = gsap.utils.toArray('.bottle-in-up');
        animateBottles.forEach(box => {
            gsap.to(box, { 
                ease: "Strong.easeInOut",
                scrollTrigger: {
                trigger: box,
                start: "top 120%",
            end: "bottom top",        
            toggleClass: "onscreen",
            toggleActions: "play reverse play reverse"
            }
            })
        });
        
        // Fade in
        const fadeIn = gsap.utils.toArray('.fade-in');
        fadeIn.forEach(box => {
        gsap.to(box, { 
            ease: "Strong.easeInOut",
            scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",        
            toggleClass: "onscreen",
            toggleActions: "play none none none"
            }
        })
        });
        
        
        
        // Fade in left
        const boxesFadeInLeft = gsap.utils.toArray('.fade-in-left');
        boxesFadeInLeft.forEach(box => {
        gsap.to(box, { 
            ease: "Strong.easeInOut",
            scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",        
            toggleClass: "onscreen",
                toggleActions: "play none none none"
            }
        })
        });
        
        // Fade in right
        const boxesFadeInRight = gsap.utils.toArray('.fade-in-right');
        boxesFadeInRight.forEach(box => {
        gsap.to(box, { 
            ease: "Strong.easeInOut",
            scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",        
            toggleClass: "onscreen",
                toggleActions: "play none none none"
            }
        })
        });
        
        // ----- Fade in Up
        const boxesFadeInUp = gsap.utils.toArray('.fade-in-up');
        boxesFadeInUp.forEach(box => {
        gsap.to(box, { 
            ease: "Strong.easeInOut",
            scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",        
            toggleClass: "onscreen",
                toggleActions: "play none none none"
            }
        })
        });

        // ----- Fade in Down
        const boxesFadeInDown = gsap.utils.toArray('.fade-in-down');
        boxesFadeInDown.forEach(box => {
        gsap.to(box, { 
            ease: "Strong.easeInOut",
            scrollTrigger: {
            trigger: box,
            start: "top 90%",
            end: "bottom top",        
            toggleClass: "onscreen",
                toggleActions: "play none none none"
            }
        })
        });

        // Bounce In
        
        const bounceIn = gsap.utils.toArray('.bounce-in');
        bounceIn.forEach(box => {
        gsap.set(box, {opacity:0, y:-25, scale:.3});
        gsap.to(box, { 
            ease: "elastic.out(1, 0.3)",
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
            trigger: box,
            start: "top 90%",
            end: "bottom top",        
            toggleClass: "onscreen",
            toggleActions: "play reverse play reverse"
            }
        })
        });

    
        

        const bounceInTop = gsap.utils.toArray('.bounce-in-top');
        bounceInTop.forEach(box => {
        gsap.set(box, {scale:0, opacity:0, transformOrigin: 'center center'});
        gsap.to(box, { 
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                end: "bottom top",        
                toggleClass: "onscreen",
                toggleActions: "play reverse play reverse"
            },
            ease: "Elastic.easeOut",
            delay: .4,
            duration:2,
            scale:1,
            opacity:1
        })
        });


        // Float up and down
        const boxesFloatSm = gsap.utils.toArray('.float-sm');
            boxesFloatSm.forEach(box => {
            gsap.set(box, {yPercent: 20});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                    toggleActions: "play none none none"
                }, 
                yPercent: -20,
                ease: "none"
            })
        });

        const boxesFloatMd = gsap.utils.toArray('.float-md');
            boxesFloatMd.forEach(box => {
            gsap.set(box, {yPercent: 40});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                toggleActions: "play none none none"
                }, 
                yPercent: -40,
                ease: "none"
            })
        });
            
        const boxesFloatLg = gsap.utils.toArray('.float-lg');
            boxesFloatLg.forEach(box => {
            gsap.set(box, {yPercent: 60});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                toggleActions: "play none none none"
                }, 
                yPercent: -60,
                ease: "none"
            })
        });

        // Float side to side

        const boxesFloatSmSide = gsap.utils.toArray('.float-side-sm');
            boxesFloatSmSide.forEach(box => {
            gsap.set(box, {xPercent: 20});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                toggleActions: "play none none none"
                }, 
                xPercent: -20,
                ease: "none"
            })
        });

        const boxesFloatMdSide = gsap.utils.toArray('.float-side-md');
            boxesFloatMdSide.forEach(box => {
            gsap.set(box, {xPercent: 40});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                toggleActions: "play none none none"
                }, 
                xPercent: -40,
                ease: "none"
            })
        });
            
        const boxesFloatLgSide = gsap.utils.toArray('.float-side-lg');
            boxesFloatLgSide.forEach(box => {
            gsap.set(box, {xPercent: 60});
            gsap.to(box, {   
            scrollTrigger: {
                    trigger: box, // start the animation when ".box" enters the viewport (once),
                    start: "top bottom",
                    end: "bottom top",
                    toggleClass: "onscreen",
                    scrub: 1,
                toggleActions: "play none none none"
                }, 
                xPercent: -60,
                ease: "none"
            })
        });

        // Batch Items
        gsap.set('.callout-center-logo', {opacity:0, y:25 });
        ScrollTrigger.batch(".callout-center-logo", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15}, overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -25, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 25, overwrite: true})
          });

        gsap.set('.icon-item', {opacity:0, y:-25, scale:.3 });
        ScrollTrigger.batch(".icon-item", {
            start: 'top bottom',
            onEnter: batch => gsap.to(batch, {duration: 1, opacity: 1, y: 0, scale:1, stagger: {each: 0.15}, ease: "elastic.out(1, 0.3)", overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -25, scale: .3, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {duration: 1, opacity: 1, y: 0, scale: 1, stagger: 0.15, ease: "elastic.out(1, 0.3)", overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: -25,  scale: .3, overwrite: true}),
            
          });

          // Batch Items
        gsap.set('.product-grid-animate', {opacity:0, y:25 });
        ScrollTrigger.batch(".product-grid-animate", {
            start: "top 90%",
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15}, overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -25, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 25, overwrite: true})
          });

          // Batch Items
        gsap.set('.badge-icon', {opacity:0, y:25 });
        ScrollTrigger.batch(".badge-icon", {
            start: "top 90%",
            duration: .5,
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15}, overwrite: true}),
            onLeave: batch => gsap.set(batch, {opacity: 0, y: -25, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 25, overwrite: true})
          });

          //gsap.set('.letters-row span', {opacity:0, y:-50 });
          ScrollTrigger.batch(".letters-row span", {
            toggleClass: "onscreen",
            onEnter: (elements, triggers) => {
              gsap.to(elements, {duration:1, opacity: 1, scale: 1, ease: "elastic.out(1, 0.3)", stagger: {each: 0.15, from: "random" }, overwrite: true});
              //console.log(elements.length, "elements entered");
            }
          });
        
    }; // --------------------------------------------------------------- End Animation Setup Function -------------------------------------------------------------- //

    
    // -------------------- Slick Sliders (load in function for Barba) -----------------------------//
var slickSliders = function(){

    jQuery('.logo-slider').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
                {
                breakpoint: 1024,
                settings: {
                }
                },
                {
                breakpoint: 768,
                settings: {
            speed: 8000,
                }
                },
                {
                breakpoint: 500,
                settings: {
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
    });
}

    // Turn on animation when loaded
    jQuery(window).on('load',function () {
        animation_setup();
        slickSliders();
        window.dispatchEvent(new Event('resize'));
    });

    // On AJAX completion
    jQuery( document ).ajaxComplete(function() {
        //console.log('new content loaded via AJAX');
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('resize'));
    });
    
    

     // Twinkle Stars function

     window.twinkle =function(container, amount) {
        

        var textures = document.querySelectorAll(container + " .star");
        var main = document.querySelector(container);
        var frag = document.createDocumentFragment();

        var vw = main.offsetWidth;
        var vh = main.offsetHeight;

        var appearMin = 0.3;
        var appearMax = 0.8;

        var delayMin = 2;
        var delayMax = 6;
        
        var durationMin = 0.5;
        var durationMax = 1.5;

        var numAnimations = 50;
        var numStars = amount;

        var stars = [];
        var eases = [];

        

        // Wait for images to load
        window.addEventListener("load", onLoad);

        function onLoad() {
            
            for (var i = 0; i < numStars; i++) {
            stars.push(createStar());
            }
            
            main.appendChild(frag);
        }

        function createStar() {
        
            var index = random(textures.length)|0;
            var star = textures[index].cloneNode(true);
            frag.appendChild(star);
            
            gsap.set(star, {
            //xPercent: -50,
            yPercent: -100,
            scale: .25,
            autoAlpha: 0,
            x: random(vw),
            y: random(vh),
            });
            
            var tl = gsap.timeline({ repeat: -1, yoyo: false });
            
            for (var i = 0; i < numAnimations; i++) {
            
            var ease1 = eases[random(numAnimations)|0];
            var ease2 = eases[random(numAnimations)|0];
            
            var alpha = random(0.7, 1);
            var scale = random(0.25, 1);

            var yPercentStart = random(-50, 0);
            var yPercentEnd = random(100, 200);
            
            var appear = "+=" + random(appearMin, appearMax);
            var delay = "+=" + random(delayMin, delayMax);  
            var duration1 = random(durationMin, durationMax);
            var duration2 = random(durationMin, durationMax);   
            
            tl.set(star, {yPercent: -100}, delay)
            .to(star, duration1, { autoAlpha: alpha, scale: scale, yPercent: 0, ease: 'none' })
            .to(star, duration1, { autoAlpha: 0, scale: 1, yPercent: 100, ease: 'none' })
            .set(star, {yPercent: -100, scale: .25 }, appear)
            }
            
            tl.progress(random(1));
            
            return {
            element: star,
            timeline: tl
            };
        }

        function random(min, max) {
            if (max == null) { max = min; min = 0; }
            if (min > max) { var tmp = min; min = max; max = tmp; }
            return min + (max - min) * Math.random();
        }
    }

    // Do other stuff on window load
    jQuery(window).on('load',function () {
        jQuery('a.scrollme').click(function() { 
            var target = jQuery(this.hash);
            if (target.length == 0) target = jQuery('a[name="' + this.hash.substr(1) + '"]');
            if (target.length == 0) target = jQuery('html');
            jQuery('html, body').delay(100).animate({ scrollTop: target.offset().top - 0 }, 500);
            ScrollTrigger.refresh();
            return false;
        });
    });

   



})( jQuery );