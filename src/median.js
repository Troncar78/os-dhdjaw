export default function median(array) {
    if (!Array.isArray(array)) {
        throw new Error("L'entrée n'est pas un tableau.");
    }

    if (array.length === 0) {
        throw new Error("Le tableau est vide.");
    }

    const sortedArray = array.slice().sort((a, b) => a - b);

    const milieu = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[milieu - 1] + sortedArray[milieu]) / 2;
    } else {
        return sortedArray[milieu];
    }
}