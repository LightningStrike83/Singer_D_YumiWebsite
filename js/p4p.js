(() => {
    const p4pImage = document.querySelectorAll(".p4p-image")
    const closeButton = document.querySelector("#close-button")
    const leftArrow = document.querySelector("#left-arrow")
    const rightArrow = document.querySelector("#right-arrow")
    const lightBox = document.querySelector("#image-lightbox")
    

    let imageArray = [
        {
            source: "p4p-0"
        },

        {
            source: "p4p-1"
        },

        {
            source: "p4p-2"
        },

        {
            source: "p4p-3"
        },

        {
            source: "p4p-4"
        },

        {
            source: "p4p-5"
        },
    ]

    function openLightbox() {
        let count = this.dataset.member;
        const bigP4PPic = document.createElement('img')
        const lightboxCon = document.querySelector('#lightbox-con')

        lightBox.style.display = "grid"

        bigP4PPic.src = `images/p4p/${imageArray[count].source}.jpg`

        lightboxCon.innerHTML = ""

        lightboxCon.appendChild(bigP4PPic)

        leftArrow.addEventListener("click", nextImage)
        rightArrow.addEventListener("click", previousImage)

        function nextImage() {
            count++
            if (count>=imageArray.length)
            {
                count = 0
            }
    
            openLightbox()
        }
    
        function previousImage() {
            count--
    
            if (count < 0) {
                count = imageArray.length-1;
            }
    
            openLightbox()
        }
    }

    function closeLightbox() {
        lightBox.style.display = "none"
    }

    

    p4pImage.forEach(image => image.addEventListener('click', openLightbox))
    closeButton.addEventListener("click", closeLightbox)
    
})();