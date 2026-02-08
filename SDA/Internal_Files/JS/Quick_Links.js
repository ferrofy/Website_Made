document.addEventListener("DOMContentLoaded", function () {

    let Quick_Links = {
        Home: "https://ferrofy.github.io/Website_Made/SDA/",
        About: "https://ferrofy.github.io/Website_Made/SDA/About",
        Services: "https://ferrofy.github.io/Website_Made/SDA/Services",
        Gallery: "https://ferrofy.github.io/Website_Made/SDA/Gallery",
        Notes: "https://ferrofy.github.io/Website_Made/SDA/Notes",
        Contact: "https://ferrofy.github.io/Website_Made/SDA/Contact"
    };

    document.getElementById("Quick_Home_Link").href = Quick_Links.Home;
    document.getElementById("Quick_About_Link").href = Quick_Links.About;
    document.getElementById("Quick_Services_Link").href = Quick_Links.Services;
    document.getElementById("Quick_Gallery_Link").href = Quick_Links.Gallery;
    document.getElementById("Quick_Notes_Link").href = Quick_Links.Notes;
    document.getElementById("Quick_Contact_Link").href = Quick_Links.Contact;

});
