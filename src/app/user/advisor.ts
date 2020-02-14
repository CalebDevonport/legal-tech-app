import { UserType } from './user-types';
import { User } from './user';

export class Advisor extends User {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public password: string,
    public userType: UserType,
    public sraID: number,
    public phoneNumber?: string
  ) {
    super(id, firstName, lastName, emailAddress, password, userType, phoneNumber);
  }
}
