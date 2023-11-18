import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux-store/auth/operations';
import PrivatRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

import Spiner from './components/Spiner/Spiner';
import { AppContainer } from './AppStyle';

const MainPage = lazy(() => import('./page/MainPage/MainPage'));
const LoginPage = lazy(() => import('./page/Login/Login'));
const RegisterPage = lazy(() => import('./page/Register/Register'));

function App() {
   const dispatch = useDispatch();
   const isRefreshing = useSelector((state) => state.auth.isRefreshing);

   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);
   return isRefreshing ? (
      <Spiner />
   ) : (
      <AppContainer>
         <Suspense>
            <Routes>
               <Route path="/">
                  <Route
                     path="/topGames"
                     element={<PrivatRoute redirectTo="/login" component={<MainPage />} />}
                  />
                  <Route
                     path="/login"
                     element={<RestrictedRoute redirectTo="/topGames" component={<LoginPage />} />}
                  />
                  <Route
                     path="/register"
                     element={
                        <RestrictedRoute redirectTo="/topGames" component={<RegisterPage />} />
                     }
                  />
                  <Route path="/*" element={<div>404 Error</div>} />
               </Route>
            </Routes>
         </Suspense>
      </AppContainer>
   );
}

export default App;
