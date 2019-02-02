import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class BookService {

    url = 'api/library/mocks/book';

    constructor(private http: HttpClient) {}

    get(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url);
    }

    add(newBook: Book): Observable<Book> {
        return this.http.post<Book>(this.url, newBook, httpOptions);
    }
}
