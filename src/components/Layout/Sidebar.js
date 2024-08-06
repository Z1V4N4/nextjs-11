import { Image, Menu, Layout } from 'antd';
import { menuList } from '../../constants/menuList.js';

const { Sider} = Layout;

const Sidebar = () => (
  <div className="sidebar">
    <Sider width={275}>
    <div className="logo">
          <Image src={'/svg/muf_logo.svg'} height="40" width="94" preview={false}/>
    </div>
    <Menu mode='inline' items={menuList}>
    </Menu>
    </Sider>
  </div>
);

export default Sidebar;
