export const Animations = {
    
    // letter animation
    letter: {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25 }
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25 }
        }
    },

    // letter container animation
    container: {
        visible: {
            transition: {
                staggerChildren: 0.08,
            }
        }
    },

    // fade-in-left animation
    FadeLeft: {
        hidden: {
            x: "-2%",
            opacity: 0,

        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .5 }
        }
    },

    // fade-in-right animation
    FadeRight: {
        hidden: {
            x: "2%",
            opacity: 0,

        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .5 }
        }
    },

    // picture animation
    picture: {
        hidden: {
            height: "600px",
            opacity: 0, x: "2%",
        },
        visible: {
            height: "600px",
            x: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .7 }
        }
    }
}