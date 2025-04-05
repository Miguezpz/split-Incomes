
let income = 1000000
let investmentPercentage = 40
let needsPercentage = 40
let wantsPercentage = 20

function splitIncome (totalIncome) {

    function calculateSplit (typeOf) {
        return typeOf * totalIncome / 100
    }

    let investment = calculateSplit(investmentPercentage)
    let needs = calculateSplit(needsPercentage)
    let wants = calculateSplit(wantsPercentage)

    let floatNeeds = needs - (Math.trunc(needs))
    let floatWants = wants - (Math.trunc(wants))

    let fixedInvestment = investment + floatNeeds + floatWants
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

splitIncome(4569.03)