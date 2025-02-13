// Example JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded!");

    // Add interactivity to the first tender notice
    const firstTenderRow = document.querySelector("table tbody tr");
    if (firstTenderRow) {
        firstTenderRow.addEventListener("click", function () {
            alert("You clicked on the first tender notice.");
        });
    }
});