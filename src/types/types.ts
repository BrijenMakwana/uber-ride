import { Dispatch, SetStateAction } from "react";

type SearchLocationProps = {
  openPickupTimeModal: () => void;
};

type VisitedLocationProps = {
  id: string;
  location: string;
  address: string;
};

type ServiceItemProps = {
  id: string;
  serviceImage: string;
  serviceName: string;
  promoIsAvailable: boolean;
};

type ServiceCardsProps = {
  heading: string;
  serviceCards: ServiceCardProps[];
};

type ServiceCardProps = {
  id: string;
  serviceImage: string;
  title: string;
  description: string;
};

type ServiceBannerProps = {
  id: string;
  bannerColor: string;
  heading: string;
  tagline: string;
  bannerImage: string;
};

type PickupTimeModalProps = {
  pickupTimeModalIsOpen: boolean;
  setPickupTimeModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

type PickupRuleProps = {
  id: string;
  iconName: any;
  rule: string;
};

type UIButtonProps = {
  text: string;
};

export {
  SearchLocationProps,
  VisitedLocationProps,
  ServiceItemProps,
  ServiceCardsProps,
  ServiceCardProps,
  ServiceBannerProps,
  PickupRuleProps,
  UIButtonProps,
  PickupTimeModalProps,
};
