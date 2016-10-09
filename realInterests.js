function go() {
    var amount = parseFloat(document.getElementById("amount").value);
    var months = parseInt(document.getElementById("months").value);
    var percentPerMonth = parseFloat(document.getElementById("percentPerMonth").value)
    var leveragePercent = parseFloat(document.getElementById("leveragePercent").value)

    var realInterest = calculateRealInterest(amount, months, percentPerMonth);
    var leverageInterest = calculateLeverageInterest(amount, months, leveragePercent);

    display(realInterest, leverageInterest);
}

function display(realInterest, leverageInterest) {
    var content = "你将支付给银行的手续费总共： " + realInterest.interestAmount + "<br>" +
        "相当于实际占用了银行一年的钱数： " + realInterest.occupyAmountForOneYear + "<br>" +
        "银行收取你的实际年化利率是： " + realInterest.realInterest * 100 + "% <br>";

    if (!isNaN(leverageInterest)) {
        content += "你的杠杆将能够获得的收益是： " + leverageInterest + "<br>" +
            "你最终实际盈亏： " + (leverageInterest - realInterest.interestAmount);
    }

    document.getElementById("realInterest").innerHTML = content;
}

function calculateRealInterest(amount, months, percentPerMonth) {

    var interestAmount = amount * percentPerMonth / 100 * months; //总手续费

    var amountPermonth = amount / months; //每期占用银行金额
    var occupyMonths = (1 + months) * (months / 2); //总占用月数
    var occupyYears = occupyMonths / 12; //占用年数

    var occupyAmountForOneYear = amountPermonth * occupyYears; //相当于占用了一年的金额

    var realInterest = interestAmount / occupyAmountForOneYear; //实际年化利率

    return {
        interestAmount: interestAmount,
        occupyAmountForOneYear: occupyAmountForOneYear,
        realInterest: realInterest
    };
}

function calculateLeverageInterest(amount, months, leveragePercent) {
    var perMonthInterest = leveragePercent / 100 / 12;
    var interestAmount = (1 + months) * months / 2 * perMonthInterest * amount / months;
    return interestAmount;
}
