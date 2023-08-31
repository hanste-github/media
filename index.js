function hschangeContent(hscontentId) {
    var hscontent = document.getElementById('hs-media-content');
    var hsnewContent = document.getElementById(hscontentId).innerHTML;
    hscontent.innerHTML = hsnewContent;
}