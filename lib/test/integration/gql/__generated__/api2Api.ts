import { DocumentNode } from 'graphql';
import {
  useQuery,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { api2Fetcher } from 'api';
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

export type Customer = {
  __typename?: 'Customer';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  deleteProduct: Product;
  updateProduct: Product;
};

export type MutationCreateProductArgs = {
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateProductArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  customer: Maybe<Customer>;
  customers: Array<Customer>;
  product: Maybe<Product>;
  products: Array<Product>;
};

export type QueryCustomerArgs = {
  id: Scalars['ID'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetProductQuery = {
  __typename?: 'Query';
  product: {
    __typename?: 'Product';
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };
};

export const GetProduct = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProduct' },
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
            name: { kind: 'Name', value: 'product' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;

export const GetProductDocument = `
    query GetProduct($id: ID!) {
  product(id: $id) {
    id
    name
    price
    description
    image
  }
}
    `;
export const useGetProductQuery = <
  TData = GetProductQuery,
  TError = FetchErrorType
>(
  variables: GetProductQueryVariables,
  options?: UseQueryOptions<GetProductQuery, TError, TData>
) =>
  useQuery<GetProductQuery, TError, TData>(
    ['GetProduct', variables],
    api2Fetcher<GetProductQuery, GetProductQueryVariables>(
      GetProductDocument,
      variables
    ),
    options
  );

useGetProductQuery.getKey = (variables: GetProductQueryVariables) => [
  'GetProduct',
  variables,
];
export const useInfiniteGetProductQuery = <
  TData = GetProductQuery,
  TError = FetchErrorType
>(
  variables: GetProductQueryVariables,
  options?: UseInfiniteQueryOptions<GetProductQuery, TError, TData>
) => {
  return useInfiniteQuery<GetProductQuery, TError, TData>(
    ['GetProduct.infinite', variables],
    (metaData) =>
      api2Fetcher<GetProductQuery, GetProductQueryVariables>(
        GetProductDocument,
        { ...variables, ...(metaData.pageParam ?? {}) }
      )(),
    options
  );
};

useInfiniteGetProductQuery.getKey = (variables: GetProductQueryVariables) => [
  'GetProduct.infinite',
  variables,
];
useGetProductQuery.fetcher = (
  variables: GetProductQueryVariables,
  options?: RequestInit['headers']
) =>
  api2Fetcher<GetProductQuery, GetProductQueryVariables>(
    GetProductDocument,
    variables,
    options
  );
