export interface TransitionAnimation {
  name: string;
  delay?: number | string;
  duration?: number | string;
  easing?: string;
  fillMode?: string;
  direction?: string;
}

export interface TransitionAnimationPair {
  old: TransitionAnimation | TransitionAnimation[];
  new: TransitionAnimation | TransitionAnimation[];
}

export interface TransitionDirectionalAnimations {
  forwards: TransitionAnimationPair;
  backwards: TransitionAnimationPair;
}

const fade: TransitionAnimationPair = {
  old: {
    name: 'fadeIn',
    duration: '0.2s',
    easing: 'linear',
    fillMode: 'forwards',
  },
  new: {
    name: 'fadeOut',
    duration: '0.3s',
    easing: 'linear',
    fillMode: 'backwards',
  },
}

export const myFade: TransitionDirectionalAnimations = {
  forwards: fade,
  backwards: fade,
}
