'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CRMPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/crm');
  }, [router]);

  return null;
} 