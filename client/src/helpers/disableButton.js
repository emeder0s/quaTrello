// Depende de si se ha escrito o no un @ en el input que contenga emails
export function enableSubmitEmail(filled, className) {
    let btn = document.querySelector(`${className}`);
    if (filled.value.includes('@')) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true
    }
}

// Generica, solo depende de que se escriba algo en los inputs
export function defaultEnableSubmit(filled, className) {
    let btn = document.querySelector(`${className}`);
    if (filled.value) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true
    }
}