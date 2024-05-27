module.exports = class UserDto {
  email;
  login;
  isActivated;
  userId;

  constructor(model, email) {
    this.login = model.login;
    this.userId = model.id_user_info;
    this.isActivated = model.is_activated;
    this.email = email;
  }
};
