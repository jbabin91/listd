import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import type { LayoutLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load = (async (event: any) => {
  // TODO: possibly use navigatorDetector as well
  const locale = detectLocale(() => event.data.lang);
  await loadLocaleAsync(locale);
  setLocale(locale);

  return event.data;
}) satisfies LayoutLoad;
