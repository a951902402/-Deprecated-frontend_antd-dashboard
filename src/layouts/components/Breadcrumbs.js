import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Badge, Icon } from 'antd';
import { connect } from 'dva';
import styles from './Breadcrumbs.less';

const Breadcrumbs = withRouter((props) => {
  const { location, routes } = props
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const urlForlabel = url.toLowerCase()
    const label = routes[urlForlabel] ? routes[urlForlabel] : _
    return (
      <Breadcrumb.Item key={url}>
        {pathSnippets.length - 1 === index ? (
          <Badge status="processing" text={label} />
        ) : (
            <Link to={url}>
              {label}
            </Link>
          )}
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = extraBreadcrumbItems.length === 0 ? [
    <Breadcrumb.Item key="Home">
      <Badge status="processing" text="首页" />
    </Breadcrumb.Item>
  ] : [(
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
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

//umi中在layout components中使用dva-connect需withRouter高阶
export default withRouter(connect(({ urlRouter }) => ({
  routes: urlRouter.routes,
}))(Breadcrumbs))