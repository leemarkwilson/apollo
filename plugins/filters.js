import dayjs from "dayjs";
import Vue from "vue";

Vue.filter('formatDate', function (value){
  if (value) {
    return dayjs(String(value)).format('MMM D, YYYY')
  }
});

Vue.filter('formatTime', function (value){
  if (value) {
    return dayjs(String(value)).format('HH:mm')
  }
});
