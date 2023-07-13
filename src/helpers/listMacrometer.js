export function formatoFecha(fecha) {
  const map = {
    dd: fecha.getDate(),
    mm: fecha.getMonth() + 1,
    yy: fecha.getFullYear().toString().slice(-2),
    yyyy: fecha.getFullYear(),
  };

  const day = String(map.dd);
  const month = String(map.mm);
  const year = String(map.yy);
  let a = '';
  if (day.length < 2 && month.length < 2) {
    return (a = `0${day}/0${month} / ${year}`);
  } else if (day.length === 2 && month.length < 2) {
    return (a = `${day}/0${month}/${year}`);
  } else if (day.length < 2 && month.length === 2) {
    return (a = `0${day}/${month}/${year}`);
  }
  return a;
}
