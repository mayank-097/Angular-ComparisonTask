import { Component } from '@angular/core';
import { packageinfo } from './packageInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Comparisontask';

  pack:packageinfo[]=[];
  selectedpack:packageinfo[]=[];
  filteredpack:packageinfo[]=[]
  enteredpackage:string="e";
  status=false;
  length:number=0;
  delindex:number=0;

  constructor(){
    this.pack.push(new packageinfo("Kerala" , 3 , 85000 , 20 , 10));
    this.pack.push(new packageinfo("Kerala" , 5 , 125000 , 25 , 40));
    this.pack.push(new packageinfo("Kerala" , 7 , 155000 , 30 , 50));
    this.pack.push(new packageinfo("Kerala" , 1 , 15000 , 10 , 15));
    this.pack.push(new packageinfo("Manali" , 3 , 85000 , 20 , 120));
    this.pack.push(new packageinfo("Manali" , 6 , 135000 , 25 , 60));
    this.pack.push(new packageinfo("Manali" , 10 , 205000 , 30 , 90));
    this.pack.push(new packageinfo("Mathura" , 1 , 12000 , 10 , 10));
    this.pack.push(new packageinfo("Mathura" , 2 , 18000 , 20 , 40));
    this.pack.push(new packageinfo("Mathura" , 5 , 35000 , 30 , 150));
    this.pack.push(new packageinfo("Mathura" , 7 , 55000 , 40 , 60));
    this.pack.push(new packageinfo("Shimla" , 1 , 11000 , 10 , 80));
    this.pack.push(new packageinfo("Shimla" , 3 , 25000 , 20 , 120));
    this.pack.push(new packageinfo("Shimla" , 6 , 55000 , 20 , 110));
    this.pack.push(new packageinfo("Shimla" , 10 , 85000 , 30 , 10));
    this.pack.push(new packageinfo("Goa" , 3 , 85000 , 20 , 60));
    this.pack.push(new packageinfo("Goa" , 3 , 85000 , 20 , 30));
    this.pack.push(new packageinfo("Goa" , 3 , 85000 , 20 , 10));
    
  }

  

  addpackage(pack:packageinfo)
  {
      
      
      if(this.selectedpack.includes(pack))
      {

      this.delindex=this.selectedpack.indexOf(pack);
      this.selectedpack.splice(this.delindex,1);
      console.log(this.selectedpack)
      
      this.length--;
      
      }
      else{
        if(this.length==2)
      {
        alert("cannot compare more than two packages");
        this.selectedpack.push(pack);
        this.length++;
      }
      else{
      this.selectedpack.push(pack);
      console.log(this.selectedpack)
      this.length++;}
     
      }
      
    

  }

  searchPackage(name:string)
  {

    this.filteredpack=[];
    for(let mpackage of this.pack)
    {
      if(mpackage.packageName==name)
      this.filteredpack.push(mpackage)
      this.enteredpackage=name;
    }
    this.status=true;

  }
  
}
