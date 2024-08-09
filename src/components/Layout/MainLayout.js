import { Col } from "antd";
import Header from "./Header";
//import DataInfo from "./DataInfo/index" //belum dibuat

const MainLayout = () => {
  return (
    <div>
        <Col>
            <Header/>
        </Col>
        <Col>
            {/* <DataInfo/> */}
        </Col>
    </div>
  );
};

export default MainLayout;