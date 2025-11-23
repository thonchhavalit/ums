import React, { useMemo, useState } from 'react';
import { Layout, Drawer, Menu } from 'antd';
import {
  BankOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  DollarOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const { Sider } = Layout;

type Child = { key: string; label: string; path: string };
type Item = { key: string; icon?: React.ReactNode; label: string; path?: string; children?: Child[] };

const items: Item[] = [
  { key: '/dashboard', icon: <DashboardOutlined />, label: 'Dashboard', path: '/dashboard' },
  {
    key: 'university',
    icon: <BankOutlined />,
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
    icon: <UsergroupAddOutlined />,
    label: 'Student',
    children: [
      { key: '/student/registration', label: 'Registration', path: '/student/registration' },
      { key: '/student/info', label: 'Information', path: '/student/info' },
      { key: '/student/reports', label: 'Reports', path: '/student/reports' },
    ],
  },
  {
    key: 'idcard',
    icon: <IdcardOutlined />,
    label: 'ID Card',
    children: [
      { key: '/idcard/list', label: 'ID Cards', path: '/idcard/list' },
      { key: '/idcard/generate', label: 'Generate ID Card', path: '/idcard/generate' },
    ],
  },
  {
    key: 'financial',
    icon: <DollarOutlined />,
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

const Sidebar: React.FC<Props> = ({ collapsed: controlledCollapsed, onCollapse, drawer, visible, onClose }) => {
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

  const renderMenu = (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="app-menu"
    >
      {items.map(i =>
        i.children ? (
          <Menu.SubMenu key={i.key} icon={i.icon} title={i.label}>
            {i.children!.map((c) => (
              <Menu.Item key={c.key}>
                <Link to={c.path}>{c.label}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={i.key} icon={i.icon}>
            <Link to={i.path ?? '/'}>{i.label}</Link>
          </Menu.Item>
        ),
      )}
    </Menu>
  );

  const header = (
    <div className="sider-top">
      <div className="sider-title">KHEMARAK UNIVERSITY</div>
      
    </div>
  );

  if (drawer) {
    return (
      <Drawer open={!!visible} placement="left" onClose={() => onClose?.()} bodyStyle={{ padding: 0 }} width={260}>
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
