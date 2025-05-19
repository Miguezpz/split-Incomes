let investmentPercentage = 40
let needsPercentage = 40
let wantsPercentage = 20

function splitIncome (totalIncome) {

    let fixedTotal = Math.trunc(totalIncome)
    let floatTotal = totalIncome - fixedTotal
    
    function calculateSplit (typeOf) {
        return typeOf * fixedTotal / 100
    }

    let investment = calculateSplit(investmentPercentage)
    let needs = calculateSplit(needsPercentage)
    let wants = calculateSplit(wantsPercentage)

    let floatNeeds = needs - (Math.trunc(needs))
    let floatWants = wants - (Math.trunc(wants))

    let fixedInvestment = investment + floatNeeds + floatWants + floatTotal
    let fixedNeeds = needs - floatNeeds
    let fixedWants = wants - floatWants

    let adjustedIncome = fixedInvestment + fixedNeeds + fixedWants


    console.log(`
        Investment = $${fixedInvestment} 
        Needs = $${fixedNeeds}
        Wants = $${fixedWants}

        Total = $${adjustedIncome}
    `)
}

splitIncome(5024.15)