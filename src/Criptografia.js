// import Crypto from 'crypto-browserify';

class Criptografia {
  constructor(algorithm, secretKey) {
    this.algorithm = algorithm;
    this.secretKey = secretKey;

    try {
      this.iv = crypto?.randomBytes(16);
    } catch (error) {
      console.error(error);
    }

    this.hashString512 = (string) => {
      if (!crypto) return false;
      const md5sum = crypto?.createHash('sha512');

      return md5sum.update(string).digest('hex');
    };

    this.encrypt = (text) => {
      try {
        if (!crypto || !Buffer) return false;

        const {
          iv,
        } = this;

        const cipher = crypto.createCipheriv(
          algorithm,
          secretKey,
          iv,
        );

        const encrypted = Buffer?.concat([cipher.update(
          typeof (text) === 'object'
            ? JSON.stringify(text)
            : text,
        ), cipher.final()]);

        return {
          iv: iv.toString('hex'),
          content: encrypted.toString('hex'),
        };
      } catch (error) {
        console.error('Error encrypting: ', error);
        return false;
      }
    };

    this.criptografar = this.encrypt;

    this.decrypt = (hash) => {
      try {
        if (!crypto || !Buffer) return false;

        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer?.from(hash.iv, 'hex'));

        const decrypted = Buffer?.concat([decipher.update(Buffer?.from(hash.content, 'hex')), decipher.final()]);

        let isJson = true;

        try {
          JSON.parse(decrypted);
        } catch (error) {
          isJson = false;
        }

        return isJson ? JSON.parse(decrypted) : decrypted.toString();
      } catch (error) {
        console.error('Error decrypting: ', error);
        return false;
      }
    };

    this.descriptografar = this.decrypt;

    this.hashPassword = this.hashString;
  }
}

const Cryptography = (
  algorithm, secretKey, crypto,
) => {
  try {
    return new Criptografia(algorithm, secretKey, crypto);
  } catch (error) {
    console.error(error);
    return false;
  }
};

// export default Cryptography;
const NotImplemented = () => {
  const ErrorMessage = 'Cryptography module has been disabled due to errors, it may be available again in the future';
  console.error(ErrorMessage);
  return {
    criptografar: () => console.error(ErrorMessage),
    encrypt: () => console.error(ErrorMessage),
    descriptografar: () => console.error(ErrorMessage),
    decrypt: () => console.error(ErrorMessage),
  }
};

export default NotImplemented;
