export class Page {
  private _pageNumber: number;
  private _pageType: string;
  private _pageMaterial: string;

  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this._pageNumber = pageNumber;
    this._pageType = pageType;
    this._pageMaterial = pageMaterial;
  }

  get pageNumber() {
    return this._pageNumber;
  }

  get pageType() {
    return this._pageType;
  }

  get pageMaterial() {
    return this._pageMaterial;
  }

  toString(): string {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}
