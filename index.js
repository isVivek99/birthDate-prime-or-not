var readlinesync = require("readline-sync");
const chalk = require("chalk");

var name = readlinesync.question(chalk.blue.bgRed.bold(chalk.green("enter your name: ")));
console.log(chalk.red.bold.underline("welcome "+name+" to the leap year app!"));

var birthDate = readlinesync.question("Enter your birthdate; in the format:(dd/mm):");
var array = birthDate.split("/");

var date = array[0];
var month = array[1];
const error = chalk.red;

function check(date, month){
  
  if(month>=1 && month<=12){

    if(month==2 && date>28){
      console.log(error('Error:')+"check date!");
      return false;
    }
    if(month%2!=0){
      if(date>=1 && date<=31){
        return true;
      }
    }

    if(month%2==0){
      if(date>=1 && date<=30){
        return true;
      }
    }

  }
  console.log(chalk.red.bold.underline("please check date and month!!"));
  return false;
}

if(check(date, month)){
  if((date%2!=0)&& (date%Math.sqrt(date)!=0)){
    console.log(chalk.blue.bgRed.bold(chalk.green("prime number")));
  }else{
    console.log(chalk.blue.bgRed.bold(chalk.green("not prime number \nOR\n  Check input if date and month are correct")));
  }
}

