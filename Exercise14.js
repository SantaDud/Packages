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