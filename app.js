let logo = document.getElementById("logo");
let summary = document.getElementById("summary");
let language = "uwu";

document.getElementById("uwu").addEventListener("click", () => {
    language = "uwu";
    logo.src = "./assets/images/uwu.jpg";
    summary.innerHTML =
        "Uwu is an analytic contour tone language with a very small phonetic inventory. Its native speakers are communes of catgirls who have left behind their physical forms to ascend to a higher plane of existence and live exclusively on the internet.";
});

document.getElementById("pig-latin").addEventListener("click", () => {
    language = "pig-latin";
    logo.src = "./assets/images/pig-latin.png";
    summary.innerHTML =
        'Pig Latin, or "Igpay Atinlay" is a language game in which English words are altered, usually by adding a fabricated suffix or by moving the onset or initial consonant or consonant cluster of a word to the end of the word and adding a vocalic syllable to create such a suffix';
});

document.getElementById("morse").addEventListener("click", () => {
    language = "morse";
    logo.src = "./assets/images/morse.png";
    summary.innerHTML =
        "Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes or dits and dahs. Morse code is named after Samuel Morse, an inventor of the telegraph";
});

document.getElementById("english").addEventListener("click", () => {
    language = "english";
    logo.src = "./assets/images/upsidedown.jpg";
    summary.innerHTML =
        "Australian English (AuE, AuEng) is the set of varieties of the English language native to Australia. Australian English is the country's national and de facto common language.";
});

document.getElementById("barcode").addEventListener("click", () => {
    language = "barcode";
    logo.src = "./assets/images/barcode.jpg";
    summary.innerHTML =
        "A barcode or bar code is a method of representing data in a visual, machine-readable form. Initially, barcodes represented data by varying the widths and spacings of parallel lines. ";
});

document.getElementById("cursive").addEventListener("click", () => {
    language = "cursive";
    logo.src = "./assets/images/cursive.jpg";
    summary.innerHTML =
        "Cursive is any style of penmanship in which some characters are written joined together in a flowing manner, generally for the purpose of making writing faster, in contrast to block letters. Cursive handwriting is very functional, and is intended to be used in everyday writing.";
});

[
    document.getElementById("input"),
    document.getElementById("uwu"),
    document.getElementById("cursive"),
    document.getElementById("english"),
    document.getElementById("barcode"),
    document.getElementById("pig-latin"),
    document.getElementById("morse"),
].forEach((element) =>
    ["input", "focus","click"].forEach((event) =>
        element.addEventListener(
            event,
            () =>
                (document.getElementById("output").value = converter(
                    language,
                    document.getElementById("input").value
                ))
        )
    )
);

function converter(language, content) {
    let newSentence = document.getElementById("input").value;
    styler = document.getElementById("output").style;
    styler.fontSize = "35px";

    switch (language) {
        case "pig-latin":
            styler.fontFamily = "New Tegomin";
            return pigLatin(newSentence);
            break;
        case "morse":
            styler.fontFamily = "Fialla One";
            return morse(newSentence);
            break;
        case "uwu":
            styler.fontFamily = "Roboto";
            return uwu(newSentence);
            break;
        case "english":
            styler.fontFamily = "UpsideDown";
            return newSentence;
            break;
        case "barcode":
            styler.fontFamily = "BarcodeText";
            styler.fontSize = "50px";
            styler.fontWeight = "400";
            return newSentence;
            break;
        case "cursive":
            styler.fontFamily = "Ballet";
            styler.fontWeight = "400";
            return newSentence;
        default:
            return newSentence;
    }
}

function styler(language) {}

function pigLatin(sentence) {
    words = sentence.split(" ").filter((value) => {
        if (value === "") {
            return false;
        }
        return true;
    });

    let i = 0;
    words.forEach((word) => {
        words[i] = word.substring(1).concat(word[0].toLowerCase(), "ay");
        ++i;
    });
    sentence = words.join(" ");
    return sentence;
}

function morse(sentence) {
    words = sentence.split(" ").filter((value) => {
        if (value === "") {
            return false;
        }
        return true;
    });

    let i = 0;
    words.forEach((word) => {
        letters = word.toLowerCase().split("");
        morseMap = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: ".",
            f: "..-.",
            g: "--.",
            h: "....",
            i: "..",
            j: ".---",
            k: "-.-",
            l: ".-..",
            m: "--",
            n: "-.",
            o: "---",
            p: ".--.",
            q: "--.-",
            r: ".-.",
            s: "...",
            t: "-",
            u: "..-",
            v: "...-",
            w: ".--",
            x: "-..-",
            y: "-.--",
            z: "--..",
            1: ".----",
            2: "..---",
            3: "...--",
            4: "....-",
            5: ".....",
            6: "-....",
            7: "--...",
            8: "---..",
            9: "----.",
            0: "-----",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
        };
        let j = 0;
        letters.forEach((letter) => {
            letters[j] = "~";
            for (const [key, value] of Object.entries(morseMap)) {
                if (letter === key) {
                    letters[j] = value;
                    break;
                }
            }
            ++j;
        });
        words[i] = letters.join("");
        ++i;
    });
    sentence = words.join("  ");
    return sentence;
}

function uwu(sentence) {
    words = sentence.split(" ").filter((value) => {
        if (value === "") {
            return false;
        }
        return true;
    });

    let i = 0;
    words.forEach((word) => {
        letters = word.split("");
        uwuMap = {
            l: "w",
            r: "w",
            n: "nw",
        };
        let j = 0;
        letters.forEach((letter) => {
            for (const [key, value] of Object.entries(uwuMap)) {
                if (letter === key) {
                    letters[j] = value;
                    break;
                }
            }
            ++j;
        });
        words[i] = letters.join("");

        if (word === "you") {
            words[i] = "uwu";
        }
        ++i;
    });
    sentence = words.join(" ").concat(" UwU");
    return sentence;
}
