import { hot } from 'react-hot-loader/root';
import type React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default hot(App);
