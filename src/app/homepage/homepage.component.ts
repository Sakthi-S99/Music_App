import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  count:number=0;
   counter :number[]=[0,0,0,0,0,0,0,0,0,0,0,0];
  constructor() { }

  ngOnInit(): void {
  }
  beast1():void{
    if(this.counter[0]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/beast1.mp3";
    this.counter[0]++;
    audio.load();
    audio.play();
  
    }else{
     
    }
  }
  asuran1():void{
    if(this.counter[1]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/dhuruv1.mp3";
    this.counter[1]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  beast2():void{
    if(this.counter[2]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/beast2.mp3";
    this.counter[2]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  dharbhaar1():void{
    if(this.counter[3]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/dharbhar2.mp3";
    this.counter[3]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  dharbhaar2():void{
    if(this.counter[4]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/dharbar1.mp3";
    this.counter[4]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  dhuruv1():void{
    if(this.counter[5]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/dhuruv1.mp3";
    this.counter[5]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  master1():void{
    if(this.counter[6]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/master1.mp3";
    this.counter[6]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  scam1():void{
    if(this.counter[7]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/scam1.mp3";
    this.counter[7]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  theri1():void{
    if(this.counter[8]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/beast1.mp3";
    this.counter[8]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  valimai1():void{
    if(this.counter[9]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/valimai1.mp3";
    this.counter[9]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  vikram1():void{
    if(this.counter[10]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/vikram1.mp3";
    this.counter[10]++;
    audio.load();
    audio.play();
    }else{

    }
  }
  don1():void{
    if(this.counter[11]==0){
    let audio=new Audio();
    audio.src="../assets/mp3/don1.mp3";
    this.counter[11]++;
    audio.load();
    audio.play();
    }else{

    }
  }
}