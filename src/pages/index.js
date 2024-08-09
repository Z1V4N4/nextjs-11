// import Sidebar from '../components/Layout/Sidebar';
// import { Row } from 'antd';
// import MainLayout from '../components/Layout/MainLayout';
// import DataInfo from '../components/Layout/DataInfo';

// const HomePage = () => (
//   <div>
//     <Row>
//     <Sidebar></Sidebar>
//     <MainLayout></MainLayout>
//     </Row>
//   </div>
// );

// export default HomePage;

import Home from "../containers/Home";

const propTypes = {};

const defaultProps = {};

const HomePage = () => <Home />;

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;

