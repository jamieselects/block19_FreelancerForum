//define list of freelancers
let freelancersList = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50},
  {name: "Carol", occupation: "Programmer", price: 70},
];

//function to calculate average price
function getAveragePrice (freelancers) {
  let totalPrice = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
  let average = totalPrice / freelancers.length;

  return average;
}

//calcualte the average price
const averagePrice = getAveragePrice(freelancersList);
console.log(`The average starting price is $${averagePrice}`);


//function to render average price to the DOM
function renderAveragePrice(price) {
  const root = document.querySelector('#root');
  const sentElem = document.createElement('p');
  sentElem.textContent = `The average starting price is $${price}.`
  root.append(sentElem);
}

function renderFreelancersTable(freelancers) {
  const root = document.querySelector("#root");

  // Create table
  const table = document.createElement("table");

  // Create table header row
  const headerRow = document.createElement("tr");

  const nameHeading = document.createElement("th");
  nameHeading.textContent = "Name";
  const occupationHeading = document.createElement("th");
  occupationHeading.textContent = "Occupation";
  const priceHeading = document.createElement("th");
  priceHeading.textContent = "Starting Price";

  headerRow.appendChild(nameHeading);
  headerRow.appendChild(occupationHeading);
  headerRow.appendChild(priceHeading);

  table.appendChild(headerRow);

  // Create table rows for freelancers
  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");

    const nameP = document.createElement("td");
    nameP.textContent = freelancer.name;
    const occupationP = document.createElement("td");
    occupationP.textContent = freelancer.occupation;
    const priceP = document.createElement("td");
    priceP.textContent = "$" + freelancer.price;

    row.appendChild(nameP);
    row.appendChild(occupationP);
    row.appendChild(priceP);

    table.appendChild(row); // Append rows to the table
  });

  root.appendChild(table); // Append the table to the root
}

//render the headings and average price
function render() {
  const root = document.querySelector('#root');

  //create an h1 for the main title
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Freelancer Forum";
  root.appendChild(pageTitle);

  renderAveragePrice(averagePrice);

  const h2 = document.createElement("h2");
  h2.textContent = "Available Freelancers";
  root.appendChild(h2);

  renderFreelancersTable(freelancersList);
}

render();
