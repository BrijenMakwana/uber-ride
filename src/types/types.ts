import { Dispatch, SetStateAction } from "react";

type ScreenType = {
  Home: undefined;
  FindRide: undefined;
};

type BottomTabType = {
  HomeTab: undefined;
  ServicesTab: undefined;
  ActivityTab: undefined;
  AccountTab: undefined;
};

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

type DateTimePickerMode = "date" | "time";

type UIButtonProps = {
  text: string;
  onPress: () => void;
};

type UIInputProps = {
  placeholderText: string;
};

type Locations = {
  id: number;
  coordinates: Location;
};

type Location = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type Car = {
  id: string;
  carImage: string;
  carType: string;
  arrivingTime: string;
  minAway: number;
  fair: number;
};

type CarOptionProps = {
  carImage: string;
  carType: string;
  arrivingTime: string;
  minAway: number;
  fair: number;
  selectedCar: string;
  setSelectedCar: Dispatch<SetStateAction<string>>;
};

type UIBackButtonProps = {
  onPress: () => void;
};

type UITabHeadingProps = {
  text: string;
};

type PastTripProps = {
  carImage: string;
  location: string;
  bookingDate: string;
  bookingTime: string;
  fair: number;
};

type PastTrip = {
  id: string;
  carImage: string;
  location: string;
  bookingDate: string;
  bookingTime: string;
  fair: number;
};

export {
  ScreenType,
  BottomTabType,
  SearchLocationProps,
  VisitedLocationProps,
  ServiceItemProps,
  ServiceCardsProps,
  ServiceCardProps,
  ServiceBannerProps,
  PickupRuleProps,
  UIButtonProps,
  PickupTimeModalProps,
  DateTimePickerMode,
  UIInputProps,
  Locations,
  Location,
  Car,
  CarOptionProps,
  UIBackButtonProps,
  UITabHeadingProps,
  PastTripProps,
  PastTrip,
};
