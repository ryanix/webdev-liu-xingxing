export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  websites: String[];
  dateCreated: Date;
  constructor( username, password, firstName?, lastName?) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
