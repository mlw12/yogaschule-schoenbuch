/* Seitenaufrufe in popup-Fenstern */
function goToSite(uri,windowName)
{
	var msgWindow = 				window.open(uri,"external","toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes");
	msgWindow.focus();
}; 
		

function change_footer(txt) {
 if (!txt) txt = "";
	$('footerContent').update(txt)
}

function bookmark_old() {
  var url = location.protocol + '//' + location.host;
  var title = location.host;

	if(document.all) {
		window.external.AddFavorite(url, title);
	}
	else if(window.sidebar) {
		window.sidebar.addPanel(title, url, '');
	}
  return false;
}

function bookmark() {
	var url   = location.protocol + '//' + location.host;
  var title = location.host;
  
	if (window.sidebar) // firefox
		window.sidebar.addPanel(title, url, "");
	else if(window.opera && window.print)	{ // opera
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	}
	else if(document.all)// ie
		window.external.AddFavorite(url, title);
	else {
		alert("Leider unterstützt Ihr Browser keine automatischen Bookmarks. Bitte fügen Sie die Seite manuell hinzu.");
	}
}