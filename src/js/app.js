export default class ErrorRepository {
  static get list() {
    return new Map([
      [200, 'OK'],
      [201, 'Created'],
      [301, 'Moved Permanently'],
      [302, 'Moved Temporarily'],
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
      [500, 'Internal Server Error'],
    ]);
  }

  static translate(code) {
    if (this.list.has(code)) {
      return this.list.get(code);
    }
    return 'Unknown error';
  }
}
