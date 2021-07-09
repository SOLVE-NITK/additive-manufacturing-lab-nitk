p1="";
p2="";
p3="";
p4="";
p5="";
p6="";
var i=0;
var x1=1.5;
var x2=2.75;
var t = 6;
var z,sw,v,n;
var tensilevalues = [[0.5,30.42,25.22],[0.4,32,15,26.94],[0.3,33.86,28.66],[0.2,35.58,30.38],[0.1,37.3,32.09]]

var svg= document.getElementById('specimen');
var svgNS = "http://www.w3.org/2000/svg";

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
p2 ="h1.45l42.55 42.55h2.15l0.38287-0.21713c-14.106-14.106-28.223-28.223-42.333-42.333h2.75l41.339 41.339c0.58108-0.33217 1.1694-0.66493 1.7536-0.9965l-40.342-40.342h2.75l39.348 39.348c0.58249-0.33189 1.1698-0.66417 1.7543-0.99566l-38.352-38.352h2.75l37.358 37.358c0.2891-0.16682 0.59129-0.33694 0.84192-0.47908l1.0549-0.37478c-14.183-14.183-22.322-22.321-36.505-36.504h2.75l35.785 35.785c0.66702-0.24227 1.354-0.48366 2.0289-0.72344l-35.064-35.062h2.75l34.343 34.341 2.0274-0.72027-33.62-33.62h2.7471l32.901 32.901 0.20154-0.0716 2.0784-0.40061-32.428-32.428h2.75l31.982 31.988 2.3133-0.44422c-14.183-14.183-17.362-17.36-31.545-31.543h2.75l31.102 31.102c0.76141-0.14891 1.5399-0.29571 2.3077-0.44228l-27.972-27.972 5.2623 2.9833 0.73112 0.26052 24.282 24.283 0.1871-0.0359h2.529c-7.564-7.5644-15.156-15.157-22.731-22.731l4.2653 1.5143 21.215 21.216 2.7516 1e-3c-6.6984-6.6981-13.425-13.424-20.134-20.132l3.4074 0.65584 19.479 19.479c0.9005-6e-3 1.8365-3e-3 2.7497-3e-3l-18.827-18.825 3.4063 0.65411c10.058 10.058 8.1057 8.1084 18.164 18.167h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.8 17.8h2.75l-17.8-17.8h2.75l17.808 17.808c0.14735-0.01 0.35153-3e-3 0.517-4e-3l2.7593 0.52987c-6.1047-6.1067-12.226-12.227-18.337-18.338l2.7496 7.5e-4 18.992 18.992c1.1246 0.21473 2.2701 0.4353 3.4021 0.65268-6.546-6.5463-13.097-13.097-19.644-19.646h2.751l20.298 20.299c0.27367 0.0517 0.55336 0.10586 0.82913 0.15881l3.2246 1.1456-21.602-21.602 2.7488-1e-3c7.7059 7.7056 15.414 15.413 23.121 23.12l3.9087 1.3886 0.53145 0.30138-24.961-24.96 2.311-0.43896 29.002 29.001 3.1167 1.7675h1.4l-31.213-31.213 2.3055-0.44329 31.657 31.656h2.75l-32.098-32.098 2.3066-0.44498 32.541 32.543h2.75l-33.085-33.083 2.0308-0.72057 33.804 33.804h2.75l-34.523-34.523 2.0288-0.72119 35.245 35.245h2.75l-35.965-35.965 2.0283-0.72168 36.687 36.687h2.75l-37.61-37.61c0.5832-0.33215 1.1697-0.66405 1.7544-0.99562 12.866 12.866 25.737 25.737 38.606 38.606h2.75l-39.6-39.6 1.7554-0.99463 40.595 40.595h2.75l-41.591-41.591c0.56343-0.31863 1.1277-0.63907 1.6912-0.95867h0.1l42.55 42.55h2.75l-42.55-42.55h2.75l40.55 40.55";
p5 ="h1.45l42.55-42.55h2.15l0.38287 0.21713c-14.106 14.106-28.223 28.223-42.333 42.333h2.75l41.339-41.339c0.58108 0.33217 1.1694 0.66493 1.7536 0.9965l-40.342 40.342h2.75l39.348-39.348c0.58249 0.33189 1.1698 0.66417 1.7543 0.99566l-38.352 38.352h2.75l37.358-37.358c0.2891 0.16682 0.59129 0.33694 0.84192 0.47908l1.0549 0.37478c-14.183 14.183-22.322 22.321-36.505 36.504h2.75l35.785-35.785c0.66702 0.24227 1.354 0.48366 2.0289 0.72344l-35.064 35.062h2.75l34.343-34.341 2.0274 0.72027-33.62 33.62h2.7471l32.901-32.901 0.20154 0.0716 2.0784 0.40061-32.428 32.428h2.75l31.982-31.988 2.3133 0.44422c-14.183 14.183-17.362 17.36-31.545 31.543h2.75l31.102-31.102c0.76141 0.14891 1.5399 0.29571 2.3077 0.44228l-27.972 27.972 5.2623-2.9833 0.73112-0.26052 24.282-24.283 0.1871 0.0359h2.529c-7.564 7.5644-15.156 15.157-22.731 22.731l4.2653-1.5143 21.215-21.216 2.7516-1e-3c-6.6984 6.6981-13.425 13.424-20.134 20.132l3.4074-0.65584 19.479-19.479c0.9005 6e-3 1.8365 3e-3 2.7497 3e-3l-18.827 18.825 3.4063-0.65411c10.058-10.058 8.1057-8.1084 18.164-18.167h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.8-17.8h2.75l-17.8 17.8h2.75l17.808-17.808c0.14735 0.01 0.35153 3e-3 0.517 4e-3l2.7593-0.52987c-6.1047 6.1067-12.226 12.227-18.337 18.338l2.7496-7.5e-4 18.992-18.992c1.1246-0.21473 2.2701-0.4353 3.4021-0.65268-6.546 6.5463-13.097 13.097-19.644 19.646h2.751l20.298-20.299c0.27367-0.0517 0.55336-0.10586 0.82913-0.15881l3.2246-1.1456-21.602 21.602 2.7488 1e-3c7.7059-7.7056 15.414-15.413 23.121-23.12l3.9087-1.3886 0.53145-0.30138-24.961 24.96 2.311 0.43896 29.002-29.001 3.1167-1.7675h1.4l-31.213 31.213 2.3055 0.44329 31.657-31.656h2.75l-32.098 32.098 2.3066 0.44498 32.541-32.543h2.75l-33.085 33.083 2.0308 0.72057 33.804-33.804h2.75l-34.523 34.523 2.0288 0.72119 35.245-35.245h2.75l-35.965 35.965 2.0283 0.72168 36.687-36.687h2.75l-37.61 37.61c0.5832 0.33215 1.1697 0.66405 1.7544 0.99562 12.866-12.866 25.737-25.737 38.606-38.606h2.75l-39.6 39.6 1.7554 0.99463 40.595-40.595h2.75l-41.591 41.591c0.56343 0.31863 1.1277 0.63907 1.6912 0.95867h0.1l42.55-42.55h2.75l-42.55 42.55h2.75l40.55-40.55";
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

function layer(v) {
    console.log('layer is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('layer lh =',lh);
    var ln = Math.round(4/lh);
    var id1 = 'layer'+(v+1)+'';
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
    //console.log('id for front view is',id1);
    console.log('path for front view is',path);
    document.getElementById(id1).setAttribute('d',"M19,"+(272.5-(v*sw))+" l412.5 0.001") ;
    console.log(document.getElementById(id1));
    var len = 412.5;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v+1;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(0.0508*t)+"s linear "+v*t+"s forwards";
    if (v<(ln-1)) {
        v++;
        layer(v);
    }
}
function layerrepeat(v1,v2) {
    console.log('layerrepeat is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('layerepeat lh =',lh);
    var ln = Math.round(4/lh);
    var id4 = 'layerrepeat'+(v1+1)+''+v2+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id4);
    path.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    document.getElementById(id4).setAttribute('d',"M19,"+(272.5-(v1*sw))+" l400 0.001") ;
    //console.log(document.getElementById(id1).getAttribute('d'));
    document.getElementById(id4).style.strokeWidth = sw;
    document.getElementById(id4).style.strokeLinecap = 'round';
    document.getElementById(id4).style.zIndex = v1+1;
    document.getElementById(id4).style.stroke = "url(#myGradient)";
    document.getElementById(id4).setAttribute("class","drawrepeat");
    if (v1<(ln-1)) {
        v1++;
       // console.log('new v is',v)
        layerrepeat(v1,v2);
    }
}
function imgmove(n)
{
    var lh =document.getElementById("lh").innerHTML;
    console.log('imgmove lh =',lh);
    var ln = Math.round(4/lh);
    var sw=lh*5;
    document.getElementById('img0').style.visibility="hidden";
    console.log('cond is false');
    console.log('imgmove is running');
    var id3 = 'img'+(n+1)+'';
    //console.log('id3 is',id3);
    var img = document.createElement('img');
    img.src="Images/extruder.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','50px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','170px');
    img.setAttribute('height','75px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img);
    //console.log('visiblity',document.getElementById(id3).style.visibility);
    //console.log(document.getElementById(id3).getAttribute('id'));
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.bottom = ''+(130+((n+1)*sw*1.5))+'px';
    //console.log('bottom is',document.getElementById(id3).style.bottom);
    if ((n<2)  || (n>(ln-3))) {
      document.getElementById(id3).style.animation = "animateimgtb "+t+"s linear "+(t*n)+"s  forwards";
      img.addEventListener("animationstart",()=>{  img.style.visibility='visible';        })
      img.addEventListener("animationend",()=>{  document.getElementById(id3).style.visibility = "hidden";			})
  } else {
      document.getElementById(id3).style.animation = "animateimg "+t+"s linear "+(t*n)+"s  forwards";
      img.addEventListener("animationstart",()=>{  img.style.visibility='visible';        })
      img.addEventListener("animationend",()=>{  img.style.visibility = "hidden";         })
  }
    if (n<(ln-1))
    {
        n++;
        imgmove(n);

    }
}

function first(z) {
    console.log('first is running');
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
    console.log('middle1 is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3_+""+p1+""+p2+""+p3+"v-2.75");
    //console.log('path3',path);
    var len3 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len3;
    document.getElementById(id2).style.strokeDashoffset = len3;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    //console.log(len3);

    if (z<(ln-3)) {
        z++;
      //  console.log("new z for middle2 is",z);
        callback(z);

    }

}
function middle2(z) {
    console.log('middle2 is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+5)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"m19.441 111.81 "+d1+" "+d2+"v-45.55l1.5 1.5"+p4+""+p5+""+p6+"v2.75");
    //console.log('path4',path);
    var len4 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len4;
    document.getElementById(id2).style.strokeDashoffset = len4;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=z;
    document.getElementById(id2).style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";
    if (z<(ln-3)) {
        z++;
        middle1(z,middle2);

    }

}


function last(z) {
    console.log('last is running');
    document.getElementById('drawlayer5').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+""+p1+""+p2+""+p3+"");
    var path5 = document.querySelector(".svg path[id = 'drawlayer5']");
    var len5= path5.getTotalLength();
    document.getElementById('drawlayer5').style.strokeDasharray = len5;
    document.getElementById('drawlayer5').style.strokeDashoffset = len5;
    document.getElementById('drawlayer5').style.strokeWidth = 1.4;
    document.getElementById('drawlayer5').style.zIndex=z;
    document.getElementById('drawlayer5').style.animation = "animate1 "+t+"s linear "+(z*t)+"s forwards";

    document.getElementById('drawlayer6').setAttribute('d',"m19.441 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p4+""+p5+""+p6+"");
    var path6 = document.querySelector(".svg path[id = 'drawlayer6']");
    var len6 = path6.getTotalLength();
    document.getElementById('drawlayer6').style.strokeDasharray = len6;
    document.getElementById('drawlayer6').style.strokeDashoffset = len6;
    document.getElementById('drawlayer6').style.strokeWidth = 1.4;
    document.getElementById('drawlayer6').style.zIndex=z+1;
    document.getElementById('drawlayer6').style.animation = "animatelast "+t+"s linear "+((z+1)*t)+"s forwards";

}


function print()
{
    myStopFunction();
    var lh = document.getElementById("lh").innerHTML;
    console.log('print lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln is",ln);
    layer(0);
    imgmove(0);
    first(0);
    middle1(2,middle2);
    last((ln-2));

}
