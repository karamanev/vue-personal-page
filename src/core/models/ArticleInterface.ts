export interface Article {
    title: string;
    subtitle: string;
    text: string;
    images: [string];
    innerTitles: [string];
    quotes: [string];
    topics: [Topics]
    imageTexts?: [string];
    date: Date
}


export interface ArticleInput {
    title: string;
    subtitle: string;
    text: string;
    images: string;
    innerTitles: string;
    quotes: string;
    topics: string
    imageTexts: string;
}


export enum Topics { 
    'Литература',
    'Технологии',
    'Наука'
}