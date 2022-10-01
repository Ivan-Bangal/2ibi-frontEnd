
import { StackDivider, useColorModeValue, VisuallyHidden, List, ListItem, Container, SimpleGrid, Flex, Stack, Image, Heading, VStack, Button, Text, Box, LinkBox, Link as Ok, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { Country } from '../../model/countries';
import { ExportCSV } from '../exportFile/ExportCSV';

interface CountryDetailsProps {
    country: Country
}

export default function CountryDetails({ country }: CountryDetailsProps) {


    return (

        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 40 }}
        >
            <Flex>
                <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={
                        country.flags.png
                    }
                    fit={'fill'}
                    align={'center'}
                />
            </Flex>
            <Stack>
                <Box as={'header'}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                        Name: {country.name.common}
                    </Heading>

                </Box>

                <Stack

                    direction={'column'}
                    divider={
                        <StackDivider
                            borderColor={useColorModeValue('gray.200', 'gray.600')}
                        />
                    }>
                    <VStack spacing={{ base: 4, sm: 6 }}>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize={'2xl'}
                            fontWeight={'300'}>
                            Capital: {country.capital}
                        </Text>
                        <Text fontSize={'lg'}>
                            Region: {country.region}
                        </Text>
                        <Text fontSize={'lg'}>
                            Population: {country.population}
                        </Text>
                    </VStack>
                    <Box>
                        <Text

                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                        >
                            Borders
                        </Text>

                        <SimpleGrid columns={{ base: 1, md: 2 }}  >
                            <List  >
                                {country.borders.map((border: String, id: number) => (
                                    <Ok key={id}>
                                        <Link href={"/country/" + border} >
                                            <ListItem>
                                                <Text
                                                    fontSize={'2xl'}
                                                >
                                                    {border}
                                                </Text>
                                            </ListItem>
                                        </Link>
                                    </Ok>
                                ))}
                            </List>

                        </SimpleGrid>
                    </Box>

                </Stack>
                <HStack>
                    <ExportCSV csvData={[country]} fileName={country.name.common + "File"} fileExtension=".xlsx"/>
                    <ExportCSV csvData={[country]} fileName={country.name.common + "File"} fileExtension=".csv"/>
                    
                </HStack>
            </Stack>
        </SimpleGrid>

    );
}