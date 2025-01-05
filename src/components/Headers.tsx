import Logo from '../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';

type Props = {}

const Headers = () => {

    const menu = [
        name:'Home',
        icon: HiHome
    ]

    return (
        <div>
            <img src={Logo} alt="logo" className='w-[80px] md:w-[115px] object-cover' />
        </div>
    );
};

export default Headers;