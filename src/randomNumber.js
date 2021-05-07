const randomNumber = () => {

   let number = "06";
   for (let k = 0; k < 8; k++) {
      number += ((k % 2 === 0 ? "-" : "") + Math.floor(Math.random() * 10))
   }
   return number;

}

module.exports = { randomNumber }
