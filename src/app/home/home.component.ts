import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  redirect() {
    this.router.navigateByUrl('/dstrhome');
  }

ngOnInit(): void {

  var reloadtimes = getCookie("reloadtimes");

  
  
  var reloadnumber = parseInt(reloadtimes);
  console.log(getCookie("reloadtimes"));

  deleteCookie("reloadtimes")

  if(reloadnumber >= 24){
    this.redirect();
    alert("Y̴͙̙͔̎̈́O̷̮͚͕̳̽͌Ư̴͙̤̞̜̂͛̍ ̴̗̈͊̏W̵̡̲̼̐̓I̴͈̲͈̿̆ͅL̵̠̖̰̈́̏̿L̷̯̳͚̈̏̚ ̷̨͓͒̎̆D̴̺̳͕͖̒I̸̲̣͉͑͑̕͝E̶̦̓̽̍ ̴̥̉•̷̱͍̘̈́̀̓ ̷̮̗̒T̸͙͎̝͋O̸̪̳̲̓͛͐͊͜Ṉ̴͈̔̀͜I̴̬͎̲͗͘͠G̸̤̥̰̬̾H̵̬̺̔̆̃Ṱ̷̍̕");
    alert("Y̴͙̙͔̎̈́O̷̮͚͕̳̽͌Ư̴͙̤̞̜̂͛̍ ̴̗̈͊̏W̵̡̲̼̐̓I̴͈̲͈̿̆ͅL̵̠̖̰̈́̏̿L̷̯̳͚̈̏̚ ̷̨͓͒̎̆D̴̺̳͕͖̒I̸̲̣͉͑͑̕͝E̶̦̓̽̍ ̴̥̉•̷̱͍̘̈́̀̓ ̷̮̗̒T̸͙͎̝͋O̸̪̳̲̓͛͐͊͜Ṉ̴͈̔̀͜I̴̬͎̲͗͘͠G̸̤̥̰̬̾H̵̬̺̔̆̃Ṱ̷̍̕");
    alert("Y̴͙̙͔̎̈́O̷̮͚͕̳̽͌Ư̴͙̤̞̜̂͛̍ ̴̗̈͊̏W̵̡̲̼̐̓I̴͈̲͈̿̆ͅL̵̠̖̰̈́̏̿L̷̯̳͚̈̏̚ ̷̨͓͒̎̆D̴̺̳͕͖̒I̸̲̣͉͑͑̕͝E̶̦̓̽̍ ̴̥̉•̷̱͍̘̈́̀̓ ̷̮̗̒T̸͙͎̝͋O̸̪̳̲̓͛͐͊͜Ṉ̴͈̔̀͜I̴̬͎̲͗͘͠G̸̤̥̰̬̾H̵̬̺̔̆̃Ṱ̷̍̕");
    alert("Y̴͙̙͔̎̈́O̷̮͚͕̳̽͌Ư̴͙̤̞̜̂͛̍ ̴̗̈͊̏W̵̡̲̼̐̓I̴͈̲͈̿̆ͅL̵̠̖̰̈́̏̿L̷̯̳͚̈̏̚ ̷̨͓͒̎̆D̴̺̳͕͖̒I̸̲̣͉͑͑̕͝E̶̦̓̽̍ ̴̥̉•̷̱͍̘̈́̀̓ ̷̮̗̒T̸͙͎̝͋O̸̪̳̲̓͛͐͊͜Ṉ̴͈̔̀͜I̴̬͎̲͗͘͠G̸̤̥̰̬̾H̵̬̺̔̆̃Ṱ̷̍̕");
    alert("Y̴͙̙͔̎̈́O̷̮͚͕̳̽͌Ư̴͙̤̞̜̂͛̍ ̴̗̈͊̏W̵̡̲̼̐̓I̴͈̲͈̿̆ͅL̵̠̖̰̈́̏̿L̷̯̳͚̈̏̚ ̷̨͓͒̎̆D̴̺̳͕͖̒I̸̲̣͉͑͑̕͝E̶̦̓̽̍ ̴̥̉•̷̱͍̘̈́̀̓ ̷̮̗̒T̸͙͎̝͋O̸̪̳̲̓͛͐͊͜Ṉ̴͈̔̀͜I̴̬͎̲͗͘͠G̸̤̥̰̬̾H̵̬̺̔̆̃Ṱ̷̍̕");
  } 
  

 

}



}







function setCookie(name: string, val: string) {
const date = new Date();
const value = val;

// Set it expire in 7 days
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

// Set it
document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

function getCookie(name: string) {
const value = "; " + document.cookie;
const parts = value.split("; " + name + "=");

if (parts.length == 2) {
    return parts.pop().split(";").shift();
}
}

function deleteCookie(name: string) {
const date = new Date();

// Set it expire in -1 days
date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

// Set it
document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}