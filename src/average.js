export default function average(array) {
    if (!Array.isArray(array)) {
        throw new Error("L'entrée doit être un tableau");
    }

    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}