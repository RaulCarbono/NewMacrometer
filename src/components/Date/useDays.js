import dayjs from 'dayjs';

const useDays = () => {
  const getTodayEpoch = () => {
    return dayjs().startOf('day').valueOf();
  };

  // Obtener el día anterior en formato epoch
  const getYesterdayEpoch = () => {
    return dayjs().subtract(1, 'day').startOf('day').valueOf();
  };

  // ... (otras funciones como addDays, subtractDays, etc.)

  return { getTodayEpoch, getYesterdayEpoch };
};
export default useDays;
