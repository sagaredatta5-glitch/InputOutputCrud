import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';
import { snackbarservice } from '../../service/snackbar.service';

@Component({
  selector: 'app-card-dashbord',
  templateUrl: './card-dashbord.component.html',
  styleUrls: ['./card-dashbord.component.scss']
})
export class CardDashbordComponent implements OnInit {

  editobj!:Imovie

moviecardarry:Array<Imovie> = [
  {
    moviename : 'Raja Shivaji',
    movieId:'12',
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Jnrb1MrEJ9ROsAesY0Gmwlee6uhy9_27JQPJxnaQi1VKo0EvUcCaNoztu3w46pKp4BaUdzDPwWV5U8dxyzeeXiQK5qrEdpBo-54XyKyc&s=10",
    content :"Raja Shivaji (transl. King Shivaji) is a 2026 Indian historical action drama film co-written and directed by Riteish Deshmukh, based on the life of Shivaji, the founder of the Maratha Empire"
  },
  {
    moviename:'KGF',
    movieId:'13',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgN-FJpyrGSVclI5aVaLKG6e1BrhtniMtJB8I90pVhHtRrWWbbyJliK9OGTtaik4RAWBlVj3O8hbXzUGcL24Mogy-n5TB9wTLWeSO6W844g&s=10",
    content:"In the 1970s, a gangster named Rocky goes undercover as a slave to assassinate the owner of a notorious gold mine known as the Kolar Gold Fields."
  },
  {
    moviename:"Pushpa 2",
    movieId:'14',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEB12dMPcTAv-jrN6VTQkB7ZSxMnHdUDxRhHwfDU1t3f5ncpyJEWmDkh-gFk3Iwb3sTazkHF5ae8mSktnzHh_GcLUDsU6n4TdVhob668dv&s=10",
    content:"Pushpa Raj (Allu Arjun) a coolie, volunteers to smuggle red sanders, a rare wood that only grows in Andhra, with the help of novel ideas to smuggle the red"
  }

]

  constructor(private _snackbar:snackbarservice) { }

  ngOnInit(): void {
  }

  onaddmovie(eve:Imovie){
    this.moviecardarry.push(eve)
    this._snackbar.opensnackbar(`Movie Added Successfully`)
  }

  onremove(mid:string){
    let getIndex = this.moviecardarry.findIndex(t=>(t.movieId===mid))
    this.moviecardarry.splice(getIndex,1)
    this._snackbar.opensnackbar(`Movie Remove Successfully`)
  }

  onedit(edit:Imovie){
this.editobj=edit
  }

  onupdate(eve:Imovie){
    let getIndex =this.moviecardarry.findIndex(t=>(t.movieId===eve.movieId))
    this.moviecardarry[getIndex]=eve
this._snackbar.opensnackbar(`Movie Updated Successfully`)
  }

 
}
