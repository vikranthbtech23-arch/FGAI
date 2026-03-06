export interface User {
  name: string;
  email: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests: string;
}

export interface CustomerData {
  fullName: string;
  email: string;
  phone: string;
  favoriteFood: string;
  frequency: string;
}

export interface FeedbackData {
  name: string;
  email: string;
  foodRating: string;
  serviceRating: string;
  comments: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}