// heart count
let heartCount = parseInt(document.getElementById("main-heart").innerText);
let heartButtons = document.getElementsByClassName("heart-btn");
    for (const btn of heartButtons){
        btn.addEventListener("click",function(e){
            heartCount+= 1;
            document.getElementById("main-heart").innerText = heartCount
        })
    }

   
// coin count
let coinCount = parseInt(document.getElementById("main-coin").innerText);
let callButtons = document.getElementsByClassName("call-btn");
    for (const btn of callButtons){
    btn.addEventListener("click", function(e) {
        coinCount -= 20;
        if(coinCount < 0){
            alert ("Insufficient coin")
            return
        }
        document.getElementById("main-coin").innerText = coinCount;
        let card = btn.closest(".bg-white");
        let serviceName = card.querySelector("h1").innerText;
        let callNumber = card.querySelector(".text-3xl").innerText;
        alert("Calling " + serviceName + "\nNumber: " + callNumber);
    });
}

// copy button count
let copyCount = parseInt(document.getElementById("main-copy").innerText);
let copyButtons = document.getElementsByClassName("copy-btn");
    for (const btn of copyButtons){
        btn.addEventListener("click",function(e){
            copyCount+= 1;
            document.getElementById("main-copy").innerText = copyCount
        })
    }
