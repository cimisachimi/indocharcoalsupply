import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ['en', 'de', 'ar', 'nl', 'zh', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});