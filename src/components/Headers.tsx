import Logo from '../assets/Images/logo.png';

type Props = {}

const Headers = () => {
    return (
        <div>
            <img src={Logo} alt="logo" className='w-[80px] object-cover' />
        </div>
    );
};

export default Headers;