function goToMain() {
    const wordInput = document.getElementById("wordInput").value;
    if (wordInput.trim() === "") {
        alert("Please enter a word.");
    } else {
        sessionStorage.setItem("userInputWord", wordInput);
        window.location.href = "main.html";
    }
}

function chooseWord(word) {
    sessionStorage.setItem("userInputWord", word);
    window.location.href = "main.html";
}