import { Page } from './page';
import { Pages } from './pages';

let v;

export class PagesIterable implements IterableIterator<Page> {
  private _pages: Pages;

  constructor(pages: Pages) {
    this._pages = pages;
  }

  next(): IteratorResult<Page> {
    const result = this.pages.next();

    if (result.done) {
      return { value: null, done: true };
    }

    return { value: result.value, done: false };
  }

  [Symbol.iterator](): IterableIterator<Page> {
    return this;
  }

  get length() {
    return this._pages.length;
  }

  get pages() {
    return this._pages;
  }
}
