export const generateRandomUid = () => {
    const characters = [1,2,3,4,5,6,7,8,9,0,'a','z','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
    const newUidArray = [];
    for (let i = 0; i < 20; i ++) {
        const randomIndex = Math.floor((Math.random() * characters.length - 1) + 1);
        newUidArray.push(characters[randomIndex]);
    };
    const newUid = newUidArray.join('');
    return newUid;
}