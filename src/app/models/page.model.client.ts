export class Page {
  _website: String;
  name: String;
  description: String;
  title: String;
  dateCreated: Date;
  widgets: String[];

  constructor(name, websiteId, description?) {
    this.name = name;
    this._website = websiteId;
    this.description = description ? description : '';
    this.widgets = [];
    this.title = '';
    this.dateCreated = new Date();
  }
}
