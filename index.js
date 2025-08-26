// heart count
let heartCount = parseInt(document.getElementById("main-heart").innerText); // Initialize counter to 0
function heart_count(id) {
    document.getElementById(id).addEventListener("click", function(e) {
        // e.preventDefault();
        heartCount += 1;
        document.getElementById("main-heart").innerText = heartCount;
    });
}

heart_count("heart1");
heart_count("heart2");
heart_count("heart3");
heart_count("heart4");
heart_count("heart5");
heart_count("heart6");
heart_count("heart7");
heart_count("heart8");
heart_count("heart9");