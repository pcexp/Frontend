function changeVisibility() {
    let register_page = document.getElementById("id_register_page");
    switch(register_page.className) {
        case "register_page":
            register_page.className = "register_page_disabled";
            break;
        case "register_page_disabled":
            register_page.className = "register_page";
            break;
        default:
      }
}