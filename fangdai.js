function go() {
  var monthlyInvestmentAmount = parseFloat(document.getElementById("monthlyInvestmentAmount").value);
  var investmentMonthlyInterest = parseFloat(document.getElementById("yearlyInterestRate").value) / 100 / 12;
  var fangdaiLengthInMonths = parseFloat(document.getElementById("fangdaiLengthInYears").value) * 12;

  var totalInterest = Array(fangdaiLengthInMonths)
    .fill(1)
    .map((x, y) => x + y)
    .map((nthMonth) => {
      console.log(monthlyInvestmentAmount * investmentMonthlyInterest * nthMonth);
      return monthlyInvestmentAmount * investmentMonthlyInterest * nthMonth;
    })
    .reduce((a, b) => a + b, 0);

  document.getElementById("total").innerHTML = totalInterest;
}
