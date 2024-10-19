// pages/index.js

import React, { Suspense, lazy } from 'react';

// Lazy load the delayed HelloWorld component
const LazyHelloWorld = lazy(() => import('@/app/rough/Halloworld'));

export default function Home() {
  return (
    <div>
      <h1>Next.js with Suspense and 3s Delay</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHelloWorld />
      </Suspense>
    </div>
  );
}
