function showInfo(part) {
    let message = "";
    switch (part) {
        case 'hood':
            message = "Information om luvan: tillverkad av 100% polyester.";
            break;
        case 'collar':
            message = "Information om kragen: varm och skyddande.";
            break;
        case 'pockets':
            message = "Fickor finns för att hålla dina händer varma.";
            break;
    }
    alert(message); 
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}