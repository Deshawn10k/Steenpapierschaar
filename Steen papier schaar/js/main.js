var speler1Naam = "";
var speler2Naam = "";

function beginSpel() {
    speler1Naam = document.getElementById("speler1Naam").value;
    speler2Naam = document.getElementById("speler2Naam").value;
    document.getElementById("speler1Titel").innerText = speler1Naam;
    document.getElementById("speler2Titel").innerText = speler2Naam;
    document.getElementById("spel").style.display = "block";
}

// 
function speel(keuze) {
    var speler1Keuze = keuze;
    var speler2Knoppen = document.querySelectorAll('#spel button');

    // Schakel de knoppen van speler 2 in
    for (var i = 0; i < speler2Knoppen.length; i++) {
        speler2Knoppen[i].disabled = false;
    }

    // de keuze van speler 1 //
    document.getElementById("speler1Keuze").innerText = speler1Naam + " koos: " + speler1Keuze;

    // Wachten totdat speler 2 een keuze maakt //
    for (var i = 0; i < speler2Knoppen.length; i++) {
        speler2Knoppen[i].onclick = function() {
            var speler2Keuze = this.innerText.toLowerCase();
            document.getElementById("speler2Keuze").innerText = speler2Naam + " koos: " + speler2Keuze;
            steenPapierSchaar(speler1Keuze, speler2Keuze);
        };
    }
}


function steenPapierSchaar(speler1, speler2) {
   
    if (!(isGeldigeKeuze(speler1) && isGeldigeKeuze(speler2))) {
        document.getElementById("resultaat").innerText = "Ongeldige invoer. Kies alleen 'steen', 'papier' of 'schaar'.";
        return;
    }

    if (speler1 === speler2) {
        document.getElementById("resultaat").innerText = "Gelijkspel!";
    } else if (
        (speler1 === "steen" && speler2 === "schaar") ||
        (speler1 === "papier" && speler2 === "steen") ||
        (speler1 === "schaar" && speler2 === "papier")
    ) {
        document.getElementById("resultaat").innerText = speler1Naam + " wint!";
    } else if (
        (speler1 === "steen" && speler2 === "papier") ||
        (speler1 === "papier" && speler2 === "schaar") ||
        (speler1 === "schaar" && speler2 === "steen")
    ) {
        document.getElementById("resultaat").innerText = speler2Naam + " wint!";
    }
}

function isGeldigeKeuze(keuze) {
    return keuze === "steen" || keuze === "papier" || keuze === "schaar";
}
