// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let data = [];
for (let n = 0; n < 50; n++) {
  data.push(randomInt(0, 5000));
}
// account data
let maxVal = 5000; // max data value
// Draw Array every 20ms
setInterval(drawDataArray, 20);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  // Prompt the user for the index of an account and the amount to deposit into that account.
  let account = +prompt("enter account number");
  let amount = +prompt("enter deposite amount");
  data[account] += amount;
  // data.splice(account, 1, data[account] + amount);
  // data[account] += amount;
  // Modify the data array to reflect the deposit.
  // Adjust the maxVal variable if necessary.
  // Use the outputEl to provide a confirmation message.
  while (data[account] >= maxVal) {
    maxVal++;
  }

  outputEl.innerHTML = `${amount} $ has been deposited in account ${account}`;
}

function withdrawal() {
  // Prompt the user for the index of an account and the amount to withdraw from that account.
  let account = +prompt("enter account number");
  let amount = +prompt("enter withdraw amount");

  // Modify the data array to reflect the withdrawal.
  // Check to assure that the account has enough funds.
  if ((data[account] -= amount) < 0) {
    outputEl.innerHTML = "Withdrawal error. no funding";
  } else {
    data[account] -= amount;
    outputEl.innerHTML = `${amount}$ withdrawn`;
  }
  // Use the outputEl to provide a confirmation message.
}

function countUnder2000() {
  let count = 0;
  // Count the number of accounts that are less than 2000
  // Use the outputEl to display the results of the count
  for (let n = 0; n <= 50; n++) {
    if (data[n] < 2000) {
      count++;
    }
  }
  outputEl.innerHTML = `accounts under 2000: ${count}`;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000.
  // Modify the data array to apply this donation.
  // Use the outputEl to display the total amount of money that was donated.
  let donation = 500;
  let count = 0;
  for (let n = 0; n < 50; n++) {
    if (data[n] < 2000) {
      data[n] += donation;
      count++;
    }
  }
  let totalDon = count * donation;
  outputEl.innerHTML = `total amount of money donated: ${totalDon}`;
}
//total variabloe for total amount hacked
function hackerAttack() {
  let total = 0;

  // A hacker steals 5% from every account.
  for (let n = 0; n < 50; n++) {
    data[n] -= data[n] * 0.05;
    total += data[n] * 0.05;
  }
  drawDataArray();
  outputEl.innerHTML = `Amount hacked: ${total}`;
  // Modify the data array to apply this theft.
  // Use the outputEl to display the total amount that was stolen.
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Function to draw current state of data array
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
