/* INTRODUCCION */

function cambiar_intro() {
    document.getElementById("edit-intro").style.display="block";
    let text = document.getElementById("intro-text").innerText;
    console.log(text);
}

function myFunction1(value) {
    document.getElementById("intro-text").innerText=value;
}

function logMessage(message) {
    console.log(message + "<br>");
}

let textarea=document.getElementById("edit-intro")
textarea.addEventListener('keyup', (e) => {
    logMessage('Key  "${e.key}" released  [event: keyup]');
    if (e.key=="Enter") {
        document.getElementById("edit-intro").style.display="none";
    }
});

function showFile1(input) {
    let file = input.files[0];
    alert("File name: ${file.name}")

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("intro-text").innerText=reader.result;
    }

    reader.onerror = function() {
        console.log(reader.error);
    }
}

/* EXPERIENCIAS */

function cambiar_exp() {
    document.getElementById("edit-exp").style.display="block";
    let text = document.getElementById("exp-text").innerText;
    console.log(text);
}

function myFunction2(value) {
    document.getElementById("exp-text").innerText=value;
}

function logMessage(message) {
    console.log(message + "<br>");
}

let textarea2=document.getElementById("edit-exp")
textarea2.addEventListener('keyup', (e) => {
    logMessage('Key  "${e.key}" released  [event: keyup]');
    if (e.key=="Enter") {
        document.getElementById("edit-exp").style.display="none";
    }
});

function showFile2(input) {
    let file = input.files[0];
    alert("File name: ${file.name}")

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("exp-text").innerText=reader.result;
    }

    reader.onerror = function() {
        console.log(reader.error);
    }
}

/* EDUCACIÓN */

function cambiar_edu() {
    document.getElementById("edit-edu").style.display="block";
    let text = document.getElementById("edu-text").innerText;
    console.log(text);
}

function myFunction3(value) {
    document.getElementById("edu-text").innerText=value;
}

function logMessage(message) {
    console.log(message + "<br>");
}

let textarea3=document.getElementById("edit-edu")
textarea3.addEventListener('keyup', (e) => {
    logMessage('Key  "${e.key}" released  [event: keyup]');
    if (e.key=="Enter") {
        document.getElementById("edit-edu").style.display="none";
    }
});

function showFile3(input) {
    let file = input.files[0];
    alert("File name: ${file.name}")

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(reader.result);
        document.getElementById("edu-text").innerText=reader.result;
    }

    reader.onerror = function() {
        console.log(reader.error);
    }
}