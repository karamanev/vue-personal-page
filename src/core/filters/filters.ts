import Vue from "vue"


Vue.filter("date", (value) => {
  var a = new Date(value.seconds * 1000);
  var months = [
    'ян',
    'фев',
    'мар',
    'апр',
    'май',
    'юни',
    'юли',
    'авг',
    'сеп',
    'окт',
    'ное',
    'дек'
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
})
