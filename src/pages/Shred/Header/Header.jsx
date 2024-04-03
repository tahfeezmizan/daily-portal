import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mb-6'>
            <img className='mx-auto mb-5' src={logo} alt="site logo" />
            <p className="text-lg mb-2">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;