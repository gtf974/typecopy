let isReady = false;
let isCopying = false;
let helpOn = false;
let hasWritten = false;
let main = document.getElementById("main");
let copiedBox = document.getElementById("copied");
let helpBox = document.getElementById("help-box");
let helpButton = document.getElementById("help");
let input = document.getElementById("input");
let defaultInput = "Type and Ctrl+C";
let lastClick = 0;

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

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
    input.focus();
})

main.addEventListener('touchstart', function(e) {
  e.preventDefault();
  main.click();
  let date = new Date();
  let time = date.getTime();
  const time_between_taps = 200;
  if (time - lastClick < time_between_taps) {
    navigator.clipboard.writeText("https://typecopy.netlify.app/?t="+main.textContent
    .replace(/ /g, "%20")
    .replace(/\+/g, ":plus:")
    .replace(/>/g, "@supchev")
    .replace(/</g, "@subchev")+"@end");
    copied();
  }
  lastClick = time;
})

helpButton.addEventListener("click", e => {
    if(helpOn){
        helpBox.style.visibility = "hidden";
        helpOn = false;
    } else {
        helpBox.style.visibility = "visible";
        helpOn = true;
    }
});

input.addEventListener("input", e => {
    e.preventDefault(true);
})