//your JS code here. If required.
   let count = 0;
      const incrementBtn = () => {
        count++;
        alert(count)
        document.getElementById("counter").innerHTML = count;
      };