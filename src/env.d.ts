/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_PRIMARY_SITE_URL?: string;
  readonly PUBLIC_LEAD_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

export {};
