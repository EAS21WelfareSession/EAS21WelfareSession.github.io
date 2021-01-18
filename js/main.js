function filterCards() {
    let showTag = {}
    let checkboxes = document.querySelectorAll("#tagselector input")
    for (cb of checkboxes) {
        showTag[cb.id] = cb.checked
    }
    
    let cards = document.querySelectorAll(".card-wrapper")
    for (const card of cards) {
        card.style.display = ""
        let currentTags = card.querySelector(".tags").textContent.split(" ")
        for (const tag of currentTags) {
            if (showTag[tag] == false) {
                card.style.display = "none"
            }
        }
    }
}
