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
    var hsmediaserchcontentb = document.getElementById('hs-media-search-content-b');
    hscontent.innerHTML = hsmediaserchcontentb;
}