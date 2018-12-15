export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  book?: Maybe<Book>;

  books?: Maybe<(Maybe<Book>)[]>;

  booksWithTransactons?: Maybe<(Maybe<BookWithTransaction>)[]>;
}

export interface Book {
  isbn?: Maybe<number>;

  name?: Maybe<string>;
}

export interface BookWithTransaction {
  isbn?: Maybe<number>;

  name?: Maybe<string>;

  transaction_id?: Maybe<number>;

  buyer?: Maybe<string>;

  price?: Maybe<number>;
}

export interface Transaction {
  transaction_id?: Maybe<number>;

  isbn?: Maybe<number>;

  buyer?: Maybe<string>;

  price?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface BookQueryArgs {
  isbn: number;
}
export interface BooksQueryArgs {
  name?: Maybe<string>;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    book?: BookResolver<Maybe<Book>, TypeParent, Context>;

    books?: BooksResolver<Maybe<(Maybe<Book>)[]>, TypeParent, Context>;

    booksWithTransactons?: BooksWithTransactonsResolver<
      Maybe<(Maybe<BookWithTransaction>)[]>,
      TypeParent,
      Context
    >;
  }

  export type BookResolver<
    R = Maybe<Book>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, BookArgs>;
  export interface BookArgs {
    isbn: number;
  }

  export type BooksResolver<
    R = Maybe<(Maybe<Book>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, BooksArgs>;
  export interface BooksArgs {
    name?: Maybe<string>;
  }

  export type BooksWithTransactonsResolver<
    R = Maybe<(Maybe<BookWithTransaction>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace BookResolvers {
  export interface Resolvers<Context = {}, TypeParent = Book> {
    isbn?: IsbnResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IsbnResolver<
    R = Maybe<number>,
    Parent = Book,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Book,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace BookWithTransactionResolvers {
  export interface Resolvers<Context = {}, TypeParent = BookWithTransaction> {
    isbn?: IsbnResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    transaction_id?: TransactionIdResolver<Maybe<number>, TypeParent, Context>;

    buyer?: BuyerResolver<Maybe<string>, TypeParent, Context>;

    price?: PriceResolver<Maybe<number>, TypeParent, Context>;
  }

  export type IsbnResolver<
    R = Maybe<number>,
    Parent = BookWithTransaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = BookWithTransaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TransactionIdResolver<
    R = Maybe<number>,
    Parent = BookWithTransaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BuyerResolver<
    R = Maybe<string>,
    Parent = BookWithTransaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = Maybe<number>,
    Parent = BookWithTransaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace TransactionResolvers {
  export interface Resolvers<Context = {}, TypeParent = Transaction> {
    transaction_id?: TransactionIdResolver<Maybe<number>, TypeParent, Context>;

    isbn?: IsbnResolver<Maybe<number>, TypeParent, Context>;

    buyer?: BuyerResolver<Maybe<string>, TypeParent, Context>;

    price?: PriceResolver<Maybe<number>, TypeParent, Context>;
  }

  export type TransactionIdResolver<
    R = Maybe<number>,
    Parent = Transaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IsbnResolver<
    R = Maybe<number>,
    Parent = Transaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BuyerResolver<
    R = Maybe<string>,
    Parent = Transaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = Maybe<number>,
    Parent = Transaction,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: Maybe<string>;
}

export interface IResolvers {
  Query?: QueryResolvers.Resolvers;
  Book?: BookResolvers.Resolvers;
  BookWithTransaction?: BookWithTransactionResolvers.Resolvers;
  Transaction?: TransactionResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
