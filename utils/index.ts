export const formatNumber = (number: number) => {
  var SI_SYMBOL = ['', 'k', 'M', 'B', 'T'];

  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier == 0) return number;

  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  var scaled = number / scale;

  return scaled.toFixed(1) + suffix;
};

export const numberToMoney = (number: number) => {
  let money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return money.format(number);
};

export const numberToPercent = (number: number) => {
  let percent = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumSignificantDigits: 2,
  });

  return percent.format(number / 100);
};
