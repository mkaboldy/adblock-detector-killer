// this doesn't work:(
jQuery(document).ready(function(){
    setInterval(function(){
        console.log('divany.hu.js');
        jQuery('section').has('a[href="https://divany.hu/adblock"]').remove();
        jQuery('body').css('overflow','auto');
        jQuery('div').has('a[href="https://divany.hu/adatvedelem/"]').remove();    
    }, 1000);
});
