import { Item } from './item';
import { Page } from './page';
import { Pages } from './pages';

export class Book extends Item {
  static readonly typeName = 'Book';

  private _author: string;

  constructor(title: string, author: string, pages: Pages) {
    super(pages, title);

    this._author = author;
  }

  get author() {
    return this._author;
  }

  toString(): string {
    return `${Book.typeName}: ${this.title} by ${this.author} with number of pages: ${this.length}`;
  }
}

