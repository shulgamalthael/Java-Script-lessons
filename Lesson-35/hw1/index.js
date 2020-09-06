const strJson = '{"name": "Jack"}';
// const a = JSON.parse(strJson);

export const parseUser = str => {
    try {
        return JSON.parse(str)
    }
    catch {
        return null;
    }
}

console.log(parseUser(strJson));