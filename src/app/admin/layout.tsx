'use server';
import React from 'react';
import Forbidden from './components/Forbidden';
import { authenticate } from '@/utils/utils';
import DashboardLayout from './components/DashboardLayout';

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
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}