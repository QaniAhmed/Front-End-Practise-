setInterval(() => {
  const date = new Date();
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  document.querySelector(".hour").innerHTML = date.getHours();
  document.querySelector(".min").innerHTML = date.getMinutes();
  document.querySelector(".sec").innerHTML = date.getSeconds();
}, 1000);
