'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import * as Form from '@/components/form';
import Logo from '@/components/logo';
import * as api from '@/utils/api';

type FormValues = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Page() {
  const router = useRouter();

  // prettier-ignore
  const { formState, register, handleSubmit, setError, reset } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    const response = await api.post<{ user: { id: number } }>(
      '/auth/registered-user',
      values
    );

    if (!response.ok) {
      Object.entries(response.error?.errors ?? {}).forEach(([key, value]) => {
        setError(key as keyof FormValues, {
          type: 'manual',
          message: (value as string[])?.[0] ?? `${key} is invalid}`,
        });
      });

      return;
    }

    reset();

    router.push(`/auth/login?newUser=1&email=${values.email}`);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Logo className="h-16 w-auto mx-auto" />
        </Link>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black/90">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group name="name" label="Name" error={formState.errors.name}>
            <Form.TextInput name="name" register={register} type="text" />
          </Form.Group>

          <Form.Group
            name="email"
            label="Email address"
            error={formState.errors.email}
          >
            <Form.TextInput
              name="email"
              register={register}
              type="email"
              autoComplete="email"
            />
          </Form.Group>

          <Form.Group
            name="password"
            label="Password"
            error={formState.errors.password}
          >
            <Form.TextInput
              name="password"
              register={register}
              type="password"
              autoComplete="current-password"
            />
          </Form.Group>

          <Form.Group
            name="password_confirmation"
            label="Repeat Password"
            error={formState.errors.password_confirmation}
          >
            <Form.TextInput
              name="password_confirmation"
              register={register}
              type="password"
              autoComplete="current-password"
            />
          </Form.Group>

          <div>
            <Button
              className="w-full"
              type="submit"
              loading={formState.isSubmitting}
            >
              {formState.isSubmitting ? 'Creating account...' : 'Sign up'}
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-black/50">
          Already a member?{' '}
          <Link
            href="/auth/login"
            className="font-semibold leading-6 text-secondary hover:text-secondary/70"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
