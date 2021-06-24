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
            const normalized_tag = tag.replaceAll(/\s|,|\/|\.|-/g,'') // remove punctuation and whitespace
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

document.addEventListener("DOMContentLoaded", function(){
    let readmores = document.querySelectorAll(".readmore")
    for (const rm of readmores) { rm.addEventListener('click', showMore, false) }
})

window.onload = function writeBlurb() {
	let cards = document.querySelectorAll(".card-wrapper")

	str2 = "Welcome to our digital wall of anonymous letters. These are letters that have been submitted by participants of the 2021 European Astronomical Society Annual Meeting as part of the special session on welfare and mental health in astronomy (SS8). They detail the lived experiences of those in astronomical research. The submissions have been screened by the session SOC to ensure they are not discriminatory and are anonymous."
	str3 = str2.concat(" Below, there are a number of tags that you can select/deselect if you wish to filter specific topics. You can submit a letter here: <a href='https://docs.google.com/forms/d/1KPgc_1jcxHWZW3iyoJA2PXNufHVJtnwjzMtCQwu2FI0/edit</a>.")

	document.getElementById("blurb").innerHTML = str3
}
