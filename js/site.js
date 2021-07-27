let building = [];

function checkHeight() {
    let b1 = parseInt(document.getElementById("building1").value);
    let b2 = parseInt(document.getElementById("building2").value);
    let b3 = parseInt(document.getElementById("building3").value);
    let b4 = parseInt(document.getElementById("building4").value);
    let b5 = parseInt(document.getElementById("building5").value);
    let b6 = parseInt(document.getElementById("building6").value);

    building = [b1, b2, b3, b4, b5, b6]

    displayResults();
}

function displayResults() {
    let results = document.getElementById("results");
    let templateRows = "";
    let maxHeight = building[0];
    let total = 1;
    let sunlitBuildings = [];

    results.innerHTML = "";

    templateRows = templateRows + ` Building 1 always sees the sunset with a height of ${building[0]}.`;

    for (let i = 1; i < building.length; i++) {
        if (building[i] > maxHeight) {
            maxHeight = building[i];
            total += 1;
            templateRows = templateRows + `<hr> Building ${i+1} can see the sunset with a height of ${building[i]}.</hr>`
            sunlitBuildings.push(building[i]);
        } else {
            templateRows = templateRows + `<hr> Building ${i+1} can't see the sunset.</hr>`
        }
    }
    templateRows = templateRows + `<hr> The total amount of buildings that can see the sunset is ${total}.</hr>`
    //templateRows = templateRows + `<hr>${building[0]},${sunlitBuildings}</hr>`
    document.getElementById("results").innerHTML = templateRows;
}

