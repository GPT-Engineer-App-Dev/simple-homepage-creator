import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.900" color="white" minHeight="100vh">
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center" bg="gray.800">
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          variant="outline"
          colorScheme="whiteAlpha"
        />
        <Flex>
          <Box p={2}>Home</Box>
          <Box p={2}>About</Box>
          <Box p={2}>Contact</Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <Image src="/images/dice-chess.jpg" alt="Dice on Chess Board" boxSize={isMobile ? "90%" : "50%"} />
      </Flex>
    </Box>
  );
};

export default Index;