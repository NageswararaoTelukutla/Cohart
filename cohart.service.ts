import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from '../shared/api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class CohartService {

  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(ApiUrls.coharts)
    
  }

  postData(data: any): Observable<any> {
    return this.http.post(ApiUrls.coharts, data)
}

updateData(data: any, id: any): Observable<any> {
  return this.http.patch(ApiUrls.coharts+'/' + id, data)
}

getDataById(id){
 return this.http.get(ApiUrls.coharts+'/' + id)
}

// deleteData(id: string): Observable<any> {
//   return this.http.delete("http://localhost:5000/api/coharts/"+id)
// }

}


