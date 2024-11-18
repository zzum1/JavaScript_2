const students = [
    {
        "id": 1,
        "firstName": "Petras",
        "lastName": "Petraitis",
        "class": 10,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [8, 7, 9, 10, 6]
    },
    {
        "id": 2,
        "firstName": "Tomas",
        "lastName": "Tomaitis",
        "class": 7,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [10, 10, 10, 10, 10]
    },
    {
        "id": 3,
        "firstName": "Adomas",
        "lastName": "Adomaitis",
        "class": 6,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [4, 7, 9, 10, 9]
    },
    {
        "id": 4,
        "firstName": "Juozas",
        "lastName": "Juozaitis",
        "class": 5,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [5, 7, 6, 10, 4]
    },
    {
        "id": 5,
        "firstName": "Agnius",
        "lastName": "Agnaitis",
        "class": 9,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [5, 7, 9, 6, 6]
    },
    {
        "id": 6,
        "firstName": "Linas",
        "lastName": "Linaitis",
        "class": 6,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [7, 7, 9, 7, 6]
    },
    {
        "id": 7,
        "firstName": "Kipras",
        "lastName": "Kipraitis",
        "class": 11,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [8, 8, 8, 10, 6]
    },
    {
        "id": 8,
        "firstName": "Benas",
        "lastName": "Benaitis",
        "class": 10,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [7, 7, 9, 7, 6]
    },
    {
        "id": 9,
        "firstName": "Povilas",
        "lastName": "Povilaitis",
        "class": 7,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [9, 7, 9, 9, 9]
    },
    {
        "id": 10,
        "firstName": "Simas",
        "lastName": "Simanaitis",
        "class": 9,
        "subject": ["Matematika", "Fizika", "Lietuvių kalba", "Anglų kalba", "Istorija"],
        "ratings": [8, 7, 9, 10, 6]
    }
];


for (let key of students) {
    console.log('Mokinys', key.firstName, key.lastName);
    console.log('Klase:', key.class);
    console.log('----------------------')
    for (let i=0; i<key.subject.length; i++) {
            console.log(key.subject[i],':', key.ratings[i]);
    }
    console.log('----------------------')
    console.log('Vidurkis:', key.ratings.reduce((a, b) => a + b, 0) / key.ratings.length);

}

