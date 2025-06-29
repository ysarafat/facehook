export const getDateDeferenceFromNow = (fromDate) => {
  let deference = new Date().getTime() - new Date(fromDate).getTime();
  deference = deference / 1000;
  let hourDeference = Math.floor(deference / 3600);
  deference -= hourDeference * 3600;
  let minuteDeference = Math.floor(deference / 60);
  deference -= minuteDeference * 60;

  let message;
  if (hourDeference > 0) {
    message = `${hourDeference} hour`;
  }
  if (minuteDeference > 0) {
    message = message
      ? `${message} ${minuteDeference} minutes`
      : `${minuteDeference} minutes`;
  }
  if (deference) {
    message = message
      ? `${message} ${Math.round(deference)} seconds`
      : `${Math.round(deference)} seconds`;
  }
  return message;
};
