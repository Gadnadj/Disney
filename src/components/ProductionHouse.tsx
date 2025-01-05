// Images
import pixar from '../assets/Images/pixar.png';
import disney from '../assets/Images/disney.png';
import marvel from '../assets/Images/marvel.png';
import nationalG from '../assets/Images/nationalG.png';
import starwar from '../assets/Images/starwar.png';

// Videos
import starwarV from '../assets/Videos/star-wars.mp4';
import disneyV from '../assets/Videos/disney.mp4';
import marvelV from '../assets/Videos/marvel.mp4';
import nationalGeographicV from '../assets/Videos/national-geographic.mp4';
import pixarV from '../assets/Videos/pixar.mp4';

import { productionHouseListItem } from '../types';

type Props = {}

const ProductionHouse = (props: Props) => {

    const productionHouseList: productionHouseListItem[] = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: pixar,
            video: pixarV
        },
        {
            id: 3,
            image: marvel,
            video: marvelV
        },
        {
            id: 4,
            image: starwar,
            video: starwarV
        },
        {
            id: 5,
            image: nationalG,
            video: nationalGeographicV
        }
    ];

    return (
        <div>ProductionHouse</div>
    );
};

export default ProductionHouse;