import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.100" minH="100vh">
      <Flex as="header" p={4} justifyContent="space-between" alignItems="center" bg="blackAlpha.800">
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          variant="outline"
          colorScheme="whiteAlpha"
          display={isMobile ? "inherit" : "none"}
        />
        <Flex as="nav" gap={8} display={isMobile ? "none" : "flex"}>
          <Box as="a" href="#" p={2} color="white" fontWeight="bold">Home</Box>
          <Box as="a" href="#" p={2} color="white" fontWeight="bold">About</Box>
          <Box as="a" href="#" p={2} color="white" fontWeight="bold">Contact</Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <Image src="/images/dice-chess.jpg" alt="Dice on Chess Board" objectFit="cover" boxSize="100%" />
      </Flex>
    </Box>
  );
};

export default Index;