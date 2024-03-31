//your JS code here. If required.
  const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
}; 
const incrementCount = document.getElementById("incrementBtn").addEventListener("click", handleIncrement);


const totalCount = document.getElementById("counter");


var count = 0;


totalCount.innerHTML = count;