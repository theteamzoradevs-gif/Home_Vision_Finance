export interface SchedulePeriod {
  period: number; // Month number or Year number
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  remainingBalance: number;
}

export interface YearlySchedule extends SchedulePeriod {
  months: SchedulePeriod[];
}

export function calculateEmi(amount: number, rate: number, tenureYears: number) {
  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenureYears * 12;
  
  // Monthly EMI Calculation
  const emi = monthlyRate === 0 
    ? amount / totalMonths 
    : (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  // Generate Schedule Logic
  let currentBalance = amount;
  const yearlySchedule: YearlySchedule[] = [];
  let currentYearMonths: SchedulePeriod[] = [];
  
  let yearlyPrincipal = 0;
  let yearlyInterest = 0;
  let yearlyTotal = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const interestPaid = currentBalance * monthlyRate;
    const principalPaid = emi - interestPaid;
    currentBalance = Math.max(0, currentBalance - principalPaid);

    const monthData: SchedulePeriod = {
      period: month,
      principalPaid,
      interestPaid,
      totalPayment: emi,
      remainingBalance: currentBalance,
    };
    currentYearMonths.push(monthData);

    yearlyPrincipal += principalPaid;
    yearlyInterest += interestPaid;
    yearlyTotal += emi;

    // Complete a year every 12 months or at loan end
    if (month % 12 === 0 || month === totalMonths) {
      const yearNumber = Math.ceil(month / 12);
      yearlySchedule.push({
        period: yearNumber,
        principalPaid: yearlyPrincipal,
        interestPaid: yearlyInterest,
        totalPayment: yearlyTotal,
        remainingBalance: currentBalance,
        months: currentYearMonths,
      });

      // Reset yearly accumulators
      yearlyPrincipal = 0;
      yearlyInterest = 0;
      yearlyTotal = 0;
      currentYearMonths = [];
    }
  }

  return {
    emi,
    totalPayment,
    totalInterest,
    principalPercent: Math.round((amount / totalPayment) * 100),
    interestPercent: Math.round((totalInterest / totalPayment) * 100),
    schedule: yearlySchedule,
  };
}