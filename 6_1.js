let username = "__John_Doe123__";

function validateUsername(username) {

    let letters = 0;
    let digits = 0;
    let underscores = 0;

    for (let char of username) {

        if (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z")
        ) {
            letters++;
        }

        else if (char >= "0" && char <= "9") {
            digits++;
        }

        else if (char === "_") {
            underscores++;
        }
    }

    let isValid = true;
    let error = "";

    if (username.length < 5) {
        isValid = false;
        error = "Username is too short";
    }

    else if (username[0] >= "0" && username[0] <= "9") {
        isValid = false;
        error = "Username cannot start with digit";
    }

    else if (username.includes("__")) {
        isValid = false;
        error = 'Username cannot contain "__"';
    }

    else if (username.endsWith("_")) {
        isValid = false;
        error = 'Username cannot end with "_"';
    }

    else if (digits > 3) {
        isValid = false;
        error = "Username cannot contain more than 3 digits";
    }

    for (let char of username) {

        let isLetter =
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z");

        let isDigit =
            (char >= "0" && char <= "9");

        let isUnderscore =
            char === "_";

        if (!isLetter && !isDigit && !isUnderscore) {
            isValid = false;
            error = "Username contains invalid symbols";
            break;
        }
    }

    console.log("Valid:", isValid, error);
    console.log("Letters:", letters);
    console.log("Digits:", digits);
    console.log("Underscores:", underscores);
}

validateUsername(username);