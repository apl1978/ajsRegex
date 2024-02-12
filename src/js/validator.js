export default class Validator {
  validateUsername(userName) {
    this.mainRe = /^[^0-9_-][A-Za-z0-9_-]+[^0-9_-]$/;
    this.moreThanThreeDigits = /\d{4,}/;
    return (
      this.mainRe.test(userName)
      && !this.moreThanThreeDigits.test(userName)
    );
  }
}
