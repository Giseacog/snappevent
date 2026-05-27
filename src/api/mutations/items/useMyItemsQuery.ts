import { useInfiniteQuery } from "@tanstack/react-query";
import { getMyItemsService } from "api/services/item/getMyItems.service";

export const useMyItemsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["items", "infinite"],
    queryFn: ({ pageParam = 1 }) => getMyItemsService(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.success && lastPage.data?.hasNextPage) {
        return lastPage.data.page + 1;
      }
      return undefined;
    },
  });
};
