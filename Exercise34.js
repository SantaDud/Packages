const pizzas = ["margherita", "pepperoni", "sausage"];

for (let i = 0; i < pizzas.length; i++)
    console.log(`${pizzas[i]} pizza`);

// Modified Loop
for (let i = 0; i < pizzas.length; i++)
    if (i === 0)
        console.log(`${pizzas[i]} pizzas have only cheese and tomato sauce`);
    else if (i === 1)
        console.log(`${pizzas[i]} pizzas also have pepperoni`);
    else if (i === 2)
        console.log(`${pizzas[i]} pizzas also have sausages`);

console.log(`The pizzas listed above are ${pizzas[0]} pizza, ${pizzas[1]} pizza,
${pizzas[2]} pizza. These are some of the basic kind of pizza that I prefer over the 
ones that come loaded with vegetables which destroy the taste. I love pizza only when the flavor 
is kept simple and original.`)