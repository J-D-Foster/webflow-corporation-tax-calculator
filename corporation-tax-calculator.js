document.addEventListener("DOMContentLoaded", function () {
    function calculateCorporationTax(profits) {
        const lowerLimit = 50000;
        const upperLimit = 250000;
        const smallProfitsRate = 0.19;
        const mainRate = 0.25;
        const marginalReliefRate = 0.015;
        let taxLiability;

        if (profits <= lowerLimit) {
            taxLiability = profits * smallProfitsRate;
        } else if (profits > lowerLimit && profits <= upperLimit) {
            const smallProfitsTax = lowerLimit * smallProfitsRate;
            const excessProfits = profits - lowerLimit;
            const marginalRelief = excessProfits * marginalReliefRate;
            const mainRateTax = excessProfits * mainRate - marginalRelief;
            taxLiability = smallProfitsTax + mainRateTax;
        } else {
            const smallProfitsTax = lowerLimit * smallProfitsRate;
            const mainRateTax = (profits - lowerLimit) * mainRate;
            taxLiability = smallProfitsTax + mainRateTax;
        }

        return taxLiability;
    }

    function calculateTax() {
        const taxableProfits = parseFloat(document.getElementById("taxableProfits").value);
        const corporationTax = calculateCorporationTax(taxableProfits);
        document.getElementById("result").innerText = `Your corporation tax liability is: £${corporationTax.toFixed(2)}`;
    }

    const form = document.querySelector("form");
    form.setAttribute("onsubmit", "return false;");
    document.getElementById("calculateButton").addEventListener("click", calculateTax);
});
