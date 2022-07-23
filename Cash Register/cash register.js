function checkCashRegister(price, cash, cid) {
  /** Value associated with different amount */
  let val = [ 
  [ 'ONE HUNDRED', 100 ],
  [ 'TWENTY', 20 ],
  [ 'TEN', 10 ],
  [ 'FIVE', 5 ],
  [ 'ONE', 1 ],
  [ 'QUARTER', 0.25 ],
  [ 'DIME', 0.1 ],
  [ 'NICKEL', 0.05 ],
  [ 'PENNY', 0.01 ] 
  ];

  let change = []; 
  let status = "";
  let newcid = [...cid].reverse();
  let totalMoney = 0;
  let moneyBack = cash - price; // Amount to be return 
  console.log(moneyBack)

  for (let i = 0; i < val.length; i++) {
    totalMoney += newcid[i][1]
    let numNotes = 0;

    while (val[i][1] <= moneyBack) {
      if (newcid[i][1] >= val[i][1] * (numNotes + 1)) {
        moneyBack = moneyBack.toFixed(3) - val[i][1];
        numNotes += 1;
      }
      else {
        break
      }  
    }
    if (numNotes > 0) {
      change.push([val[i][0], val[i][1] * numNotes]);
      numNotes = 0;
    }
    
  }
  if (moneyBack != 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } 
  else {
    if (totalMoney > cash - price){
      status = "OPEN";
    }
    else {
      status = "CLOSED";
      console.log(cid[0])
      change = cid;
    }
  } 


  let finalReturn = {"status": status, "change": change};
  
  console.log(finalReturn, totalMoney)
  return finalReturn;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
