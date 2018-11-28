import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'}),
  observe: "response" as 'body'
}; 

@Injectable({
  providedIn: 'root'
})


export class MyserviceService {
  constructor(private http:HttpClient) { } 

  link :string = "http://localhost/workspace/workspace.php?data=tes";

  insert (user) {
    return this.http.post(this.link,user,httpOptions).subscribe(
    (res:Response) => {
      console.log(res.body['validasi']);
      // you can assign the value to any variable here
    }, err => {
      throw err;
    });  
  } 

}
 