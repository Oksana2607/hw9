describe('checker', () => {

    it(`should return false then string = 'Hello world', letter1 = 'e', letter2 = 'o'`, () => {
        //Given
        const string = 'Hello world';
        const letter1 = 'e';
        const letter2 = 'o';
        const expected = false;

        //When
        const actual = checker(string, letter1, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return false then string = 'HEllo World', letter1 = 'e', letter2 = 'w'`, () => {
        //Given
        const string = 'HEllo World';
        const letter1 = 'e';
        const letter2 = 'w';
        const expected = true;

        //When
        const actual = checker(string, letter1, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return false then string = 'HeellO world', letter1 = 'e', letter2 = 'o'`, () => {
        //Given
        const string = 'HeellO world';
        const letter1 = 'e';
        const letter2 = 'o';
        const expected = true;

        //When
        const actual = checker(string, letter1, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return true then string = 'Hello world', letter1 = 'e', letter2 = 'r'`, () => {
        //Given
        const string = 'Hello world';
        const letter1 = 'e';
        const letter2 = 'r';
        const expected = true;

        //When
        const actual = checker(string, letter1, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return true then string = 'Hello', letter2 = 'r'`, () => {
        //Given
        const string = 'Hello';
        const letter2 = 'r';
        const expected = undefined;

        //When
        const actual = checker(string, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return true then string = 'Hello', letter1 = 'e'`, () => {
        //Given
        const string = 'Hello';
        const letter1 = 'e';
        const expected = undefined;

        //When
        const actual = checker(string, letter1);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return true then string = '', letter1 = 'e', letter2 = 'r'`, () => {
        //Given
        const string = '';
        const letter1 = 'e';
        const letter2 = 'r';
        const expected = true;

        //When
        const actual = checker(string, letter1, letter2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return 'Input param in not a string' then string is not typeof string(string = 25)`, () => {
        //Given
        const string = 25;
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });

    it(`should return 'Input param in not a string' then string is not type of string(string = true)`, () => {
        //Given
        const string = true;
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });

    it(`should return 'Input param in not a string' then string is not type of string(string = null)`, () => {
        //Given
        const string = null;
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });

    it(`should return 'Input param in not a string' then string is not type of string(string = undefined)`, () => {
        //Given
        const string = undefined;
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });

    it(`should return 'Input param in not a string' then string is not type of string(string = [1, 2, 3])`, () => {
        //Given
        const string = [1, 2, 3];
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });

    it(`should return 'Input param in not a string' then string is not type of string(string = {})`, () => {
        //Given
        const string = {};
        const letter1 = 'e';
        const letter2 = 'r';

        //Then
        assert.throws(() => {
            checker(string, letter1, letter2)
        }, Error, 'Input param in not a string');
    });
});

describe('truncate', () => {

    it(`should return 'Hello…' then string = 'Hello', maxLength = 6`, () => {
        //Given
        const string = 'Hello';
        const maxlength = 6;
        const expected = 'Hello…';

        //When
        const actual = truncate(string, maxlength);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return 'Enter correctly all parameters' then string = '', maxLength = 6`, () => {
        //Given
        const string = '';
        const maxlength = 6;

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = null, maxLength = 6`, () => {
        //Given
        const string = null;
        const maxlength = 6;

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = undefined, maxLength = 6`, () => {
        //Given
        const string = undefined;
        const maxlength = 6;

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = 'hello', maxLength = ''`, () => {
        //Given
        const string = 'hello';
        const maxlength = '';

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = 'hello', maxLength = null`, () => {
        //Given
        const string = 'hello';
        const maxlength = null;

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = 'hello', maxLength = undefined`, () => {
        //Given
        const string = 'hello';
        const maxlength = undefined;

        //Then
        assert.throws(() => {
            truncate(string, maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then maxLength = 6`, () => {
        //Given
        const maxlength = 6;

        //Then
        assert.throws(() => {
            truncate(maxlength)
        }, Error, 'Enter correctly all parameters');
    });

    it(`should return 'Enter correctly all parameters' then string = 'hello'`, () => {
        //Given
        const string = 'hello';

        //Then
        assert.throws(() => {
            truncate(string)
        }, Error, 'Enter correctly all parameters');
    });
});

describe('findMatchString', () => {

    it(`should return 'Hello' then str1 = 'Hello world world', str2 = 'world'`, () => {
        //Given
        const str1 = 'Hello world world';
        const str2 = 'world';
        const expected = 'Hello';

        //When
        const actual = findMatchString(str1, str2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return 'Hello' then str1 = 'Hello world', str2 = 'world'`, () => {
        //Given
        const str1 = 'Hello world';
        const str2 = 'world';
        const expected = 'Hello';

        //When
        const actual = findMatchString(str1, str2);

        //Then
        assert.strictEqual(actual, expected);
    });

    it(`should return 'No argument 1' then str1 = '', str2 = 'world'`, () => {
        //Given
        const str1 = '';
        const str2 = 'world';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 1');
    });

    it(`should return 'No argument 1' then str1 = null, str2 = 'world'`, () => {
        //Given
        const str1 = null;
        const str2 = 'world';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 1');
    });

    it(`should return 'No argument 1' then str1 = undefined, str2 = 'world'`, () => {
        //Given
        const str1 = undefined;
        const str2 = 'world';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 1');
    });

    it(`should return 'No argument 2' then str1 = 'Hello world', str2 = ''`, () => {
        //Given
        const str1 = 'Hello world';
        const str2 = '';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 2');
    });

    it(`should return 'No argument 2' then str1 = 'Hello world', str2 = null`, () => {
        //Given
        const str1 = 'Hello world';
        const str2 = null;

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 2');
    });

    it(`should return 'No argument 2' then str1 = 'Hello world', str2 = undefined`, () => {
        //Given
        const str1 = 'Hello world';
        const str2 = undefined;

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No argument 2');
    });

    it(`should return 'No arguments' then str1 = '', str2 = ''`, () => {
        //Given
        const str1 = '';
        const str2 = '';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'No arguments');
    });

    it(`should return 'No arguments' then str1 = 'Hello', str2 = 25`, () => {
        //Given
        const str1 = 'Hello';
        const str2 = 25;

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'Input params are not a string');
    });

    it(`should return 'No arguments' then str1 = 45, str2 = 'Hello'`, () => {
        //Given
        const str1 = 45;
        const str2 = 'Hello';

        //Then
        assert.throws(() => {
            findMatchString(str1, str2)
        }, Error, 'Input params are not a string');
    });
});

