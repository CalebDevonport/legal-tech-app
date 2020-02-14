import { UserType } from './user-types';
export class User {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public password: string,
    public userType: UserType,
    public phoneNumber?: string
  ) {}
}
