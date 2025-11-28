import React, { useMemo, useState } from 'react';
import { Layout, Drawer, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import dashboardIcon from '../../../assets/icons/dashboard.svg';
import umsLogo from '../../../assets/icons/university-ums.svg';
import studentIcon from '../../../assets/icons/student.svg';
import idCardIcon from '../../../assets/icons/id-card.svg';
import financialIcon from '../../../assets/icons/financial.svg';
// import { ReactComponent as DashboardIcon } from '../../../assets/icons/dashboard.svg';
// import { ReactComponent as UmsLogo } from '../../../assets/icons/university-ums.svg';
// import { ReactComponent as StudentIcon } from '../../../assets/icons/student.svg';
// import { ReactComponent as IdCardIcon } from '../../../assets/icons/id-card.svg';
// import { ReactComponent as FinancialIcon } from '../../../assets/icons/financial.svg';

import './style.css';

const { Sider } = Layout;

type Child = { key: string; label: string; path: string };
type Item = { key: string; icon?: React.ReactNode; label: string; path?: string; children?: Child[] };

const items: Item[] = [
  {
    key: '/dashboard',
    icon: <img src={dashboardIcon} alt="dashboard" className="sider-icon" />, label: 'Dashboard', path: '/dashboard'
  },
  {
    key: 'university',
    icon: <img src={umsLogo} alt="university" className="sider-icon" />,
    label: 'University',
    children: [
      { key: '/university/faculties', label: 'Faculties', path: '/university/faculties' },
      { key: '/university/departments', label: 'Departments', path: '/university/departments' },
      { key: '/university/majors', label: 'Majors', path: '/university/majors' },
      { key: '/university/courses', label: 'Courses', path: '/university/courses' },
    ],
  },
  {
    key: 'student',
    icon: <img src={studentIcon} alt="student" className="sider-icon" />,
    label: 'Student',
    children: [
      { key: '/student/registration', label: 'Registration', path: '/student/registration' },
      { key: '/student/info', label: 'Information', path: '/student/info' },
      { key: '/student/reports', label: 'Reports', path: '/student/reports' },
    ],
  },
  {
    key: 'idcard',
    icon: <img src={idCardIcon} alt="id card" className="sider-icon" />,
    label: 'ID Card',
    children: [
      { key: '/idcard/list', label: 'ID Cards', path: '/idcard/list' },
      { key: '/idcard/generate', label: 'Generate ID Card', path: '/idcard/generate' },
    ],
  },
  {
    key: 'financial',
    icon: <img src={financialIcon} alt="financial" className="sider-icon" />,
    label: 'Financial',
    children: [
      { key: '/financial/fees', label: 'Fees Management', path: '/financial/fees' },
      { key: '/financial/tuition', label: 'Tuition Fees', path: '/financial/tuition' },
      { key: '/financial/invoice', label: 'Invoice', path: '/financial/invoice' },
      { key: '/financial/collection', label: 'Fee Collection', path: '/financial/collection' },
    ],
  },
];

type Props = {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  drawer?: boolean;
  visible?: boolean;
  onClose?: () => void;
};

const Sidebar: React.FC<Props> = ({ collapsed: controlledCollapsed, drawer, visible, onClose }) => {
  const location = useLocation();
  const pathname = location.pathname || '/dashboard';

  const [collapsed, setCollapsed] = useState<boolean>(controlledCollapsed ?? false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  React.useEffect(() => {
    if (controlledCollapsed !== undefined) setCollapsed(controlledCollapsed);
  }, [controlledCollapsed]);

  const selectedKeys = useMemo(() => {
    const flatKeys = items.flatMap(i => (i.children ? i.children.map(c => c.key) : [i.key]));
    const match = flatKeys.find(k => pathname === k || pathname.startsWith(k));
    return match ? [match] : ['/dashboard'];
  }, [pathname]);

  React.useEffect(() => {
    const okeys = items
      .filter(i => i.children && i.children.some(c => pathname.startsWith(c.key)))
      .map(i => i.key as string);
    setOpenKeys(okeys as string[]);
  }, [pathname]);

  const onOpenChange = (keys: string[]) => setOpenKeys(keys);

  const menuItems = items.map(i => {
    if (i.children) {
      return {
        key: i.key,
        icon: i.icon,
        label: i.label,
        children: i.children.map(c => ({
          key: c.key,
          label: <Link to={c.path}>{c.label}</Link>
        }))
      };
    }
    return {
      key: i.key,
      icon: i.icon,
      label: <Link to={i.path ?? '/'}>{i.label}</Link>
    };
  });

  const renderMenu = (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="app-menu"
      items={menuItems}
    />
  );

  const header = (
    <div className="sider-top">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div className="sider-title">KHEMARAK UNIVERSITY</div>
      </div>

    </div>
  );

  if (drawer) {
    return (
      <Drawer
        open={!!visible}
        placement="left"
        onClose={() => onClose?.()}
        styles={{ body: { padding: 0 } }}
        size={260}
      >
        {header}
        {renderMenu}
      </Drawer>
    );
  }

  return (
    <Sider className={collapsed ? 'app-sider collapsed' : 'app-sider'} collapsible collapsed={collapsed} trigger={null} width={260}>
      {header}
      {renderMenu}
    </Sider>
  );
};

export default Sidebar;