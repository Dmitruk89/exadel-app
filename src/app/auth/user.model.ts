export class User {
  private _role: string;
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date,
  ) {
    if (this.id === 'lmtCSKCub7YwLslEmQBkOaY75rC2') {
      this._role = 'admin';
    } else {
      this._role = 'user';
    }
  }

  get role() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return '';
    }
    return this._role;
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return '';
    }
    return this._token;
  }
}
