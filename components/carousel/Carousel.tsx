import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Children, useState } from "react";


type CarouselProps = {

    children: JSX.Element

}

export default function Carousel({ children }: CarouselProps) {

    const arrowStyles = {
        cursor: "pointer",
        color: "whitesmoke",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        fontWeight: "bold",
        fontSize: "36px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",

        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = Children.count(children);

    const prevSlide = () => {

        if (currentSlide <= 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        }

    };

    const nextSlide = () => {
        if (currentSlide == slidesCount) {
            setCurrentSlide(slidesCount -1)
        } else {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        }

    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    return (
        <Flex
            w="full"
            bg="white"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={10}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden" pos="relative">
                <Flex     {...carouselStyle}>
                    {children}
                </Flex>
                <Text pos={"absolute"} left="0"   {...arrowStyles} onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text pos={"absolute"} right="0"   {...arrowStyles} onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
        </Flex>
    )
}