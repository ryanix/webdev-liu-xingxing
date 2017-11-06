export class Website {
  _id: String;
  name: String;
  _user: String;
  description: String;
  pages: String[];
  dateCreated: Date;

  constructor(name, developerId, description?) {
    this.name = name;
    this._user = developerId;
    this.description = description ? description : '';
    this.dateCreated = new Date();
    this.pages = [];
  }
}
