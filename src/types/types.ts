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

type ServiceBannerProps = {
  id: string;
  bannerColor: string;
  heading: string;
  tagline: string;
  bannerImage: string;
};

export { VisitedLocationProps, ServiceItemProps, ServiceBannerProps };
