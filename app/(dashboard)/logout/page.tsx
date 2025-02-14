"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();

    router.push('/signin');
  }, [router]);

  return null;
};

export default Page;