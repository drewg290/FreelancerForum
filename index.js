/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer() {
  let nameIndex = Math.floor(Math.random() * 5);
  let occupationIndex = Math.floor(Math.random() * 5);
  let rate = Math.floor(Math.random() * 181) + 20;

  let freelancerName = NAMES[nameIndex];
  let freelancerOccupation = OCCUPATIONS[occupationIndex];

  return { freelancerName, freelancerOccupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, createFreelancer);

function calculateAverageRate(freelancers) {
  const sum = freelancers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rate,
    0
  );
  const average = sum / freelancers.length;
  return average;
}

const averageRate = calculateAverageRate(freelancers);

function freelancerCard(freelancer) {
  const { freelancerName, freelancerOccupation, rate } = freelancer;

  {
    const freelancerName = freelancer.name;
    const freelancerOccupation = freelancer.occupation;
  }
  const $card = document.createElement("div");
  $card.classList.add("freelancer-card");
  $card.innerHTML = `
  <div class = "freelancer-row">
      <div class = "freelancer-cell"> ${freelancerName} </div>
     <div class=" freelancer-cell">  ${freelancerOccupation} </div>
      <div class=" freelancer-cell">$${rate} </div>
  <div>
    `;
  return $card;
}
function freelancerCards() {
  const $container = document.createElement("div");
  $container.classList.add("freelancer-table");

  // Add the header row
  const $headerRow = document.createElement("div");
  $headerRow.classList.add("freelancer-row");
  $headerRow.innerHTML = `
      <div class="freelancer-header">Name</div>
      <div class="freelancer-header">Occupation</div>
      <div class="freelancer-header">Rate</div>
    `;
  $container.appendChild($headerRow);

  // Add freelancer rows
  const $cards = freelancers.map(freelancerCard);
  $container.append(...$cards);

  return $container;
}

function AverageRate() {
  const $rateContainer = document.createElement("div");
  $rateContainer.classList.add("average-rate");

  const averageRate = calculateAverageRate(freelancers);
  $rateContainer.innerHTML = `<h3>Average Rate: $${averageRate}/hour</h3>`;

  return $rateContainer;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
      <h1>Freelancer Forum</h1>
      <freelancerCards></freelancerCards>
    `;
  $app.appendChild(AverageRate());
  $app.appendChild(freelancerCards());
}
render();
