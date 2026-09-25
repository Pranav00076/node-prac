console.log(process)
console.log(process.env)

// Argument (in terminal after node file)
console.log(process.argv)

// for example we use git commands like "git status", here git = process.argv and status = Hello, this is how commands work.

const args = process.argv.slice(2);
console.log(args)

if (args[0] == "Hello") {
    console.log("Show me your body")
} else {
    console.log("Fahhhhhh")
}

