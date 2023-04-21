"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, SimpleGrid, Container, Heading } from "@chakra-ui/react";

import AnimeCard from "./AnimeCard";

export default function Gallery({ animeList, title }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Container maxW="container.md" marginY={4}>
          <Heading as="h2" my={3}>{title}</Heading>
          <SimpleGrid spacing={4} columns={[2, null, 5]}>
            {animeList.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </SimpleGrid>
        </Container>
      </ChakraProvider>
    </CacheProvider>
  );
}
