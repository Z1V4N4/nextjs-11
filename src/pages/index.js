import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import { Row } from 'antd';

const HomePage = () => (
  <div>
    <Row>
    <Sidebar></Sidebar>
    <Header></Header>
    </Row>
  </div>
);

export default HomePage;
