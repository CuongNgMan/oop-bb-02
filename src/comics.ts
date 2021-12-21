import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
  static readonly typeName = 'Comics';

  private _author: string;
  private _artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages, title);

    this._author = author;
    this._artist = artist;
  }

  toString(): string {
    return `${Comics.typeName}: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.length}`;
  }

  get author() {
    return this._author;
  }

  get artist() {
    return this._artist;
  }
}
