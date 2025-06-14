export const animationSettings = {
    // left to right 
    fadeInLeftToRight: {
        initial: { x: '-20%', opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { type: 'spring', stiffness: 50, damping: 25, duration: 2, delay: 0.2 },
        viewport: { once: true }
    },

    //right to left
    fadeInRightToLeft: {
        initial: { x: '20%', opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { type: 'spring', stiffness: 50, damping: 25, duration: 2, delay: 0.5 },
        viewport: { once: true }
    },

    //bottom to up
    fadeInBottomToTop: {
        initial: { y: '30%', opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { type: 'spring', stiffness: 50, damping: 25, duration: 2 },
        viewport: { once: true }
    },

    //up to bottom
    fadeInTopToBottom: {
        initial: { y: '-30%', opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { type: 'spring', stiffness: 50, damping: 25, duration: 2 },
        viewport: { once: true }
    },

    // Fade in from top to bottom and scale from bottom to top
    fadeInTopToBottomWithScale: {
        initial: {
            y: '-70%',
            opacity: 0,
            scale: 0.8, // Initial scale is smaller
            transformOrigin: 'bottom', // Scale from the bottom
        },
        whileInView: {
            y: 0,
            opacity: 1,
            scale: 1, // Scale to normal size when in view
        },
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 25,
            duration: 2
        },
        viewport: { once: true }
    },

    // Fade in from top to bottom and scale from bottom to top
    fadeInBottomToTopWithScale: {
        initial: {
            y: '10%',
            opacity: 0,
            scale: 0.8, // Initial scale is smaller
            transformOrigin: 'bottom', // Scale from the bottom
        },
        whileInView: {
            y: 0,
            opacity: 1,
            scale: 1, // Scale to normal size when in view
        },
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 25,
            duration: 2
        },
        viewport: { once: true }
    }
}

