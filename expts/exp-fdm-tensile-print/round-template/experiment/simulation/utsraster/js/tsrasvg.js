
var i=0;
var x1=1.5;
var x2=2.75;
var t = 6;
var z,sw,v,n,frac;
p11="";
p72 = "";
p8 = "";
p9="";
var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";


var lh_ = (12.371/7);
for (i = 0; i < 2; i++)
{
    var l_= (10/5.671);
    var h1 = (46.15+i*2*l_*lh_);
    p11 += "h"+h1+" l"+(l_*lh_)+" -"+lh_+"h-"+(h1+l_*lh_)+"v-"+lh_+"";//shell+slope1
}
p51 = "h"+(56.15+(1.39814284*(11.4/4.05)))+"l"+(lh_*(11.4/4.05))+" -"+lh_+"h-"+((56.15+(1.39814284*(11.4/4.05)))+(lh_*(11.4/4.05)))+"v-"+lh_+"";//slope2
p61 = "h"+(67.55+0.88271426*(13.8/2.65))+"l"+(lh_*(13.8/2.65))+" -"+lh_+"h-"+(81.35)+"v-"+lh_+"h405";//slope3+line1
p71 = "v"+lh_+"h-"+(81.35)+"l"+(lh_*(13.8/2.65))+" "+lh_+"h"+(67.55+0.88271426*(13.8/2.65))+"v"+lh_+"h-"+((56.15+(1.39814284*(11.4/4.05)))+(lh_*(11.4/4.05)))+"l"+(lh_*(11.4/4.05))+" "+lh_+"h"+(56.15+(1.39814284*(11.4/4.05)))+"v1.7672857142857143h-55.499069199183815 l3.1163563997279393 1.7672857142857143 h52.382712799455874 v1.7672857142857143 h-49.26635639972794 l3.1163563997279393 1.7672857142857143 h47.65"//right-side-down
for (index = 0; index < 5; index++) {
    if (index<4) {
        p8 += "h405v-"+(lh_)+"h-405v-"+(lh_)+"";//lines-horizontal-9
    } else {
        p8 += "v-0.125h405v-"+(lh_)+"";
    }
}
p72 += "h-72.197l-2e-3 -2.02e-4 4.6486-0.89266 2.4599-0.87391 65.09-5e-4v-1.7673l-60.115 4.73e-4 3.9654-1.4088 0.63135-0.35804 55.519-9.5e-4v-1.7673h-52.4l3.1191-1.7673h49.281v-1.7673h-46.15";//right-side-up
p73 = "h-1.5h1.5h46.15 l3.1163563997279393 1.7672857142857143 h-49.26635639972794 v1.7672857142857143 h52.382712799455874 l3.1163563997279393 1.7672857142857143 h-55.499069199183815 v1.7672857142857143 h60.08551317925926 l4.974582010582011 1.7672857142857143 h-65.06009518984126 v1.7672857142857143 h72.14677614641509 l9.20322371967655 1.7672857142857143";//left-side-up

function layer(v) {
    if (repeat==1) {
        frac = (4.79/100);
    } else if (repeat==2) {
        frac = (5.08/100);
    }else {
        frac = (4.79/100);
    }
    console.log('layer is running');
    var lh = 0.5
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v+1)+(repeat)+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    document.getElementById('base').setAttribute('d',"m15 "+(272.5+(sw/2)+(0.5/2))+"h420v10h-420v-10")
    //console.log(document.getElementById('base').getAttribute('d'));
    document.getElementById('base').style.strokeWidth = 0.5;
    document.getElementById('base').setAttribute('class','draw');

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id1);
    path.setAttributeNS(null,'fill','none');
    document.getElementById(id1).setAttribute('d',"M19,"+(272.5-(v*sw))+" l412.5 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d'));
    var len = 412.5;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(frac*t)+"s linear "+v*t+"s forwards";
    console.log('layer is',document.getElementById(id1));
    if (v<(ln-1)) {
        v++;
        layer(v);
    }
}

function imgmove(n)
{
    var lh =0.5
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";
    console.log('imgmove is running');
    var id3 = 'img'+(n+1)+''+(repeat)+'';
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img);
    document.getElementById('step-2').appendChild(document.getElementById("img0"));
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    if (repeat==1) {
        if ((n<2)  || (n>(ln-3))) {
            console.log('n is',n);
            if ((n+1)%2==0) {
                document.getElementById(id3).style.animation = "animateimgtb90 "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{ img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>{   img.style.visibility = "hidden"; })
            } else {
                console.log('n NOW IS',n);
                document.getElementById(id3).style.animation = "animateimgtb0 "+(t)+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{ img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>{   img.style.visibility = "hidden"; })
            }
        } else {
            if ((n+1)%2==0) {
                document.getElementById(id3).style.animation = "animateimginfill90 "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{  img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>  {  img.style.visibility = "hidden"; })
            } else {
                document.getElementById(id3).style.animation = "animateimginfill0 "+(t)+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{  img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>  {  img.style.visibility = "hidden"; })
            }
        }
    }
    else if (repeat==2){
        if ((n<2)  || (n>(ln-3))) {
            console.log('%c repeat is',  "color: red; font-style: italic;",repeat);
            document.getElementById(id3).style.animation = "animateimgtb45 "+t+"s linear "+(t*n)+"s  forwards";
            img.addEventListener("animationstart",()=>{     img.style.visibility='visible';  })
            img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })
        } else {
            document.getElementById(id3).style.animation = "animateimginfill45 "+t+"s linear "+(t*n)+"s  forwards";
            img.addEventListener("animationstart",()=>{     img.style.visibility='visible';  })
            img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })
        }}
        else if (repeat==3){
            if ((n<2)  || (n>(ln-3))) {
                console.log('%c repeat is',  "color: red; font-style: italic;",repeat);
                document.getElementById(id3).style.animation = "animateimgtb0 "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{     img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })
            } else {
                document.getElementById(id3).style.animation = "animateimginfill0 "+t+"s linear "+(t*n)+"s  forwards";
                img.addEventListener("animationstart",()=>{     img.style.visibility ='visible'; })
                img.addEventListener("animationend",()=>{       img.style.visibility = "hidden"; })
            }}
    if (n<(ln-1))
    {
        n++;
        imgmove(n);
    }
}

function first(z) {
    if (repeat==1) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById('drawlayer1').style.opacity="1";
        document.getElementById('drawlayer12').style.opacity="1";
        document.getElementById('drawlayer11').style.opacity="1";
        console.log("d1=",d1,"d2=",d2,"d3=",d3,"p1=",p1,"p5=",p5,"p6=",p6,"p7=",p7)
        document.getElementById('drawlayer1').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer1').style.strokeDasharray = len1;
        document.getElementById('drawlayer1').style.strokeDashoffset = len1;
        document.getElementById('drawlayer1').style.strokeWidth = 1.4;
        document.getElementById('drawlayer1').style.zIndex=z;
        document.getElementById('drawlayer1').style.animation = "animatelast "+(0.4790*t)+"s linear forwards";
        document.getElementById('drawlayer11').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.querySelector(".svg path[id = 'drawlayer11']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer11').style.strokeDasharray = len2;
        document.getElementById('drawlayer11').style.strokeDashoffset = len2;
        document.getElementById('drawlayer11').style.strokeWidth = 1.4;
        document.getElementById('drawlayer11').style.zIndex=1;
        document.getElementById('drawlayer11').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t)+"s forwards";

        document.getElementById("drawlayer12").setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById('drawlayer12'));
        var path3 = document.querySelector(".svg path[id = 'drawlayer12']");
        var len3 = path3.getTotalLength();
        document.getElementById('drawlayer12').style.strokeDasharray = len3;
        document.getElementById('drawlayer12').style.strokeDashoffset = len3;
        document.getElementById('drawlayer12').style.strokeWidth = 1.4;
        document.getElementById('drawlayer12').style.zIndex=1;
        document.getElementById('drawlayer12').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t)+"s forwards";
        document.getElementById('drawlayer12').addEventListener("animationend",()=>{
            document.getElementById('drawlayer1').style.opacity="0.1";
            document.getElementById('drawlayer11').style.opacity="0.1";
            document.getElementById('drawlayer12').style.opacity="0.1"; })

        p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill
        document.getElementById('drawlayer2').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p2+"") ;
        var path4 = document.querySelector(".svg path[id = 'drawlayer2']");
        var len4 = path4.getTotalLength();
        document.getElementById('drawlayer2').style.strokeDasharray = len4;
        document.getElementById('drawlayer2').style.strokeDashoffset = len4;
        document.getElementById('drawlayer2').style.strokeWidth = 1.4;
        document.getElementById('drawlayer2').style.zIndex=z+1;
        document.getElementById('drawlayer2').style.animation = "animate1 "+t+"s linear "+t+"s forwards";
    }
    else if (repeat==2) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d3_="l1.5 -1.5";
        for ( i = 0; i < 15; i=i+2) {
            if (((i+2)*2.75)<42.55) {
                p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+ "v-2.75 l"+(i+2)*2.75+" "+(i+2)*2.75+"";
                p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+ "v2.75 l"+(i+2)*2.75+" "+(i+2)*-2.75+"";
            } else {
                p1 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*-2.75+"v-1.3";
                p4 += "h2.75 l"+(i+1)*-2.75+" "+(i+1)*2.75+"v1.3";
            }
        }
        p2 ="h1.45l42.55 42.55h2.15l0.38287-0.21713 0.0012 1e-3 -42.334-42.334h2.75l41.339 41.339-7.5e-4 -7.5e-4 1.7543-0.99575-40.342-40.342h2.75l39.348 39.348-5e-4 -5e-4 1.7548-0.99516 1e-3 1e-3 -38.353-38.353h2.75l37.358 37.358-1e-3 -1e-3 -3.8e-5 -4e-5 0.84296-0.47804 1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785-0.0018-2e-3 2.0307-0.72144-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027 0.0015 0.0015-33.622-33.622h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102-0.0015-0.0015 2.3092-0.44078c-9.5138-9.5138-18.876-18.876-27.972-27.972l5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.03593h2.529l3e-3 0.0028-22.734-22.734 4.2653 1.5143 21.215 21.216 2.7516 0.0015 3e-3 0.0028-20.137-20.135 3.4074 0.65584 19.479 19.479-3e-3 -0.0028h2.7527l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808-4e-3 -0.0038h0.521l2.7593 0.52987 2e-3 0.0015-18.339-18.339 2.7496 7.5e-4 18.992 18.992-2e-3 -0.0015 3.4041 0.65368 5e-4 5e-4 -19.645-19.646h2.751l20.298 20.299-5e-4 -5e-4 0.82963 0.15931 3.2246 1.1456 2e-3 2e-3 -21.604-21.604 2.7488-0.0012-2.3e-4 -2.27e-4 23.121 23.12 3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61-2.5e-4 -5.75e-4 1.7546-0.99505-5e-4 -4.5e-4 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75c-13.864-13.864-27.728-27.728-41.591-41.591l2.5e-4 3.15e-4 1.691-0.95898h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55";
        p5 ="h1.45l42.55-42.55h2.15l0.38287 0.21713 1e-3 -1e-3 -42.334 42.334h2.75l41.339-41.339-7.5e-4 7.5e-4 1.7543 0.99575-40.342 40.342h2.75l39.348-39.348-5e-4 5e-4 1.7548 0.99516 1e-3 -1e-3 -38.353 38.353h2.75l37.358-37.358-0.00104 0.00104 0.84296 0.47804 1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785-2e-3 2e-3 2.0307 0.72144-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027 2e-3 -0.0015-33.622 33.622h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102-2e-3 0.0015 2.3092 0.44078-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.03593h2.529l3e-3 -0.0028-22.734 22.734 4.2653-1.5143 21.215-21.216 2.7516-0.0015 3e-3 -0.0028-20.137 20.135 3.4074-0.65584 19.479-19.479-3e-3 0.0028h2.7527l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808-4e-3 0.0038h0.521l2.7593-0.52987 2e-3 -0.0015-18.339 18.339 2.7496-7.5e-4 18.992-18.992-2e-3 0.0015 3.4041-0.65368 5e-4 -5e-4 -19.645 19.646h2.751l20.298-20.299-5e-4 5e-4 0.82963-0.15931 3.2246-1.1456 2e-3 -2e-3 -21.604 21.604 2.7488 0.0012-2.3e-4 2.27e-4 23.121-23.12 3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61-2.5e-4 5.7e-4 1.7546 0.99505-5e-4 4.5e-4 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591 2.5e-4 -3.1e-4 1.691 0.95898h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55"
        for ( k = 0; k < 14; k=k+2) {
            if (k<13) {
                p3 += "v-"+x2+" l"+(-(40.55-(k+1)*2.75))+" "+(-(40.55-(k+1)*2.75))+"h2.75 l"+(40.55-(k+2)*2.75)+" "+(40.55-(k+2)*2.75)+" ";
                p6 += "v"+x2+" l"+(-(40.55-(k+1)*2.75))+" "+(40.55-(k+1)*2.75)+"h2.75 l"+(40.55-(k+2)*2.75)+" "+(-(40.55-(k+2)*2.75))+" ";
                x2= 2.75;
            } else {
                p3 += "v-2.75l"+(-(40.55-(k+1)*2.75))+" "+(-(40.55-(k+1)*2.75))+" ";
                p6 += "v2.75l"+(-(40.55-(k+1)*2.75))+" "+(40.55-(k+1)*2.75)+" ";

            }
        }
        console.log('first is running');
        document.getElementById('drawlayer1').style.opacity="1";
        document.getElementById('drawlayer2').style.opacity="1";
        document.getElementById('drawlayer1').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1+""+p2+""+p3+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer1').style.strokeDasharray = len1;
        document.getElementById('drawlayer1').style.strokeDashoffset = len1;
        document.getElementById('drawlayer1').style.strokeWidth = 1.4;
        document.getElementById('drawlayer1').style.zIndex=z;
        document.getElementById('drawlayer1').style.animation = "animate1 "+t+"s linear forwards";

        document.getElementById('drawlayer2').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p4+""+p5+""+p6+"");
        var path2 = document.querySelector(".svg path[id = 'drawlayer2']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer2').style.strokeDasharray = len2;
        document.getElementById('drawlayer2').style.strokeDashoffset = len2;
        document.getElementById('drawlayer2').style.strokeWidth = 1.4;
        document.getElementById('drawlayer2').style.zIndex=z+1;
        document.getElementById('drawlayer2').style.animation = "animate1 "+t+"s linear "+t+"s forwards";
    }
    else if(repeat==3){
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById('drawlayer1').style.opacity="1";
        document.getElementById('drawlayer12').style.opacity="1";
        document.getElementById('drawlayer11').style.opacity="1";
        document.getElementById('drawlayer2').style.opacity="1";
        document.getElementById('drawlayer21').style.opacity="1";
        document.getElementById('drawlayer22').style.opacity="1";
        document.getElementById('drawlayer1').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer1']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer1').style.strokeDasharray = len1;
        document.getElementById('drawlayer1').style.strokeDashoffset = len1;
        document.getElementById('drawlayer1').style.strokeWidth = 1.4;
        document.getElementById('drawlayer1').style.zIndex=z;
        document.getElementById('drawlayer1').style.animation = "animatelast "+(0.4790*t)+"s linear forwards";
        document.getElementById('drawlayer11').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.querySelector(".svg path[id = 'drawlayer11']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer11').style.strokeDasharray = len2;
        document.getElementById('drawlayer11').style.strokeDashoffset = len2;
        document.getElementById('drawlayer11').style.strokeWidth = 1.4;
        document.getElementById('drawlayer11').style.zIndex=1;
        document.getElementById('drawlayer11').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t)+"s forwards";

        document.getElementById("drawlayer12").setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById('drawlayer12'));
        var path3 = document.querySelector(".svg path[id = 'drawlayer12']");
        var len3 = path3.getTotalLength();
        document.getElementById('drawlayer12').style.strokeDasharray = len3;
        document.getElementById('drawlayer12').style.strokeDashoffset = len3;
        document.getElementById('drawlayer12').style.strokeWidth = 1.4;
        document.getElementById('drawlayer12').style.zIndex=1;
        document.getElementById('drawlayer12').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t)+"s forwards";
        document.getElementById('drawlayer12').addEventListener("animationend",()=>{
            document.getElementById('drawlayer1').style.opacity="0.1";
            document.getElementById('drawlayer11').style.opacity="0.1";
            document.getElementById('drawlayer12').style.opacity="0.1"; })

        document.getElementById('drawlayer2').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path4 = document.querySelector(".svg path[id = 'drawlayer2']");
        var len4 = path4.getTotalLength();
        document.getElementById('drawlayer2').style.strokeDasharray = len4;
        document.getElementById('drawlayer2').style.strokeDashoffset = len4;
        document.getElementById('drawlayer2').style.strokeWidth = 1.4;
        document.getElementById('drawlayer2').style.zIndex=z;
        document.getElementById('drawlayer2').style.animation = "animatelast "+(0.4790*t)+"s linear "+t+"s forwards";
        document.getElementById('drawlayer21').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path5 = document.querySelector(".svg path[id = 'drawlayer21']");
        var len5 = path5.getTotalLength();
        document.getElementById('drawlayer21').style.strokeDasharray = len5;
        document.getElementById('drawlayer21').style.strokeDashoffset = len5;
        document.getElementById('drawlayer21').style.strokeWidth = 1.4;
        document.getElementById('drawlayer21').style.zIndex=1;
        document.getElementById('drawlayer21').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+t)+"s forwards";

        document.getElementById("drawlayer22").setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById('drawlayer12'));
        var path6 = document.querySelector(".svg path[id = 'drawlayer22']");
        var len6 = path6.getTotalLength();
        document.getElementById('drawlayer22').style.strokeDasharray = len6;
        document.getElementById('drawlayer22').style.strokeDashoffset = len6;
        document.getElementById('drawlayer22').style.strokeWidth = 1.4;
        document.getElementById('drawlayer22').style.zIndex=1;
        document.getElementById('drawlayer22').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+t)+"s forwards";
        document.getElementById('drawlayer22').addEventListener("animationend",()=>{
            document.getElementById('drawlayer2').style.opacity="0.1";
            document.getElementById('drawlayer21').style.opacity="0.1";
            document.getElementById('drawlayer22').style.opacity="0.1"; })
    }

    setTimeout(function()
		{
		document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
        document.getElementById("notes").innerHTML="For the top and bottom layers, the infill is always 100%.";
        },3000);
    setTimeout(function()
	    {
	    document.getElementById("notes").style.visibility="hidden";
        },((t-1)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
    document.getElementById("notes").innerHTML="For each layer, the outer shell is printed first.";
    },(t*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },((t*1.2295)*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:200px; top:250px;"
    document.getElementById("notes").innerHTML="Then the inner cavity is filled with infill material.";
    },((t*1.25)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(t*2*1000));

    setTimeout(function()
    {
    document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:150px; top:250px;"
    document.getElementById("notes").innerHTML="For the inner layers, the infill is determined by the infill density value.";
    },(((t*2)+1)*1000));
    setTimeout(function()
    {
    document.getElementById("notes").style.visibility="hidden";
    },(((t*3)-1)*1000));
}

function middle1(z,callback) {
    //console.log('middle1 is running');
    var lh = 0.5
    //console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    var path11=document.createElementNS(svgNS,"path");
    var path22=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    svg.appendChild(path11);
    svg.appendChild(path22);
    var id2 = 'drawlayer'+(z+3)+''+(repeat)+'';
    var id21 ='drawlayer'+(z+3)+'1'+(repeat)+'';
    var id22 ='drawlayer'+(z+3)+'2'+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    path11.setAttributeNS(null,'id',id21);
    path22.setAttributeNS(null,'id',id22);
    path.setAttributeNS(null,'fill','transparent');
    path11.setAttributeNS(null,'fill','transparent');
    path22.setAttributeNS(null,'fill','transparent');
    if (repeat==1) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById(id2).style.opacity="1";
        document.getElementById(id21).style.opacity="1";
        document.getElementById(id22).style.opacity="1";
        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d31+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.getElementById(id2);
        var len1 = path1.getTotalLength();
        document.getElementById(id2).style.strokeDasharray = len1;
        document.getElementById(id2).style.strokeDashoffset = len1;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animatelast "+(0.4790*t)+"s linear "+(z*t)+"s  forwards";

        document.getElementById(id21).setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.getElementById(id21);
        var len2 = path2.getTotalLength();
        document.getElementById(id21).style.strokeDasharray = len2;
        document.getElementById(id21).style.strokeDashoffset = len2;
        document.getElementById(id21).style.strokeWidth = 1.5;
        document.getElementById(id21).style.zIndex=1;
        document.getElementById(id21).style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+(z*t))+"s forwards";

        document.getElementById(id22).setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById(id22));
        var path3 = document.getElementById(id22);
        var len3 = path3.getTotalLength();
        document.getElementById(id22).style.strokeDasharray = len3;
        document.getElementById(id22).style.strokeDashoffset = len3;
        document.getElementById(id22).style.strokeWidth = 1.5;
        document.getElementById(id22).style.zIndex=1;
        document.getElementById(id22).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+(z*t))+"s forwards";
        document.getElementById(id22).addEventListener("animationend",()=>{
            document.getElementById(id2).style.opacity="0.1";
            document.getElementById(id21).style.opacity="0.1";
            document.getElementById(id22).style.opacity="0.1"; })
    }
    else if (repeat==2) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d3_="l1.5 -1.5";
        p2 ="h1.45l42.55 42.55h2.15l0.38287-0.21713c-14.106-14.106-28.223-28.223-42.333-42.333h2.75l41.339 41.339c0.58108-0.33217 1.1694-0.66493 1.7536-0.9965l-40.342-40.342h2.75l39.348 39.348c0.58249-0.33189 1.1698-0.66417 1.7543-0.99566l-38.352-38.352h2.75l37.358 37.358c0.2891-0.16682 0.59129-0.33694 0.84192-0.47908l1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785c0.66702-0.24227 1.354-0.48366 2.0289-0.72344l-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027-33.62-33.62h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102c0.76141-0.14891 1.5399-0.29571 2.3077-0.44228l-27.972-27.972 5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.0359h2.529c-7.564-7.5644-15.156-15.157-22.731-22.731l4.2653 1.5143 21.215 21.216 2.7516 1e-3c-6.6984-6.6981-13.425-13.424-20.134-20.132l3.4074 0.65584 19.479 19.479c0.9005-6e-3 1.8365-3e-3 2.7497-3e-3l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808c0.14735-0.01 0.35153-3e-3 0.517-4e-3l2.7593 0.52987c-6.1047-6.1067-12.226-12.227-18.337-18.338l2.7496 7.5e-4 18.992 18.992c1.1246 0.21473 2.2701 0.4353 3.4021 0.65268-6.546-6.5463-13.097-13.097-19.644-19.646h2.751l20.298 20.299c0.27367 0.0517 0.55336 0.10586 0.82913 0.15881l3.2246 1.1456-21.602-21.602 2.7488-1e-3c7.7059 7.7056 15.414 15.413 23.121 23.12l3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61c0.5832-0.33215 1.1697-0.66405 1.7544-0.99562 12.866 12.866 25.737 25.737 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75l-41.591-41.591c0.56343-0.31863 1.1277-0.63907 1.6912-0.95867h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55";
        p5 ="h1.45l42.55-42.55h2.15l0.38287 0.21713c-14.106 14.106-28.223 28.223-42.333 42.333h2.75l41.339-41.339c0.58108 0.33217 1.1694 0.66493 1.7536 0.9965l-40.342 40.342h2.75l39.348-39.348c0.58249 0.33189 1.1698 0.66417 1.7543 0.99566l-38.352 38.352h2.75l37.358-37.358c0.2891 0.16682 0.59129 0.33694 0.84192 0.47908l1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785c0.66702 0.24227 1.354 0.48366 2.0289 0.72344l-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027-33.62 33.62h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102c0.76141 0.14891 1.5399 0.29571 2.3077 0.44228l-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.0359h2.529c-7.564 7.5644-15.156 15.157-22.731 22.731l4.2653-1.5143 21.215-21.216 2.7516-1e-3c-6.6984 6.6981-13.425 13.424-20.134 20.132l3.4074-0.65584 19.479-19.479c0.9005 6e-3 1.8365 3e-3 2.7497 3e-3l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808c0.14735 0.01 0.35153 3e-3 0.517 4e-3l2.7593-0.52987c-6.1047 6.1067-12.226 12.227-18.337 18.338l2.7496-7.5e-4 18.992-18.992c1.1246-0.21473 2.2701-0.4353 3.4021-0.65268-6.546 6.5463-13.097 13.097-19.644 19.646h2.751l20.298-20.299c0.27367-0.0517 0.55336-0.10586 0.82913-0.15881l3.2246-1.1456-21.602 21.602 2.7488 1e-3c7.7059-7.7056 15.414-15.413 23.121-23.12l3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61c0.5832 0.33215 1.1697 0.66405 1.7544 0.99562 12.866-12.866 25.737-25.737 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591c0.56343 0.31863 1.1277 0.63907 1.6912 0.95867h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55";

        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3_+""+p1+""+p2+""+p3+"v-2.75");
        var path1 = document.getElementById(id2);
        var len1 = path1.getTotalLength();
        document.getElementById(id2).style.opacity="1";
        document.getElementById(id2).style.strokeDasharray = len1;
        document.getElementById(id2).style.strokeDashoffset = len1;
        document.getElementById(id2).style.strokeWidth = 1.4;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    }
    else if(repeat==3){
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d31+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.getElementById(id2);
        var len1 = path1.getTotalLength();
        document.getElementById(id2).style.opacity="1";
        document.getElementById(id21).style.opacity="1";
        document.getElementById(id22).style.opacity="1";
        document.getElementById(id2).style.strokeDasharray = len1;
        document.getElementById(id2).style.strokeDashoffset = len1;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animatelast "+(0.4790*t)+"s linear "+(z*t)+"s  forwards";
        document.getElementById(id21).setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.getElementById(id21);
        var len2 = path2.getTotalLength();
        document.getElementById(id21).style.strokeDasharray = len2;
        document.getElementById(id21).style.strokeDashoffset = len2;
        document.getElementById(id21).style.strokeWidth = 1.5;
        document.getElementById(id21).style.zIndex=1;
        document.getElementById(id21).style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+(z*t))+"s forwards";

        document.getElementById(id22).setAttribute('d',"m22.441 66.26"+p73+"") ;
        var path3 = document.getElementById(id22);
        var len3 = path3.getTotalLength();
        document.getElementById(id22).style.strokeDasharray = len3;
        document.getElementById(id22).style.strokeDashoffset = len3;
        document.getElementById(id22).style.strokeWidth = 1.5;
        document.getElementById(id22).style.zIndex=1;
        document.getElementById(id22).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+(z*t))+"s forwards";
        document.getElementById(id22).addEventListener("animationend",()=>{
            document.getElementById(id2).style.opacity="0.1";
            document.getElementById(id21).style.opacity="0.1";
            document.getElementById(id22).style.opacity="0.1"; })
    }
    if (z<(ln-3)) {
        z++;
        callback(z);
    }
}
function middle2(z) {
    //console.log('middle2 is running');
    var lh = 0.5
    //console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    var path11=document.createElementNS(svgNS,"path");
    var path22=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    svg.appendChild(path11);
    svg.appendChild(path22);
    var id2 = 'drawlayer'+(z+3)+''+(repeat)+'';
    var id21 = 'drawlayer'+(z+3)+'1'+(repeat)+'';
    var id22 = 'drawlayer'+(z+3)+'2'+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    path11.setAttributeNS(null,'id',id21);
    path22.setAttributeNS(null,'id',id22);
    path.setAttributeNS(null,'fill','transparent');
    path11.setAttributeNS(null,'fill','transparent');
    path22.setAttributeNS(null,'fill','transparent');
    if (repeat==1) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill
        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d32+""+p2+"") ;
        var path4 = document.getElementById(id2);
        var len4 = path4.getTotalLength();
        document.getElementById(id2).style.strokeDasharray = len4;
        document.getElementById(id2).style.strokeDashoffset = len4;
        document.getElementById(id2).style.strokeWidth = 1.4;
        document.getElementById(id2).style.zIndex=z+1;
        document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    }
    else if (repeat==2) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d3_="l1.5 -1.5";
        p2 ="h1.45l42.55 42.55h2.15l0.38287-0.21713c-14.106-14.106-28.223-28.223-42.333-42.333h2.75l41.339 41.339c0.58108-0.33217 1.1694-0.66493 1.7536-0.9965l-40.342-40.342h2.75l39.348 39.348c0.58249-0.33189 1.1698-0.66417 1.7543-0.99566l-38.352-38.352h2.75l37.358 37.358c0.2891-0.16682 0.59129-0.33694 0.84192-0.47908l1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785c0.66702-0.24227 1.354-0.48366 2.0289-0.72344l-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027-33.62-33.62h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102c0.76141-0.14891 1.5399-0.29571 2.3077-0.44228l-27.972-27.972 5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.0359h2.529c-7.564-7.5644-15.156-15.157-22.731-22.731l4.2653 1.5143 21.215 21.216 2.7516 1e-3c-6.6984-6.6981-13.425-13.424-20.134-20.132l3.4074 0.65584 19.479 19.479c0.9005-6e-3 1.8365-3e-3 2.7497-3e-3l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808c0.14735-0.01 0.35153-3e-3 0.517-4e-3l2.7593 0.52987c-6.1047-6.1067-12.226-12.227-18.337-18.338l2.7496 7.5e-4 18.992 18.992c1.1246 0.21473 2.2701 0.4353 3.4021 0.65268-6.546-6.5463-13.097-13.097-19.644-19.646h2.751l20.298 20.299c0.27367 0.0517 0.55336 0.10586 0.82913 0.15881l3.2246 1.1456-21.602-21.602 2.7488-1e-3c7.7059 7.7056 15.414 15.413 23.121 23.12l3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61c0.5832-0.33215 1.1697-0.66405 1.7544-0.99562 12.866 12.866 25.737 25.737 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75l-41.591-41.591c0.56343-0.31863 1.1277-0.63907 1.6912-0.95867h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55";
        p5 ="h1.45l42.55-42.55h2.15l0.38287 0.21713c-14.106 14.106-28.223 28.223-42.333 42.333h2.75l41.339-41.339c0.58108 0.33217 1.1694 0.66493 1.7536 0.9965l-40.342 40.342h2.75l39.348-39.348c0.58249 0.33189 1.1698 0.66417 1.7543 0.99566l-38.352 38.352h2.75l37.358-37.358c0.2891 0.16682 0.59129 0.33694 0.84192 0.47908l1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785c0.66702 0.24227 1.354 0.48366 2.0289 0.72344l-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027-33.62 33.62h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102c0.76141 0.14891 1.5399 0.29571 2.3077 0.44228l-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.0359h2.529c-7.564 7.5644-15.156 15.157-22.731 22.731l4.2653-1.5143 21.215-21.216 2.7516-1e-3c-6.6984 6.6981-13.425 13.424-20.134 20.132l3.4074-0.65584 19.479-19.479c0.9005 6e-3 1.8365 3e-3 2.7497 3e-3l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808c0.14735 0.01 0.35153 3e-3 0.517 4e-3l2.7593-0.52987c-6.1047 6.1067-12.226 12.227-18.337 18.338l2.7496-7.5e-4 18.992-18.992c1.1246-0.21473 2.2701-0.4353 3.4021-0.65268-6.546 6.5463-13.097 13.097-19.644 19.646h2.751l20.298-20.299c0.27367-0.0517 0.55336-0.10586 0.82913-0.15881l3.2246-1.1456-21.602 21.602 2.7488 1e-3c7.7059-7.7056 15.414-15.413 23.121-23.12l3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61c0.5832 0.33215 1.1697 0.66405 1.7544 0.99562 12.866-12.866 25.737-25.737 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591c0.56343 0.31863 1.1277 0.63907 1.6912 0.95867h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55";

        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+"v-45.55l1.5 1.5"+p4+""+p5+""+p6+"v2.75");
        var path4 =  document.getElementById(id2);
        var len4 = path4.getTotalLength();
        console.log("p4=",p4)
        console.log("p5=",p5)
        console.log("p6=",p6)
        console.log("middle2 path is=",document.getElementById(id2));
        document.getElementById(id2).style.strokeDasharray = len4;
        document.getElementById(id2).style.strokeDashoffset = len4;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z+1;
        document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    }
    else if(repeat==3){
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d31+""+p11+""+p51+""+p61+""+p71+"");
        var path4 = document.getElementById(id2);
        var len4 = path4.getTotalLength();
        document.getElementById(id2).style.strokeDasharray = len4;
        document.getElementById(id2).style.strokeDashoffset = len4;
        document.getElementById(id2).style.strokeWidth = 1.5;
        document.getElementById(id2).style.zIndex=z;
        document.getElementById(id2).style.animation = "animatelast "+(0.4790*t)+"s linear "+(z*t)+"s  forwards";

        document.getElementById(id21).setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path5 = document.getElementById(id21);
        var len5 = path5.getTotalLength();
        document.getElementById(id21).style.strokeDasharray = len5;
        document.getElementById(id21).style.strokeDashoffset = len5;
        document.getElementById(id21).style.strokeWidth = 1.5;
        document.getElementById(id21).style.zIndex=1;
        document.getElementById(id21).style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+(z*t))+"s forwards";

        document.getElementById(id22).setAttribute('d',"m22.441 66.26"+p73+"") ;
        var path6 = document.getElementById(id22);
        var len6 = path6.getTotalLength();
        document.getElementById(id22).style.strokeDasharray = len6;
        document.getElementById(id22).style.strokeDashoffset = len6;
        document.getElementById(id22).style.strokeWidth = 1.5;
        document.getElementById(id22).style.zIndex=1;
        document.getElementById(id22).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+(z*t))+"s forwards";
        document.getElementById(id22).addEventListener("animationend",()=>{
            document.getElementById(id2).style.opacity="0.1";
            document.getElementById(id21).style.opacity="0.1";
            document.getElementById(id22).style.opacity="0.1"; })
    }
    if (z<(ln-3)) {
        z++;
        middle1(z,middle2);
    }
}

function last(z) {
    if (repeat==1) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById('drawlayer3').style.opacity="1";
        document.getElementById('drawlayer32').style.opacity="1";
        document.getElementById('drawlayer31').style.opacity="1";
        document.getElementById('drawlayer3').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer3']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer3').style.strokeDasharray = len1;
        document.getElementById('drawlayer3').style.strokeDashoffset = len1;
        document.getElementById('drawlayer3').style.strokeWidth = 1.4;
        document.getElementById('drawlayer3').style.zIndex=z;
        document.getElementById('drawlayer3').style.animation = "animatelast "+(0.4790*t)+"s linear "+(z*t)+"s forwards";
        document.getElementById('drawlayer31').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.querySelector(".svg path[id = 'drawlayer31']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer31').style.strokeDasharray = len2;
        document.getElementById('drawlayer31').style.strokeDashoffset = len2;
        document.getElementById('drawlayer31').style.strokeWidth = 1.4;
        document.getElementById('drawlayer31').style.zIndex=1;
        document.getElementById('drawlayer31').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+(z*t))+"s forwards";

        document.getElementById("drawlayer32").setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById('drawlayer32'));
        var path3 = document.querySelector(".svg path[id = 'drawlayer32']");
        var len3 = path3.getTotalLength();
        document.getElementById('drawlayer32').style.strokeDasharray = len3;
        document.getElementById('drawlayer32').style.strokeDashoffset = len3;
        document.getElementById('drawlayer32').style.strokeWidth = 1.4;
        document.getElementById('drawlayer32').style.zIndex=1;
        document.getElementById('drawlayer32').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+(z*t))+"s forwards";
        document.getElementById('drawlayer32').addEventListener("animationend",()=>{
            document.getElementById('drawlayer3').style.opacity="0.1";
            document.getElementById('drawlayer31').style.opacity="0.1";
            document.getElementById('drawlayer32').style.opacity="0.1"; })

        p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill
        document.getElementById('drawlayer4').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p2+"") ;
        var path4 = document.querySelector(".svg path[id = 'drawlayer4']");
        var len4 = path4.getTotalLength();
        document.getElementById('drawlayer4').style.strokeDasharray = len4;
        document.getElementById('drawlayer4').style.strokeDashoffset = len4;
        document.getElementById('drawlayer4').style.strokeWidth = 1.4;
        document.getElementById('drawlayer4').style.zIndex=z+1;
        document.getElementById('drawlayer4').style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";
    }
    else if (repeat==2) {
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d3_="l1.5 -1.5";
        p2 ="h1.45l42.55 42.55h2.15l0.38287-0.21713 0.0012 1e-3 -42.334-42.334h2.75l41.339 41.339-7.5e-4 -7.5e-4 1.7543-0.99575-40.342-40.342h2.75l39.348 39.348-5e-4 -5e-4 1.7548-0.99516 1e-3 1e-3 -38.353-38.353h2.75l37.358 37.358-1e-3 -1e-3 -3.8e-5 -4e-5 0.84296-0.47804 1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785-0.0018-2e-3 2.0307-0.72144-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027 0.0015 0.0015-33.622-33.622h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102-0.0015-0.0015 2.3092-0.44078c-9.5138-9.5138-18.876-18.876-27.972-27.972l5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.03593h2.529l3e-3 0.0028-22.734-22.734 4.2653 1.5143 21.215 21.216 2.7516 0.0015 3e-3 0.0028-20.137-20.135 3.4074 0.65584 19.479 19.479-3e-3 -0.0028h2.7527l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808-4e-3 -0.0038h0.521l2.7593 0.52987 2e-3 0.0015-18.339-18.339 2.7496 7.5e-4 18.992 18.992-2e-3 -0.0015 3.4041 0.65368 5e-4 5e-4 -19.645-19.646h2.751l20.298 20.299-5e-4 -5e-4 0.82963 0.15931 3.2246 1.1456 2e-3 2e-3 -21.604-21.604 2.7488-0.0012-2.3e-4 -2.27e-4 23.121 23.12 3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61-2.5e-4 -5.75e-4 1.7546-0.99505-5e-4 -4.5e-4 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75c-13.864-13.864-27.728-27.728-41.591-41.591l2.5e-4 3.15e-4 1.691-0.95898h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55";
        p5 ="h1.45l42.55-42.55h2.15l0.38287 0.21713 1e-3 -1e-3 -42.334 42.334h2.75l41.339-41.339-7.5e-4 7.5e-4 1.7543 0.99575-40.342 40.342h2.75l39.348-39.348-5e-4 5e-4 1.7548 0.99516 1e-3 -1e-3 -38.353 38.353h2.75l37.358-37.358-0.00104 0.00104 0.84296 0.47804 1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785-2e-3 2e-3 2.0307 0.72144-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027 2e-3 -0.0015-33.622 33.622h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102-2e-3 0.0015 2.3092 0.44078-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.03593h2.529l3e-3 -0.0028-22.734 22.734 4.2653-1.5143 21.215-21.216 2.7516-0.0015 3e-3 -0.0028-20.137 20.135 3.4074-0.65584 19.479-19.479-3e-3 0.0028h2.7527l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808-4e-3 0.0038h0.521l2.7593-0.52987 2e-3 -0.0015-18.339 18.339 2.7496-7.5e-4 18.992-18.992-2e-3 0.0015 3.4041-0.65368 5e-4 -5e-4 -19.645 19.646h2.751l20.298-20.299-5e-4 5e-4 0.82963-0.15931 3.2246-1.1456 2e-3 -2e-3 -21.604 21.604 2.7488 0.0012-2.3e-4 2.27e-4 23.121-23.12 3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61-2.5e-4 5.7e-4 1.7546 0.99505-5e-4 4.5e-4 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591 2.5e-4 -3.1e-4 1.691 0.95898h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55"

        console.log('last is running');
        document.getElementById('drawlayer3').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1+""+p2+""+p3+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer3']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer3').style.opacity="1";
        document.getElementById('drawlayer3').style.strokeDasharray = len1;
        document.getElementById('drawlayer3').style.strokeDashoffset = len1;
        document.getElementById('drawlayer3').style.strokeWidth = 1.4;
        document.getElementById('drawlayer3').style.zIndex=z;
        document.getElementById('drawlayer3').style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";

        document.getElementById('drawlayer4').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p4+""+p5+""+p6+"");
        var path2 = document.querySelector(".svg path[id = 'drawlayer4']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer4').style.strokeDasharray = len2;
        document.getElementById('drawlayer4').style.strokeDashoffset = len2;
        document.getElementById('drawlayer4').style.strokeWidth = 1.4;
        document.getElementById('drawlayer4').style.zIndex=z+1;
        document.getElementById('drawlayer4').style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";
    }
    else if(repeat==3){
        var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
        var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
        var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
        var d32="v-45.55 l1.5 1.5";//raster90
        var d31="l1.5 -1.5"//raster0
        document.getElementById('drawlayer3').style.opacity="1";
        document.getElementById('drawlayer32').style.opacity="1";
        document.getElementById('drawlayer31').style.opacity="1";
        document.getElementById('drawlayer4').style.opacity="1";
        document.getElementById('drawlayer41').style.opacity="1";
        document.getElementById('drawlayer42').style.opacity="1";
        document.getElementById('drawlayer3').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path1 = document.querySelector(".svg path[id = 'drawlayer3']");
        var len1 = path1.getTotalLength();
        document.getElementById('drawlayer3').style.strokeDasharray = len1;
        document.getElementById('drawlayer3').style.strokeDashoffset = len1;
        document.getElementById('drawlayer3').style.strokeWidth = 1.4;
        document.getElementById('drawlayer3').style.zIndex=z;
        document.getElementById('drawlayer3').style.animation = "animatelast "+(0.4790*t)+"s linear "+(z*t)+"s forwards";
        document.getElementById('drawlayer31').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path2 = document.querySelector(".svg path[id = 'drawlayer31']");
        var len2 = path2.getTotalLength();
        document.getElementById('drawlayer31').style.strokeDasharray = len2;
        document.getElementById('drawlayer31').style.strokeDashoffset = len2;
        document.getElementById('drawlayer31').style.strokeWidth = 1.4;
        document.getElementById('drawlayer31').style.zIndex=1;
        document.getElementById('drawlayer31').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+(z*t))+"s forwards";

        document.getElementById("drawlayer32").setAttribute('d',"m22.441 66.26"+p73+"") ;
        console.log(document.getElementById('drawlayer32'));
        var path3 = document.querySelector(".svg path[id = 'drawlayer32']");
        var len3 = path3.getTotalLength();
        document.getElementById('drawlayer32').style.strokeDasharray = len3;
        document.getElementById('drawlayer32').style.strokeDashoffset = len3;
        document.getElementById('drawlayer32').style.strokeWidth = 1.4;
        document.getElementById('drawlayer32').style.zIndex=1;
        document.getElementById('drawlayer32').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+(z*t))+"s forwards";
        document.getElementById('drawlayer32').addEventListener("animationend",()=>{
            document.getElementById('drawlayer3').style.opacity="0.1";
            document.getElementById('drawlayer31').style.opacity="0.1";
            document.getElementById('drawlayer32').style.opacity="0.1"; })

        document.getElementById('drawlayer42').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
        var path4 = document.querySelector(".svg path[id = 'drawlayer42']");
        var len4 = path4.getTotalLength();
        document.getElementById('drawlayer42').style.strokeDasharray = len4;
        document.getElementById('drawlayer42').style.strokeDashoffset = len4;
        document.getElementById('drawlayer42').style.strokeWidth = 1.4;
        document.getElementById('drawlayer42').style.zIndex=z;
        document.getElementById('drawlayer42').style.animation = "animatelast "+(0.4790*t)+"s linear "+((z+1)*t)+"s forwards";
        document.getElementById('drawlayer41').setAttribute('d',"m22.441 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
        var path5 = document.querySelector(".svg path[id = 'drawlayer41']");
        var len5 = path5.getTotalLength();
        document.getElementById('drawlayer41').style.strokeDasharray = len5;
        document.getElementById('drawlayer41').style.strokeDashoffset = len5;
        document.getElementById('drawlayer41').style.strokeWidth = 1.4;
        document.getElementById('drawlayer41').style.zIndex=1;
        document.getElementById('drawlayer41').style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t+((z+1)*t))+"s forwards";

        document.getElementById("drawlayer4").setAttribute('d',"m22.441 66.26"+p73+"") ;
        var path6 = document.querySelector(".svg path[id = 'drawlayer4']");
        var len6 = path6.getTotalLength();
        document.getElementById('drawlayer4').style.strokeDasharray = len6;
        document.getElementById('drawlayer4').style.strokeDashoffset = len6;
        document.getElementById('drawlayer4').style.strokeWidth = 1.4;
        document.getElementById('drawlayer4').style.zIndex=1;
        document.getElementById('drawlayer4').style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t+((z+1)*t))+"s forwards";
    }
}

function print()
{
    myStopFunction();
    var lh = 0.5
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln is",ln);
    layer(0);
    imgmove(0);
    first(0);
    middle1(2,middle2);
    last((ln-2));
}
