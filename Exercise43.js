const magicians = ["Magician1", "Magician2", "Magician3", "Magician4"];

const show_magicians = (magicians) => {
    for (let i = 0; i < magicians.length; i++)
        console.log(magicians[i]);
}

const make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++)
        magicians[i] = `The great ${magicians[i]}`;

    return magicians;
}

const great_magicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(great_magicians);
