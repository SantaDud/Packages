const current_users = ["first", "second", "admin", "third", "fourth"];
const new_users = ["first", "second", "new_admin", "new_third", "new_fourth"];

for (let i = 0; i < new_users.length; i++)
    if (current_users.includes(new_users[i]))
        console.log("Please enter a new username.");
    else
        console.log("This username is available");