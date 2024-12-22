/**Button Show Panel Left**/
let btnFaBars = document.querySelector(".categories");
let leftPanel = document.querySelector(".left-panel");
let removeLeftPanel = document.querySelector(".removePanel");

btnFaBars.addEventListener("click", function () {
    leftPanel.classList.toggle('active-left-panel');
})

removeLeftPanel.addEventListener("click", function () {
    leftPanel.classList.remove('active-left-panel');
})

/**Button Show Panel Right**/
let btnShowPanelRight = document.querySelector(".showRight");
let rightPanel = document.querySelector(".right-panel");
let removeRightPanel = document.querySelector(".removePanelRight")

btnShowPanelRight.addEventListener("click", function () {
    rightPanel.classList.toggle('active-right-panel');
})

removeRightPanel.addEventListener("click", function () {
    rightPanel.classList.remove('active-right-panel');
})




