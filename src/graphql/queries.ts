import { gql } from '@apollo/client';

export const EDIT_USER = gql`
    mutation EditUser($userData: UserInput!) {
        editUser(userData: $userData) {
            title
            birthDay
            gender
            firstName
            grandfatherName
            familyName
            dependants
            localizedName {
                firstName
                fatherName
                grandfatherName
                familyName
            }
            passport {
                id
                passportNo
                passportIssueDate
                passportExpiryDate
            }
            nationalId {
                idNumber
                expiryDate
            }
            nationalities {
                countryId
                country {
                    id
                    name
                }
            }
            maritalStatus {
                id
                name
            }
            fatherName
        }
    }
`;

export const GET_USER = gql`
  query User {
    user(id: 1) {
      title
      birthDay
      gender
      firstName
      fatherName
      grandfatherName
      familyName
      dependants
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
         passport {
      id
      passportNo
      passportIssueDate
      passportExpiryDate
    }
     
      nationalities {
        countryId
        country {
          id
          name
        }
      }
      maritalStatus {
        id
        name
      }
    }
  }
`;
export interface Nationality {
  countryId: number;
  country: {
    id: number;
    name: string;
  };
}

export interface Passport {
  id: number;
  passportNo: string;
  passportIssueDate: string;
  passportExpiryDate: string;
}

export interface NationalId {
  idNumber: string;
  expiryDate: string;
}

export interface LocalizedName {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

export interface MaritalStatus {
  id: number;
  name: string;
}



export interface User {
  title: string;
  birthDay: string;
  gender: string;
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  dependants: number;
  localizedName: LocalizedName;
  nationalId: NationalId;
  passport: Passport;
  nationalities: Nationality[];
  maritalStatus: MaritalStatus;
}

export interface GetUserResponse {
  user: User;
}
