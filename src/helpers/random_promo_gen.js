const dataCount = 100;
const promotions = [];

function genRandInt(maximum = 10, allowNegative = false) {
  let integer = Math.floor(Math.random() * maximum);
  if (allowNegative) {
    if (Math.random() > 0.5) {
      integer *= -1;
    }
  }

  return integer;
}

function prependLeadingZero(integer, length) {
  let numString = integer.toString();
  while (numString.length < length) {
    numString = "0" + numString;
  }

  return numString;
}

function getRandType() {
  const types = ["Coupon",
    "Percentage Off",
    "Buy One Get One",
    "Exclusive Discounts"];

  return types[genRandInt(types.length)];
}

function genRandString(length = 3) {
  const smallACode = 'a'.charCodeAt(0);
  const capitalACode = 'A'.charCodeAt(0);

  let randStr = "";
  for (let i = 0; i < length; i++) {
    let charCode = Math.random() > 0.5 ? smallACode : capitalACode;
    charCode += Math.floor(Math.random() * 26);
    randStr += String.fromCharCode(charCode);
  }

  return randStr;
}

function genSku() {
  const maxSku = 999;
  const skuNo = prependLeadingZero(genRandInt(maxSku), 3);
  const skuSuffix = genRandString(3);

  return `FUN-${skuNo}_${skuSuffix}`;
}

function genRandPromoDuration() {
  let startDate = new Date();
  startDate.setDate(startDate.getDate() + genRandInt(30, true));

  let endDate = new Date(startDate.toISOString());
  endDate.setDate(endDate.getDate() + genRandInt(45));

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };
}

function genRandPriceAndDiscount() {
  const price = parseFloat((Math.random() * 1000).toFixed(2));
  const discount = parseFloat((price * genRandInt(50) / 100).toFixed(2));

  return {
    yourPrice: price,
    discountPrice: discount
  }
}

function genRandUnitSold() {
  if (Math.random() < 0.1) {
    return 0;
  }

  return genRandInt(1000);
}

function getPromoStatus(promo) {
  const now = new Date();
  const start = new Date(promo.startDate);
  const end = new Date(promo.endDate);

  if (now < start) {
    return "Starting Soon";
  } else if (end < now) {
    return "Expired";
  } else {
    return "In Effect";
  }
}

for (let i = 0; i < dataCount; i++) {
  const promo = {
    type: getRandType(),
    sku: genSku(),
    status: '',
    ...genRandPromoDuration(),
    ...genRandPriceAndDiscount(),
    discountedPrice: 0.0,
    unitsSold: genRandUnitSold(),
    soldAmount: 0
  };

  promo.status = getPromoStatus(promo);
  promo.discountedPrice = parseFloat((promo.yourPrice - promo.discountPrice).toFixed(2));
  promo.soldAmount = parseFloat((promo.discountedPrice * promo.unitsSold).toFixed(2));

  promotions.push(promo);
}

console.log(promotions);

// run node random_promo_gen.js > file.txt
// then open the file.txt and copy the content
