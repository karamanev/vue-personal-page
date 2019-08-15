export default interface Article {
    title: string;
    subtitle: string;
    text: string;
    images: [string];
    innerTitles: [string];
    quotes: [string];
    topics: [string]
    imageTexts?: [string];
}