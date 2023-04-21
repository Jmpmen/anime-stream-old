"use client";

import { Image, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function AnimeCard({ anime }) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <Box maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={anime.image}
          alt={anime.id + "cover photo"}
          objectFit="cover"
        />

        <Box p="0" h={50}>
          <Box
            mt={1}
            fontWeight="semibold"
            as="h6"
            fontSize="xs"
            lineHeight="tight"
            noOfLines={2}
            textAlign="center"
          >
            {anime.title ? anime.title : anime.id}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
