const getDateTime = () => {
  let date = document.getElementById("date-input").value;
  console.log(date);
  let dateInReadableForm = new Date(date);
  console.log(dateInReadableForm);
  console.log(dateInReadableForm.getDate());
  console.log(dateInReadableForm.getDay());
};
const compareDate = () => {
  let selectedDate = new Date(document.getElementById("date-input").value);
  let currentDate = new Date();
  //   comparing dates timestamp help => millisec from 1970
  console.log(selectedDate.getTime());
  console.log(currentDate.getTime());
  //
  const diffTime = Math.abs(selectedDate.getTime() - currentDate.getTime());
  const diffDay = Math.ceil(diffTime * 1000 * 60 * 60 *n 24);
  console.log(diffDay);
};
