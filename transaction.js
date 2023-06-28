
// Fetching Data from JSON file
async function fetchData() {
    try {
      const response = await fetch('./Data/data.json');
      const apiData = await response.json();
      // Use the fetched JSON data here
    //   console.log(apiData);
      transactions(apiData)
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();

// Dynamicaly Adding transactions to table
  const transactions=(data)=>{
// Get a reference to the table
const table = document.querySelector('.transaction-table tbody');

// Add three rows to the table
for (let i = 0; i <=data.transactions.length; i++) {
  const row = table.insertRow();

  // Add cells to the row
  const serialNoCell = row.insertCell();
  serialNoCell.textContent = data.transactions[i].serialNo;

  const dateTimeCell = row.insertCell();
  dateTimeCell.textContent = data.transactions[i].dateTime;

  const descriptionCell = row.insertCell();
  descriptionCell.textContent = data.transactions[i].description;

  const debitCell = row.insertCell();
  debitCell.textContent = data.transactions[i].debit?data.transactions[i].debit:'-';

  const creditCell = row.insertCell();
  creditCell.textContent = data.transactions[i].credit?data.transactions[i].credit:'-';

  const balanceCell = row.insertCell();
  balanceCell.textContent = data.transactions[i].balance;
}
  }