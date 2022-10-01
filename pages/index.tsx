import { Box, Center, Container, Flex, Input, SimpleGrid, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import SimpleCard from '../components/card/SimpleCard'
import Carousel from '../components/carousel/Carousel'
import { Country } from '../model/countries'
import { useGetCountries } from '../services/CountryService'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { data: countries, loading, error } = useGetCountries();

  const [filterText, setFilterText] = useState('')

  const [filterItems, setFilterItems] = useState<Country[]>([])


  const handleChangeInput = (e: any) => {
    console.log(e.target.value)
    setFilterText(e.target.value);
  }


  useEffect(() => {
    if (!loading) {
      const result = (countries as Country[]).filter(
        item => (!filterText || item.name.common.toLowerCase().includes(filterText.toLowerCase())
        )
      )
      setFilterItems(result)

    }
  }, [countries, filterText, loading])






  if (loading) {
    return (
      <SimpleGrid bg={"white"} columns={4}>



        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>
        <SimpleCard country={new Country()} loading={loading}></SimpleCard>

      </SimpleGrid>
    )
  }



  return (
    <>
      <Center>
        <Input size={"lg"} type={"text"} onChange={handleChangeInput}></Input>
      </Center>

      <SimpleGrid bg={"white"} columns={4}>



        <>
          {filterItems.map((country: Country, id: number) => (
            <SimpleCard country={country} loading={loading} key={id}></SimpleCard>
          ))
          }
        </>


      </SimpleGrid >

    </>
  )
}

export default Home
