import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
  static readonly typeName = 'Magazine';
  constructor(title: string, pages: Pages) {
    super(pages, title);
  }

  toString(): string {
    return `${Magazine.typeName}: ${this.title} with number of pages: ${this.length}`;
  }
}
