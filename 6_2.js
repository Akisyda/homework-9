let text = "JS is AWESOME!!! 12345";

function analyzeText(text) {

    let uppercase = 0;
    let lowercase = 0;
    let digits = 0;
    let spaces = 0;
    let specialChars = 0;

    for (let char of text) {

        if (char >= "A" && char <= "Z") {
            uppercase++;
        }

        else if (char >= "a" && char <= "z") {
            lowercase++;
        }

        else if (char >= "0" && char <= "9") {
            digits++;
        }

        else if (char === " ") {
            spaces++;
        }

        else {
            specialChars++;
        }
    }

    let containsJS = text.includes("JS");

    let containsExclamation = text.includes("!!!");

    let isUppercaseText =
        text === text.toUpperCase();

    let hasLongNumber = false;

    let currentDigits = 0;

    for (let char of text) {

        if (char >= "0" && char <= "9") {

            currentDigits++;

            if (currentDigits > 3) {
                hasLongNumber = true;
            }

        } else {
            currentDigits = 0;
        }
    }

    console.log("Uppercase:", uppercase);
    console.log("Lowercase:", lowercase);
    console.log("Digits:", digits);
    console.log("Spaces:", spaces);
    console.log("Special chars:", specialChars);

    console.log("");

    console.log("Contains JS:", containsJS);
    console.log("Contains !!!:", containsExclamation);
    console.log("Is uppercase text:", isUppercaseText);
    console.log("Has long number:", hasLongNumber);
}

analyzeText(text);