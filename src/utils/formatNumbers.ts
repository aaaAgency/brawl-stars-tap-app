export const formatNumber = (num: number | string): string => {
    const numStr = num.toString();
  
    const isNegative = numStr.startsWith('-');
  
    const absNumStr = isNegative ? numStr.slice(1) : numStr;
  
    const [intPart, decPart] = absNumStr.split('.');
  
    let formattedIntPart = '';
    for (let i = intPart.length - 1, count = 0; i >= 0; i--, count++) {
      formattedIntPart = intPart[i] + formattedIntPart;
      if (count > 0 && count % 2 === 0 && i > 0) {
        formattedIntPart = '.' + formattedIntPart;
      }
    }
  
    return (isNegative ? '-' : '') + formattedIntPart + (decPart ? '.' + decPart : '');
  }
  