function circleOver(el) {
    el.classList.add('orange');
    el.children[0].style.display = 'none';
    el.children[1].style.display = '';
    el.children[2].style.display = '';
}

function circleOut(el) {
    el.classList.remove('orange');
    el.children[0].style.display = '';
    el.children[1].style.display = 'none';
    el.children[2].style.display = 'none';
}