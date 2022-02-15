import { UserData } from './../interfaces/interfaces';
export const Users: UserData[] = [{ role: 'admin' }, { role: 'user' }];

export enum Roles {
  admin = 'admin',
  user = 'user',
}
