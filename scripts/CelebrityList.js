import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const celebritySport = () => {
    document.addEventListener(
        "click",
        (clickEvent) => {
            const clickEventTarget = clickEvent.target
            if (clickEventTarget.dataset.type === "celebrity") {
                window.alert(clickEventTarget.dataset.sport)
            }
        }
    )
}

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
