import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Test} from '../../models/test';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../../models/subject';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {
  }

  getTests(): Observable<Subject<Test>> {
    return this.http.get<Subject<Test>>(`http://localhost:44347/api/tests`);
  }
}
