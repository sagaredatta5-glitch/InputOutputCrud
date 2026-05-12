import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Imovie } from '../../models/movie';
import { uuidservice } from '../../service/uuid.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit,OnChanges {

  isinEditmode: boolean = false
  @ViewChild('title') title!: ElementRef
  @ViewChild('img') img!: ElementRef
  @ViewChild('content') content!: ElementRef

  @Output() eventaddmovie: EventEmitter<Imovie> = new EventEmitter<Imovie>()

  @Output() eventupdatemovie :EventEmitter<Imovie> = new EventEmitter<Imovie>()

  @Input() getedit!:Imovie
  constructor(private _uuid :uuidservice) { }
  ngOnChanges(changes: SimpleChanges): void {
   if(changes['getedit'].currentValue){
    this.isinEditmode=true
    this.title.nativeElement.value=this.getedit.moviename,
    this.img.nativeElement.value=this.getedit.img,
    this.content.nativeElement.value=this.getedit.content
   }
  }

  ngOnInit(): void {
  }

  onaddmovie() {
    if(this.title.nativeElement.value.length > 0){
      let movieobj: Imovie = {
      moviename: this.title.nativeElement.value,
      movieId:this._uuid.uuidfun(),
      img: this.img.nativeElement.value,
      content: this.content.nativeElement.value
    }
    this.eventaddmovie.emit(movieobj)
    this.title.nativeElement.value ='',
      this.img.nativeElement.value='',
      this.content.nativeElement.value=''
    }
    
    }

    onupdate(){
      let updated_obj :Imovie={
        moviename:this.title.nativeElement.value,
        img:this.img.nativeElement.value,
        content:this.content.nativeElement.value,
        movieId:this.getedit.movieId
      }
   this.eventupdatemovie.emit(updated_obj)
   this.isinEditmode=false

   this.title.nativeElement.value=''
   this.img.nativeElement.value=''
    this.content.nativeElement.value=''

    }
    

}
