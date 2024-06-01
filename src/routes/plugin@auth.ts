import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { serverAuth$ } from '~/lib';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get('AUTH_GITHUB_ID'),
        clientSecret: env.get('AUTH_GITHUB_SECRET'),
      }),
    ] as Provider[],
  }));
