import { Box, Center, Flex, GridItem, Image, SimpleGrid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Card from "../../components/card/Card";
import CountryDetails from "../../components/countryDetails/countryDetails";
import { Country } from "../../model/countries";
import { useGetSpecificCountries } from "../../services/CountryService";


interface CountryPageProps {
    country: Country
}


export default function CountryPage() {

    const router = useRouter()
    const { cca2 } = router.query;

    const { data: countries, loading, error } = useGetSpecificCountries("" + cca2)


    if (loading) {
        return (
            <>
                <Skeleton>
                    <Image
                        w="full"
                        h={56}
                        fit="cover"
                        src={""}
                        alt="avatar"
                    >

                    </Image>
                </Skeleton>

            </>
        )
    }


    return (
        <Flex bg={"white"} pl={"20vh"} pt={"50px"} position="relative" >
            {countries.map((country: Country, id: number) => (
                <CountryDetails key={id} country={country} />
            ))
            }
        </Flex>

    )
}
