export type EmiResult = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  principalPercent: number;
  interestPercent: number;
};

export function calculateEmi(
  principal: number,
  annualRate: number,
  tenureYears: number
): EmiResult {
  const monthlyRate = annualRate / 12 / 100;
  const months = tenureYears * 12;

  const emi =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : principal / months;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;
  const principalPercent = totalPayment > 0 ? (principal / totalPayment) * 100 : 0;
  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  return {
    emi,
    totalPayment,
    totalInterest,
    principalPercent: Number(principalPercent.toFixed(1)),
    interestPercent: Number(interestPercent.toFixed(1)),
  };
}
