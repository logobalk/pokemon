import { Provider } from 'react-redux';
// import { ConnectedRouter } from "connected-react-router";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store from './configure-store';
import './App.css';
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import MainAppRoute from './features/main-page/index';
// import "antd/dist/antd.css";
import routes from './routes';
import BtcThb from './features/pokemon-details/right-side/index';
import history from './utils/history';
import 'antd/dist/antd.min.css';
function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<MainAppRoute />}>
            <Route path={routes.home}>
              <Route path='*' element={<MainAppRoute />} />
            </Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  );
}

export default App;
