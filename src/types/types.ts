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

export {
  VisitedLocationProps,
  ServiceItemProps,
  ServiceCardsProps,
  ServiceCardProps,
  ServiceBannerProps,
};
