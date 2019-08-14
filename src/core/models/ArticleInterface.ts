export default interface Article {
    title: string;
    subtitle: string;
    text: string;
    images: [string];
    innerTitles: [string];
    imageTexts?: [string];
    quotes: [string];
}