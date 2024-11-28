const photos = [
    {
    id: 1,
    name: 'small goats',
    url: 'https://www.worldvision.org/wp-content/uploads/2020/09/D485-1090-047_Web_Optimized.jpg'
},
    {
    id: 2,
    name: 'child with goat',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1920px-Hausziege_04.jpg'
},
    {
    id: 3,
    name: 'mountain goat',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Goats_butting_heads_in_Germany.jpg'
},
]
export default {
    getPhoto: (id) => photos.find(photo=>photo.id === id), 
    getAll: () => photos,
};