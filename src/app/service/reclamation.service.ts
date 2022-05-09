import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }

  getReclamation(): Observable<any> {  
    return this.http.get("http://localhost:8083/women/Reclamation/get-allReclamation");  
  }  

  createReclamation(Reclamation: any):Observable<any> {  
    return this.http.post("http://localhost:8083/women/Reclamation/add", Reclamation);  
  } 

  PublicationupdatePost(Reclamation:any){
    return this.http.put("http://localhost:8083/women/Reclamation/modify-post",Reclamation)


  }
  deletePost( id:any){
    return this.http.delete("http://localhost:8083/women/Reclamation/delete-reclamation/"+id)

  }
}
