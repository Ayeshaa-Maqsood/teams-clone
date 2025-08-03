import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  FiUsers,
  FiPhone,
  FiShare2,
  FiMessageCircle,
  FiChevronRight,
} from "react-icons/fi";

const CommunicationsSection = () => {
  const features = [
    {
      icon: FiUsers,
      title: "Meet",
      description:
        "Host impactful meetings with features such as PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.",
      footnote: "1",
    },
    {
      icon: FiPhone,
      title: "Call",
      description:
        "Make and receive calls directly in Teams with features such as group calling, voicemail, and call transfers.",
    },
    {
      icon: FiShare2,
      title: "Collaborate",
      description:
        "Keep everyone in sync with the help of channels, shared task lists, and collaborative apps.",
    },
    {
      icon: FiMessageCircle,
      title: "Chat",
      description:
        "Quickly communicate with instant messaging and features such as emojis, AI-generated suggested replies, and priority notifications.",
    },
  ];

  return (
    <Box className="py-16 px-4 bg-gray-50">
      <Container maxW="7xl">
        <VStack spacing={12} textAlign="center">
          {/* Header */}
          <VStack spacing={4} maxW="4xl">
            <Heading
              as="h2"
              size="2xl"
              fontWeight="600"
              color="gray.800"
              lineHeight="shorter"
            >
              Streamline communications in one place
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="2xl"
              lineHeight="relaxed"
            >
              Stay focused, work together, and achieve more with one platform
              for all your communication needs.
            </Text>
          </VStack>

          {/* Features Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={6}
            w="full"
            maxW="7xl"
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="xl"
                shadow="sm"
                border="1px"
                borderColor="gray.200"
                _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s ease"
                height="full"
                minW="280px"
              >
                <VStack spacing={6} align="start" height="full">
                  {/* Icon */}
                  <Box color="#5D5BD4">
                    <feature.icon size={20} />
                  </Box>

                  {/* Content */}
                  <VStack spacing={4} align="start" flex="1">
                    <HStack spacing={1} align="baseline">
                      <Heading
                        as="h3"
                        size="lg"
                        color="#333275"
                        fontWeight="600"
                      >
                        {feature.title}
                      </Heading>
                      {feature.footnote && (
                        <Text fontSize="sm" color="#5D5BD4" fontWeight="500">
                          {feature.footnote}
                        </Text>
                      )}
                    </HStack>

                    <Text
                      color="gray.600"
                      lineHeight="relaxed"
                      fontSize="md"
                      flex="1"
                    >
                      {feature.description}
                    </Text>
                  </VStack>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    color="#333275"
                    fontWeight="600"
                    p={0}
                    height="auto"
                    _hover={{ color: "#5D5BD4", bg: "transparent" }}
                    leftIcon={
                      <Box p={2} borderRadius="md" bg="#5D5BD4" color="white">
                        <FiChevronRight size={16} />
                      </Box>
                    }
                  >
                    Learn more
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default CommunicationsSection;
