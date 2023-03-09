export class User {
  private role: string;
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date,
  ) {
    if (this.id === 'lmtCSKCub7YwLslEmQBkOaY75rC2') {
      this.role = 'admin';
    } else {
      this.role = 'user';
    }
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return '';
    }
    return this._token;
  }
}
