import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope &
  typeof globalThis & {
    __WB_MANIFEST: Array<{ url: string; revision: string | null }>;
  };

precacheAndRoute(self.__WB_MANIFEST);
