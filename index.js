let isReady = false;
let main = document.getElementById("main");
let defaultInput = "Type and Ctrl+C";

let getUrlParams = () => {
    let url = new URL(window.location.href);
    let param = url.searchParams().get("t");
    if(param) defaultInput = param.replace(/%20/g, " ");
};

let load = () => {
    let index = 0;
    let interval = setInterval(() => {
        main.innerHTML += defaultInput[index];
        index++;
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
                if(main.innerHTML.length > 0 && isReady){
                    main.innerHTML = main.innerHTML.slice(0, -1);
                }
                break;
            default:
                if(isReady){
                    if(main.offsetWidth < 80/100*window.innerWidth) main.innerHTML += e.key;
                    else shake();
                }
                break;
        }
    }
});

document.addEventListener('copy', e => {
    e.clipboardData.setData('text/plain', "https://typecopy.netlify.app/?t="+main.textContent.replace(/ /g, "%20"));
    copied();
    e.preventDefault();
});