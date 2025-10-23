import pyautogui
import time
import keyboard

stop_script = False

def on_key(event):
    global stop_script
    if event.name == 's':
        stop_script = True

keyboard.on_press(on_key)

print("Starting in 5 seconds...")
time.sleep(5)

while not stop_script:
    pyautogui.click()
    pyautogui.typewrite("Hi")
    pyautogui.press("enter")
    time.sleep(1)

print("Script stopped.")
