import { partial } from '../lib/utils';

/**
 * TESTS
 */
test('partial calls should return same result as direct function call', () => {
  const joinArgs = (arg1: string, arg2: string, arg3: string, arg4: string) => [arg1, arg2, arg3, arg4].join(',');

  const sampleArgs = ['test1', 'test2', 'test3', 'test4'];

  const partialJoinArgs1 = partial(joinArgs, sampleArgs[0]);
  const partialJoinArgs2 = partial(partialJoinArgs1, sampleArgs[1]);
  const partialJoinArgs3 = partial(partialJoinArgs2, sampleArgs[2]);

  const resultFromFullFunction = joinArgs(sampleArgs[0], sampleArgs[1], sampleArgs[2], sampleArgs[3]);

  expect(partialJoinArgs1(sampleArgs[1], sampleArgs[2], sampleArgs[3])).toEqual(resultFromFullFunction);
  expect(partialJoinArgs2(sampleArgs[2], sampleArgs[3])).toEqual(resultFromFullFunction);
  expect(partialJoinArgs3(sampleArgs[3])).toEqual(resultFromFullFunction);
});