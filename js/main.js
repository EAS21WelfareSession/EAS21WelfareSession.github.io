function filterCards() {
    let showTag = {}
    let checkboxes = document.querySelectorAll("#tagselector input")
    for (cb of checkboxes) {
        showTag[cb.id] = cb.checked
    }

    let cards = document.querySelectorAll(".card-wrapper")
    for (const card of cards) {
        card.style.display = ""
        let currentTags = card.querySelector(".tags").textContent.split("; ")
        for (const tag of currentTags) {
            const spaceless_tag = tag.replaceAll(' ', '')
            if (showTag[spaceless_tag] == false) {
                card.style.display = "none"
            }
        }
    }
}

function showMore(e) {
    let rm = e.currentTarget
    rm.classList.add("hidden")
    rm.nextElementSibling.classList.remove("hidden")
}

document.addEventListener("DOMContentLoaded", function(){
    let readmores = document.querySelectorAll(".readmore")
    for (const rm of readmores) { rm.addEventListener('click', showMore, false) }
})
