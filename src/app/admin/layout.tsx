'use server';
import React from 'react';
import Forbidden from '../components/Forbidden';
import { authenticate } from '@/utils/utils';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authorized = await authenticate();

  if (!authorized) {
    return <Forbidden />;
  }

  return (
    <>
      {children}
    </>
  );
}