export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const transition = {
  duration: 0.3,
};

export const animationTwo = {
  in: {
    opacity: 1,
    x: -300,
  },
  out: {
    opacity: 0,
    x: 300,
  },

  end: {
    opacity: 1,
    x: 0,
  },
};
