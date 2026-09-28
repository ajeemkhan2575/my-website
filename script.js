// ==============================
// PASSWORD
// ==============================

const correctPassword = "A@jee!M";


// ==============================
// LOGIN FUNCTION
// ==============================

function login() {

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("error");


    if (!input) {

        return;

    }


    if (input.value === correctPassword) {

        // Login information save
        sessionStorage.setItem(
            "loggedIn",
            "true"
        );


        // Dashboard par bhejna
        window.location.href =
            "dashboard.html";

    }

    else {

        error.textContent =
            "Wrong password. Please try again.";

    }

}


// ==============================
// LOGOUT FUNCTION
// ==============================

function logout() {

    sessionStorage.removeItem(
        "loggedIn"
    );


    window.location.href =
        "index.html";

}


// ==============================
// ENTER KEY
// ==============================

const passwordInput =
    document.getElementById("password");


if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                login();

            }

        }
    );

}


// ==============================
// PAGE PROTECTION
// ==============================

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


if (
    currentPage !== "index.html" &&
    !sessionStorage.getItem("loggedIn")
) {

    window.location.href =
        "index.html";

}