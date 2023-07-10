import ErrorRepository from '../app';

const dataList = [
  [200, 'OK'],
  [201, 'Created'],
  [301, 'Moved Permanently'],
  [302, 'Moved Temporarily'],
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [404, 'Not Found'],
  [405, 'Method Not Allowed'],
  [500, 'Internal Server Error'],
  [501, 'Unknown error'],
];

const handler = test.each(dataList);
handler('Error code %i translates as %o', (code, description) => {
  const result = ErrorRepository.translate(code, description);
  expect(result).toBe(description);
});
