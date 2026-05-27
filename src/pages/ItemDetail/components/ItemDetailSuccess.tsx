import { Sparkles } from "lucide-react";
import type { Item } from "types/entities/Item";
import { TEXTS } from "global/texts";

interface ItemDetailSuccessProps {
  item: Item | undefined;
}

export const ItemDetailSuccess = ({ item }: ItemDetailSuccessProps) => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <Sparkles className="h-7 w-7" />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">{item?.name}</h1>
            <p className="mt-1 text-sm text-white/80">
              {TEXTS.itemDetail.header.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-primary-900">
            {TEXTS.itemDetail.sections.general.title}
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium uppercase text-primary-400">
                {TEXTS.itemDetail.sections.general.nameLabel}
              </p>
              <p className="text-base font-semibold text-primary-900">
                {item?.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-primary-400">
                {TEXTS.itemDetail.sections.general.idLabel}
              </p>
              <p className="break-all text-sm text-primary-700">{item?.id}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-secondary-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-primary-900">
            {TEXTS.itemDetail.sections.metadata.title}
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-secondary-50 p-4">
              <p className="text-xs font-medium uppercase text-primary-400">
                {TEXTS.itemDetail.sections.metadata.statusLabel}
              </p>
              <p className="text-sm font-medium text-primary-800">
                {item?.deactivatedAt ? TEXTS.itemDetail.sections.metadata.statusInactive : TEXTS.itemDetail.sections.metadata.statusActive}
              </p>
            </div>

            <div className="rounded-xl bg-secondary-50 p-4">
              <p className="text-xs font-medium uppercase text-primary-400">
                {TEXTS.itemDetail.sections.metadata.createdLabel}
              </p>
              <p className="text-sm font-medium text-primary-800">
                {item?.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
