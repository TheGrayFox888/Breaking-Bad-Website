/* document.getElementById("mainVideo").volume = 0.1;
 cena1*/

 // menu chickens //


function menibuy() {

    let minusplus = [
        "plus1", "plus2", "plus3", "plus4", "plus5", "plus6",
        "minus1", "minus2", "minus3", "minus4", "minus5", "minus6"
    ];

    let cene = [3.99, 12.99, 9.99, 13.99, 10.99, 5.99];

    minusplus.forEach(function(id) {

        let broj = id.replace("plus", "").replace("minus", "");

        let brojevimeni = document.getElementById("broj" + broj);
        let cenemeni = document.getElementById("cena" + broj);

        let dugme = document.getElementById(id);

if (!dugme) return;

dugme.addEventListener("click", function() {

            let punbroj = parseInt(brojevimeni.textContent);

            if (id.startsWith("plus")) {
                punbroj++;
            }

            if (id.startsWith("minus")) {
                punbroj--;
            }

            if (punbroj <= 0) {
                punbroj = 0;
            }

            brojevimeni.textContent = punbroj;

            let cena = cene[Number(broj) - 1];

            cenemeni.textContent = "$" + (punbroj * cena).toFixed(2);

            let ukupno = 0;

            for (let i = 1; i <= 6; i++) {
                let kolicina = parseInt(document.getElementById("broj" + i).textContent);
                ukupno += kolicina * cene[i - 1];
            }

            document.getElementById("brojcene").textContent =
                " Your Total: $" + ukupno.toFixed(2);

        });

    });

}

menibuy();

/*  One Menu Chcicken OLDER VERSION

let cena = document.getElementById("broj1") 
let plus = document.getElementById("plus1")  
let minus = document.getElementById("minus1")  

let cenas = document.getElementById("brojcene") 

function kasa (){

    plus.addEventListener("click", function() {

        let glavno = parseFloat(cenas.textContent.replace("$", ""))
        
        let broj = parseInt(cena.textContent); 
        broj++        
        cena.textContent = broj;

        if(broj >= 99){
            cena.textContent = 99;

        }
            glavno = glavno + 3.99;
            cenas.textContent = "$" + glavno.toFixed(2);
    });

    
    minus.addEventListener("click", function(){

        let glavno = parseFloat(cenas.textContent.replace("$", ""));

        let brojt = parseInt(cena.textContent); 

        if(brojt > 0){
           brojt--;
           cena.textContent = brojt;

            glavno = glavno - 3.99;
            cenas.textContent = "$" + glavno.toFixed(2);
        } 

    })
} 

if (document.getElementById("plus")) {
    kasa();
    
}  

*/

// Los Pollos Classic //

function classiccard(){

    let sveclassic = ["plusclassic", "minusclassic"];

    sveclassic.forEach(function(id) {

        let brojc = document.getElementById("brojclassic")

        let cenaclass = document.getElementById("cena-classic");

        document.getElementById(id).addEventListener("click", function(){

            if( id === "plusclassic"){

                let glavnobrojc = parseInt(brojc.textContent);

                glavnobrojc++

                if(glavnobrojc > 100){

                    glavnobrojc = 100

                }
                                     brojc.textContent = glavnobrojc 
                    cenaclass.textContent = "$" + (glavnobrojc * 15.00).toFixed(2);

            }

            if( id === "minusclassic" ){

                let glavnobrojc = parseInt(brojc.textContent);

                glavnobrojc--


                if(glavnobrojc < 0){
                    glavnobrojc = 0


                }

                                     brojc.textContent = glavnobrojc
                     cenaclass.textContent = "Total" + "$" + (glavnobrojc * 15.00).toFixed(2);

            }

                
        })

    }
    )
}
 classiccard();

// Los Junior //

function Junior(){

 let sveclassic = ["plusjunior", "minusjunior"];

    sveclassic.forEach(function(id) {

        let brojj = document.getElementById("brojjunior")

        let cenajunior = document.getElementById("cena-junior");

        document.getElementById(id).addEventListener("click", function(){

            if( id === "plusjunior"){

                let glavnobrojj = parseInt(brojj.textContent);

                glavnobrojj++

                if(glavnobrojj > 100){

                    glavnobrojj = 100

                }
                                     brojj.textContent = glavnobrojj 
                    cenajunior.textContent = "$" + (glavnobrojj * 10.00).toFixed(2);

            }

            if( id === "minusjunior" ){

                let glavnobrojj = parseInt(brojj.textContent);

                glavnobrojj--


                if(glavnobrojj < 0){
                    glavnobrojj = 0


                }

                                     brojj.textContent = glavnobrojj
                     cenajunior.textContent = "$" + (glavnobrojj * 10.00).toFixed(2);

            }

                
        })

    }
    )
}
Junior();

/// Los Business & Family //

function leptir(){

let sve = ["pluscard", "minuscard"];

sve.forEach(function(id) {

let capri = document.getElementById("brojcard")

let caard = document.getElementById("dvapet");

document.getElementById(id).addEventListener("click", function() {

if(id === "pluscard"){

    //let glavno = parseFloat(capri.textContent.replace("$", ""));
    let glavnoplus = parseInt(capri.textContent);
     glavnoplus++        
    capri.textContent = glavnoplus;
caard.textContent = "$" + (glavnoplus * 25.99).toFixed(2);
    

    if (glavnoplus > 100){

        glavnoplus = 100
        capri.textContent = glavnoplus
    }
}

if(id === "minuscard"){

    let glavnoplus = parseInt(capri.textContent);
    glavnoplus--
    capri.textContent = glavnoplus
caard.textContent = "$" + (glavnoplus * 25.99).toFixed(2);
    

if(glavnoplus < 0){

glavnoplus = 0
capri.textContent = glavnoplus

                        }

                    }

            })

        }) 
    } 
leptir();

// ENGLISH = SPANISh made it for one page only cuz the rest will take long and i dont want to buy a Weglot Account :3 //


async function changeLanguage(lang) {

    const response = await fetch(`languages/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key = element.getAttribute("data-i18n");

        if (translations[key] !== undefined) {
            element.textContent = translations[key];
        }

    });

    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
}

changeLanguage(localStorage.getItem("language") || "en");