(function () {
    const galleryImages = Array.from(document.querySelectorAll(".gallery img"))
    const modal = document.querySelector("#image-modal")
    const modalContent = document.querySelector("#image-modal .image-modal-content")

    const createImage = (src, alt) => {
        const img = document.createElement("img")
        img.src = src
        img.alt = alt
        return img
    }

    const setModalImage = img => {
        modalContent.innerHTML = ""
        modalContent.appendChild(img)
    }

    const showModal = () => modal.showModal()

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            setModalImage(createImage(img.src, img.alt))
            showModal()
        })
    })
})()