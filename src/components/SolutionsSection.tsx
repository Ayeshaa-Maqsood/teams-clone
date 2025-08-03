import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import MeetImage from "../images/meet.avif";
import CallImage from "../images/call.avif";
import CollaborateImage from "../images/collaborate.avif";
import ChatImage from "../images/chat.avif";

const SolutionsSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>("meet");

  const sectionImages: Record<string, string | null> = {
    meet: MeetImage,
    call: CallImage,
    collaborate: CollaborateImage,
    chat: ChatImage,
  };

  const solutions = [
    {
      id: "meet",
      title: "Meet",
      description:
        "Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.",
      linkText: "Learn more",
      superscript: "1",
    },
    {
      id: "call",
      title: "Call",
      description:
        "Connect with colleagues and customers through high-quality voice calls with advanced calling features and seamless integration.",
      linkText: "Discover calling",
    },
    {
      id: "collaborate",
      title: "Collaborate",
      description:
        "Work together seamlessly with shared workspaces, file collaboration, real-time co-authoring, and integrated Microsoft 365 apps.",
      linkText: "Explore collaboration",
    },
    {
      id: "chat",
      title: "Chat",
      description:
        "Stay connected with instant messaging, group chats, threaded conversations, and rich formatting options for better communication.",
      linkText: "Learn about chat",
    },
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <Box bg="gray.50" py={20} minH="80vh" id="solutions-section">
      {/* Add horizontal padding/margin for spacing on sides */}
      <Container maxW="7xl" px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <VStack align="start" gap={4} mb={16}>
          <Text
            fontSize="sm"
            fontWeight="600"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            SOLUTIONS
          </Text>
          <Heading
            as="h2"
            size="2xl"
            color="gray.900"
            fontWeight="700"
            maxW="4xl"
            lineHeight="1.2"
          >
            Streamline communications—all in one place
          </Heading>
        </VStack>

        {/* Main Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={16}
          align="flex-start"
        >
          {/* Left Panel - Custom Accordion */}
          <Box
            flex="1"
            maxW={{ base: "full", lg: "500px" }}
            position="relative"
          >
            {/* Moving purple indicator line - covers entire active section content */}
            {activeSection && (
              <Box
                w="4px"
                position="absolute"
                left="0"
                borderRadius="full"
                style={{
                  backgroundColor: "#5D5BD4",
                  top: `${
                    solutions.findIndex((s) => s.id === activeSection) * 88
                  }px`,
                  height: `${88 + (activeSection ? 120 : 0)}px`, // Base height + expanded content height
                  transition: "all 0.4s ease-in-out",
                }}
                zIndex={2}
              />
            )}

            <Box pl={8} position="relative">
              {solutions.map((solution, index) => (
                <Box key={solution.id} position="relative">
                  {/* Accordion Header */}
                  <Flex
                    as="button"
                    onClick={() => toggleSection(solution.id)}
                    align="center"
                    justify="space-between"
                    w="full"
                    py={6}
                    textAlign="left"
                    _hover={{ bg: "transparent" }}
                    _focus={{ outline: "none" }}
                    position="relative"
                    minH="76px" // Consistent height for smooth animation
                  >
                    <HStack gap={3}>
                      <Heading
                        size="lg"
                        fontWeight="600"
                        color={
                          activeSection === solution.id ? "#5D5BD4" : "gray.900"
                        }
                        transition="color 0.3s ease"
                      >
                        {solution.title}
                        {solution.superscript && (
                          <Text as="sup" fontSize="xs" color="gray.600">
                            {solution.superscript}
                          </Text>
                        )}
                      </Heading>
                    </HStack>

                    <Box
                      color={
                        activeSection === solution.id ? "#5D5BD4" : "gray.600"
                      }
                      fontSize="20px"
                      transition="color 0.3s ease"
                    >
                      {activeSection === solution.id ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </Box>
                  </Flex>

                  {/* Accordion Content */}
                  <Box
                    overflow="hidden"
                    transition="all 0.4s ease-in-out"
                    maxH={activeSection === solution.id ? "200px" : "0"}
                    opacity={activeSection === solution.id ? 1 : 0}
                  >
                    <Box pb={6} pr={8}>
                      <VStack align="start" gap={4}>
                        <Text
                          color="gray.700"
                          fontSize="md"
                          lineHeight="1.6"
                          fontWeight="400"
                        >
                          {solution.description}
                        </Text>
                        <Link
                          fontSize="md"
                          textDecoration="underline"
                          _hover={{
                            textDecoration: "underline",
                          }}
                          style={{ color: "#5D5BD4" }}
                        >
                          {solution.linkText}
                        </Link>
                      </VStack>
                    </Box>
                  </Box>

                  {/* Divider */}
                  {index < solutions.length - 1 && (
                    <Box h="1px" bg="gray.300" />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Panel - Dynamic Images with Animation */}
          <Box
            flex="1"
            minH="500px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            className="animate-slideInRight w-full h-full"
          >
            {/* Dynamic Image Display with slide animation */}
            <Box
              w="full"
              h="500px"
              borderRadius="xl"
              overflow="hidden"
              position="relative"
            >
              {activeSection && sectionImages[activeSection] ? (
                <Box
                  key={activeSection} // Key change triggers re-render for animation
                  w="full"
                  h="full"
                  position="relative"
                  style={{
                    animation: "slideInFromRight 0.6s ease-out forwards",
                  }}
                >
                  <img
                    src={sectionImages[activeSection]}
                    alt={`${activeSection} visualization`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              ) : (
                // Placeholder when no image is available
                <Box
                  w="full"
                  h="full"
                  bg="gray.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed"
                  borderColor="gray.300"
                  borderRadius="xl"
                >
                  <VStack gap={4} color="gray.500">
                    <Text fontSize="lg" fontWeight="600">
                      {activeSection
                        ? activeSection.charAt(0).toUpperCase() +
                          activeSection.slice(1)
                        : "Select"}{" "}
                      Image
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      Active:{" "}
                      <Text
                        as="span"
                        fontWeight="600"
                        style={{ color: "#5D5BD4" }}
                      >
                        {activeSection || "none"}
                      </Text>
                    </Text>
                    <Text fontSize="xs" textAlign="center" maxW="300px">
                      Import your images and replace the null values in
                      sectionImages object
                    </Text>
                  </VStack>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default SolutionsSection;
