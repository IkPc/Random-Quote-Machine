export default function FilterLink(quote, author) {
    const wordsArray = (quote + ' - ' + author).split(/[\s'!?""]/);
    const encodedArray = wordsArray.map(word => encodeURIComponent(word)).join("%20");
    return encodedArray.replace(/%2E/g, '.');
}
