import { useMyItems } from "api/hooks/items/useMyItems";
import { ItemCard } from "./ItemCard";
import { Shimmer } from "global/components/async/Shimmer";
import { TEXTS } from "global/texts";

const ITEM_LIST_STATES = {
  LOADING: "LOADING",
  EMPTY: "EMPTY",
  POPULATED: "POPULATED",
  ERROR: "ERROR",
} as const;

export const ItemList = () => {
  const { items = [], isLoading, isError } = useMyItems();

  const state = isLoading
    ? ITEM_LIST_STATES.LOADING
    : isError
    ? ITEM_LIST_STATES.ERROR
    : items.length === 0
    ? ITEM_LIST_STATES.EMPTY
    : ITEM_LIST_STATES.POPULATED;

  const contentByState = {
    [ITEM_LIST_STATES.LOADING]: <Shimmer width="100%" height="62px" />,

    [ITEM_LIST_STATES.EMPTY]: (
      <div className="bg-white border border-primary-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group relative flex justify-between items-center">
        <p className="text-sm text-primary-500">
          {TEXTS.home.itemsList.emptyState}
        </p>
      </div>
    ),

    [ITEM_LIST_STATES.ERROR]: (
      <div className="bg-white border border-primary-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group relative flex justify-between items-center">
        <p className="text-sm text-danger-500">
          {TEXTS.home.itemsList.errorState}
        </p>
      </div>
    ),

    [ITEM_LIST_STATES.POPULATED]: (
      <ul className="space-y-3">
        {items.map((item) =>
          item ? <ItemCard key={item.id} item={item} /> : null
        )}
      </ul>
    ),
  };

  return (
    <div className="bg-secondary-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-primary-900 mb-2">
        {TEXTS.home.itemsList.title}
      </h3>

      <p className="text-sm text-primary-500 mb-4">
        {TEXTS.home.itemsList.description}
      </p>

      {contentByState[state]}
    </div>
  );
};
