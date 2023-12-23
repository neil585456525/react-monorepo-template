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

const apiLink = graphql.link('https://dev-api1.com');

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetProductQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ product })
 *   )
 * })
 */
export const mockGetProductQuery = (
  resolver: Parameters<
    typeof apiLink.query<GetProductQuery, GetProductQueryVariables>
  >[1]
) =>
  apiLink.query<GetProductQuery, GetProductQueryVariables>(
    'GetProduct',
    resolver
  );

export const aCustomer = (
  overrides?: Partial<Customer>,
  _relationshipsToOmit: Array<string> = []
): Customer => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Customer'];
  return {
    email:
      overrides && overrides.hasOwnProperty('email') ? overrides.email! : 'sit',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : 'c7b2f704-dc93-438d-b0a1-216e8083ef04',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'qui',
  };
};

export const aMutation = (
  overrides?: Partial<Mutation>,
  _relationshipsToOmit: Array<string> = []
): Mutation => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Mutation'];
  return {
    createProduct:
      overrides && overrides.hasOwnProperty('createProduct')
        ? overrides.createProduct!
        : relationshipsToOmit.includes('Product')
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
    deleteProduct:
      overrides && overrides.hasOwnProperty('deleteProduct')
        ? overrides.deleteProduct!
        : relationshipsToOmit.includes('Product')
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
    updateProduct:
      overrides && overrides.hasOwnProperty('updateProduct')
        ? overrides.updateProduct!
        : relationshipsToOmit.includes('Product')
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
  };
};

export const aProduct = (
  overrides?: Partial<Product>,
  _relationshipsToOmit: Array<string> = []
): Product => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Product'];
  return {
    description:
      overrides && overrides.hasOwnProperty('description')
        ? overrides.description!
        : 'qui',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '9983bd3e-4f2a-444b-8e81-349ed54ed801',
    image:
      overrides && overrides.hasOwnProperty('image')
        ? overrides.image!
        : 'recusandae',
    name:
      overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nihil',
    price:
      overrides && overrides.hasOwnProperty('price') ? overrides.price! : 5.01,
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Array<string> = []
): Query => {
  const relationshipsToOmit = [..._relationshipsToOmit, 'Query'];
  return {
    customer:
      overrides && overrides.hasOwnProperty('customer')
        ? overrides.customer!
        : relationshipsToOmit.includes('Customer')
        ? ({} as Customer)
        : aCustomer({}, relationshipsToOmit),
    customers:
      overrides && overrides.hasOwnProperty('customers')
        ? overrides.customers!
        : [
            relationshipsToOmit.includes('Customer')
              ? ({} as Customer)
              : aCustomer({}, relationshipsToOmit),
          ],
    product:
      overrides && overrides.hasOwnProperty('product')
        ? overrides.product!
        : relationshipsToOmit.includes('Product')
        ? ({} as Product)
        : aProduct({}, relationshipsToOmit),
    products:
      overrides && overrides.hasOwnProperty('products')
        ? overrides.products!
        : [
            relationshipsToOmit.includes('Product')
              ? ({} as Product)
              : aProduct({}, relationshipsToOmit),
          ],
  };
};
