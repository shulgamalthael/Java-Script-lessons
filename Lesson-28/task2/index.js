//Массив любимых каталогов.
const favorites = [ 'id-6', 'id-17' ];


//Родительское дерево каталогов.
const tree = {
    //Каталог 1.1 , имеет подкаталоги - 2.1Food , 2.2Vehicles
    id: 'id-1',
    name: 'Products',
    nodes: [
        //Каталог 2.1 имеет подкаталог 3.1Drinks.
        {
            id: 'id-2',
            name: 'Food',
            nodes: [
                {
                    id: 'id-6',
                    name: 'Drinks',
                    nodes: []
                }
            ]
        },
        {
            id: 'id-17',
            name: 'Vehicles',
            nodes: []
        }
    ],
};


//Функция проверки на любимые каталоги.
export const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites))
    }
}


//Результирующая переменная.
const result = markFavorites(tree, favorites);

console.log(result);