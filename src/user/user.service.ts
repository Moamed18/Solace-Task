import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UserInput } from './user-input.model';

@Injectable()
export class UserService {
  private user: User = {
    title: 'Mr.',
    birthDay: '2024-07-24',
    gender: 'Male',
    firstName: 'Zaria',
    fatherName: 'Edward',
    grandfatherName: 'Ernest',
    familyName: 'Willie',
    localizedName: {
      firstName: 'صفوان',
      fatherName: 'حمدان',
      grandfatherName: 'هشام',
      familyName: 'عباس',
    },
    nationalId: {
      idNumber: "12458954",
      expiryDate: '2024-07-24T22:45:29.864Z',
    },
    passport: {
      id:24,
      passportNo: "1248485254785181",
      passportIssueDate: '2024-07-24T22:45:29.864Z',
      passportExpiryDate: '2024-07-24T22:45:29.864Z',
    },
    nationalities: [
      {
        country: {
          id: 1016,
          name: 'Bolivia',
        },
        countryId: 1016,
      },
      {
        country: {
          id: 1117,
          name: 'Latvia',
        },
        countryId: 1117,
      },
    ],
    maritalStatus: {
      id: 27,
      name: 'Divorced',
    },
    dependants: 60,
  };

  
  getUser(): User {
    return this.user;
  }

  updateUser(userData: UserInput): User {
    this.user = { ...this.user, ...userData };
    return this.user;
  }
}
