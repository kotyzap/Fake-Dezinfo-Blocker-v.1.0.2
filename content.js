


function getDomain(url, subdomain) {
    subdomain = subdomain || false;

    url = url.replace(/(https?:\/\/)?(www.)?/i, '');

    if (!subdomain) {
        url = url.split('.');

        url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }

    return url;
}



chrome.storage.local.get(['key'], function(result) {
          console.log(result.key[0]);
		  console.log(result.key.length);
		  var arss = result.key;
		  for(var i=0; i < arss.length; i++){
			  if(getDomain(location.host) == result.key[i]){
				  location.replace("https://www.konspiratori.sk/zoznam-stranok.php");
			  }
		  }
		  
		  
});





console.log(getDomain(location.host));
