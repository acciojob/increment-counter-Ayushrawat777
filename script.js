//your JS code here. If required.
  const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
}; 
const incrementCount = document.getElementById("increment-count").addEventListener("click", handleIncrement);


const totalCount = document.getElementById("total-count");


var count = 0;


totalCount.innerHTML = count;