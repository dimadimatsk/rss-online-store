module.exports = class UserDto {
  id;
  username;
  email;
  isAdmin;

  constructor(model) {
    this.id = model._id;
    this.username = model._username;
    this.email = model._email;
    this.isAdmin = model._isAdmin;
  }
};
