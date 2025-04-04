import { derived, writable } from "svelte/store";
import translations from "./translations";

import { browser } from '$app/environment';

var stored = "English";

if (browser) {
  stored = localStorage.locale || "English";
}

export const locale = writable(stored);
export const locales = Object.keys(translations);

locale.subscribe((value) => {
  if (browser)
    localStorage.locale = value
})

function translate(locale, key, vars) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
  );
