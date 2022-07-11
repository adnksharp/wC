const sample = document.querySelector('button');
let c = 1;

sample.addEventListener('click', function () {
    let body = document.querySelector('body');
    c++;
    if (c > 3)
        c = 1;
    body.setAttribute('class', 'theme-' + c);
});