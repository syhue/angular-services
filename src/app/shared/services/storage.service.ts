import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private http: HttpClient) { }

  storeData(value: any) {
    
  }

}
