export const calculateDurationInMonths = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = endDate.toLowerCase() === "present" ? new Date() : new Date(endDate);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  return years * 12 + months;
};