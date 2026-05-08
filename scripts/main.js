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

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('ilw-grid.authors').forEach(item => {
        loadAuthors(item);
    });
    document.querySelectorAll('ilw-grid.sponsors').forEach(item => {
        loadSponsors(item);
    });
    document.querySelectorAll('ilw-grid.committee').forEach(item => {
        loadCommittee(item);
    });
});

function loadAuthors(el) {
    fetch('https://resourceapi.wigg.illinois.edu/api/PersonSearch?source=ylf&tag1=Author')
        .then(response => response.json()
        .then(data => {
            data.items.forEach(item => {
                const card = document.createElement('ilw-card');
                card.setAttribute('clickable', 'true');
                card.innerHTML = `<img style="max-width: 100%;" src="${item.image}" alt="${item.namereversed}" slot="image"><h2><a href="${item.url}">${item.namereversed}</a></h2><p class="subheader">${item.jobtitle}</p>`;
                el.appendChild(card);
            });
     }));
}

function loadSponsors(el) {
    fetch('https://resourceapi.wigg.illinois.edu/api/ResourceSearch?source=ylf&tag2=' + el.getAttribute('data-format'))
        .then(response => response.json()
        .then(data => {
            data.items.forEach(item => {
                const div = document.createElement('div');
                if (item.image !== undefined && item.image != '') {
                    div.innerHTML = `<img style="max-width: 100%;" src="${item.image}" alt="${item.title}">`;
                } else {
                    div.innerHTML = `<div class="sponsortext">${item.title}</div>`;
                }
                el.appendChild(div);
            });
     }));
     el.setAttribute('gap', '30px');
}

function loadCommittee(el) {
    fetch('https://resourceapi.wigg.illinois.edu/api/PersonSearch?source=ylf&tag1=Committee Member')
        .then(response => response.json()
        .then(data => {
            data.items.forEach(item => {
                const card = document.createElement('ilw-card');
                card.setAttribute('clickable', 'true');
                card.innerHTML = `<img style="max-width: 100%;" src="${item.image}" alt="${item.namereversed}" slot="image"><h2><a href="${item.url}">${item.namereversed}</a></h2><p class="subheader">${item.jobtitle}</p>`;
                el.appendChild(card);
            });
     }));
}