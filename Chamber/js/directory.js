const requestURL = 'https://github.com/Ejpulver/wdd230/blob/main/Chamber/data.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(data);  // temporary checking for valid response and data parsing
    const businesses = data['businesses']
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
    let card = document.createElement('section');
    card.className = 'section-card';
    let title = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('p');

    title.textContent = business.name;
    address.textContent = `Address: ${business.address}`;
    phoneNumber.textContent = `Phone Number: ${business.phonenumber}`;
    website.setAttribute('href', business.website);
    membership.textContent = `Membership Level: ${business.membershiplevel}`;

    card.appendChild(title);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild('card');

}

