function loadMenu() {
    var menuList = [
        // "<li><a href='#'>About</a></li>",
        "<li><a href='index.html'>CSCI4140</a></li>",
        // "<li><a href='resources.html'>Resources</a></li>",
    ];
    $(".main-menu").empty();
    menuList.forEach(function(entry) {
        $(".main-menu").append(entry);
    });
}
