async function getName() {
    return "kys";
}

async function printName() {
    const name = await getName();
    console.log(name);
}

printName();
