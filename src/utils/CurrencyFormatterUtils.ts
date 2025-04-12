export const handleCurrencyChangeText = (text: string): string => {
  // Remove all non-numeric characters
  const numericValue = text.replace(/[^\d]/g, '');

  // Get the integer and decimal parts
  let integerPart = numericValue.slice(0, -2);
  let decimalPart = numericValue.slice(-2);

  // Add leading zeroes if necessary
  integerPart = integerPart || '0';
  decimalPart = decimalPart || '00';

  integerPart =
    integerPart.length > 1 ? integerPart.replace(/(^0|^0)/, '') : integerPart;

  // Concatenate the integer and decimal parts with a decimal separator
  const formattedValue = `${integerPart}.${decimalPart}`;

  return formattedValue;
};

export const formatAmountWithCurrency = (value: number): string => {
  const formatted = new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
  })
    .format(value)
    .replace('RM', 'MYR');
  return formatted;
};

export const truncateToTwoDecimals = (num: number): number => {
  if (!Number.isFinite(num)) {
    return num;
  }

  const str = num.toString();
  const decimalIndex = str.indexOf('.');

   // If no decimal part //
  if (decimalIndex === -1) {
    return num;
  }

  const endIndex = decimalIndex + 3;
  const truncatedStr = str.substring(
    0,
    endIndex <= str.length ? endIndex : str.length,
  );

  return parseFloat(truncatedStr);
};
