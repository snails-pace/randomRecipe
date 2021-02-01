const baseIngredient = {
    rice: ['Curry', 'Risotto', 'Kimchi Fried Rice', 'Rice Salad', 'Paella', 'Chili con Tofu', 'Teriyaki Bowl', 'Bibimbab', 'Tofu Yasai Don', 'Maki'],
    pasta: ['Spaghetti with Tomato Sauce', 'Rice Noodle Salad', 'Ramen', 'Pasta with Zucchini Cream Sauce', 'Udon Noodle Soup', 'Miso Noodle Salad', 'Yakisoba', 'Pad Thai', 'Soba Salad', 'Pho']
}

const additionalDish = {
    sideDish: ['Wakame Salad', 'Gyoza', 'Cucumber Salad', 'Salad', 'Kimchi', 'Bruschetta', 'grilled Artichokes', 'fried Avocado'],
    dessert: ['Mochi', 'Pudding', 'Red Berry Compot', 'Crepe', 'Icecream', 'Cookie', 'Mitarashi Dango', 'Waffles', 'Nama Chocolate']
}


let input = 'rice';

function dishRec(input) {
    const baseIndex = Math.floor((Math.random() * (baseIngredient[input].length -1)));
    console.log(`base Index ${baseIndex}`);
    const sideIndex = Math.floor((Math.random() * (additionalDish.sideDish.length - 1)));
    console.log(`side Index ${sideIndex}`);
    const dessertIndex = Math.floor((Math.random() * (additionalDish.dessert.length - 1)));
    console.log(`dessert Index ${dessertIndex}`);
    return ```You could cook ${baseIngredient[input][baseIndex]} with ${additionalDish.sideDish[sideIndex]} as
    side dish and ${additionalDish.dessert[dessertIndex]} as dessert.```
}

console.log(baseIngredient.rice[0]);
//console.log(dishRec(input));