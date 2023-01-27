/* Copyright by componeo GmbH, Clemens Rath */


/* Seitenaufrufe in popup-Fenstern */
function goToSite(uri,windowName)
        {
		var msgWindow = 				window.open(uri,"external","toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes");
		msgWindow.focus();
        }; 
		
/* benötigt die dhtml.js Bibliothek */
function change_footer(text) {
 if (!text) {
  text = "";
 }
 if(DHTML) {
   if(!NS) setCont("id","footer",null,text);
 }
 else return;
}

/* Seitenfuß-Funktionen, die JS benötigen */
//var footer_standard = "";
//var text1 = "Drucken";
//var drucken = "<a href='javascript:print();' onmouseover='change_footer(text1); return true;' onmouseout='change_footer();'><img src='design/standard/media/btn_druck.gif' width=32 height=19 alt='drucken' border=0></a>"; 
//var text2 = "Seite merken";
//var merken = "<a href='javascript:window.external.AddFavorite(document.location.href,document.title)' onmouseover='change_footer(text2); return true;' onmouseout='change_footer();'><img src='design/standard/media/btn_lesezeichen.gif' width=32 height=19 alt='merken' border=0></a>";
//var text3 = "Seite empfehlen";
//var empfehlen = "<a href='mailto:?subject=Interessanter Link&body=Hallo, ich habe einen interessanten Link gefunden: " + document.URL + "' onmouseover='change_footer(text3); return true;' onmouseout='change_footer();'><img src='design/standard/media/btn_empfehlen.gif' width=32 height=19 alt='empfehlen' border=0></a>";


/* Mouseover */
function change(name, bild) 
{ 	
self.document[name].src=bild;
};

/* Seitenaufrufe in popup-Fenstern */
function neuesFenster(url,fenstername)
        {
		var msgWindow = 				window.open(url,fenstername,"toolbar=yes,menubar=no,scrollbars=yes,resizable=yes,width=620,height=600");
		msgWindow.focus();
        }; 


