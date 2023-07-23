export const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const bg = {
  initial: {
    background: "#000",
    color: "white",
  },
  open: {
    background: "#f4f0ea",
    color: "black",
    transition: { duration: 0.35 },
  },
  closed: {
    background: "#000",
    color: "white",
    transition: { duration: 0.75 },
  },
};
export const bgBody = {
  initial: {
    background: "#000",
  },
  open: {
    background: "#f4f0ea",
    // transition: { duration: 0.35 },
  },
  closed: {
    background: "#000",
    transition: { duration: 0.75 },
  },
};
export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,

    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,

    transition: { duration: 0.35 },
  },
};
export const background = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};
export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};
export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};
