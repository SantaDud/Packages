const sandwiches = (...args) => {
    const ingredients = [];
    for (let i = 0; i < args.length; i++)
        ingredients.push(args[i]);
    console.log("The sandwich has the following ingredients: " + ingredients);
}

sandwiches("tomato", "potato");
sandwiches("tomato", "onions", "mayonaise");
sandwiches("lettuce");