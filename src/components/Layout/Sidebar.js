import { Image, Menu, Layout } from 'antd';
import { menuList } from '../../constants/menuList.js';

const { Sider} = Layout;

const Sidebar = () => (
    <Sider width={275} className="sidebar">
      <div className="sidebar-logo">
            <Image src={'/svg/muf_logo.svg'} height="40" width="94" preview={false}/>
      </div>
      <div className='sidebar-menu'>
        <Menu mode='inline' items={menuList} defaultSelectedKeys={"home"}>
        </Menu>
      </div>
      <div className='sidebar-footer'>
          <p>
            © 2024 MANDIRI UTAMA FINANCE. <br></br>All Right Reserved.
          </p>
      </div>
    </Sider>
);

export default Sidebar;
