import '@sveltejs/kit';

declare module '@sveltejs/kit' {
  interface Redirect extends Error {
    status: 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
    location: string;
  }
  interface HttpError extends Error {
    status: number;
    body: App.Error;
  }
}
