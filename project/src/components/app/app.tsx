import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../types/enums';
import { PlacesFoundProps } from '../../types/types';
import PrivateRoute from '../private-route/private-route';
import Main from '../../pages/mian/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import Favorites from '../../pages/favorites/favorites';

function App({ placesFound }: PlacesFoundProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesFound={placesFound} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Rest}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
