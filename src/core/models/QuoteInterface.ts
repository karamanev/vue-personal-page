export interface Quote {
  anouncement: string;
  text: string;
  author: string;
  image: string;
  date: Date;
  id: string;
}

export interface QuoteInput {
  anouncement: string;
  text: string;
  author: string;
  image: string;
}
