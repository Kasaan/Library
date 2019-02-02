import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'l-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

    books: Book[];

    book: Book = new Book();

    constructor(public service: BookService) { }

    ngOnInit() {
        this.getBooks();
    }

    getBooks(): void {
        this.service.get()
            .subscribe(books => this.books = books);
    }

    addBook(): void {
        this.service.add(this.book)
            .subscribe(book => {
                this.books.push(book);
            });
    }

}
