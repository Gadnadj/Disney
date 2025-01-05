export interface MenuItem {
    name: string;
    icon: React.ElementType;
};

export interface productionHouseListItem {
    id: number;
    image: string;
    video: string;
}

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
};

export interface Genre {
    id: number;
    name: string;
}
