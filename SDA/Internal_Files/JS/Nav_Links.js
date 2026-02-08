document.addEventListener("DOMContentLoaded", function () {

    let Nav_Links = {
        Home: "https://ferrofy.github.io/Website_Made/SDA/",
        About: "https://ferrofy.github.io/Website_Made/SDA/About/",
        Services: "https://ferrofy.github.io/Website_Made/SDA/Services/",
        Gallery: "https://ferrofy.github.io/Website_Made/SDA/Gallery/",
        Notes: "https://ferrofy.github.io/Website_Made/SDA/Notes/",
        Contact: "https://ferrofy.github.io/Website_Made/SDA/Contact/"
    };

    Object.keys(Nav_Links).forEach(function (Key) {
        let Element = document.getElementById(Key + "_Link");
        if (Element) {
            Element.href = Nav_Links[Key];
        }
    });

});
