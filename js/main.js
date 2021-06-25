function showAllLetters(checked) {
    /**
     * (bool) checked: Choose whether to show (true) or hide (false) all tags.
     */
    let checkboxes = document.querySelectorAll("#tagselector input")
    for (cb of checkboxes) {
        cb.checked = checked
    }
    filterCards()
}

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
            const normalized_tag = tag.replaceAll(' ', '').toLowerCase().replaceAll(';', '')
            if (showTag[normalized_tag] == false) {
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

function showLess(e) {
    let parent = e.currentTarget.parentNode
    let rm = parent.previousElementSibling // "Read more »"
    parent.classList.add("hidden")
    rm.classList.remove("hidden")
}

document.addEventListener("DOMContentLoaded", function(){
    let showmores = document.querySelectorAll(".showmore")
    for (const sm of showmores) { sm.addEventListener('click', showMore, false) }

    let showlesses = document.querySelectorAll(".showless")
    for (const sl of showlesses) { sl.addEventListener('click', showLess, false) }
})
