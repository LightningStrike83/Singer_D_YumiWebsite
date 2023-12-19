(() => {
    const bothButton = document.querySelector("#both-button")
    const writingButton = document.querySelector("#writing-button")
    const drawingButton = document.querySelector("#drawing-button")
    const writingCon = document.querySelector("#writing-comm")
    const drawingCon = document.querySelector("#drawing-comm")
    const commFooter = document.querySelector("#commissions-footer")

    function showBoth() {
        commFooter.style.position = "relative"
        writingCon.style.display = "grid"
        drawingCon.style.display = "grid"
    }

    function showWriting() {
        commFooter.style.position = "fixed"
        writingCon.style.display = "grid"
        drawingCon.style.display = "none"
    }

    function showDrawing() {
        commFooter.style.position = "relative"
        writingCon.style.display = "none"
        drawingCon.style.display = "grid"
    }

    bothButton.addEventListener("click", showBoth)
    writingButton.addEventListener("click", showWriting)
    drawingButton.addEventListener("click", showDrawing)
})();