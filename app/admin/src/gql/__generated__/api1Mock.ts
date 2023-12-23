import { graphql } from 'msw';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: User;
  updateUser: User;
};

export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user: Maybe<User>;
  users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'User'; id: string; name: string; email: string };
};

const apiLink = graphql.link('https://dev-api1.com');

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetUserQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ user })
 *   )
 * })
 */
export const mockGetUserQuery = (
  resolver: Parameters<
    typeof apiLink.query<GetUserQuery, GetUserQueryVariables>
  >[1]
) => apiLink.query<GetUserQuery, GetUserQueryVariables>('GetUser', resolver);

export const aMutation = (
  overrides?: Partial<Mutation>,
  _relationshipsToOmit: Array<string> = []
): Mutation => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Mutation'];
  return {
    createUser:
      overrides && overrides.hasOwnProperty('createUser')
        ? overrides.createUser!
        : relationshipsToOmit.includes('User')
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    deleteUser:
      overrides && overrides.hasOwnProperty('deleteUser')
        ? overrides.deleteUser!
        : relationshipsToOmit.includes('User')
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    updateUser:
      overrides && overrides.hasOwnProperty('updateUser')
        ? overrides.updateUser!
        : relationshipsToOmit.includes('User')
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Array<string> = []
): Query => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Query'];
  return {
    user:
      overrides && overrides.hasOwnProperty('user')
        ? overrides.user!
        : relationshipsToOmit.includes('User')
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    users:
      overrides && overrides.hasOwnProperty('users')
        ? overrides.users!
        : [
            relationshipsToOmit.includes('User')
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
  };
};

export const aUser = (
  overrides?: Partial<User>,
  _relationshipsToOmit: Array<string> = []
): User => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'User'];
  return {
    email:
      overrides && overrides.hasOwnProperty('email')
        ? overrides.email!
        : 'sunt',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'a5756f00-41a6-422a-8a7d-d13ee6a63750',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'porro',
  };
};
