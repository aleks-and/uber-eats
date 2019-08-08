'use strict';

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("to-top").addEventListener("click", toTop);
});
