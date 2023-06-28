// Select the elements in the HTML file
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const userNameEl = document.getElementById("user-name");
const userName = document.getElementById("userName");
const accountNumberEl = document.getElementById("account-number");
const openDateEl = document.getElementById("open-date");
const customerIdEl = document.getElementById("customer-id");
const accountTypeEl = document.getElementById("account-type");
const statusEl = document.getElementById("status");
const ifscEl = document.getElementById("ifsc");
const dobEl = document.getElementById("dob");
const passwordEl = document.getElementById("password");
const phoneNumberEl = document.getElementById("phone-number");

// fetch data from json
async function getAccountData() {
  try {
    const response = await fetch("data/data.json");
    const data = await response.json();
    displayAccountData(data);
  } catch (error) {
    console.log(error);
  }
}

// Update the text content of each element with the corresponding data
function displayAccountData(data) {
  userName.textContent = data.userName;
  firstNameEl.textContent = data.firstName;
  lastNameEl.textContent = data.lastName;
  userNameEl.textContent = data.userName;
  accountNumberEl.textContent = data.accountNumber;
  openDateEl.textContent = data.openDate;
  customerIdEl.textContent = data.customerId;
  accountTypeEl.textContent = data.accountType;
  statusEl.textContent = data.status;
  ifscEl.textContent = data.ifsc;
  dobEl.textContent = data.dob;
  passwordEl.textContent = data.password;
  phoneNumberEl.textContent = data.phoneNumber;
}

// Call the function to fetch the data and display it in the HTML
getAccountData();

