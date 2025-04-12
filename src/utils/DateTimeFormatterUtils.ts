const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  //This will return AM/PM local time
  const time = date.toLocaleTimeString();
  const day = date.getDate();
  const month = MONTHS[date.getMonth()]; // 0 is Jan, 11 is december
  const year = date.getFullYear();
  const fullDate = `${day} ${month} ${year} ${time}`;
  return fullDate;
};
