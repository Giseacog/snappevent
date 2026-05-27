export type ServiceResult<T> = {
  readonly success: boolean;
  readonly data?: T;
  readonly message?: string;
};

export type PaginatedResult<T> = {
  items: T[];
  page: number;
  hasNextPage: boolean;
};
