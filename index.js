// Define list of freelancers
let freelancersList = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

// Add support for adding random freelancers
const freelancerNames = ["Jamie", "Meli", "Kyle", "Fiona", "Brian", "Josh"];
const freelancerOccupations = [
  "DJ",
  "Photographer",
  "Cook",
  "Videographer",
  "Graphic Designer",
];
const freelancerPrices = [25, 60, 75, 80, 100];
const maxFreelancers = 10;

/** Adds a freelancer with random properties to the `freelancersList` */
function addFreelancer() {
  const name =
    freelancerNames[Math.floor(Math.random() * freelancerNames.length)];
  const occupation =
    freelancerOccupations[
      Math.floor(Math.random() * freelancerOccupations.length)
    ];
  const price =
    freelancerPrices[Math.floor(Math.random() * freelancerPrices.length)];

  const newFreelancer = { name, occupation, price };
  freelancersList.push(newFreelancer);

  // Dynamically add a new row to the table
  if (freelancersList.length <= maxFreelancers) {
    addFreelancerRow(newFreelancer);
  } else {
    clearInterval(addFreelancerIntervalId); // Stop interval when the max is reached
  }
}

/** Calculates the average price of freelancers */
function getAveragePrice(freelancers) {
  const totalPrice = freelancers.reduce(
    (total, freelancer) => total + freelancer.price,
    0
  );
  return totalPrice / freelancers.length;
}

// Calculate the average price
const averagePrice = getAveragePrice(freelancersList);

/** Renders the average price to the DOM */
function renderAveragePrice(price) {
  const root = document.querySelector("#root");
  const sentElem = document.createElement("p");
  sentElem.textContent = `The average starting price is $${price}.`;
  root.append(sentElem);
}

/** Initializes the table structure */
function renderFreelancersTable() {
  const root = document.querySelector("#root");

  // Create the table
  const table = document.createElement("table");
  table.id = "freelancersTable";

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
  root.appendChild(table);
}

/** Adds a single row to the existing table */
function addFreelancerRow(freelancer) {
  const table = document.querySelector("#freelancersTable");

  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = freelancer.name;

  const occupationCell = document.createElement("td");
  occupationCell.textContent = freelancer.occupation;

  const priceCell = document.createElement("td");
  priceCell.textContent = `$${freelancer.price}`;

  row.appendChild(nameCell);
  row.appendChild(occupationCell);
  row.appendChild(priceCell);

  table.appendChild(row);
}

/** Renders the initial state */
function render() {
  const root = document.querySelector("#root");

  // Create and append the main title
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Freelancer Forum";
  root.appendChild(pageTitle);

  // Render average price
  renderAveragePrice(averagePrice);

  // Create and append section title
  const h2 = document.createElement("h2");
  h2.textContent = "Available Freelancers";
  root.appendChild(h2);

  // Render the table structure
  renderFreelancersTable();

  // Render the initial rows
  freelancersList.forEach(addFreelancerRow);
}

// Add freelancers dynamically at intervals
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
}, 1000);

// Initial render
render();
