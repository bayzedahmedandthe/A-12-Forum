import Footer from '../Pages/Home/Footer';
import Navabar from '../Pages/Home/Navabar';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div>
          <Navabar></Navabar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default LayOut;