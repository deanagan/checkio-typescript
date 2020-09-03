
export function isAcceptablePassword(password: string): boolean {

    return password.length > 6;
}

//console.log.log('Example:');
//console.log.log(isAcceptablePassword('short'));

// // These "asserts" are used for self-checking
//assert.equal.equal(isAcceptablePassword('short'), false);
//assert.equal.equal(isAcceptablePassword('muchlonger'), true);
//assert.equal.equal(isAcceptablePassword('ashort'), false);
