const firstNames = [
    'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Oliver', 'Isabella', 'William', 'Sophia', 'James', 'Mia',
    'Lucas', 'Charlotte', 'Henry', 'Amelia', 'Alexander', 'Harper', 'Mason'
];

const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee'
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateData(n) {
    let data = [];
    for (let i = 0; i < n; i++) {
        data.push({
            id: i + 1,
            firstName: getRandomElement(firstNames),
            lastName: getRandomElement(lastNames),
            productA: randomInteger(45, 65),
            productB: randomInteger(300, 450),
            productC: randomInteger(30, 40)
        });
    }
    return data;
}

export function formatOptions(arr) {
    const data = [...new Set(arr)];
    return data.map(item => ({ value: item, label: item }));
}