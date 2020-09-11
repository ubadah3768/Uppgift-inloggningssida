var storageName = localStorage.getItem("Name");
var storagePassword = localStorage.getItem("Password");

if (storageName && storagePassword) {
    login(storageName, storagePassword)
}

function btnLoginClick() {

    let userName = document.getElementById("userid").value;
    let passWord = document.getElementById("pswrd").value;

    login(userName, passWord)
}

function login(userName, passWord) {
    if (userName == "test" && passWord == "1234")
    {
        document.getElementById("loginDiv").style.display = "none";

        var welcomeMessage = document.createElement("p")
        welcomeMessage.innerHTML = "Välkommen!"

        var logoutButton = document.createElement("button")
        logoutButton.innerHTML = "Logga ut"
        logoutButton.onclick = logout;
        
        
        document.getElementById("content").innerHTML = "";
        document.getElementById("content").appendChild(welcomeMessage);
        document.getElementById("content").appendChild(logoutButton);

        localStorage.setItem("Name", userName);
        localStorage.setItem("Password", passWord);
    }
    else {
        document.getElementById("loginDiv").style.display = "none";

        var errorMessage = document.createElement("p")
        errorMessage.innerHTML = "Fel namn eller lösenord!"

        var retryButton = document.createElement("button")
        retryButton.innerHTML = "Försök igen"
        retryButton.onclick = retry;
        
        document.getElementById("content").appendChild(errorMessage);
        document.getElementById("content").appendChild(retryButton);
    }
}


function logout () {
    console.log("Logout")
    localStorage.removeItem("Name");
    location.reload();
    document.getElementById("loginDiv").style.display = "block";
}

function retry() {
    document.getElementById("content").innerHTML = "";
    document.getElementById("loginDiv").style.display = "block";
}









   
       
    
    







   
       
    
    