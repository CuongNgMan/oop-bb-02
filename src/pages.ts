import { Page } from './page';

export class Pages implements Iterator<Page> {
  private _pages: Page[] = [];
  private _index: number = 0;

  constructor(pages: Page[]) {
    this._pages = pages;
    this._index = 0;
  }

  next(): IteratorResult<Page, Page | null> {
    if (this._index < this._pages.length) {
      return { value: this._pages[this._index++], done: false };
    } else {
      this.resetIndex();
      return { value: null, done: true };
    }
  }

  private resetIndex() {
    this._index = 0;
  }

  get index() {
    return this._index;
  }

  get length() {
    return this._pages.length;
  }
}
