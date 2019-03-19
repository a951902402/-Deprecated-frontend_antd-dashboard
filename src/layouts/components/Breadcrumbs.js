import { /*HashRouter as Router, Route, Switch, */Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Badge, Icon } from 'antd';
import styles from './Breadcrumbs.less';

const breadcrumbNameMap = {
  '/HelloWorld': 'HelloWorld',
  '/Dashboard': 'Dashboard',
  '/Dashboard/Analysis': 'Analysis',
  '/Dashboard/Monitor': 'Monitor',
  '/Dashboard/Workplace': 'Workplace',
  '/Puzzlecards': 'Puzzlecards',
};
const Breadcrumbs = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        {pathSnippets.length - 1 === index ? (
          <Badge status="processing" text={_} />
        ) : (
            <Link to={url}>
              {breadcrumbNameMap[url]}
            </Link>
          )}
      </Breadcrumb.Item>
    )
  });

  const breadcrumbItems = extraBreadcrumbItems.length === 0 ? [
    <Breadcrumb.Item key="Home">
      <Badge status="processing" text="Home" />
    </Breadcrumb.Item>
  ] : [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);

  return (
    <div className={styles.Breadcrumbs}>
      <Breadcrumb separator={<Icon type="double-right" />}>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  )
});

export default Breadcrumbs