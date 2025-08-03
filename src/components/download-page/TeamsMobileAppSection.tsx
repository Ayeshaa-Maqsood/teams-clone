import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

import qrCodeImage from "../../images/cta-image.avif";
import backgroundImage from "../../images/purple-bg.avif";

const TeamsMobileAppSection = () => {
  return (
    <Box
      className="py-16 px-4"
      bg="#C8B8F5"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="4xl">
        <VStack spacing={10} textAlign="center">
          {/* Header */}
          <VStack spacing={4}>
            <Heading
              as="h2"
              size="2xl"
              fontWeight="600"
              color="#333275"
              lineHeight="shorter"
            >
              Get the Teams mobile app
            </Heading>
            <Text fontSize="lg" color="#333275" maxW="2xl" lineHeight="relaxed">
              Connect and communicate on the go by accessing Teams on your
              mobile device.
            </Text>
          </VStack>

          {/* QR Code Container */}
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            shadow="sm"
            maxW="200px"
            w="full"
          >
            <Image
              src={qrCodeImage}
              alt="QR Code to download Teams mobile app"
              w="full"
              h="auto"
            />
          </Box>

          {/* Info Text */}
          <HStack
            spacing={2}
            align="center"
            fontSize="sm"
            color="#333275"
            opacity="0.8"
          >
            <FiInfo size={16} />
            <Text>
              Try another option if you're having trouble with the QR code
            </Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default TeamsMobileAppSection;
