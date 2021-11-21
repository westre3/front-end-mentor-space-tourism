const body = document.querySelector('body');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

// Close the menu if the user clicks out of it
body.addEventListener('click', (e) => {
    if(nav.getAttribute('data-visible') === "true") { 
        if(!e.target.classList.contains('mobile-nav-toggle') && !isDescendantOfMenu(e.target)) {
            closeMenu();
        }
    }
})

mobileNavToggle.addEventListener('click', () => {
    console.log('In event listener');
    if(nav.getAttribute('data-visible') === 'true') {
        closeMenu();
    }
    else {
        openMenu();
    }
})

function isDescendantOfMenu(tag) {
    if(tag.tagName === 'BODY') {
        return false;
    }
    else if(tag.classList.contains('primary-navigation')) {
        return true;
    }
    else {
        return isDescendantOfMenu(tag.parentElement);
    }
}

function openMenu() {
    console.log('Opening menu');
    nav.setAttribute('data-visible', true);
    mobileNavToggle.style['background-image'] = 'url(./assets/shared/icon-close.svg)';
    mobileNavToggle.setAttribute('aria-expanded', true);
}

function closeMenu() {
    nav.setAttribute('data-visible', false);
    mobileNavToggle.style['background-image'] = 'url(./assets/shared/icon-hamburger.svg)';
    mobileNavToggle.setAttribute('aria-expanded', false);
}

// Destination Page Buttons
moonLink = document.querySelector("#moon");
marsLink = document.querySelector("#mars");
europaLink = document.querySelector("#europa");
titanLink = document.querySelector("#titan");
links = [moonLink, marsLink, europaLink, titanLink];

try {
    moonLink.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        moonLink.classList.add('active');
    
        populatePlanet('moon');
    });
    
    marsLink.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        marsLink.classList.add('active');
    
        populatePlanet('mars');
    });
    
    europaLink.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        europaLink.classList.add('active');
    
        populatePlanet('europa');
    });
    
    titanLink.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        titanLink.classList.add('active');
    
        populatePlanet('titan');
    });
}
catch
{
}

function populatePlanet(planetName) {
    const image = document.querySelector('.planet-image');
    const name = document.querySelector('.planet-name');
    const description = document.querySelector('.planet-description');
    const avgDistance = document.querySelector('#avg-distance');
    const estTravelTime = document.querySelector('#est-travel-time');

    switch(planetName) {
        case 'moon':
            image.src = './assets/destination/image-moon.png';
            image.alt = 'the moon';
            name.innerHTML = 'Moon';
            description.innerHTML = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
            avgDistance.innerHTML = avgDistance.innerHTML.split('</span>')[0] + '</span>384,000 km';
            estTravelTime.innerHTML = estTravelTime.innerHTML.split('</span>')[0] + '</span>3 Days';
            break;
        case 'mars':
            image.src = './assets/destination/image-mars.png';
            image.alt = 'mars';
            name.innerHTML = 'Mars';
            description.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
            avgDistance.innerHTML = avgDistance.innerHTML.split('</span>')[0] + '</span>225 mil. km';
            estTravelTime.innerHTML = estTravelTime.innerHTML.split('</span>')[0] + '</span>9 Months';
            break;
        case 'europa':
            image.src = './assets/destination/image-europa.png';
            image.alt = 'europa';
            name.innerHTML = 'Europa';
            description.innerHTML = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            avgDistance.innerHTML = avgDistance.innerHTML.split('</span>')[0] + '</span>628 mil. km';
            estTravelTime.innerHTML = estTravelTime.innerHTML.split('</span>')[0] + '</span>3 Years';
            break;
        case 'titan':
            image.src = './assets/destination/image-titan.png';
            image.alt = 'titan';
            name.innerHTML = 'Titan';
            description.innerHTML = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
            avgDistance.innerHTML = avgDistance.innerHTML.split('</span>')[0] + '</span>1.6 bil. km';
            estTravelTime.innerHTML = estTravelTime.innerHTML.split('</span>')[0] + '</span>7 Years';
            break;
    }
}

const douglasHurleyButton = document.querySelector('#douglas-hurley-button');
const markShuttleworthButton = document.querySelector('#mark-shuttleworth-button');
const victorGloverButton = document.querySelector('#victor-glover-button');
const anoushehAnsariButton = document.querySelector('#anousheh-ansari-button');
crewButtons = [douglasHurleyButton, markShuttleworthButton, victorGloverButton, anoushehAnsariButton];

douglasHurleyButton.addEventListener('click', () => {
    crewButtons.forEach(button => button.attributes['aria-selected'].value = 'false');
    douglasHurleyButton.attributes['aria-selected'].value = 'true';

    populateCrewDetails('hurley');
})

markShuttleworthButton.addEventListener('click', () => {
    crewButtons.forEach(button => button.attributes['aria-selected'].value = 'false');
    markShuttleworthButton.attributes['aria-selected'].value = 'true';

    populateCrewDetails('shuttleworth');
})

victorGloverButton.addEventListener('click', () => {
    crewButtons.forEach(button => button.attributes['aria-selected'].value = 'false');
    victorGloverButton.attributes['aria-selected'].value = 'true';

    populateCrewDetails('glover');
})

anoushehAnsariButton.addEventListener('click', () => {
    crewButtons.forEach(button => button.attributes['aria-selected'].value = 'false');
    anoushehAnsariButton.attributes['aria-selected'].value = 'true';

    populateCrewDetails('ansari');
})

function populateCrewDetails(crewMember) {
    const images = document.querySelectorAll('main img');
    const headers = document.querySelectorAll('.crew-info h2');
    const descriptions = document.querySelectorAll('.crew-info p');
    
    images.forEach(image => image.classList.remove('active'));
    headers.forEach(header => header.classList.remove('active'));
    descriptions.forEach(description => description.classList.remove('active'));

    console.log(images);

    crewIndex = 0;
    switch(crewMember) {
        case 'hurley':
            crewIndex = 0;
            break;
        case 'shuttleworth':
            crewIndex = 1;
            break;
        case 'glover':
            crewIndex = 2;
            break;
        case 'ansari':
            crewIndex = 3;
            break;
    }

    images[crewIndex].classList.add('active');
    headers[crewIndex].classList.add('active');
    descriptions[crewIndex].classList.add('active');
}