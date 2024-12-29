import cv2
import datetime
import time

def motion_detection():
    cap = cv2.VideoCapture(0)
    fgbg = cv2.createBackgroundSubtractorMOG2()

    # Définis la fréquence en secondes (0.200 = 200ms)
    detection_frequency = 0.100
    last_detection_time = time.time()

    while True:
        current_time = time.time()
        
        # Vérifie si le temps écoulé correspond à la fréquence souhaitée
        if current_time - last_detection_time >= detection_frequency:
            last_detection_time = current_time  # Met à jour le dernier temps de détection

            ret, frame = cap.read()
            if not ret:
                break

            blur_frame = cv2.GaussianBlur(frame, (21, 21), 0)
            grey_frame = cv2.cvtColor(blur_frame, cv2.COLOR_BGR2GRAY)
            fgmask = fgbg.apply(grey_frame)
            thresh = cv2.threshold(fgmask, 25, 255, cv2.THRESH_BINARY)[1]
            dilate_image = cv2.dilate(thresh, None, iterations=2)
            contours, _ = cv2.findContours(dilate_image.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

            if contours is not None:
                for c in contours:
                    if cv2.contourArea(c) > 300:
                        (x, y, w, h) = cv2.boundingRect(c)
                        cv2.rectangle(frame, (x, y), (x + w, y + h), (240, 0, 0), 2)

                        current_time_str = datetime.datetime.now().strftime('%Y-%m-%d heure %H-%M')
                        with open("motion_log.txt", "a") as log_file:
                            log_file.write(f"{current_time_str} il y a eu un mouvement chez vous\n")

            cv2.imshow("Frame", frame)

        # Quitte proprement avec la touche 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

motion_detection()