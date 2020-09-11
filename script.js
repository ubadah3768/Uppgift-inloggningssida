var storageName = localStorage.getItem("Name"); 
var storagePassword = localStorage.getItem("Password");

if (storageName && storagePassword) {
    login(storageName, storagePassword)
}

function btnLoginClick() {  // Logga in knappen

    let userName = document.getElementById("userid").value;
    let passWord = document.getElementById("pswrd").value;

    login(userName, passWord)
}

function login(userName, passWord) {
    if (userName == "test" && passWord == "1234") {
        document.getElementById("loginDiv").style.display = "none"; // för att komma åt loginDiv när man skriver rätt

        var welcomeMessage = document.createElement("p")
        welcomeMessage.innerHTML = "Välkommen!" // Meddelandet som visas när man loggar in

        var logoutButton = document.createElement("button") // logga ut knappen
        logoutButton.innerHTML = "Logga ut"
        logoutButton.onclick = logout;


        document.getElementById("content").innerHTML = "";
        document.getElementById("content").appendChild(welcomeMessage);
        document.getElementById("content").appendChild(logoutButton);

        localStorage.setItem("Name", userName);
        localStorage.setItem("Password", passWord);
    }
    else {
        document.getElementById("loginDiv").style.display = "none"; // för att gömma LoginDiv 

        var errorMessage = document.createElement("p")
        errorMessage.innerHTML = "Fel namn eller lösenord!" // Meddelandet som visas när användaren skriver fel

        var retryButton = document.createElement("button") // Knapp för att försöka igen ifall man skrivit fel
        retryButton.innerHTML = "Försök igen"
        retryButton.onclick = retry;

        document.getElementById("content").appendChild(errorMessage);
        document.getElementById("content").appendChild(retryButton);
    }
}


function logout() {
    console.log("Logout")
    localStorage.removeItem("Name"); // för att töma localStorage
    location.reload(); // För att börja om
    document.getElementById("loginDiv").style.display = "block"; // för att visa inloggningssidan sen
}

function retry() { //Försök igen funktion
    document.getElementById("content").innerHTML = "";
    document.getElementById("loginDiv").style.display = "block";
}























