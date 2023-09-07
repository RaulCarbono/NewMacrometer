export function percentage_total(value) {
  let result;
  if (value?.length < 2) {
    result = (parseInt(value) / 10) * 100;
  } else if (value.length < 3) {
    result = (parseInt(value) / 100) * 100;
  } else if (value.length < 4) {
    result = (parseInt(value) / 1000) * 100;
  } else if (value.length < 5) {
    result = (parseInt(value) / 10000) * 100;
  } else if (value.length < 6) {
    result = (parseInt(value) / 100000) * 100;
  } else if (value.length < 7) {
    result = (parseInt(value) / 1000000) * 100;
  } else if (value.length < 8) {
    result = (parseInt(value) / 10000000) * 100;
  } else if (value.length < 9) {
    result = (parseInt(value) / 100000000) * 100;
  } else if (value.length < 10) {
    result = (parseInt(value) / 1000000000) * 100;
  }
  return result;
}
