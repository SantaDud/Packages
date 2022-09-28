const guests = ["Robin Williams", "Heath Ledger", "Johnny Depp"];

for (let i = 0; i < guests.length; i++)
    console.log(`You are invited to the the dinner, Mr. ${guests[i]}`);

console.log("Mr. Johnny Depp cannot make it.");
guests.pop();
guests.push("Rowan Atkinson");

for (let i = 0; i < guests.length; i++)
    console.log(`You are invited to the the dinner, Mr. ${guests[i]}`);