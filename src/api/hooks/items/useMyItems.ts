import { useMyItemsQuery } from "api/mutations/items/useMyItemsQuery";
import { useMemo } from "react";

export const useMyItems = () => {
  const {
    data,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useMyItemsQuery();

  const items = useMemo(() => {
    return (
      data?.pages.flatMap((page) =>
        page.success ? page.data?.items ?? [] : []
      ) ?? []
    );
  }, [data]);

  const serverError = useMemo(() => {
    return data?.pages.find((p) => !p.success)?.message;
  }, [data]);

  return {
    items,
    isLoading: isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError: isError || !!serverError,
    errorMessage:
      serverError || (error instanceof Error ? error.message : undefined),
  };
};
