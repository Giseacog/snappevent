import { MainLayout } from "layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useItemById } from "api/hooks/items/useItemByID";
import { LoadingScreen } from "global/components/async/LoadingScreen";
import { ItemDetailSuccess } from "./components/ItemDetailSuccess";
import { TEXTS } from "global/texts";

const ITEM_DETAIL_STATES = {
  LOADING: "LOADING",
  NOT_FOUND: "NOT_FOUND",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { item, isLoading, apiError, isError } = useItemById(id || "");

  const state = isLoading
    ? ITEM_DETAIL_STATES.LOADING
    : isError
    ? ITEM_DETAIL_STATES.ERROR
    : !item
    ? ITEM_DETAIL_STATES.NOT_FOUND
    : ITEM_DETAIL_STATES.SUCCESS;

  const contentByState = {
    [ITEM_DETAIL_STATES.LOADING]: <LoadingScreen />,

    [ITEM_DETAIL_STATES.NOT_FOUND]: (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-primary-500">{TEXTS.itemDetail.notFound}</p>
      </div>
    ),

    [ITEM_DETAIL_STATES.ERROR]: (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-danger-200 bg-danger-50 p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-danger-700">
            {TEXTS.general.somethingWentWrong}
          </h2>
          <p className="mt-2 text-sm text-danger-600">{apiError}</p>
        </div>
      </div>
    ),

    [ITEM_DETAIL_STATES.SUCCESS]: <ItemDetailSuccess item={item} />,
  };

  return <MainLayout>{contentByState[state]}</MainLayout>;
};
