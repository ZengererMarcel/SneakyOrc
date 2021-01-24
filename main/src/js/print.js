function printData()
{
    var divToPrint=document.getElementById("table");
    var head = document.getElementById("head");
    var logo = document.getElementById("logo");
    var heading = document.getElementById("heading");

    newWin= window.open("");
    newWin.document.write(head.outerHTML);
    newWin.document.write(logo.outerHTML);
    newWin.document.write(heading.outerHTML);
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write("<script> window.print(); window.close();</script>");
}
