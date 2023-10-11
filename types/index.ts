import { MouseEventHandler, SetStateAction } from "react";

export interface ICustomButtomProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export type ICarsProps = iCarProps[];

export interface iCarProps {
  city_mpg: number;
  class?: string;
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

export type ICardDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: iCarProps;
};

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface IHomeProps {
  searchParams: IFilterProps;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface ICustomFilterProps {
  title: string;
  options: IOptionProps[];
}

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}