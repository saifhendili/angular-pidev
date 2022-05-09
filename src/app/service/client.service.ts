import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {

   }
   getusers():Observable<any>{
    return this.httpClient.get("http://localhost:8083/women/user/get-allUsers")
  }
  deleteUser( idp:any){
    return this.httpClient.delete("http://localhost:8083/women/user/delete-profil/"+idp)
  }
}
