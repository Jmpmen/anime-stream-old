"use client"

import { CacheProvider } from '@chakra-ui/next-js'
import { Button, Card, CardBody, CardFooter, ChakraProvider, Heading, Stack, Image, Text } from '@chakra-ui/react'
import Async from 'react-select/async'
import Link from 'next/link'

async function loadOptions(query) {
    try {
        const res = await fetch(`https://api.consumet.org/anime/gogoanime/${query}`);
        const data = await res.json();

        if (data.results){
          return data.results.map((anime) => {
            return {
              id: anime.id,
              type: anime.type,
              releaseDate: anime.releaseDate,
              label: (
                <Link href={`/anime/${anime.id}`}>
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    maxH={100}
                  >
                    <Image
                      objectFit="contain"
                      maxW="100%"
                      maxH={100}
                      src={anime.image}
                      alt={anime.id + "-searchlogo"}
                    />
                    <Stack>
                      <CardBody>
                        <Heading size="2xs">{anime.title}</Heading>
          
                        <Text py="2">{anime.releaseDate.slice(-4)}</Text>
                      </CardBody>
                      <CardFooter>
                        <Button variant="solid" colorScheme="blue">
                          {anime.subOrDub.toUpperCase()}
                        </Button>
                      </CardFooter>
                    </Stack>
                  </Card>
                </Link>
              ),
            };
          });
        }
    } catch (error) {
        console.log(error);
    }
}

export default function SearchBar() {
    return (
      <CacheProvider>
        <ChakraProvider>
          <Async
            cacheOptions
            loadOptions={loadOptions}
            placeholder={"Search for anime..."}
            defaultOptions
            // value={products}
            // isMulti
            noOptionsMessage={(e) => {
              if (e.inputValue === "") {
                return "Search for anime";
              }
              return `No anime found for "${e.inputValue}"`;
            }}
            defaultMenuIsOpen={false}
            onChange={(e) => {
              console.log(e);
            }}
          />
        </ChakraProvider>
      </CacheProvider>
    );
}