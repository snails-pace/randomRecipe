const baseIngredient = {
    rice: ['Curry', 'Risotto', 'Kimchi Fried Rice', 'Rice Salad', 'Paella', 'Chili con Tofu', 'Teriyaki Bowl', 'Bibimbab', 'Tofu Yasai Don', 'Maki'],
    pasta: ['Spaghetti with Tomato Sauce', 'Rice Noodle Salad', 'Ramen', 'Pasta with Zucchini Cream Sauce', 'Udon Noodle Soup', 'Miso Noodle Salad', 'Yakisoba', 'Pad Thai', 'Soba Salad', 'Pho']
}

const additionalDish = {
    sideDish: ['Wakame Salad', 'Gyoza', 'Cucumber Salad', 'Salad', 'Kimchi', 'Bruschetta', 'grilled Artichokes', 'fried Avocado'],
    dessert: ['Mochi', 'Pudding', 'Red Berry Compot', 'Crepe', 'Icecream', 'Cookie', 'Mitarashi Dango', 'Waffles', 'Nama Chocolate']
}

let input;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Would you like rice or pasta as base of the dish? ', (answer) => {
    input = answer;
    console.log(dishRec(input));
  rl.close();
});

function dishRec(input) {
    const baseIndex = Math.floor((Math.random() * (baseIngredient[input].length -1)));
    const sideIndex = Math.floor((Math.random() * (additionalDish.sideDish.length - 1)));
    const dessertIndex = Math.floor((Math.random() * (additionalDish.dessert.length - 1)));
    return `You could cook ${baseIngredient[input][baseIndex]} with ${additionalDish.sideDish[sideIndex]} as side dish and ${additionalDish.dessert[dessertIndex]} as dessert.`
}


