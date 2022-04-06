import forge from "node-forge";
import config from "@/config";

class Cryptography {
  static encrypt = (value: string): string => {
    const encrypted = forge.rc2.createEncryptionCipher(config.rc2SecretKey);
    encrypted.start(config.rc2IV);
    encrypted.update(forge.util.createBuffer(value));
    encrypted.finish();

    return encrypted.output.getBytes();
  };

  static decrypt = (value: string): string => {
    const cipher = forge.rc2.createDecryptionCipher(config.rc2SecretKey);
    cipher.start(config.rc2IV);
    cipher.update(forge.util.createBuffer(value));
    cipher.finish();

    const stringDecrypted = cipher.output.getBytes();

    return stringDecrypted;
  };
}

export default Cryptography;
