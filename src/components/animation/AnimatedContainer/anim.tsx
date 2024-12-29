export const containerAnimation = (
  delay = 0,
  direction: "up" | "down" | "left" | "right" = "up"
) => {
  let initialY = "100%";
  let initialX = "0%";
  let enterY = "0%";
  let enterX = "0%";
  let exitY = "-100%";
  let exitX = "0%";

  switch (direction) {
    case "up":
      initialY = "100%";
      enterY = "0%";
      exitY = "-100%";
      break;
    case "down":
      initialY = "-100%";
      enterY = "0%";
      exitY = "100%";
      break;
    case "left":
      initialX = "100%";
      enterX = "0%";
      exitX = "-100%";
      break;
    case "right":
      initialX = "-100%";
      enterX = "0%";
      exitX = "100%";
      break;
    default:
      break;
  }

  return {
    initial: {
      x: initialX,
      y: initialY,
    },
    enter: {
      x: enterX,
      y: enterY,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      x: exitX,
      y: exitY,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
};
