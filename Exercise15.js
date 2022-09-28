const guests = ["Robin Williams", "Heath Ledger", "Johnny Depp"];

for (let i = 0; i < guests.length; i++)
    console.log(`You are invited to the the dinner, Mr. ${guests[i]}`);

console.log("Mr. Johnny Depp cannot make it.");
guests.pop();
guests.push("Rowan Atkinson");

for (let i = 0; i < guests.length; i++)
    console.log(`You are invited to the the dinner, Mr. ${guests[i]}`);

console.log("I found a bigger table.");
guests.unshift("Samuel Jackson");
guests.splice(3, 0, "Barack Obama");
guests.push("Keanu Reeves");

for (let i = 0; i < guests.length; i++)
    console.log(`You are invited to the the dinner, Mr. ${guests[i]}`);

console.log("I only have space for two guests.");

for (let i = guests.length - 1; i > 1 ; i--)
    console.log(`Sorry you are not invited, Mr. ${guests.pop()}`);

for (let i = 0; i < guests.length; i++)
    console.log(`You are still invited to the the dinner, Mr. ${guests[i]}`);

guests.pop();
guests.pop();

console.log(guests);
