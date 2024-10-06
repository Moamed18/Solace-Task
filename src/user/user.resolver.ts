import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './user.model';
import { UserInput } from './user-input.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => User, { name: 'user' })
  getUser(@Args('id', { type: () => Int }) id: number): User {
    return this.userService.getUser();
  }

  @Mutation(() => User)
  editUser(@Args('userData') userData: UserInput): User {
    return this.userService.updateUser(userData);
  }
}
