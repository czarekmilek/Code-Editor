const htmlcode  = document.querySelector(".html-code textarea");
const csscode   = document.querySelector(".css-code textarea");
const jscode    = document.querySelector(".js-code textarea");
const result    = document.querySelector("#result");

function run() {
    //Storing data
    localStorage.setItem("htmlcode", htmlcode.value);
    localStorage.setItem("csscode", csscode.value);
    localStorage.setItem("jscode", jscode.value);

    //Executing HTML, CSS and JS
    result.contentDocument.body.innerHTML = `<style>${localStorage.csscode}</style>` + localStorage.htmlcode;
    result.contentWindow.eval(localStorage.jscode);

}

htmlcode.onkeyup = ()=> run();
csscode.onkeyup = ()=> run();
jscode.onkeyup = ()=> run();

htmlcode.value = localStorage.htmlcode;
csscode.value = localStorage.csscode;
jscode.value = localStorage.jscode;