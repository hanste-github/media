function hschangeContent(hscontentId) {
    var hscontent = document.getElementById('hs-media-content');
    var hsnewContent = document.getElementById(hscontentId).innerHTML;
    hscontent.innerHTML = hsnewContent;
}

document.getElementById("hs-media-search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Überprüfen, ob die Eingabetaste gedrückt wurde
      event.preventDefault(); // Verhindern, dass das Formular gesendet wird
      hsmediasearchcontent(); // Funktion zum Durchführen der Suche aufrufen
    }
});

function hsmediasearchcontent() {
    var hscontent = document.getElementById('hs-media-content');
    var hsmediasearchcontentb = document.getElementById('hs-media-search-content-b').innerHTML;
    hscontent.innerHTML = hsmediasearchcontentb;
}