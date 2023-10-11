"use client";
import { useState } from "react";
import Image from "next/image";
import { iCarProps } from "@/types";
import { CardDetails, CustomButton } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

interface ICarCardProps {
  car: iCarProps;
}

const CarCard = ({ car }: ICarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px]">$</span>
        {carRent}
        <span className="self-end text-[14px]">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              alt="steering-wheel-logo"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="car-card__icon">
            <Image src="/tire.svg" alt="svg-logo" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="car-card__icon">
            <Image src="/gas.svg" alt="gas-logo" width={20} height={20} />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px]font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
