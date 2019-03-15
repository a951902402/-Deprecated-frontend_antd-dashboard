import {
  HashRouter as Route, Switch, Link, withRouter,
} from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import styles from './Breadcrumbs.less';

const Apps = () => (
  <ul className={styles.appList}>
    <li>
      <Link to="/HelloWorld/1">Application1</Link>：<Link to="/HelloWorld/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/HelloWorld/2">Application2</Link>：<Link to="/HelloWorld/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/HelloWorld': 'Application List',
  '/HelloWorld/1': 'Application1',
  '/HelloWorld/2': 'Application2',
  '/HelloWorld/1/detail': 'Detail',
  '/HelloWorld/2/detail': 'Detail',
};
const Breadcrumbs = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <div className={styles.demo}>
      <div className={styles.demoNav}>
        <Link to="/">Home</Link>
        <Link to="/HelloWorld">Application List</Link>
      </div>
      <Switch>
        <Route path="/HelloWorld" component={Apps} />
        <Route render={() => <span>Home Page</span>} />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
});

export default Breadcrumbs