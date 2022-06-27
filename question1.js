// example test cmd run  node question1.js -3.25
function setStringHdp() {
  const value = process.argv[2] || 0;
  const absVal = Math.abs(value);
  const intValue = parseInt(absVal);
  const decimals = absVal - Math.floor(absVal);
  if (!value || !intValue || decimals === 0 || decimals == 0.5) {
    const result =
      intValue || value == 0
        ? parseFloat(value).toFixed(1) || 0
        : "value is not number";
    console.log("result===>", result);
    return result;
  } else if (decimals < 0.5) {
    const result = `${value > 0 ? intValue : parseInt(value)}/${
      intValue + 0.5
    }`;
    console.log("result===>", result);
    return result;
  } else {
    const result = `${value > 0 ? intValue + 0.5 : parseInt(value) - 0.5}/${
      intValue + 1
    }`;
    console.log("result===>", result);
    return result;
  }
}
setStringHdp();
