export const formatCurrency = (
  value: number | string,
  currency: string = 'INR'
): string => {
  try {
    const numericValue = typeof value === 'string' ? Number(value) : value;

    if (isNaN(numericValue)) {
      throw new Error('Invalid number provided for currency formatting');
    }

    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  } catch (error) {
    console.warn('Currency formatting failed, using fallback:', error);

    // Fallback format
    const num = typeof value === 'string' ? Number(value) : value;
    const safeNum = isNaN(num) ? 0 : num;
    
    // Simple fallback formatting with exactly two decimal places and ₹ symbol
    return `₹${safeNum.toFixed(2)}`;
  }
};
