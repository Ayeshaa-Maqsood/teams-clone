import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiTrendingUp,
  FiUsers,
  FiFileText,
  FiBookOpen,
  FiChevronRight,
} from "react-icons/fi";

import backgroundImage from "../images/CTA-Stacked_Background.avif";

const TeamsLandingSection = () => {
  // const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBg = useColorModeValue("white", "gray.700");
  const shadowColor = useColorModeValue("rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)");

  const plans = [
    {
      icon: FiTrendingUp,
      title: "For business",
      description:
        "Grow your customer base with communications software designed for up to 300 employees.",
      buttonText: "See plans and pricing",
    },
    {
      icon: FiUsers,
      title: "For personal use",
      description:
        "Plan events, share photos, and connect with your friends, family, and community.",
      buttonText: "Try Teams for free",
    },
    {
      icon: FiFileText,
      title: "For enterprise",
      description: "Achieve more with Teams accounts for more than 300 people.",
      buttonText: "Get started",
    },
    {
      icon: FiBookOpen,
      title: "For education",
      description:
        "Make learning collaborative—for both students and educators.",
      buttonText: "Learn more",
    },
  ];

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      id="teams-landing-section"
    >
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, 
          rgba(255, 165, 0, 0.4) 0%, 
          rgba(255, 105, 180, 0.3) 25%, 
          rgba(138, 43, 226, 0.4) 50%, 
          rgba(75, 0, 130, 0.5) 75%, 
          rgba(255, 20, 147, 0.3) 100%)"
        zIndex={1}
      />

      {/* Content */}
      <Container maxW="7xl" position="relative" zIndex={2} py={20}>
        <VStack spacing={16} align="stretch">
          {/* Header */}
          <VStack spacing={4} textAlign="left" alignItems="flex-start">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="gray.600"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              GET STARTED
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="400"
              color="gray.800"
              lineHeight="1.2"
              maxW="2xl"
            >
              Take the next step with Teams
            </Heading>
          </VStack>

          {/* Cards Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
            {plans.map((plan, index) => (
              <Box
                key={index}
                bg={cardBg}
                borderRadius="xl"
                p={8}
                boxShadow={`0 10px 30px ${shadowColor}`}
                position="relative"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: `0 20px 40px ${shadowColor}`,
                }}
              >
                <VStack align="stretch" spacing={6} h="full">
                  {/* Icon */}
                  <Box>
                    <Box as={plan.icon} size="24px" color="#5D5BD4" />
                  </Box>

                  {/* Content */}
                  <VStack align="stretch" spacing={4} flex="1">
                    <Heading
                      as="h3"
                      fontSize="xl"
                      fontWeight="600"
                      color="gray.800"
                    >
                      {plan.title}
                    </Heading>

                    <Text
                      color={textColor}
                      fontSize="sm"
                      lineHeight="1.6"
                      flex="1"
                    >
                      {plan.description}
                    </Text>
                  </VStack>

                  {/* Button */}
                  <HStack spacing={2} alignItems="center">
                    <Box
                      bg="#5D5BD4"
                      color="white"
                      borderRadius="md"
                      w="32px"
                      h="32px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="sm"
                      fontWeight="bold"
                    >
                      <FiChevronRight size="18px" />
                    </Box>
                    <Text
                      color="#333275"
                      fontSize="sm"
                      fontWeight="500"
                      cursor="pointer"
                      _hover={{
                        color: "#2b2a6b",
                      }}
                    >
                      {plan.buttonText}
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TeamsLandingSection;
