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
	
	str1 = "Welcome to our digital wall of anonymous letters. These are letters that have been submitted by participants of the 2021 European Astronomical Society Annual Meeting as part of the special session on welfare and mental health in astronomy (SS8). They detail the lived experiences of those in astronomical research. The submissions have been been screen by the session SOC to ensure they are not racist, homophobic, transphobic, sexist, ableist, etc. and that they do not disclose any identifying details. So far we have received "
	str2 = str1.concat(cards.length.toString())
	str3 = str2.concat(" letters. Below, there are a number of tags that you can select/deselect if you wish to see/exclude specific topics. For more information, please see the <a href='https://eas.unige.ch/EAS_meeting/session.jsp?id=SS8'>session website</a>.")
	
	document.getElementById("blurb").innerHTML = str3
}

