'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  document.getElementById("to-top").addEventListener("click", toTop);
});