
function binomial(n, k) {
    if ((typeof n !== 'number') || (typeof k !== 'number')) 
 return false; 
   var coeff = 1;
   for (var x = n-k+1; x <= n; x++) coeff *= x;
   for (x = 1; x <= k; x++) coeff /= x;
   return coeff;
}

console.log(binomial(8,3));
console.log(binomial(10,2));

const a = {
  'mon': { 
   0: { trials: 3, sucess: 1}, //8am-9pm
   1: { trials: 2, sucess: 1}, //12pm-1pm
   2: { trials: 3, sucess: 2}, //4pm-5pm
   4: { trials: 1, sucess: 0} //all other hours
   },
  'tues': {
    0: { trials: 3, sucess: 1}, //8am-9pm
    1: { trials: 2, sucess: 1}, //12pm-1pm
    2: { trials: 3, sucess: 2}, //4pm-5pm
    4: { trials: 1, sucess: 0} //all other hours
  },
  'wed': {
    0: { trials: 3, sucess: 1}, //8am-9pm
    1: { trials: 2, sucess: 1}, //12pm-1pm
    2: { trials: 3, sucess: 2}, //4pm-5pm
    4: { trials: 1, sucess: 0} //all other hours
  },
  'thurs': {
    0: { trials: 3, sucess: 1}, //8am-9pm
    1: { trials: 2, sucess: 1}, //12pm-1pm
    2: { trials: 3, sucess: 2}, //4pm-5pm
    4: { trials: 1, sucess: 0} //all other hours
  },
  'fri': {
    0: { trials: 3, sucess: 1}, //8am-9pm
    1: { trials: 2, sucess: 1}, //12pm-1pm
    2: { trials: 3, sucess: 2}, //4pm-5pm
    4: { trials: 1, sucess: 0} //all other hours
  },
  'weekend': {
    0: { trials: 3, sucess: 1}, //8am-9pm
    1: { trials: 2, sucess: 1}, //12pm-1pm
    2: { trials: 3, sucess: 2}, //4pm-5pm
    4: { trials: 1, sucess: 0} //all other hours
  }
 }

 const time = '5:00'; //called from the API
 const day = 'mon'; //called from the API
 const x = a[day][time].trials
 const y = a[day][time].success

 binomial(x, y)
