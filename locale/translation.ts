import en from "./en.json";
import ja from "./ja.json";
import vi from "./vi.json";

export type TLocale = `en` | `ja` | `vi`;

const localeObj = { en, ja, vi };

export const translation = (locale?: string | null): Record<string, string> => {
  if (typeof locale !== `undefined` && locale) {
    // avoid type checking
    const _locale = locale as TLocale;
    return localeObj[_locale];
  }
  return {};
};

export const t = (pattern: string, ...rest: string[]) => {
  if (rest.length > 0) {
    return pattern.replace(/%(\d+)/g, (_, n) => rest[+n - 1]);
  }
  return pattern;
};
