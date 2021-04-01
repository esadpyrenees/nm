

// plyr players
var players = document.querySelectorAll(".player");
if(players.length){
    for(var i = 0; i< players.length; i++) {
        const player = new Plyr(players[i], {
            controls: ['play-large']
        });
    }
}

// slideshows
var elems = document.querySelectorAll('.slideshow');
if(elems.length){
    for(var i = 0; i< elems.length; i++) {
        const flkty = new Flickity( elems[i], {
            pageDots: false
        });
    }
}



// sticky menu
const observer = new IntersectionObserver( 
    ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
    {threshold: [1]}
);
observer.observe(document.querySelector('#nav'));


// bmap
var bmaps = document.querySelectorAll('.bmap');
imagesLoaded( bmaps, function( instance ) {
    bmapize();
});


// snap

var svg = document.getElementById("nm");
var s = Snap(svg);
var N = Snap.select('#N');
var N_extended = Snap.select('#N_extended');
var N_extended_points = N.node.getAttribute('d');
var ouveaux = Snap.select('#ouveaux');
var M = Snap.select('#M');
var M_extended = Snap.select('#M_extended');
var M_extended_points = M.node.getAttribute('d');
var edias = Snap.select('#edias');

var anims = [
    
    function(){
        edias.animate({ transform: "t346"}, 400, mina.easeOutQuart)
        M.animate({ d: M_extended }, 400, mina.easeOutQuart, anims[1] );
    },
    function(){
        // pause
        M.animate({transform: "t0" }, 50, mina.linear, anims[2] );
    },
    function(){
        M.animate({ d: M_extended_points, transform: "t346" }, 200, mina.easeOutQuart, anims[3] );
    },
    function(){
        // pause
        M.animate({transform: "t346" }, 50, mina.linear, anims[4] );
    },
    function(){
        ouveaux.animate({ transform: "t346"}, 200, mina.easeOutQuart)
        N.animate({ d: N_extended }, 200, mina.easeOutQuart, anims[5]  );
    },
    function(){
        // pause
        M.animate({transform: "t346" }, 50, mina.linear, anims[6] );
    },
    function(){
        ouveaux.animate({ transform: "t0"}, 200, mina.easeOutQuart)
        N.animate({ d: N_extended_points }, 200, mina.easeOutQuart, anims[7] );
    },
    function(){
        M.animate({ d: M_extended, transform: "t0" }, 200, mina.easeOutQuart, anims[8]  );            
    },
    function(){
        console.log("animation # " + 8)
        edias.animate({ transform: "t0"}, 200, mina.easeOutQuart)
        M.animate({transform: "t0", d: M_extended_points }, 200, mina.easeOutQuart, anims[9] );
    },
    function(){
        console.log("animation # " + 9)
        M.animate({transform: "t0", d: M_extended_points }, 4000, mina.linear );
    },
    function(){
        console.log("animation # " + 00)
        // pause
        M.animate({transform: "t0" }, 500, mina.linear, anims[0] );
    },
];
anims[10]();
