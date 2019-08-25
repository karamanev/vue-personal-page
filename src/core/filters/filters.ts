import Vue from "vue"

Vue.filter("date", (value) => {
  var a = new Date(value.seconds * 1000);
  var months = [
    'януари',
    'февруари',
    'март',
    'април',
    'май',
    'юни',
    'юли',
    'август',
    'септември',
    'октомври',
    'ноември',
    'декември'
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' г.';
  return time;
})

Vue.filter("topics", (value) => {
  return value.join(', ');
})
