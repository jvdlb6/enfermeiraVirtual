import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutBack from './components/layout/layout-back/LayoutBack';
import LayoutFront from './components/layout/layout-front/LayoutFront';
import AppPages from './pages/app-pages/AppPages';
import Home from './pages/home/Home';
import NotFoundPage from './pages/not-found-page/NotFoundPage';



const AppRoute = ({ component: Component, layout: Layout, title, ...rest }) => (
  <Route {...rest} title={title} render={props => (
    <Layout title={title}><Component {...props} ></Component></Layout>
  )}></Route>
)

export default function Routes() {
  return (
    <Switch>
      <Route>
        <AppRoute path="/" layout={LayoutFront} exact component={Home} title="Home" />
        <AppRoute path='/pages' layout={LayoutBack} exact component={AppPages} title="Pages" />

        <AppRoute path="/404" layout={LayoutBack} exact component={NotFoundPage}  title={"Página Não Encontrada"}/>
       
      </Route>
    </Switch>
  );
}
