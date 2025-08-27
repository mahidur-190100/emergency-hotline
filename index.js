// heart count
let heartCount = parseInt(document.getElementById("main-heart").innerText);
let heartButtons = document.getElementsByClassName("heart-btn");
for (const btn of heartButtons) {
  btn.addEventListener("click", function () {
    heartCount += 1;
    document.getElementById("main-heart").innerText = heartCount;
  });
}

// coin count + call history
let coinCount = parseInt(document.getElementById("main-coin").innerText);
let callButtons = document.getElementsByClassName("call-btn");
let historyContainer = document.getElementById("history-list");
let clearBtn = document.getElementById("clear-history");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("Insufficient coin");
      return;
    }
    coinCount -= 20;
    document.getElementById("main-coin").innerText = coinCount;
    let card = btn.closest(".bg-white");
    let serviceName = card.querySelector("h1").innerText;
    let callNumber = card.querySelector(".text-3xl").innerText;
    alert("Calling " + serviceName + "\nNumber: " + callNumber);
    let now = new Date();
    let timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    let historyItem = document.createElement("div");
    historyItem.className = "bg-gray-50 rounded-lg shadow-md p-3 mb-3"; // card styles
    historyItem.innerHTML =
      '<div class="flex justify-between items-center">' +
      '<span class="font-bold">' +
      serviceName +
      "</span>" +
      '<span class="text-sm text-gray-500">' +
      timeString +
      "</span>" +
      "</div>" +
      '<div class="text-gray-700 text-sm mt-1">' +
      callNumber +
      "</div>";
    historyContainer.append(historyItem);
  });
}

// clear history button
clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});

// copy button count
let copyCount = parseInt(document.getElementById("main-copy").innerText);
let copyButtons = document.getElementsByClassName("copy-btn");

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    copyCount += 1;
    document.getElementById("main-copy").innerText = copyCount;
    let card = this.closest(".bg-white");
    let number = card.querySelector(".call-number").innerText;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("Number: " + number);
      })
      .catch((err) => {
        console.error();
      });
  });
}
