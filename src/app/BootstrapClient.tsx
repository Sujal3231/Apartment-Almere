'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore: no type definitions for Bootstrap bundle
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('✅ Bootstrap JS loaded');
      })
      .catch(err => console.error('❌ Bootstrap JS load failed:', err));
  }, []);

  return null; // ✅ only side effect
}
