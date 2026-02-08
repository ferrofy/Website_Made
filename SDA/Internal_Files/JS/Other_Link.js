document.addEventListener("DOMContentLoaded", function () {

    let Other_Links = {
        SDA_Mobile_Number: "https://api.whatsapp.com/send/?phone=7355666622",
        Maps_Click_Link: "https://maps.app.goo.gl/AQSEG8euAjfAz37F9",
        Maps_Iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.0784426717405!2d75.6874274747298!3d32.2559716104332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f7f65c17611%3A0x6c667fa38003d8a7!2sSurya%20Defence%20Academy!5e0!3m2!1sen!2sin!4v1748081218048!5m2!1sen!2sin"
    };

    document.getElementById("SDA_Mobile_Number").href = Other_Links.SDA_Mobile_Number;
    document.getElementById("Maps_Click_Link").href = Other_Links.Maps_Click_Link;
    document.getElementById("Maps_Iframe").src = Other_Links.Maps_Iframe;

});