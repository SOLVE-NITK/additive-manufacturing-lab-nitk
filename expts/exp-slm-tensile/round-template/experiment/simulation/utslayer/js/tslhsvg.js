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
var z,sw,v,n,frac;
var tensilevalues = [[0.4,519.68],[0.3,522.59],[0.2,525.51],[0.1,528.42]];

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



function roller(n){
    var lh = document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    var sw = lh*5;
    document.getElementById("layerroller"+(10-n)+"").style.visibility="hidden";
    console.log("baseroller is",document.getElementById('baseroller'+(10-(n+1))+''))
    document.getElementById('baseroller'+(10-(n))+'').style.visibility="visible";
    if (n==0) {
        document.getElementById('baseroller').style.visibility="hidden";
        var t_roller = 4;
        var t_roller_delay = 2.5;
    }else {
        document.getElementById('baseroller'+(10-(n-1) )+'').style.visibility="hidden";
        var t_roller = 2;
        var t_roller_delay = 0.5;
    }
    if (n>0) {
        document.getElementById("layer"+(n)+""+(repeat)+"").style.visibility="hidden";
        document.getElementById("materiallayer"+(n)+"").style.visibility="hidden";
        document.getElementById('materialhidden'+(n)+''+(repeat)+"").style.visibility="visible";
        document.getElementById('layerhidden'+(n)+''+(repeat)+"").style.visibility="visible";
        document.getElementById('base'+(n)+'').style.visibility="visible";
        document.getElementById('base'+(n-1)+'').style.visibility="hidden";
        console.log("layerhidden = ",document.getElementById('layerhidden'+(n)+''+(repeat)+''));
        console.log("materialhidden = ",document.getElementById('materialhidden'+(n)+''+(repeat)+''));
        console.log("zindex for materialhidden is ",document.getElementById('materialhidden'+(n)+''+(repeat)+'').style.zIndex) ;
    }
    

    var id7 = "materiallayer"+(n+1)+"";
    var path7=document.createElementNS(svgNS,"path");
    svg.appendChild(path7);
    path7.setAttributeNS(null,'id',id7);
    path7.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    console.log('path for material view is',document.getElementById(id7));
    document.getElementById(id7).setAttribute('d',"M453.5,"+(240.75)+" l-419 0.001") ;
    document.getElementById(id7).style.strokeWidth = sw;
    document.getElementById(id7).style.strokeDasharray = 419;
    document.getElementById(id7).style.strokeDashoffset = 419;
    document.getElementById(id7).style.zIndex = n+1;
    document.getElementById(id7).style.animation = "animateit "+(0.9825*t_roller)+"s linear "+(t_roller_delay+(0.0175*t_roller))+"s forwards";

    document.getElementById('material').style.visibility='visible';
    var id9 = 'material'+(n+1)+'';
    var img1 = document.createElement('img');
    img1.src="Images/material.png";
    img1.setAttribute('id',id9);
    img1.setAttribute('width','123.25px');
    img1.setAttribute('right','30px');
    img1.setAttribute('height','14px');
    img1.style.visibility='hidden';
    document.getElementById('image').appendChild(img1);
    document.getElementById(id9).style.zIndex = n;
    document.getElementById(id9).style.position = "absolute";
    document.getElementById(id9).style.top = ""+340.25+"px";
    document.getElementById(id9).style.animation =  "material "+(t_roller)+"s linear "+(t_roller_delay)+"s forwards";
    document.getElementById(id9).addEventListener("animationstart",()=>{
        document.getElementById('material').style.visibility='hidden';
        img1.style.visibility='visible'; 
    }) 
    console.log("material is",document.getElementById(id9));
    
    var id10 = 'roller'+(n+1)+'';
    var img2 = document.createElement('img');
    img2.src="Images/roller.png";
    img2.setAttribute('id',id10);
    img2.setAttribute('width','25px');
    img2.setAttribute('left','761px');
    img2.setAttribute('height','25px');
    img2.style.visibility='hidden';
    document.getElementById('image').appendChild(img2);
    document.getElementById(id10).style.zIndex = n;
    document.getElementById(id10).style.position = "absolute";
    document.getElementById(id10).style.top = ""+329+"px";
    document.getElementById(id10).style.animation = "roller "+(1.09102167*t_roller)+"s linear "+(t_roller_delay)+"s forwards";
    console.log("roller is",document.getElementById(id10));
    if (n==0) {

        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:100px; top:250px;"
            document.getElementById("notes").innerHTML="First, the material platform rises to bring powder near the roller.";
        },0);
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },((t_roller_delay)*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:100px; top:250px;"
            document.getElementById("notes").innerHTML="Then the roller spreads the powder over the base and compacts it.";
        },(t_roller_delay*1.15*1000));
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },((t_roller_delay+(t_roller))*1000));
    
        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:100px; top:250px;"
            document.getElementById("notes").innerHTML="Then the laser scans the sliced path, melting the powder, which then solidifies.";
        },(t_roller_delay+t_roller*1.15)*1000);
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },(t_roller_delay+t_roller+t*0.9)*1000);
        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:100px; top:250px;"
            document.getElementById("notes").innerHTML="Then the build platform moves down a distance equal to layer height.";
        },(t_roller_delay+t_roller+t*1.1)*1000);
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },(2*t_roller_delay+t_roller+t)*1000);
        
        setTimeout(function()
        {
            document.getElementById("notes").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:60px; top:250px;"
            document.getElementById("notes").innerHTML="The laser melts the new layer which bonds with the previous layer and then solidifies.";
        },(3*t_roller_delay+t_roller+t)*1000);
        setTimeout(function()
        {
            document.getElementById("notes").style.visibility="hidden";
        },(5*t_roller_delay+t_roller+t)*1000);
    
    }
 
    document.getElementById(id10).addEventListener("animationstart",()=>{
        document.getElementById('roller').style.visibility ="hidden";
        img2.style.visibility='visible';    
    })
    document.getElementById(id10).addEventListener("animationend",()=>{
        img2.style.visibility='hidden';
        document.getElementById('roller').style.visibility ="visible";
        if (n<(ln)) {
            layer(n);
            imgmove(n);
            if (n<=1) {
                if (n==0) {
                    first1(n);
                }else{
                    first2(n);
                }

            } else if (n>1 && n<(ln-2)) {
                if ((n+1)%2==0) {
                    middle2(n);
                } else {
                    middle1(n);
                }
            }else if (n>=(ln-2)) {
                if (n==(ln-2)) {
                    last1(n);
                }else{
                    last2(n);
                }
            }
        }
    })
}
    
function layerhidden(n1){
    var lh = document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    var sw = lh*5;
    var id2 = 'layerhidden'+(n1+1)+''+(repeat)+'';
    var id4 = 'base'+(n1+1)+'';
    var id8 = 'materialhidden'+(n1+1)+''+(repeat)+'';

    var path3=document.createElementNS(svgNS,"path");
    svg.appendChild(path3);
    path3.setAttributeNS(null,'id',id8);
    path3.setAttributeNS(null,'fill',"none");
    document.getElementById(id8).setAttribute('d',"M34.5,"+(240.75+((n1+1)*sw))+" l419 0.001");
    document.getElementById(id8).style.strokeWidth = sw;
    document.getElementById(id8).setAttribute('class','drawroller');
    document.getElementById(id8).style.visibility="hidden";
    document.getElementById(id8).style.zIndex = -1;
    console.log("materialhidden = ", document.getElementById(id8));

    var path4=document.createElementNS(svgNS,"path");
    svg.appendChild(path4);
    path4.setAttributeNS(null,'id',id2);
    path4.setAttributeNS(null,'fill','none');
    document.getElementById(id2).setAttribute('d',"M38,"+(240.75+((n1+1)*sw))+" l412.5 0.001") ;
    document.getElementById(id2).style.strokeWidth = sw;
    document.getElementById(id2).style.strokeLinecap = 'round';
    document.getElementById(id2).setAttribute('class','draw');
    document.getElementById(id2).style.zIndex = n1;
    document.getElementById(id2).style.visibility="hidden";
    console.log("layerhidden = ", document.getElementById(id2));
    if (repeat>1) {
        if (n1==(ln-2)) {
            var lh = document.getElementById("lh").innerHTML;
            console.log('layerepeat lh =',lh);
            var ln = Math.round(4/lh);
            var idlayer =  'layer'+(n1+2)+''+(repeat)+'';
            var sw=lh*5;
            //console.log('sw is',sw);
            var path=document.createElementNS(svgNS,"path");
            svg.appendChild(path);
            path.setAttributeNS(null,'id',idlayer);
            path.setAttributeNS(null,'fill','none');
            document.getElementById(idlayer).setAttribute('d',"M38,"+(240.75)+" l412.5 0.001");
            document.getElementById(idlayer).style.strokeWidth = sw;
            document.getElementById(idlayer).style.strokeLinecap = 'round';
            document.getElementById(idlayer).style.zIndex = ln+1;
            document.getElementById(idlayer).style.stroke = "url(#myGradient)";
            document.getElementById(idlayer).setAttribute("class","draw");  
            console.log("the loop inside the layerhidden function has worked and the layer is", document.getElementById(idlayer))
        }
    }

    var path5=document.createElementNS(svgNS,"path");
    specimen.appendChild(path5);
    path5.setAttributeNS(null,'id',id4);
    document.getElementById(id4).setAttribute('d',"m34 "+((240.75+((n1+1)*sw))+(sw/2)+(0.5/2))+"h420 v10 h-205 v"+(77.75-(((n1+1)*sw)))+"h-10 v-"+(77.75-(((n1+1)*sw)))+" h10 h-215 v-10 l0.5, 0.5 h419 v9 h-419 v-9");
    document.getElementById(id4).style.strokeWidth = 0.5;
    document.getElementById(id4).setAttribute('class','drawbase');
    document.getElementById(id4).style.visibility="hidden";
    document.getElementById(id4).style.zIndex = n1+1;
    console.log("bases = ", document.getElementById(id4));
    if (n1<(ln-2))
    {
        n1++;
        layerhidden(n1);
    }
}

function layerroller(n1){
    var lh = document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    var sw = lh*5;
    var id5 = 'layerroller'+(n1+1)+'';
    var id6 = 'baseroller'+(n1+1)+'';
    var path1=document.createElementNS(svgNS,"path");
    svg.appendChild(path1);
    path1.setAttributeNS(null,'id',id5);
    path1.setAttributeNS(null,'fill','none');
    document.getElementById(id5).setAttribute('d',"M462.5,"+(245+((n1)*10))+" l81.5 0.001");
    document.getElementById(id5).style.strokeWidth = 10;
    document.getElementById(id5).style.zIndex = n1+1;
    document.getElementById(id5).setAttribute('class','drawroller');
    document.getElementById(id5).style.visibility="visible";
    // console.log("layerroller = ", document.getElementById(id5));
    
    var path2=document.createElementNS(svgNS,"path");
    svg.appendChild(path2);
    path2.setAttributeNS(null,'id',id6);
    document.getElementById(id6).setAttribute('d',"m462.5 "+((240+((n1)*10)))+"h81.5 v5 h-38.25 v"+(105-(((n1)*10)))+"h-5 v-"+(105-(((n1)*10)))+" h5 h-43.25 v-5 l0.5, 0.5 h80.5 v4 h-80.5 v-4");
    document.getElementById(id6).style.strokeWidth = 0.5;
    document.getElementById(id6).setAttribute('class','drawbase');
    document.getElementById(id6).style.visibility="hidden";
    document.getElementById(id6).style.zIndex = n1+1;
    // console.log("bases = ", document.getElementById(id6));
    if (n1<(9))
    {
        n1++;
        layerroller(n1);
    }
}

function layer(v) {
    console.log('layer is running');
    var lh = document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    var sw = lh*5;
    if ((v<2)  || (v>(ln-3))) {
        if ((v+1)%2==0) {
            frac = (4.41/100);
        } else {
            frac = (4.79/100);
        }
    } else {
    if ((v+1)%2==0) {
        frac = (4.73/100);
    } else {
        frac = (6.18/100);
    }
    }

    var id1 = 'layer'+(v+1)+''+(repeat)+'';
    var path6=document.createElementNS(svgNS,"path");
    svg.appendChild(path6);
    path6.setAttributeNS(null,'id',id1);
    path6.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    console.log('path for front view is',document.getElementById(id1));
    document.getElementById(id1).setAttribute('d',"M38,"+(240.75)+" l412.5 0.001") ;
    var len = 412.5;
    document.getElementById(id1).style.strokeWidth = sw;
    document.getElementById(id1).style.strokeLinecap = 'round';
    document.getElementById(id1).style.strokeDasharray = len;
    document.getElementById(id1).style.strokeDashoffset = len;
    document.getElementById(id1).style.zIndex = v+10;
    document.getElementById(id1).style.stroke = "url(#myGradient)";
    document.getElementById(id1).style.animation = "animate "+(frac*t)+"s linear forwards";
    console.log("layer is ",document.getElementById(id1));
}

function layerrepeat() {
    console.log('layerrepeat is running');
    var lh = document.getElementById("lh").innerHTML;
    console.log('layerepeat lh =',lh);
    var ln = Math.round(4/lh);
    var id4 = 'layerrepeat'+(repeat)+'';
    var sw=lh*5;
    //console.log('sw is',sw);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    path.setAttributeNS(null,'id',id4);
    path.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    //console.log('path for front view is',path);
    document.getElementById(id4).setAttribute('d',"M38,"+(240.75)+" l412.5 0.001");
    //console.log(document.getElementById(id1).getAttribute('d'));
    document.getElementById(id4).style.strokeWidth = sw;
    document.getElementById(id4).style.strokeLinecap = 'round';
    document.getElementById(id4).style.zIndex = ln+1;
    document.getElementById(id4).style.stroke = "url(#myGradient)";
    document.getElementById(id4).setAttribute("class","draw");
}

function imgmove(n)
{
    var lh =document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    var sw = lh*5;
    document.getElementById('img0').style.visibility="hidden";
    console.log('imgmove is running and n =',n);
    var id3 = 'img'+(n+1)+'';
    //console.log('id3 is',id3);
    var img = document.createElement('img');
    img.src="Images/laser.png";
    img.setAttribute('id',id3);
    img.setAttribute('width','40px');
    img.setAttribute('position','absolute');
    img.setAttribute('left','33px');
    img.setAttribute('height','104.25px');
    img.style.visibility='hidden';
    document.getElementById('step-2').appendChild(img);
    document.getElementById(id3).style.zIndex = n+ln;
    document.getElementById(id3).style.position = "absolute";
    document.getElementById(id3).style.top = ""+250+"px";
    //console.log('bottom is',document.getElementById(id3).style.bottom);
    if ((n<2)  || (n>(ln-3))) {
        if ((n+1)%2==0) {
            document.getElementById(id3).style.animation = "animateimgtb90 "+t+"s linear forwards";
            img.addEventListener("animationstart",()=>{ img.style.visibility ='visible'; })
            img.addEventListener("animationend",()=>{
                img.style.visibility = "hidden";
                if (n<(ln-1)) {
                    console.log("n is less than ln-1 in imgmove and n is",n)
                    document.getElementById('img0').style.visibility="visible";
                    n++;
                    setTimeout(function(){
                        console.log("n is n++ now and n for calling roller is",n)
                        roller(n);
                        materialtopview(n);
                    },500);
                } })
        } else {
            console.log('n NOW IS',n);
            document.getElementById(id3).style.animation = "animateimgtb0 "+(t)+"s linear forwards";
            img.addEventListener("animationstart",()=>{
                img.style.visibility='visible';
                console.log("n when imgmove started is",n)        })
            img.addEventListener("animationend",()=>{
                img.style.visibility = "hidden";
                if (n<(ln-1)) {
                    console.log("n is less than ln-1 in imgmove and n is",n)
                    document.getElementById('img0').style.visibility="visible";
                    n++;
                    setTimeout(function(){
                        console.log("n is n++ now and n for calling roller is",n)
                        roller(n);
                        materialtopview(n);
                    },500);
                }
            })
        }
  } else {
    if ((n+1)%2==0) {
        document.getElementById(id3).style.animation = "animateimginfill90 "+t+"s linear forwards";
        img.addEventListener("animationstart",()=>{  img.style.visibility ='visible'; })
        img.addEventListener("animationend",()=>  {
          img.style.visibility = "hidden";
          document.getElementById('img0').style.visibility="visible";
          if (n<(ln-1)) {
              n++;
              setTimeout(function(){
                 roller(n);
                 materialtopview(n);
              },500);
          } })
    } else {
        document.getElementById(id3).style.animation = "animateimginfill0 "+(t)+"s linear forwards";
        img.addEventListener("animationstart",()=>{  img.style.visibility ='visible'; })
        img.addEventListener("animationend",()=>  {
            img.style.visibility = "hidden";
            document.getElementById('img0').style.visibility="visible";
            if (n<(ln-1)) {
                n++;
                setTimeout(function(){
                   roller(n);
                   materialtopview(n);
                },500);
            } })
    }
  }
}

function materialtopview(n) {
    if (n==0) {
        var t_roller = 4;
        var t_roller_delay = 2.5;
    }else {
        var t_roller = 2;
        var t_roller_delay = 0.5;
    }
    console.log('materialtopview is running');
    var id11 = "materiallayertopview"+(n+1)+"";
    var path11=document.createElementNS(svgNS,"path");
    svg.appendChild(path11);
    path11.setAttributeNS(null,'id',id11);
    path11.setAttributeNS(null,'fill','none');
    //console.log('id for front view is',id1);
    document.getElementById(id11).setAttribute('d',"M453.5, 86.81 l-419 0.001") ;
    document.getElementById(id11).style.strokeWidth = 56.5;
    document.getElementById(id11).style.strokeDasharray = 419;
    document.getElementById(id11).style.strokeDashoffset = 419;
    document.getElementById(id11).style.zIndex = n*2;
    document.getElementById(id11).style.animation = "animateit "+(0.9825*t_roller)+"s linear "+(t_roller_delay+(0.0175*t_roller))+"s forwards";
    console.log('path for material topview is',document.getElementById(id11));
    console.log('zindex for material topview is',document.getElementById(id11).style.zIndex);
}

function first1(z) {
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var path11=document.createElementNS(svgNS,"path");
    svg.appendChild(path11);
    var path12=document.createElementNS(svgNS,"path");
    svg.appendChild(path12);
    var idfirst1 = 'drawlayer'+(1)+''+(repeat)+'';
    path.setAttributeNS(null,'id',idfirst1);
    path.setAttributeNS(null,'fill','transparent');
    var idfirst11 = 'drawlayer'+(11)+''+(repeat)+'';
    path11.setAttributeNS(null,'id',idfirst11);
    path11.setAttributeNS(null,'fill','transparent');
    var idfirst12 = 'drawlayer'+(12)+''+(repeat)+'';
    path12.setAttributeNS(null,'id',idfirst12);
    path12.setAttributeNS(null,'fill','transparent');

    document.getElementById(idfirst1).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
    var len1 = document.getElementById(idfirst1).getTotalLength();
    document.getElementById(idfirst1).style.strokeDasharray = len1;
    document.getElementById(idfirst1).style.strokeDashoffset = len1;
    document.getElementById(idfirst1).style.strokeWidth = 1.4;
    document.getElementById(idfirst1).style.zIndex=z+1;
    document.getElementById(idfirst1).style.animation = "animatelast "+(0.4790*t)+"s linear forwards";

    document.getElementById(idfirst11).setAttribute('d',"m41, "+(111.81-3-(lh_*9))+""+p8+" "+p72+"");
    console.log(document.getElementById(idfirst11).getAttribute('d'))
    var len11 = document.getElementById(idfirst11).getTotalLength();
    document.getElementById(idfirst11).style.strokeDasharray = len11;
    document.getElementById(idfirst11).style.strokeDashoffset = len11;
    document.getElementById(idfirst11).style.strokeWidth = 1.4;
    document.getElementById(idfirst11).style.zIndex=z+1;
    document.getElementById(idfirst11).style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t)+"s forwards";

    document.getElementById(idfirst12).setAttribute('d',"m41 66.26"+p73+"") ;
    var len12 = document.getElementById(idfirst12).getTotalLength();
    document.getElementById(idfirst12).style.strokeDasharray = len12;
    document.getElementById(idfirst12).style.strokeDashoffset = len12;
    document.getElementById(idfirst12).style.strokeWidth = 1.4;
    document.getElementById(idfirst12).style.zIndex=z+1;
    document.getElementById(idfirst12).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t)+"s forwards";
    ////console,log('first layer zindex',document.getElementById('drawlayer1').style.zIndex);
    ////console,log('first layer animaion=',document.getElementById('drawlayer1').style.animation);
    ////console,log('first layer visibility=',document.getElementById('drawlayer1').style.visibility);

}

function first2(z) {
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);
    p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill
   //console,log('first2 is running');
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var idfirst2 = 'drawlayer'+(2)+''+(repeat)+'';
    path.setAttributeNS(null,'id',idfirst2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(idfirst2).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p2+"") ;
    var len2 = document.getElementById(idfirst2).getTotalLength();
    document.getElementById(idfirst2).style.strokeDasharray = len2;
    document.getElementById(idfirst2).style.strokeDashoffset = len2;
    document.getElementById(idfirst2).style.strokeWidth = 1.4;
    document.getElementById(idfirst2).style.zIndex=z+2;
    document.getElementById(idfirst2).style.animation = "animatelast "+t+"s linear forwards";
    // console.log('second layer zindex',document.getElementById('drawlayer2').style.zIndex);
    // console.log('second layer animation=',document.getElementById('drawlayer2').style.animation);
}

function middle1(z) {
    console.log('middle1 is running');
    var lh = document.getElementById("lh").innerHTML;
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);
   ////console,log('middle1 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle1 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var path21=document.createElementNS(svgNS,"path");
    svg.appendChild(path21);
    var path22=document.createElementNS(svgNS,"path");
    svg.appendChild(path22);
    var id2 = 'drawlayer'+(z+3)+''+(repeat)+'';
    var id21 ='drawlayer'+(z+3)+'1'+(repeat)+'';
    var id22 ='drawlayer'+(z+3)+'2'+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    path21.setAttributeNS(null,'id',id21);
    path22.setAttributeNS(null,'id',id22);
    path.setAttributeNS(null,'fill','transparent');
    path21.setAttributeNS(null,'fill','transparent');
    path22.setAttributeNS(null,'fill','transparent');

    document.getElementById(id2).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d31+""+p11+""+p51+""+p61+""+p71+"");
    var len3 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len3;
    document.getElementById(id2).style.strokeDashoffset = len3;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=((z*2)+1);
    document.getElementById(id2).style.animation = "animatelast "+(0.4790*t)+"s linear forwards";

    document.getElementById(id21).setAttribute('d',"m41 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
    var len31 = document.getElementById(id21).getTotalLength();
    document.getElementById(id21).style.strokeDasharray = len31;
    document.getElementById(id21).style.strokeDashoffset = len31;
    document.getElementById(id21).style.strokeWidth = 1.5;
    document.getElementById(id21).style.zIndex=((z*2)+1);
    document.getElementById(id21).style.animation ="animatelast "+(0.4624*t)+"s linear "+(0.4790*t)+"s forwards";

    document.getElementById(id22).setAttribute('d',"m41 66.26"+p73+"") ;
    var len32 = document.getElementById(id22).getTotalLength();
    document.getElementById(id22).style.strokeDasharray = len32;
    document.getElementById(id22).style.strokeDashoffset = len32;
    document.getElementById(id22).style.strokeWidth = 1.5;
    document.getElementById(id22).style.zIndex=((z*2)+1);
    document.getElementById(id22).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t)+"s forwards";
   //console,log('middle1 layer zindex with n=',z,"is=",document.getElementById(id2).style.zIndex);
   //console,log("id2 middle1 = ",id2);
}
function middle2(z) {
    console.log('middle2 is running');
    var lh = document.getElementById("lh").innerHTML;
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);
    p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill

   ////console,log('middle2 lh =',lh);
    var ln = Math.round(4/lh);
    //console.log("ln in middle2 is",ln);
    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var id2 = 'drawlayer'+(z+3)+''+(repeat)+'';
    path.setAttributeNS(null,'id',id2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(id2).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d32+""+p2+"") ;
    //console.log('path4',path);
    var len4 = document.getElementById(id2).getTotalLength();
    document.getElementById(id2).style.strokeDasharray = len4;
    document.getElementById(id2).style.strokeDashoffset = len4;
    document.getElementById(id2).style.strokeWidth = 1.5;
    document.getElementById(id2).style.zIndex=((z*2)+1);
    document.getElementById(id2).style.animation = "animatelast "+t+"s linear forwards";
   //console,log('middle2 layer zindex with n=',z,"is=",document.getElementById(id2).style.zIndex);
   //console,log("id2 middle2 = ",id2);
}


function last1(z) {
    console.log('last1 is running');
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var path11=document.createElementNS(svgNS,"path");
    svg.appendChild(path11);
    var path12=document.createElementNS(svgNS,"path");
    svg.appendChild(path12);
    var idlast1 = 'drawlayer'+(3)+''+(repeat)+'';
    path.setAttributeNS(null,'id',idlast1);
    path.setAttributeNS(null,'fill','transparent');
    var idlast11 = 'drawlayer'+(31)+''+(repeat)+'';
    path11.setAttributeNS(null,'id',idlast11);
    path11.setAttributeNS(null,'fill','transparent');
    var idlast12 = 'drawlayer'+(32)+''+(repeat)+'';
    path12.setAttributeNS(null,'id',idlast12);
    path12.setAttributeNS(null,'fill','transparent');

    document.getElementById(idlast1).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d3+""+p11+""+p51+""+p61+""+p71+"");
    var len5= document.getElementById(idlast1).getTotalLength();
    document.getElementById(idlast1).style.strokeDasharray = len5;
    document.getElementById(idlast1).style.strokeDashoffset = len5;
    document.getElementById(idlast1).style.strokeWidth = 1.4;
    document.getElementById(idlast1).style.zIndex=((z*2)+1);
    document.getElementById(idlast1).style.animation =  "animatelast "+(0.4790*t)+"s linear  forwards";

    document.getElementById(idlast11).setAttribute('d',"m41 "+(111.81-3-(lh_*9))+""+p8+" "+p72+"") ;
    var len5= document.getElementById(idlast11).getTotalLength();
    document.getElementById(idlast11).style.strokeDasharray = len5;
    document.getElementById(idlast11).style.strokeDashoffset = len5;
    document.getElementById(idlast11).style.strokeWidth = 1.4;
    document.getElementById(idlast11).style.zIndex=((z*2)+1);
    document.getElementById(idlast11).style.animation = "animatelast "+(0.4624*t)+"s linear "+(0.4790*t)+"s forwards";

    document.getElementById(idlast12).setAttribute('d',"m41 66.26"+p73+"") ;
    var len5= document.getElementById(idlast12).getTotalLength();
    document.getElementById(idlast12).style.strokeDasharray = len5;
    document.getElementById(idlast12).style.strokeDashoffset = len5;
    document.getElementById(idlast12).style.strokeWidth = 1.4;
    document.getElementById(idlast12).style.zIndex=((z*2)+1);
    document.getElementById(idlast12).style.animation = "animatelast "+(0.0586*t)+"s linear "+(0.4790*t+0.4624*t)+"s forwards";
   //console,log('last1 layer visibility=',document.getElementById(idlast1).style.visibility);
   //console,log('last1 layer animation=',document.getElementById(idlast1).style.animation);
   //console,log('last1 layer zindex',document.getElementById(idlast1).style.zIndex);
}


function last2(z) {
    console.log('last2 is running');
    var d1="h49.984 l10.309 -5.8465 l11.26 -4.0003 l12.82 -2.4617 h242.42 l12.82 2.4617 l11.26 4.0003 l10.309 5.8465 h49.984 v-48.619 h-49.984 l-10.309 5.8465 l-11.26 4.0003 l-12.82 2.4617 h-242.42 l-12.82 -2.4617 l-11.26 -4.0003 l-10.309 -5.8465 h-49.984 v48.619" ;
    var d2="l1.5 -1.5 h48.1 l10.05 -5.7 l11.54 -4.1 l13.02 -2.5 h242.7 l13.02 2.5 l11.54 4.1 l10.05 5.7 h48.1 v-45.55 h-48.1 l-10.05 5.7 l-11.54 4.1 l-13.02 2.5 h-242.7 l-13.02 -2.5 l-11.54 -4.1 l-10.05 -5.7 h-48.1 v45.55" ;
    var d3="l1.5 -1.5 h46.15 l10.0 -5.671 l11.4 -4.05 l13.8 -2.65 h242.3 l13.8 2.65 l11.4 4.05 l10.0 5.671 h46.15 v-42.55 h-46.15 l-10.0 5.671 l-11.4 4.05 l-13.8 2.65 h-242.3 l-13.8 -2.65 l-11.4 -4.05 l-10.0 -5.671 h-46.15 v42.55";
    var d32="v-45.55 l1.5 1.5";//raster90
    var d31="l1.5 -1.5"//raster0
    var lh_ = (12.371/7);
    p2 = "v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.15l0.3509-0.199-2.5e-4 -42.152 1.4843 0.84177 0.01492 0.01045v40.449l1.5-0.85156 0.0018-38.748 1.4982 0.85146v37.051l1.5-0.85365v-35.347l1.5 0.84961v33.647l1.5-0.85265v-31.942l0.6501 0.36602 0.84868 0.30151 0.0012 30.605 1.5-0.5334 0.0018-29.538 1.4998 0.53282-0.0015 28.473 1.5-0.53365v-27.404l1.5 0.53223v26.342l1.5-0.5349-2e-3 -25.276 1.5021 0.53543 5e-4 24.207 1.4993-0.53053 0.05002-23.128 1.4519 0.27881-2e-3 22.55 6.7e-5 5e-4 1.5016-0.28835-0.0027-21.975 1.5032 0.28866-0.0023 21.401 1.5-0.29054 0.0026-20.823 1.5006 0.28815-0.0031 20.248 1.5008-0.29049 0.0025-19.67 1.4987 0.2878-3e-3 19.095 1.5013-0.29003v-18.516l1.5039 0.28764-7.5e-4 17.941 0.347-0.06664 1.1519-1e-3 -2e-3 -17.803h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8h1.5v17.8h1.5v-17.8l1.1501-4e-3 0.352-0.06661-2e-3 17.943 1.5 0.28684v-18.518l1.5008-0.28906 1e-3 19.095 1.5002 0.28808-2e-3 -19.671 1.5027-0.28855-1e-3 20.248 1.4991 0.28786-7.5e-4 -20.821 1.5002-0.28906 1e-3 21.398 1.5004 0.28812-1e-3 -21.973 1.4992-0.29004v22.552l1.4502 0.27695 0.0513-23.126 1.4991-0.53256 2e-3 24.21 1.4998 0.53282-1.5e-4 -25.276 1.4984-0.52923v26.338l1.5 0.53266v-27.405l1.5028-0.53569-5e-4 28.474 1.4989 0.53251-1e-3 -29.536 1.4998-0.53418v30.604l0.85021 0.30105 0.64979 0.36849v-31.943l1.5002-0.85059 2e-3 33.646 1.4977 0.84936v-35.347l1.5-0.85059v37.047l1.5006 0.8523-5e-4 -38.749 1.5-0.85156v40.45l1.5 0.85059 1e-3 -42.153 0.34907-0.19796h1.1498v42.549h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55h1.5v-42.55h1.5v42.55l1.5 1.5";//raster90infill

    var path=document.createElementNS(svgNS,"path");
    svg.appendChild(path);
    var idlast2 = 'drawlayer'+(4)+''+(repeat)+'';
    path.setAttributeNS(null,'id',idlast2);
    //console.log('id is',id2);
    path.setAttributeNS(null,'fill','transparent');
    document.getElementById(idlast2).setAttribute('d',"m38 111.81 "+d1+" "+d2+""+d3+"v-42.55"+p2+"") ;
    var len6 = document.getElementById(idlast2).getTotalLength();
    document.getElementById(idlast2).style.strokeDasharray = len6;
    document.getElementById(idlast2).style.strokeDashoffset = len6;
    document.getElementById(idlast2).style.strokeWidth = 1.4;
    document.getElementById(idlast2).style.zIndex=((z*2)+2);
    document.getElementById(idlast2).style.animation = "animatelast "+t+"s linear forwards";
   //console,log('last2 layer visibility=',document.getElementById(idlast2).style.visibility);
   //console,log('last2 layer animation=',document.getElementById(idlast2).style.animation);
   //console,log('last2 layer zindex',document.getElementById(idlast2).style.zIndex);
    document.getElementById(idlast2).addEventListener("animationend",()=>{
        myInt = setInterval(animatearrow, 500);
		document.getElementById('arrow1').style="position:absolute; left: 25px; bottom:180px; height: 40px; z-index: 500;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('img0').style.visibility = "hidden";
        document.getElementById('roller').style.visibility = "hidden";
        document.getElementById('step-2').setAttribute('class','step2');
        document.getElementById('specimen').setAttribute('class','svg2');
        document.getElementById('step-2').onmouseover =function ()
		{
			myStopFunction();
		};
        document.getElementById('nextButton').style.visibility="visible";
    })
}


function print()
{
    myStopFunction();
    var lh = document.getElementById("lh").innerHTML;
    var ln = Math.round(4/lh);
    setTimeout(function(){
        roller(0);
        materialtopview(0);
        document.getElementById('baseroller').style.visibility="hidden"; },500);
}

