import React, { useState, useCallback } from 'react';
import { Layout, Grid, Breadcrumb } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';

import Navbar from './narbar';
import Sidebar from './sideBar';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const AppLayout: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    if (isMobile) {
      setDrawerVisible(true);
    } else {
      setCollapsed((c) => !c);
    }
  }, [isMobile]);

  const handleCloseDrawer = useCallback(() => setDrawerVisible(false), []);
  const handleCollapse = useCallback((c: boolean) => setCollapsed(c), []);

  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const breadcrumbItems = [
    { title: <Link to="/"></Link> },
    ...segments.map((seg, idx) => {
      const path = '/' + segments.slice(0, idx + 1).join('/');
      const label = decodeURIComponent(seg).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      return { title: idx === segments.length - 1 ? label : <Link to={path}>{label}</Link> };
    }),
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar onToggle={handleToggle} />

      <Layout>
        <Sidebar
          drawer={isMobile}
          visible={drawerVisible}
          onClose={handleCloseDrawer}
          collapsed={collapsed}
          onCollapse={handleCollapse}
        />

        <Content style={{ margin: '5px 24px 5px 24px', padding: '5px 5px 5px 5px' }}>
          <Breadcrumb items={breadcrumbItems} style={{ marginBottom: 12 }} />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
