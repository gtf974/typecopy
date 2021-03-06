let isReady = false;
let isCopying = false;
let helpOn = false;
let hasWritten = false;
let main = document.getElementById("main");
let copiedBox = document.getElementById("copied");
let helpBox = document.getElementById("help-box");
let helpButton = document.getElementById("help");
let defaultInput = "Type and Ctrl+C";

let getUrlParams = () => {
    let url = new URL(window.location.href);
    let param = url.searchParams.get("t");
    if(param) defaultInput = param
    .replace(/%20/g, " ")
    .replace(/:plus:/g, "+")
    .replace(/@supchev/g, ">")
    .replace(/@subchev/g, "<")
    .replace(/@end/g, "");
};

let load = () => {
    main.focus();
    let index = 0;
    let isBroken = false;
    let interval = setInterval(() => {
        if(!isBroken){
            if(main.offsetWidth < 95/100*window.innerWidth) main.textContent += defaultInput[index];
            else {
                shake();
                isBroken = true;
                isReady = true;
            }
            index++;
        }
    }, 70);
    setTimeout(() => {
        clearInterval(interval);
    }, 70*defaultInput.length+10);
    setTimeout(() => {
        isReady = true;
    }, 70*defaultInput.length+10);
};

let shake = () => {
    main.classList.add("shake");
    main.style.color = "rgb(216, 66, 66)";
    setTimeout(() => {
        main.classList.remove("shake");
        main.style.color = "white";
    }, 500);
};

let copied = () => {
    main.style.color = "rgb(110, 214, 90)";
    if(!isCopying){
        isCopying = true;
        copiedBox.style.opacity = 1;
        setTimeout(() => {
            copiedBox.style.opacity = 0;
            isCopying = false;
        }, 2000);
    }
    setTimeout(() => {
        main.style.color = "white";
    }, 500);
};

getUrlParams();
load();

window.addEventListener("keydown", e => {
    if(!e.ctrlKey){
        switch (e.key){
            case "Shift":
                break;
            case "Control":
                break;
            case "CapsLock":
                break;
            case "Alt":
                break;
            case "Dead":
                break;
            case "ArrowRight":
                break;
            case "ArrowLeft":
                break;
            case "ArrowUp":
                break;
            case "ArrowDown":
                break;
            case "Backspace":
                if(!hasWritten){
                    if(main.textContent.length > 0 && isReady) main.textContent = "";
                    hasWritten = true;
                } else {
                    if(main.textContent.length > 0 && isReady) main.textContent = main.textContent.slice(0, -1);
                }
                break;
            default:
                if(isReady){
                    if(!hasWritten){
                        main.textContent = e.key;
                        hasWritten = true;
                    } else {
                        if(main.offsetWidth < 95/100*window.innerWidth) main.textContent += e.key;
                        else shake();
                    }
                }
                break;
        }
    }
});

document.addEventListener('copy', e => {
    e.clipboardData.setData('text/plain', "https://typecopy.netlify.app/?t="+main.textContent
    .replace(/ /g, "%20")
    .replace(/\+/g, ":plus:")
    .replace(/>/g, "@supchev")
    .replace(/</g, "@subchev")+"@end");
    copied();
    e.preventDefault();
});

main.addEventListener("click", e => {
    navigator.clipboard.writeText("https://typecopy.netlify.app/?t="+main.textContent
    .replace(/ /g, "%20")
    .replace(/\+/g, ":plus:")
    .replace(/>/g, "@supchev")
    .replace(/</g, "@subchev")+"@end");
    copied();
    e.preventDefault();
});

helpButton.addEventListener("click", e => {
    if(helpOn){
        helpBox.style.visibility = "hidden";
        helpOn = false;
    } else {
        helpBox.style.visibility = "visible";
        helpOn = true;
    }
});