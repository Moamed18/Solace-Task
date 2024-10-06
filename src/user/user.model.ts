import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class Country {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class Nationality {
  @Field(() => Country)
  country: Country;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
export class MaritalStatus {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class Passport {
  @Field(() => Int)
  id: number;

  @Field()
  passportNo: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;
}

@ObjectType()
export class User {
  @Field()
  title: string;

  @Field()
  birthDay: string;

  @Field()
  gender: string;

 

  @Field()
  firstName: string;

  

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => Passport)
  passport: Passport;
  

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field(() => Int)
  dependants: number;
}
