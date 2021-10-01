const CryptoBrowser = require('crypto-browserify');
const CryptoNode = require('crypto');

const isBrowser = typeof (window) !== 'undefined';

const crypto = isBrowser ? CryptoBrowser : CryptoNode;

class Criptografia {
  constructor(algorithm, secretKey) {
    this.algorithm = algorithm;
    this.secretKey = secretKey;

    this.iv = crypto.randomBytes(16);

    this.hashString512 = (string) => {
      const md5sum = crypto.createHash('sha512');

      return md5sum.update(string).digest('hex');
    };

    this.encrypt = (text) => {
      const {
        iv,
      } = this;

      const cipher = crypto.createCipheriv(
        algorithm,
        secretKey,
        iv,
      );

      const encrypted = Buffer.concat([cipher.update(
        typeof (text) === 'object'
          ? JSON.stringify(text)
          : text,
      ), cipher.final()]);

      return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex'),
      };
    };

    this.decrypt = (hash) => {
      const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

      const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

      let isJson = true;

      try {
        JSON.parse(decrypted);
      } catch (error) {
        isJson = false;
      }

      return isJson ? JSON.parse(decrypted) : decrypted.toString();
    };

    this.hashPassword = this.hashString;
  }
}

const createInstance = (algorithm, secretKey) => new Criptografia(algorithm, secretKey);

module.exports = createInstance;
