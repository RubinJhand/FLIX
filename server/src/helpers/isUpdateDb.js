import moment from 'moment';

export const isUpdateDb = (lastUpdate) => {
  const numberOfDaysBetweenUpdateOfDatabase = 1;
  const timeReference = lastUpdate ? lastUpdate : moment().subtract(2, 'd');
  const today = moment();
  const amountOfDays = today.diff(timeReference, 'days');

  if (amountOfDays > numberOfDaysBetweenUpdateOfDatabase) return true;

  return false;
};
