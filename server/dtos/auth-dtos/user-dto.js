module.exports = class UserDto {
  email;
  login;
  userId;
  role;

  constructor(model, email, role) {
    this.userId = model.id_user_info;
    this.login = model.login;
    this.email = email;
    this.role = role;
  }
};
