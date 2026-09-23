document.addEventListener("DOMContentLoaded", () => {

    // Cursorraren posizioa jarraitu gradiente sutilerako
    window.addEventListener("pointermove", (e) => {
        const x = e.clientX + "px";
        const y = e.clientY + "px";
        
        document.documentElement.style.setProperty("--mouse-x", x);
        document.documentElement.style.setProperty("--mouse-y", y);
    });

    // 1. Txartel bakoitzean (article) klik egitean modala ireki
    const cards = document.querySelectorAll(".term-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const modalId = card.getAttribute("data-target");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    // 2. Modala ixteko 'X' botoiari klik egitean itxi
    const closeButtons = document.querySelectorAll(".close-modal-btn");
    closeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const modal = button.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });

    // 3. Leiho modaletik kanpo klik egitean itxi
    const modals = document.querySelectorAll(".info-modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            const dialogBounds = modal.getBoundingClientRect();
            if (
                e.clientX < dialogBounds.left ||
                e.clientX > dialogBounds.right ||
                e.clientY < dialogBounds.top ||
                e.clientY > dialogBounds.bottom
            ) {
                modal.close();
            }
        });
    });

});