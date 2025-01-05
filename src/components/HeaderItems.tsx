import React from 'react';

type Props = {
    name: string;
    Icon: React.ElementType
}

const HeaderItems = ({ name, Icon }: Props) => {
    return (
        <div className='text-white flex items-center gap-3 text-[15px] md:text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
            <Icon />
            <h2 className=''>{name}</h2>
        </div>
    );
};

export default HeaderItems;