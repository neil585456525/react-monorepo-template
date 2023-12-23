import { DocumentNode } from 'graphql';
import {
  useQuery,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { api1Fetcher } from 'api';
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

export const GetUser = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

export const GetUserDocument = `
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
    `;
export const useGetUserQuery = <TData = GetUserQuery, TError = FetchErrorType>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['GetUser', variables],
    api1Fetcher<GetUserQuery, GetUserQueryVariables>(
      GetUserDocument,
      variables
    ),
    options
  );

useGetUserQuery.getKey = (variables: GetUserQueryVariables) => [
  'GetUser',
  variables,
];
export const useInfiniteGetUserQuery = <
  TData = GetUserQuery,
  TError = FetchErrorType
>(
  variables: GetUserQueryVariables,
  options?: UseInfiniteQueryOptions<GetUserQuery, TError, TData>
) => {
  return useInfiniteQuery<GetUserQuery, TError, TData>(
    ['GetUser.infinite', variables],
    (metaData) =>
      api1Fetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, {
        ...variables,
        ...(metaData.pageParam ?? {}),
      })(),
    options
  );
};

useInfiniteGetUserQuery.getKey = (variables: GetUserQueryVariables) => [
  'GetUser.infinite',
  variables,
];
useGetUserQuery.fetcher = (
  variables: GetUserQueryVariables,
  options?: RequestInit['headers']
) =>
  api1Fetcher<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    variables,
    options
  );
