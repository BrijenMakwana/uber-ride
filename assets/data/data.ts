import {
  VisitedLocationProps,
  ServiceItemProps,
  ServiceCardsProps,
  ServiceBannerProps,
  PickupRuleProps,
  Locations,
  Car,
  PastTrip,
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

const mapStyle = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "rgb(231,234,239)",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
];

const indianPlaces: Locations[] = [
  {
    id: 1,
    coordinates: {
      latitude: 28.6139,
      longitude: 77.209,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 2,
    coordinates: {
      latitude: 18.5204,
      longitude: 73.8567,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 3,
    coordinates: {
      latitude: 26.9124,
      longitude: 75.7873,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 4,
    coordinates: {
      latitude: 19.076,
      longitude: 72.8777,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 5,
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 6,
    coordinates: {
      latitude: 22.5726,
      longitude: 88.3639,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 7,
    coordinates: {
      latitude: 23.2599,
      longitude: 77.4126,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 8,
    coordinates: {
      latitude: 27.175,
      longitude: 78.0422,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 9,
    coordinates: {
      latitude: 26.8467,
      longitude: 80.9462,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 10,
    coordinates: {
      latitude: 26.2006,
      longitude: 92.9376,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 11,
    coordinates: {
      latitude: 17.385,
      longitude: 78.4867,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 12,
    coordinates: {
      latitude: 21.1458,
      longitude: 79.0882,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 13,
    coordinates: {
      latitude: 25.5941,
      longitude: 85.1376,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 14,
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 15,
    coordinates: {
      latitude: 28.7041,
      longitude: 77.1025,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 16,
    coordinates: {
      latitude: 19.076,
      longitude: 72.8777,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 17,
    coordinates: {
      latitude: 13.0827,
      longitude: 80.2707,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 18,
    coordinates: {
      latitude: 22.5726,
      longitude: 88.3639,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 19,
    coordinates: {
      latitude: 26.9124,
      longitude: 75.7873,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 20,
    coordinates: {
      latitude: 11.0168,
      longitude: 76.9558,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 21,
    coordinates: {
      latitude: 15.2993,
      longitude: 74.124,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 22,
    coordinates: {
      latitude: 25.5941,
      longitude: 85.1376,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 23,
    coordinates: {
      latitude: 17.385,
      longitude: 78.4867,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 24,
    coordinates: {
      latitude: 22.2587,
      longitude: 71.1924,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 25,
    coordinates: {
      latitude: 19.9975,
      longitude: 73.7898,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 26,
    coordinates: {
      latitude: 12.2958,
      longitude: 76.6394,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
  {
    id: 27,
    coordinates: {
      latitude: 28.6139,
      longitude: 77.209,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  },
];

const cars: Car[] = [
  {
    id: "1",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    carType: "sedan intercity",
    arrivingTime: "3:57pm",
    minAway: 8,
    fair: 302.41,
  },
  {
    id: "2",
    carImage:
      "https://cdn.pixabay.com/photo/2020/07/09/09/37/triumph-spitfire-5386572_960_720.png",
    carType: "go intercity",
    arrivingTime: "4:05pm",
    minAway: 10,
    fair: 208.41,
  },
];

const pastTrips: PastTrip[] = [
  {
    id: "1",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Sardar Vallabhbhai Patel International Airport",
    bookingDate: "2022-09-08T08:02:17-05:00",
    bookingTime: "2022-09-08T08:02:17-05:00",
    fair: 358.86,
  },
  {
    id: "2",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Excellence Hair TRansplant & Laboretry",
    bookingDate: "2022-11-08T08:02:17-05:00",
    bookingTime: "2022-11-08T08:02:17-05:00",
    fair: 400,
  },
  {
    id: "3",
    carImage:
      "https://cdn.pixabay.com/photo/2020/07/09/09/37/triumph-spitfire-5386572_960_720.png",
    location: "Terminal 3",
    bookingDate: "2022-09-08T08:02:17-05:00",
    bookingTime: "2022-09-08T08:02:17-05:00",
    fair: 270.76,
  },
  {
    id: "4",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Lohia Hostels",
    bookingDate: "2022-12-08T08:02:17-05:00",
    bookingTime: "2012-12-08T08:02:17-05:00",
    fair: 870,
  },
  {
    id: "5",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Sardar Vallabhbhai Patel International Airport",
    bookingDate: "2022-09-08T08:02:17-05:00",
    bookingTime: "2022-09-08T08:02:17-05:00",
    fair: 358.86,
  },
  {
    id: "6",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Excellence Hair TRansplant & Laboretry",
    bookingDate: "2022-11-08T08:02:17-05:00",
    bookingTime: "2022-11-08T08:02:17-05:00",
    fair: 400,
  },
  {
    id: "7",
    carImage:
      "https://cdn.pixabay.com/photo/2020/07/09/09/37/triumph-spitfire-5386572_960_720.png",
    location: "Terminal 3",
    bookingDate: "2022-09-08T08:02:17-05:00",
    bookingTime: "2022-09-08T08:02:17-05:00",
    fair: 270.76,
  },
  {
    id: "8",
    carImage:
      "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png",
    location: "Lohia Hostels",
    bookingDate: "2022-12-08T08:02:17-05:00",
    bookingTime: "2012-12-08T08:02:17-05:00",
    fair: 870,
  },
];

export {
  visitedLocations,
  services,
  serviceCards1,
  serviceCards2,
  serviceBanners,
  pickupRules,
  mapStyle,
  indianPlaces,
  cars,
  pastTrips,
};
