function printData() {
    var divToPrint = document.getElementById("table");
    var head = document.getElementById("head");
    var logo = document.getElementById("logo");
    var heading = document.getElementById("heading");

    let newWin = window.open("");
    newWin.document.write(head.outerHTML);
    newWin.document.write(logo.outerHTML);
    newWin.document.write(heading.outerHTML);
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write("<script> window.print(); window.close();</script>");
}

function saveAsPdf() {
    var divToPrint = document.getElementById("table");
    var head = document.getElementById("head");
    var logo = document.getElementById("logo");
    var heading = document.getElementById("heading");

    let newWin = window.open("");
    newWin.document.write(head.outerHTML);
    newWin.document.write(logo.outerHTML);
    newWin.document.write(heading.outerHTML);
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write("<script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js\"></script>\n");
    newWin.document.write("<script>const doc = new jsPDF('p','pt',[document.body.scrollHeight, document.body.scrollWidth]);doc.addHTML(document.body, function () {doc.save(\"test.pdf\");window.close();});</script>");
}
