import { create } from "zustand";

function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export type IShadowGeneratorStoreMutateShadow = (
  index: number,
  shadow: Partial<IShadowGeneratorStoreShadow>
) => void;

export type IShadowGeneratorStoreRemoveShadow = (index: number) => void;

interface IShadowGeneratorStore {
  box: IShadowGeneratorStoreBox;
  shadows: IShadowGeneratorStoreShadow[];

  computedBoxShadow: (format?: "css" | "tailwind") => string;

  mutateBox: (box: Partial<IShadowGeneratorStoreBox>) => void;
  mutateShadow: IShadowGeneratorStoreMutateShadow;

  removeShadow: IShadowGeneratorStoreRemoveShadow;
  addShadow: () => void;
}

interface IShadowGeneratorStoreBox {
  height: string;
  width: string;
  radius: string;
  background: string;
}

interface IShadowGeneratorStoreShadow {
  uid: string;
  active: boolean;
  inset: boolean;

  horizontalOffset: number;
  verticalOffset: number;

  blurRadius: number;
  spreadRadius: number;
  color: string;
}

export const useShadowGeneratorStore = create<IShadowGeneratorStore>(
  (set, get) => ({
    counter: 0,
    box: {
      height: "100px",
      width: "100px",
      radius: "8px",
      background: "white",
    },
    shadows: [
      {
        uid: generateId(),
        active: true,
        inset: false,

        horizontalOffset: 0,
        verticalOffset: 0,

        blurRadius: 4,
        spreadRadius: 0,
        color: "rgba(0, 0, 0, 0.1)",
      },
    ],

    computedBoxShadow: (format = "css") => {
      const { shadows } = get();

      switch (format) {
        case "css":
          return shadows
            .filter((shadow) => shadow.active)
            .map(
              (shadow) =>
                `${shadow.inset ? "inset " : ""}${shadow.horizontalOffset}px ${
                  shadow.verticalOffset
                }px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${
                  shadow.color
                }`
            )
            .join(", ");
        case "tailwind":
          return shadows
            .filter((shadow) => shadow.active)
            .map(
              (shadow) =>
                `${shadow.inset ? "inset_" : ""}${shadow.horizontalOffset}px_${
                  shadow.verticalOffset
                }px_${shadow.blurRadius}px_${
                  shadow.spreadRadius
                }px_${shadow.color.replace(/, /g, ",")}`
            )
            .join(",");
      }
    },

    mutateBox: (box) =>
      set((state) => ({ ...state, box: { ...state.box, ...box } })),
    mutateShadow: (index, shadow) =>
      set((state) => {
        const shadows = [...state.shadows];
        shadows[index] = { ...shadows[index], ...shadow };

        return { ...state, shadows };
      }),

    removeShadow: (index) =>
      set((state) => {
        const shadows = [...state.shadows];
        shadows.splice(index, 1);

        return { ...state, shadows };
      }),
    addShadow: () =>
      set((state) => ({
        ...state,
        shadows: [
          ...state.shadows,
          {
            uid: generateId(),
            active: true,
            inset: false,
            horizontalOffset: 0,
            verticalOffset: 0,
            blurRadius: 4,
            spreadRadius: 0,
            color: "rgba(0, 0, 0, 0.1)",
          },
        ],
      })),
  })
);
