function go() {
    var amount = parseFloat(document.getElementById("amount").value);
    var months = parseInt(document.getElementById("months").value);
    var percentPerMonth = parseFloat(document.getElementById("percentPerMonth").value)

    var realInterest = calculateRealInterest(amount, months, percentPerMonth);

    document.getElementById("realInterest").innerHTML = JSON.stringify(realInterest);
}

function calculateRealInterest(amount, months, percentPerMonth) {

    var interestAmount = amount * percentPerMonth / 100 * months; //总手续费

    var amountPermonth = amount / months; //每期占用银行金额
    var occupyMonths = (1 + months) * (months / 2); //总占用月数
    var occupyYears = occupyMonths / 12; //占用年数

    var occupyAmountForOneYear = amountPermonth * occupyYears; //相当于占用了一年的金额

    var realInterest = interestAmount / occupyAmountForOneYear; //实际年化利率

    return {
        总手续费: interestAmount,
        相当于占用了一年的金额: occupyAmountForOneYear,
        实际年化利率: realInterest * 100 + " %"
    };
}
