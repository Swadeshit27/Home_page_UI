export const ZoomIn = {
  PictureHidden: {
    scale: 0,
    rotate: "-60deg",
  },
  PictureShow: {
    scale: 1,
    rotate: "0deg",
    transition: {
      duration: 0.8,
      ease: "backInOut",
    },
  },
  TextHidden: {
    y: 100,
    scale: 0,
  },
  TextShow: {
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  CommentHidden: {
    y: 100,
    opacity: 0,
  },
  CommentShow: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    bounce: 0.4,
    delay: 0.3,
    duration: 0.5,
  },
};

export const CardVariant = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

