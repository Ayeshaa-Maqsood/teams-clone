import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Link,
  Divider,
  Select,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaYoutube, FaBlog } from "react-icons/fa6";

const MicrosoftTeamsFooter = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "gray.200");
  const linkColor = useColorModeValue("blue.600", "blue.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const footerSections = [
    {
      title: "What's new",
      links: [
        "Surface Pro",
        "Surface Laptop",
        "Surface Laptop Studio 2",
        "Surface Laptop Go 3",
        "Microsoft Copilot",
        "AI in Windows",
        "Explore Microsoft products",
        "Windows 11 apps",
      ],
    },
    {
      title: "Microsoft Store",
      links: [
        "Account profile",
        "Download Center",
        "Microsoft Store support",
        "Returns",
        "Order tracking",
        "Certified Refurbished",
        "Microsoft Store Promise",
        "Flexible Payments",
      ],
    },
    {
      title: "Education",
      links: [
        "Microsoft in education",
        "Devices for education",
        "Microsoft Teams for Education",
        "Microsoft 365 Education",
        "How to buy for your school",
        "Educator training and development",
        "Deals for students and parents",
        "AI for education",
      ],
    },
    {
      title: "Business",
      links: [
        "Microsoft Cloud",
        "Microsoft Security",
        "Dynamics 365",
        "Microsoft 365",
        "Microsoft Power Platform",
        "Microsoft Teams",
        "Microsoft 365 Copilot",
        "Small Business",
      ],
    },
    {
      title: "Developer & IT",
      links: [
        "Azure",
        "Microsoft Developer",
        "Microsoft Learn",
        "Support for AI marketplace apps",
        "Microsoft Tech Community",
        "Azure Marketplace",
        "AppSource",
        "Visual Studio",
      ],
    },
    {
      title: "Company",
      links: [
        "Careers",
        "About Microsoft",
        "Company news",
        "Privacy at Microsoft",
        "Investors",
        "Diversity and inclusion",
        "Accessibility",
        "Sustainability",
      ],
    },
  ];

  return (
    <Box>
      {/* Disclaimer Section - White Background */}
      <Box bg="white" py={8}>
        <Container maxW="7xl" px={{ base: 4, md: 8, lg: 12 }}>
          <VStack spacing={6} align="stretch">
            {/* Disclaimer */}
            <Box>
              <Text fontSize="xs" color={textColor} mb={2}>
                [1]
              </Text>
              <Text fontSize="xs" color={textColor}>
                AI-generated meeting notes are currently available in{" "}
                <Link color={linkColor} textDecoration="underline">
                  Microsoft Teams Premium
                </Link>{" "}
                only.
              </Text>
            </Box>

            {/* Social Media Section */}
            <Box>
              <HStack spacing={4} align="center">
                <Text fontSize="xs" color={textColor}>
                  Follow Microsoft Teams
                </Text>
                <HStack spacing={1}>
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="Follow on X (Twitter)"
                    icon={<FaXTwitter size="24px" />}
                    variant="ghost"
                    size="lg"
                    color={textColor}
                    _hover={{ color: linkColor }}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="Follow on Instagram"
                    icon={<FaInstagram size="24px" />}
                    variant="ghost"
                    size="lg"
                    color={textColor}
                    _hover={{ color: linkColor }}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="Follow on YouTube"
                    icon={<FaYoutube size="24px" />}
                    variant="ghost"
                    size="lg"
                    color={textColor}
                    _hover={{ color: linkColor }}
                  />
                  <IconButton
                    as="a"
                    href="#"
                    aria-label="Microsoft Blog"
                    icon={<FaBlog size="24px" />}
                    variant="ghost"
                    size="lg"
                    color={textColor}
                    _hover={{ color: linkColor }}
                  />
                </HStack>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Main Footer - Gray Background */}
      <Box bg={bgColor} py={8}>
        <Container maxW="7xl" px={{ base: 4, md: 8, lg: 12 }}>
          <VStack spacing={6} align="stretch">
            <Divider borderColor={borderColor} />

            {/* Footer Links Grid */}
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
              {footerSections.map((section, index) => (
                <VStack key={index} align="stretch" spacing={3}>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color={headingColor}
                    mb={2}
                  >
                    {section.title}
                  </Text>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      fontSize="xs"
                      color={textColor}
                      _hover={{
                        color: linkColor,
                        textDecoration: "underline",
                      }}
                      transition="color 0.2s"
                    >
                      {link}
                    </Link>
                  ))}
                </VStack>
              ))}
            </SimpleGrid>

            <Divider borderColor={borderColor} />

            {/* Bottom Section */}
            <HStack
              justify="space-between"
              align="center"
              flexWrap="wrap"
              spacing={4}
            >
              {/* Language and Region */}
              <HStack spacing={2}>
                <FiGlobe color={textColor} size="16px" />
                <Select
                  size="sm"
                  variant="unstyled"
                  color={textColor}
                  fontSize="sm"
                  w="auto"
                  minW="150px"
                >
                  <option value="en-us">English (United States)</option>
                </Select>

                <HStack
                  bg="blue.500"
                  borderRadius="full"
                  p={1}
                  spacing={0}
                  fontSize="xs"
                  fontWeight="bold"
                >
                  <Box
                    bg="white"
                    color="blue.500"
                    borderRadius="full"
                    w={6}
                    h={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    ✓
                  </Box>
                  <Box
                    color="white"
                    borderRadius="full"
                    w={6}
                    h={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    ✕
                  </Box>
                </HStack>

                <Text fontSize="xs" color={textColor}>
                  Your Privacy Choices
                </Text>
              </HStack>

              {/* Bottom Links */}
              <HStack
                spacing={6}
                flexWrap="wrap"
                fontSize="xs"
                color={textColor}
              >
                <Link href="#" _hover={{ color: linkColor }}>
                  Consumer Health Privacy
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Sitemap
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Contact Microsoft
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Privacy
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Terms of use
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Trademarks
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Safety & eco
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  Recycling
                </Link>
                <Link href="#" _hover={{ color: linkColor }}>
                  About our ads
                </Link>
                <Text>© Microsoft 2025</Text>
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default MicrosoftTeamsFooter;
