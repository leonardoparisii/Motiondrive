import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title?: string;
    btnType?: 'button' | 'submit';
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    disabled?: boolean
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer:string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel:  string,
    limit: number,
    model: string,
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
export interface HomeProps {
    searchParams: FilterProps;
  }

export interface AuthProviderProps {
    children: any
}

export interface AvatarProps {
    src: string | null | undefined;
    onClick: () => void;
}