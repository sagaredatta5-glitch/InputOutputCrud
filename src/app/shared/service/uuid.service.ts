import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class uuidservice{

    uuidfun() : string{
     return Date.now().toString()
    }
}