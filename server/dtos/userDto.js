module.exports = class UserDto {
  id;
  username;
  isAdmin;

  constructor(model) {
    this.id = model._id;
    this.username = model.username;
    this.isAdmin = model.isAdmin;
  }
};
