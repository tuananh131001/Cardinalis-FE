const PageAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: 'easeIn',
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: { type: 'easeOut', duration: 0.5 }
  }
};

const SectionAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      type: 'easeIn',
      delay: 1.25
    }
  }
};

export { PageAnimation, SectionAnimation };
