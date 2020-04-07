import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Calculator';
 public bilangan1 : number
 public bilangan2 : number
 public codeValue : string
 public listHasil : Array<number> = []

 hasil : number
 jumlah() : number {
    this.hasil = this.bilangan1+this.bilangan2
    return this.hasil
 }
 kurang() : number{
  this.hasil =  this.bilangan1-this.bilangan2
    return this.hasil
 }
 kali() : number {
  this.hasil =  this.bilangan1*this.bilangan2
   return this.hasil
 }
 bagi() : number{
  this.hasil =  this.bilangan1/this.bilangan2
   return this.hasil
 }
 operationList = [
   {id : 1, name : "penjumlahan"},
   {id : 2, name : "pengurangan"},
   {id : 3, name : "perkalian"},
   {id : 4, name : "pembagian"}]

   public saveCode(e): void {
    let name = e.target.value;
    let list = this.operationList.filter(x => x.name === name)[0];
    console.log(list.id);
    if(list.name == "penjumlahan"){
      this.jumlah()
    } else if (list.name == "pengurangan"){
      this.kurang()
    } else if (list.name == "perkalian") {
      this.kali()
   } else if (list.name == "pembagian") {
     this.bagi()
   }
  }
  cetak(){
    this.listHasil.push(this.hasil)
 }
}
