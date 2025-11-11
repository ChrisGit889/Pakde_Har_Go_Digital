'use client';
import React, { useState, useEffect } from 'react'; 
import Forbidden from '../components/Forbidden'; 

const checkUserIsAdmin = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const token = localStorage.getItem('admin_token');
  if (token === '12345_ini_adalah_admin_sah') {
    return true;
  }
  return false;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authorized = checkUserIsAdmin();
    setIsAuthorized(authorized);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Forbidden />;
  }

  return (
    <>
      {children}
    </>
  );
}