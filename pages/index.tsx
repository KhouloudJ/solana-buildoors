import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* {NavBar} */}
          <Spacer />
          <Spacer />
          <Center>
          <Box marginBottom={4} color="white">
            <a
              href="https://twitter.com/khdjbn"
              target="_blank"
              rel="noopener norefferrer"
            >
              Build with @khdjbn
            </a>
          </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
