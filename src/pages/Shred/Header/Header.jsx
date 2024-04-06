import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mb-6'>
            <img data-aos="zoom-in" data-aos-duration="1000" className='mx-auto mb-5' src={logo} alt="site logo" />
            <p data-aos="fade-left" data-aos-duration="1300" className="text-lg mb-2">Journalism Without Fear or Favour</p>
            <p data-aos="fade-left" data-aos-duration="1400" className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;