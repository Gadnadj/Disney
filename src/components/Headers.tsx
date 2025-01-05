import Logo from '../assets/Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus } from 'react-icons/hi2';
import { MenuItem } from '../types';
import HeaderItems from './HeaderItems';
type Props = {}

const Headers = () => {

    const menu: MenuItem[] = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];


    return (
        <div className='flex flex-row gap-8 items-center justify-between p-5'>
            <div className='flex gap-8 items-center'>
                <img src={Logo} alt="logo" className='w-[80px] md:w-[115px] object-cover' />
                {menu.map((item: MenuItem) => (
                    <HeaderItems name={item.name} Icon={item.icon} />
                ))}
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' />
        </div>
    );
};

export default Headers;