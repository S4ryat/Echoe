(function() {

    var filename = 'https://tympanus.net/codrops/adpacks/cda.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1','ad2','ad3','ad4','ad5'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://www.ionos.com/hosting/deploy-now?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Deploy-Now.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Listen to your music";
            break;
        case "ad2":
            var cdaLink = 'https://www.ionos.com/cloud/cloud-servers?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Cloud-Server.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Let the music guide you";
            break;
        case "ad3":
            var cdaLink = 'https://www.ionos.com/hosting/deploy-now?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Deploy-Now.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Find new friends";
            break;
        case "ad4":
            var cdaLink = 'https://cloud.ionos.com/compute?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Computing.jpg';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Expand your bubble";
            break;
        case "ad5":
            var cdaLink = 'https://www.ionos.com/servers/vps?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/VPS.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "";
            break;
        case "ad6":
            var cdaLink = 'https://tympanus.net/codrops/collective/';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/TheCollective_small.jpg';
            var cdaImgAlt = 'The Codrops Collective';
            var cdaText = "Stay at the forefront of frontend creativity with our bi-weekly newsletter.";
            break;
        default:
            var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi';
            var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.className = 'oh';
    cda.style.opacity = '0';
    cda.innerHTML = '<span><a href="' + cdaLink + '" class="cda-img" target="_blank" rel="nofollow noopener"><img src="' + cdaImg + '" alt="' + cdaImgAlt + '" border="0" height="100" width="130"></a><a data-sponsor="' + cdaImgAlt + '" href="' + cdaLink + '" class="cda-text" target="_blank" rel="noopener">' + cdaText + '</a><div class="cda-footer"><a class="cda-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><button class="cda-remove" id="cda-remove">Close</button></div></span>';
    document.getElementsByClassName('frame')[0].appendChild(cda);
/*
    setTimeout(function() {
        cda.style.display = 'block';
    }, 1000); */

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
    });

})();