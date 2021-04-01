
    // ESA PYRÉNÉES
    document.esa_id_options={'family':'monospace', 'size':'16px'}
    var esa_e = document.createElement("div"),
        esa_s = document.createElement("div"),
        esa_a = document.createElement("div"),
        esa_pyrenees = document.createElement("div"),
        esa_body = document.getElementsByTagName("body")[0];
    esa_e.innerHTML = "&Eacute;";
    esa_s.innerHTML = "S";
    esa_a.innerHTML = "A";
    esa_pyrenees.innerHTML = "P<br>y<br>r<br>&eacute;<br>n<br>&eacute;<br>e<br>s";

    esa_e.id = "esa-e";
    esa_s.id = "esa-s";
    esa_a.id = "esa-a";
    esa_pyrenees.id = "esa-p";

    esa_body.appendChild(esa_e);
    esa_body.appendChild(esa_s);
    esa_body.appendChild(esa_a);
    esa_body.appendChild(esa_pyrenees);

    var w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        x=w.innerWidth||e.clientWidth||g.clientWidth,
        y=w.innerHeight||e.clientHeight||g.clientHeight;

    var mmiddle = '50%',
        mbottom = '20px',
        mtop = '40px',
        mleft = '40px';

    var css = "#esa-e,#esa-s,#esa-a,#esa-p{font-weight:normal;text-transform:uppercase;font-family:"
        + document.esa_id_options['family'] +";font-size:" + document.esa_id_options['size']
    + ";font-weight:400}#esa-e{position:fixed!important;left:33.33%;top:" + mtop + ";z-index:500;color:#000}" 
    + "#esa-s{position:fixed!important;left:" + mleft + ";top:" 
    + mmiddle 
    + ";height:15px;margin-top:-7px;z-index:500;color:#000}#esa-a{position:fixed!important;left:33.33%;bottom:" 
    + mbottom 
    + ";margin-left:-10px;-webkit-transform:rotate(270deg);-moz-transform:rotate(270deg);-o-transform:rotate(270deg);transform:rotate(270deg);-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0;z-index:500;color:#000}"
    + "#esa-p{text-align:center;position:fixed!important;right:20px;left:auto;top:" 
    + mmiddle 
    + ";margin-top:-70px;width:20px;height:140px;z-index:500;line-height:1.1;color:#000}";

    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<p>-</p><style>' + css + '</style>';
    document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[1]);

    


// backgrounds



var body = document.body,
    splash = document.getElementById('splash');



var dobg = function(){
    var bgimg = new Image();
    var file = "img/v/" + bgs[Math.floor(Math.random() * bgs.length)];
    var bgimgsrc = "url(" + file + ")"; 

    bgimg.onload = function () {
        body.style.backgroundImage = bgimgsrc;
        splash.style.backgroundImage = bgimgsrc;     
        setTimeout(function(){
            bg = setTimeout(dobg, 200);
        }, 4000)
    }

    bgimg.src = file;   
}
  
var bg = setTimeout(dobg, 200);


var do_print = function(){
    var imgs = document.querySelectorAll('.img');
    var images = document.querySelector('#images');
    for (var i = 0; i < imgs.length; i++) {
        var container = document.createElement('div'),
            img = document.createElement('img'),
            caption = document.createElement('span');
        container.className = "img-container";

        img.src = 'img/v/' + imgs[i].getAttribute('data-img');
        img.setAttribute('width', 'auto');
        caption.innerHTML = imgs[i].getAttribute('data-caption');
        container.appendChild(img);
        container.appendChild(caption);
        images.appendChild(container)

    }
}

var printit = document.querySelector('#printit')
printit.addEventListener('click',function(e){
    e.preventDefault();
    do_print();
    setTimeout(function(){
        window.print()
    }, 1000)    
})



