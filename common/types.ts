import type { NextPage } from "next";

// Next JS Layouts
export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

// Form field validation
export type TOptionSelect = {
  value: string;
  label: string;
};
export type TValidators = { [key: string]: boolean | string | number };
