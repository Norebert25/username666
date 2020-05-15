import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  constructor(private router: Router) {}

  redirect() {
    this.router.navigateByUrl('/dstrvideo');
  }

ngOnInit(): void {

  var reloadtimes = getCookie("reloadtimes");

  
  if( typeof(reloadtimes) != "string" ){
    setCookie("reloadtimes","1")
    console.log(reloadtimes);
  }else{
    var reloadnumber = parseInt(reloadtimes);
    reloadnumber ++;
    console.log(reloadnumber);
    setCookie("reloadtimes",  reloadnumber + "");
  }
  
  console.log(getCookie("reloadtimes"));
  deleteCookie("reloadtimes")


  if(reloadnumber >= 24) this.redirect();

 

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