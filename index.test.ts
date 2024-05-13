import testFunction from './index';

jest.mock('event-source-plus');

test('reproduces the jest event source plus issue', async () => {
  const result = await testFunction();

  expect(result).toEqual(true);
});
