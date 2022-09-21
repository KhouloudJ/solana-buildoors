import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Container,
  VStack,
  Heading,
  Button,
  Text,
  HStack,
  Image
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC, MouseEventHandler, useCallback } from "react";

const Connected: FC = () => {

  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={20}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            WelcomeBuildoor
          </Heading>
          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each buildoor is randomly generated and can be staked to receieve{" "}
            <Text as="b">$BLD</Text>Useyour <Text as="b">$BLD</Text>to upgrade
            your buildoor and receive perks within the community!
          </Text>
        </VStack>
      </Container>
      <HStack spacing={10}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>
      <Button bgColor="accent" color="white" maxW="380px">
        <Text>Mint Buildoor</Text>
      </Button>
    </VStack>
  );
}
export default Connected;
