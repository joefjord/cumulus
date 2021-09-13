/** Retrieve DOM Elements */
var form = document.getElementById("burnCalc");
var clearBtn = document.getElementById("clear");
var sizeInput = document.getElementById("sizeInput");
var categoryInput = document.getElementById("categoryInput");
var targetInput = document.getElementById("targetInput");
var fuelInput = document.getElementById("fuelInput");
var loadInput = document.getElementById("loadInput");
var availableResult = document.getElementById("availableTons");
var totalResult = document.getElementById("totalTons");
var resultOutput = document.getElementById("resultOutput");

/** When User Clicks the Clear Button */
clearBtn.onclick = function() {
    clear();
}

/**
 * Clear the form inputs and results.
 */
function clear() {
    form.reset();
    availableResult.textContent = "";
    totalResult.textContent = "";
}

/** When User Submits Form */
form.onsubmit = function() {
    /** Page from Resetting */
    event.preventDefault();

    /** Gather Form Values */
    var burnSize       = parseFloat(sizeInput.value);
    var categoryDay    = parseInt(categoryInput.value);
    var targetDistance = parseFloat(targetInput.value);
    var fuelType       = fuelInput.value;
    var load           = loadInput.value;

    var totalTons = calculate_total_tons(fuelType, load, burnSize);
    var availableTons = calculate_available_tons(categoryDay, targetDistance);
    
    totalResult.textContent = totalTons;
    availableResult.textContent = (availableTons == "inf") ? "Any" : availableTons;

    var resultText = "";
    if(is_safe_burn(totalTons, availableTons) == false) {
        var available_acres = calculate_available_acres(tons_per_acre_table[fuelType][load], availableTons);
        if(available_acres == 0) {
            resultText = "You cannot burn.";
        } else {
            resultText = "You cannot burn " + burnSize + " acres, but you can burn up to " + available_acres + " acres.";
        }
    } else {
        resultText = "You're good to burn!";
    }

    resultOutput.textContent = resultText;
}

function calculate_total_tons(fuel, load, acres) {
    var tons_per_acre = tons_per_acre_table[fuel][load];
    return tons_per_acre * acres;
}

function calculate_available_tons(category, distance) {
    var dist_index = distance_index(distance);
    return allowed_tons_table[category - 1][dist_index];
}

function distance_index(distance) {
    var index;

    if(distance >= 0 && distance < 0.2) {
        index = 0;
    } else if(distance >= 0.2 && distance < 5) {
        index = 1;
    } else if(distance >= 5 && distance < 10) {
        index = 2;
    } else if(distance >= 10 && distance < 20) {
        index = 3;
    } else if(distance >= 20 && distance < 30) {
        index = 4;
    } else if(distance >= 30) {
        index = 5;
    } else {
        alert("Invalid Distance");
    }

    return index;
}

function is_safe_burn(total, avail) {
    if(avail == "inf") {
        return true;
    }
    return avail >= total;
}

function calculate_available_acres(tons_per_acre, available_tons) {
    return Math.round(available_tons / tons_per_acre * 10) / 10;
}