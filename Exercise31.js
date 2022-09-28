const users = [];

if (users.length === 0)
{
    console.log("We need to find some users");
    return;
}

for (let i = 0; i < users.length; i++)
    if (users[i] === "admin")
        console.log("Hello admin, would you like a status report?");
    else
        console.log(`Hello ${users[i]}`);