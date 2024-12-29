from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import binascii

# Générer une clé AES de 256 bits
key = get_random_bytes(32)
print("Clé AES générée (hex):", binascii.hexlify(key).decode())

# Chiffrement du message
def encrypt_message(message, key):
    cipher = AES.new(key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(message.encode(), AES.block_size))
    return cipher.iv + ciphertext

# Déchiffrement du message
def decrypt_message(ciphertext, key):
    iv = ciphertext[:16]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = unpad(cipher.decrypt(ciphertext[16:]), AES.block_size).decode()
    return plaintext

# Exemple d'utilisation
message = "Voici un message crypté avec AES!"
ciphertext = encrypt_message(message, key)
print("Message chiffré (hex):", binascii.hexlify(ciphertext).decode())

# Sauvegarder la clé et le message chiffré dans des fichiers
with open('key.bin', 'wb') as f:
    f.write(key)
with open('message.enc', 'wb') as f:
    f.write(ciphertext)

decrypted_message = decrypt_message(ciphertext, key)
print("Message déchiffré:", decrypted_message)