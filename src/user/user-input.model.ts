import { InputType, Field } from '@nestjs/graphql';

@InputType()
class LocalizedNameInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
class CountryInput {
  @Field()
  id: number;

  @Field()
  name: string;
}

@InputType()
class NationalityInput {
  @Field(() => CountryInput)
  country: CountryInput;

  @Field()
  countryId: number;
}

@InputType()
class MaritalStatusInput {
  @Field()
  id: number;

  @Field()
  name: string;
}

@InputType()
class PassportInput {
  @Field()
  id: number;

  @Field()
  passportNo: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;
}

@InputType()
export class UserInput {
  @Field()
  title: string;

  @Field()
  birthDay: string;

  @Field()
  gender: string;

  @Field(() => PassportInput)
  passport: PassportInput;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedNameInput)
  localizedName: LocalizedNameInput;

  @Field(() => NationalIdInput)
  nationalId: NationalIdInput;

  @Field(() => [NationalityInput])
  nationalities: NationalityInput[];

  @Field(() => MaritalStatusInput)
  maritalStatus: MaritalStatusInput;

  @Field()
  dependants: number;
}
