let dataSet = [
    {
        exp: "Effect of FDM process parameters on ultimate tensile strength",
        sim: "expts/exp-fdm-tensile-print/index.html"
    },
    {
        exp: "Effect of FDM process parameters on impact strength",
        sim: "expts/exp-impact-experiment/index.html"
    },
    {
        exp: "Effect of FDM process parameters on printing time",
        sim: "expts/exp-print-time-experiment/index.html"
    },
    {
        exp: "Effect of SLM process parameters on ultimate tensile strength",
        sim: "expts/exp-slm-tensile/index.html"
    },
    {
        exp: " Effect of laser cutting process parameters on cut surface roughness",
        sim: "expts/expt-laser-cut/index.html"
    },
    {
        exp: "Effect of FDM process parameters on surface roughness",
        sim: "expts/exp-surface-roughness/index.html"
    }
]
let textContent = "";
dataSet.map((data)=>{
    textContent+=`
        <div class="shadow card m-2" style="width: 24rem;">
            <div class="card-body">
                <p class="card-title">${data.exp}<p>
                <a class="btn btn-primary"-target="" href="${data.sim}">
                Launch Experiment
              </a>                
            </div>
    </div>
    `
});
document.getElementById("cards").innerHTML=textContent;

function setSim(source){
    document.getElementById("simulator").src = source;
    let sim1 = document.getElementById("simMain");
    sim1.scrollIntoView();
}

function moveTop(){
    window.scrollTo(0,0);

}