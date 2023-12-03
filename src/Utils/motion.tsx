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
        duration: .5,
    },
};

export const CardVariant = {
    hidden: {
        y: 300,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    }

}

// export const textVariant = (delay) => {
//     return {
//         hidden: {
//             y: -50,
//             opacity: 0,
//         },
//         show: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 duration: 1,
//                 delay: 0.2,
//             },
//         },
//     };
// };

// export const fadeIn = (direction, type, delay, duration) => {
//     return {
//         hidden: {
//             x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//             y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//             opacity: 0,
//         },
//         show: {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: type,
//                 delay: delay,
//                 duration: duration,
//                 ease: "easeOut",
//             },
//         },
//     };
// };

// export const zoomIn = (delay, duration) => {
//     return {
//         hidden: {
//             scale: 0,
//             opacity: 0,
//         },
//         show: {
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 type: "tween",
//                 delay: delay,
//                 duration: duration,
//                 ease: "easeOut",
//             },
//         },
//     };
// };

// export const slideIn = (direction, type, delay, duration) => {
//     return {
//         hidden: {
//             x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//             y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//         },
//         show: {
//             x: 0,
//             y: 0,
//             transition: {
//                 type: type,
//                 delay: delay,
//                 duration: duration,
//                 ease: "easeOut",
//             },
//         },
//     };
// };

// export const staggerContainer = (staggerChildren, delayChildren) => {
//     return {
//         hidden: {},
//         show: {
//             transition: {
//                 staggerChildren: staggerChildren,
//                 delayChildren: delayChildren || 0,
//             },
//         },
//     };
// };