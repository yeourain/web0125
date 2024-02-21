const DB = [];

function savaDB(user) {
    const beforeLength = DB.length;
    const afterLength = DB.push(user);
    console.log(`저장 ${user.name}`);
    return new Promise((resolve, reject) => {
        if (beforeLength < afterLength) {
            resolve(user);
        } else {
            reject(new Error("저장되지 않았습니다"));
        }
    });
}

function sendEmail(user) {
    console.log(`이메일 ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve) => {
        resolve(`방문자 ${user.name}`);
    });
}

function register(user) {
    const resultAsync = Promise.all([
        savaDB(user),
        sendEmail(user),
        getResult(user),
    ]);

    resultAsync.then(console.log);
}

register({
    name: "김영선",
    email: "yskim8516@gmail.com",
});
