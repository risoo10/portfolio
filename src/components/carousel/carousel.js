import React, { useEffect, useRef, useState } from 'react'
import styles from './carousel.module.scss'
import { motion } from 'framer-motion'
import { complexAnimationDuration } from '../../constants'

export function Carousel(props) {
  const slides = props.slides
  const totalSteps = slides.length
  const [currentStep, setCurrentStep] = useState(1)
  const intervalRef = useRef()

  const slideAnimations = {
    hiddenStart: { x: '-100%', scale: 1, opacity: 0 },
    center: { x: '0', scale: 1, opacity: 1 },
    hiddenEnd: { x: '100%', scale: 1, opacity: 0 },
  }

  const textAnimation = {
    hidden: { y: ['0px', '0px', '0px', '100px'] },
    visible: { y: 0 },
  }

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    startInterval()
  }

  const increment = (newIntervalNeeded, currentStep) => {
    let nextStep = currentStep + 1
    if (currentStep === totalSteps) {
      nextStep = 1
    }
    newIntervalNeeded && resetInterval()
    return nextStep
  }

  const decrement = (newIntervalNeeded, currentStep) => {
    let nextStep = currentStep - 1
    if (currentStep === 1) {
      nextStep = totalSteps
    }
    newIntervalNeeded && resetInterval()
    return nextStep
  }

  const startInterval = () => {
    const intervalDuration = 5000
    const newIntervalId = setInterval(() => {
      setCurrentStep(currentStep => increment(false, currentStep))
    }, intervalDuration)
    intervalRef.current = newIntervalId
  }

  useEffect(() => {
    startInterval()
    return () => {
      clearInterval(intervalRef.current)
      console.log('[carousel] unmount', intervalRef.current)
    }
  }, [])


  const getSlideAnimation = (index, currentStep) => {
    const positions = ['center', 'hiddenEnd', 'hiddenStart']
    const positionIndex = (index - (currentStep - 1) + totalSteps) % totalSteps
    return positions[positionIndex]
  }

  return <React.Fragment>
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselState}>
        <span className={styles.currentStep}>{currentStep}</span>/{totalSteps}
      </div>

      <div className={styles.carouselControls}>
        <i onClick={() => setCurrentStep(decrement(true, currentStep))} className={`fas fa-angle-left fa-lg`}/>
        <i onClick={() => setCurrentStep(increment(true, currentStep))} className={`fas fa-angle-right fa-lg`}/>
      </div>

      <div className={styles.slides}>
        {slides.map((slide, slideIndex) =>
          <motion.div
            initial={{ scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
            animate={getSlideAnimation(slideIndex, currentStep)}
            transition={{ duration: complexAnimationDuration }}
            variants={slideAnimations}
            key={slide}
            className={styles.slide}
          >
            <div className={styles.imgWrapper} style={{ opacity: slide * 0.3 }}>
              <span>{slide}</span>
            </div>
            <div
              className={styles.descriptionWrapper}>
              <motion.div className={styles.descriptionContent} initial="hidden"
                          animate={slideIndex === (currentStep - 1) ? 'visible' : 'hidden'}
                          transition={{ duration: complexAnimationDuration, delay: 0.2 }}

                          variants={textAnimation}>
                {slide}
              </motion.div>
            </div>
          </motion.div>,
        )}
      </div>
    </div>
  </React.Fragment>
}