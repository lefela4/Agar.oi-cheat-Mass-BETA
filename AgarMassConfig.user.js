// ==UserScript==
// @name         AgarMassConfig
// @namespace    AgarMassCinfig
// @version      1
// @grant       none
// @description  AgarMass Cheat Config
// @author       http://www.twitch.tv/lefela44
// @include      http://agar.io/*
// ==/UserScript==

// ==UserScript==
// @name         Agar.io connector.
// @namespace    http://msparp.com/
// @version      0.2
// @description  Allows you to manually enter a server IP.
// @author       capableResistor
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    var region = $("#region");
    if (region.length) {
        $("<div class=\"form-group\"><input id=\"serverInput\" class=\"form-control\" placeholder=\"127.0.0.1:4545\" maxlength=\"20\"></input></div>").insertAfter("#helloDialog > form > div:nth-child(3)");
        $("<div class=\"form-group\"><button disabled type=\"button\" id=\"connectBtn\" class=\"btn btn-warning btn-needs-server\" onclick=\"connect('ws://' + $('#serverInput').val());\" style=\"width: 100%\">Connect</button></div>").insertAfter($("#serverInput").parent());
    }
});
</html>

