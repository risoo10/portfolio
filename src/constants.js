export const $lightBackgroundColor = '#F3F6F9'

export const complexAnimationDuration = 0.8
export const fastAnimationDuration = 0.4
export const staggerAnimationDelay = 0.2

export const introAnimationProps = {
  variants: {
    'visible': (i) => {
      if (i === undefined) {
        i = 0
      }
      return { opacity: 1, y: 0, transition: { duration: fastAnimationDuration, delay: i * staggerAnimationDelay } }

    },
  },
  animate: 'visible',
  initial: { opacity: 0, y: '30px' },
}
