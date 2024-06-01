import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { useAuthSession, useAuthSignin } from './plugin@auth';

export default component$(() => {
  const onSignIn = useAuthSignin();
  const session = useAuthSession();

  return (
    <>
      <button
        onClick$={async () => {
          onSignIn.submit({ providerId: 'github' });
        }}
      >
        Continue with GitHub
      </button>
      <p>Session {session.value?.user?.name}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
