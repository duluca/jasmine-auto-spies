import { throwArgumentsError } from './error-handling';

describe('throwArgumentsError', () => {
  let fakeExpectedArgs: any[];
  let fakeActualArgs: any[];
  let actualError: any;

  Given(() => {
    fakeExpectedArgs = [1, 2];
  });

  When(() => {
    try {
      throwArgumentsError(fakeExpectedArgs, fakeActualArgs);
    } catch (error) {
      actualError = error.message;
    }
  });

  describe('Given actual args are empty and dont match THEN throw the empty error', () => {
    Given(() => {
      fakeActualArgs = [];
    });

    Then(() => {
      expect(actualError).toContain(
        'But the function was called without any arguments'
      );
    });
  });

  describe('Given actual args dont match THEN throw error with arguments', () => {
    Given(() => {
      fakeActualArgs = [1];
    });

    Then(() => {
      expect(actualError).toContain('But the actual arguments were: 1');
    });
  });
});
