import type { LayoutServerLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load = (async ({ locals }: { locals: any }) => ({
  lang: locals.lang,
})) satisfies LayoutServerLoad;
