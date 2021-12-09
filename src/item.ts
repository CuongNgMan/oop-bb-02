import { Pages } from './pages';
import { PagesIterable } from './pages-iterable';

export abstract class Item implements IterableIterator<string> {
  private _title: string;
  private _pages: Pages;
  private _pagesIterable: PagesIterable;

  constructor(pages: Pages, title: string) {
    this._pages = pages;
    this._title = title;
    this._pagesIterable = new PagesIterable(pages);
  }

  next(): IteratorResult<string> {
    const result = this._pagesIterable.next();
    if (result.done || !result.value) {
      return { value: '', done: true };
    }

    const v = `${this.toString()}, ${result.value.toString()}`;
    return { value: v, done: false };
  }

  [Symbol.iterator](): IterableIterator<string> {
    return this;
  }

  get title() {
    return this._title;
  }

  get pages() {
    return this._pages;
  }

  get length() {
    return this.pages.length;
  }

  abstract toString(): string;
}
