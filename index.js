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

    var input = document.getElementById('hs-media-search-input');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('hs-media-search-ul');
    var li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

function hsactivateScript() {}