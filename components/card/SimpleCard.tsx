import { Flex, chakra, Box, Image, Link, Skeleton } from "@chakra-ui/react";
import { Country } from "../../model/countries";

interface CardProp {
    country: Country,
    loading: boolean
}

export default function SimpleCard({ country, loading }: CardProp) {

    if (loading) {
        return (
            <Flex
                bg="white"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    w="xs"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                    mx="auto"
                >
                    <Skeleton>
                        <Image
                            w="full"
                            h={56}
                            fit="cover"
                            src={"country.flags.png"}
                            alt="avatar"
                        />
                    </Skeleton>
                    <Box py={5} textAlign="center">
                        <Skeleton>
                            <Link
                                display="block"
                                fontSize="2xl"
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                fontWeight="bold"
                            >
                                {"country.name.official"}
                            </Link>
                        </Skeleton>
                        <Skeleton>
                            <chakra.span
                                fontSize="sm"
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                            >
                                Software Engineer
                            </chakra.span>
                        </Skeleton>
                    </Box>
                </Box>
            </Flex>
        )
    }

    return (
        <Flex
            bg="white"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w="xs"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                mx="auto"
            >

                <Image
                    w="full"
                    h={56}
                    fit="cover"
                    src={country.flags.png}
                    alt="avatar"
                />

                <Box py={5} textAlign="center">

                    <Link
                        display="block"
                        fontSize="2xl"
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                        fontWeight="bold"
                    >
                        {country.name.official}
                    </Link>


                    <chakra.span
                        fontSize="sm"
                        color="gray.700"
                        _dark={{
                            color: "gray.200",
                        }}
                    >
                        Software Engineer
                    </chakra.span>

                </Box>
            </Box>
        </Flex>

    )
}