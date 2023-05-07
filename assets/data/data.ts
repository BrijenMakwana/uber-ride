import {
  VisitedLocationProps,
  ServiceItemProps,
  ServiceCardsProps,
  ServiceBannerProps,
  PickupRuleProps,
} from "../../src/types/types";

const visitedLocations: VisitedLocationProps[] = [
  {
    id: "1",
    location: "Vadodara Airport",
    address: "Civil Aerodrome. 86J9+JHQ. Harni Rd.",
  },
  {
    id: "2",
    location: "Reliance Mall",
    address: "Akshar Chowk, Old Padra Rd, opposite",
  },
];

const services: ServiceItemProps[] = [
  {
    id: "1",
    serviceImage:
      "https://images.unsplash.com/photo-1615887110697-0819ec23465f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    serviceName: "ride",
    promoIsAvailable: true,
  },
  {
    id: "2",
    serviceImage:
      "https://images.unsplash.com/photo-1611740801135-00c6dd101c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    serviceName: "rentals",
    promoIsAvailable: false,
  },
  {
    id: "3",
    serviceImage:
      "https://images.unsplash.com/photo-1602702102352-caad4c241565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    serviceName: "intercity",
    promoIsAvailable: false,
  },
  {
    id: "4",
    serviceImage:
      "https://images.unsplash.com/photo-1596273501899-336404ed1701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    serviceName: "travel",
    promoIsAvailable: false,
  },
];

const serviceCards1: ServiceCardsProps = {
  heading: "Ways to save with Uber",
  serviceCards: [
    {
      id: "1",
      serviceImage:
        "https://images.unsplash.com/photo-1519687335474-c85fb3a50ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Auto rides",
      description: "Upfront fares, doorstep pickups",
    },
  ],
};

const serviceCards2: ServiceCardsProps = {
  heading: "Ways to plan with Uber",
  serviceCards: [
    {
      id: "1",
      serviceImage:
        "https://images.unsplash.com/photo-1537211790624-e6f568af4b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Rentals",
      description: "Ride from 1 to 17 hours",
    },
    {
      id: "2",
      serviceImage:
        "https://images.unsplash.com/photo-1605612743100-bc7b808c7965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Travel Intercity",
      description: "Go outstation with ease",
    },
  ],
};

const serviceBanners: ServiceBannerProps[] = [
  {
    id: "1",
    bannerColor: "#F97B22",
    heading: "Skip the haggling",
    tagline: "Try Uber Auto",
    bannerImage:
      "https://images.unsplash.com/photo-1640785382333-24d78163ad25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    id: "2",
    bannerColor: "#9E6F21",
    heading: "Comfortable Premier rides",
    tagline: "book premier",
    bannerImage:
      "https://images.unsplash.com/photo-1626516911827-b54c79736c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "3",
    bannerColor: "#394867",
    heading: "Skip the Trafic-go Moto",
    tagline: "Try Uber Moto",
    bannerImage:
      "https://images.unsplash.com/photo-1597699401524-16eeb6a8d617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: "4",
    bannerColor: "#ACB1D6",
    heading: "Book cars by the hour",
    tagline: "Try Uber rental",
    bannerImage:
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: "5",
    bannerColor: "#41644A",
    heading: "You have multiple promos",
    tagline: "terms apply",
    bannerImage:
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "6",
    bannerColor: "#FFD95A",
    heading: "no city is too far",
    tagline: "book intercity",
    bannerImage:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    id: "7",
    bannerColor: "#6C9BCF",
    heading: "ready?then let's roll.",
    tagline: "ride with uber",
    bannerImage:
      "https://images.unsplash.com/photo-1588829274539-f346ce6dbde0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
];

const pickupRules: PickupRuleProps[] = [
  {
    id: "1",
    iconName: "calendar",
    rule: "Choose your exact pickup time up to 90 days in advance",
  },
  {
    id: "2",
    iconName: "timer-sand",
    rule: "Extra wait time included to meet your ride",
  },
  {
    id: "3",
    iconName: "close-box",
    rule: "Cancel at no charge up to 60 minutes in advance",
  },
];

export {
  visitedLocations,
  services,
  serviceCards1,
  serviceCards2,
  serviceBanners,
  pickupRules,
};
