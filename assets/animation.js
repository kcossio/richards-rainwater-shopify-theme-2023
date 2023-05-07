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

        // Bounce In
        
        const bounceIn = gsap.utils.toArray('.bounce-in');
        bounceIn.forEach(box => {
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
        
    }; // --------------------------------------------------------------- End Animation Setup Function -------------------------------------------------------------- //

    

    // Turn on animation when loaded
    jQuery(window).on('load',function () {
        animation_setup();
        window.dispatchEvent(new Event('resize'));
    });

    // On AJAX completion
    jQuery( document ).ajaxComplete(function() {
        //console.log('new content loaded via AJAX');
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('resize'));
    });
    
    // On load of the Social Feed
    jQuery(".ooo-instagram-feed__list").bind("DOMSubtreeModified", function() {
        //console.log("tree changed");
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event('resize'));
    });

    // Twinkle Stars function

    window.twinkle =function(container, amount) {
        var vw = window.innerWidth;
        var vh = window.innerHeight;

        var textures = document.querySelectorAll(container + " .star");
        var main = document.querySelector(container);
        var frag = document.createDocumentFragment();

        var appearMin = 0.3;
        var appearMax = 0.8;

        var delayMin = 2;
        var delayMax = 6;

        var durationMin = 0.3;
        var durationMax = 1;

        var numAnimations = 50;
        var numStars = amount;

        var stars = [];
        var eases = [];

        /*
        for (var i = 0; i < numAnimations; i++) {
            
            var ease = new RoughEase({ 
            template:  Linear.easeNone, 
            strength: random(1, 3), 
            points: random(50, 200)|0, 
            taper: "both", 
            randomize: true, 
            clamp: true
            });
            
            eases.push(ease);
        }
        */

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
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            x: random(vw),
            y: random(vh),
            });
            
            var tl = gsap.timeline({ repeat: -1, yoyo: true });
            
            for (var i = 0; i < numAnimations; i++) {
            
            var ease1 = eases[random(numAnimations)|0];
            var ease2 = eases[random(numAnimations)|0];
            
            var alpha = random(0.7, 1);
            var scale = random(0.15, 1);
            
            var appear = "+=" + random(appearMin, appearMax);
            var delay = "+=" + random(delayMin, delayMax);  
            var duration1 = random(durationMin, durationMax);
            var duration2 = random(durationMin, durationMax);   
            
            tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
                .to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
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


})( jQuery );