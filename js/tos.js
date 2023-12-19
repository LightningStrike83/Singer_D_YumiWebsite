(() => {
    const showAllButton = document.querySelector("#show-all-button")
    const artButton = document.querySelector("#art-guidelines-button")
    const writingButton = document.querySelector("#writing-guidelines-button")
    const termsButton = document.querySelector("#terms-button")
    const commissionButton = document.querySelector("#commission-requirements-button")
    const artBox = document.querySelector("#art-guidelines")
    const writingBox = document.querySelector("#writing-guidelines")
    const termsBox = document.querySelector("#terms")
    const commissionBox = document.querySelector("#information")
    const tosFooter = document.querySelector("#tos-footer")

    function displayAll() {
        tosFooter.style.position = "relative"
        artBox.style.display = "grid"
        writingBox.style.display = "grid"
        termsBox.style.display = "grid"
        commissionBox.style.display = "grid"
    }

    function displayArt() {
        tosFooter.style.position = "relative"
        artBox.style.display = "grid"
        writingBox.style.display = "none"
        termsBox.style.display = "none"
        commissionBox.style.display = "none"
    }

    function displayWriting() {
        tosFooter.style.posiion = "relative"
        artBox.style.display = "none"
        writingBox.style.display = "grid"
        termsBox.style.display = "none"
        commissionBox.style.display = "none"
    }

    function displayTerms() {
        tosFooter.style.position = "relative"
        artBox.style.display = "none"
        writingBox.style.display = "none"
        termsBox.style.display = "grid"
        commissionBox.style.display = "none"
    }

    function displayCommission() {
        tosFooter.style.position = "relative"
        artBox.style.display = "none"
        writingBox.style.display = "none"
        termsBox.style.display = "none"
        commissionBox.style.display = "grid"
    }

    showAllButton.addEventListener("click", displayAll)
    artButton.addEventListener("click", displayArt)
    writingButton.addEventListener("click", displayWriting)
    termsButton.addEventListener("click", displayTerms)
    commissionButton.addEventListener("click", displayCommission)

})();