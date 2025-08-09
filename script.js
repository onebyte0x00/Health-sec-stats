// Chart 1: Healthcare Spending Breakdown (2024)
const spendingCtx = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(spendingCtx, {
  type: 'pie',
  data: {
    labels: ['Long-Term Care (27.7%)', 'Outpatient Care (24.7%)', 'Medicines (7.5%)', 'Other (40.1%)'],
    datasets: [{
      data: [27.7, 24.7, 7.5, 40.1],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Healthcare Spending Breakdown (2024)',
        font: { size: 16 }
      }
    }
  }
});

// Chart 2: Per Capita Spending Over Time (2013-2022)
const perCapitaCtx = document.getElementById('perCapitaChart').getContext('2d');
const perCapitaChart = new Chart(perCapitaCtx, {
  type: 'line',
  data: {
    labels: ['2013', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Health Expenditure per Capita (US$)',
      data: [4800, 5340, 5341, 5866, 6555, 5796],
      borderColor: '#3E95CD',
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Health Expenditure per Capita (2013-2022)',
        font: { size: 16 }
      }
    }
  }
});

// Chart 3: Healthcare Workforce Ratios (2025)
const workforceCtx = document.getElementById('workforceChart').getContext('2d');
const workforceChart = new Chart(workforceCtx, {
  type: 'bar',
  data: {
    labels: ['Doctors per 1,000', 'Nurses per 1,000', 'Hospital Beds per 1,000'],
    datasets: [{
      label: 'Netherlands (2025)',
      data: [3.7, 10.7, 2.78],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }, {
      label: 'EU Average',
      data: [3.9, 8.4, 4.7],
      backgroundColor: ['#CCCCCC', '#CCCCCC', '#CCCCCC']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Healthcare Workforce Ratios (2025)',
        font: { size: 16 }
      }
    }
  }
});
