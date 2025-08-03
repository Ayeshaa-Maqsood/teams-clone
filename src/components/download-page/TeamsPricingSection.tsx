import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  FiUsers,
  FiMail,
  FiVideo,
  FiCalendar,
  FiFileText,
  FiCloud,
  FiShield,
  FiMonitor,
  FiSmartphone,
  FiDatabase,
  FiSettings,
  FiCheck,
} from "react-icons/fi";

// Import your background image here
import backgroundImage from "../../images/CTA-Stacked_Background.avif";

const TeamsPricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [planType, setPlanType] = useState("business");

  const plans = [
    {
      name: "Microsoft Teams Essentials",
      price: billingCycle === "yearly" ? "$4.00" : "$4.80",
      period:
        billingCycle === "yearly"
          ? "user/month paid yearly"
          : "user/month paid monthly",
      subscription: "Annual subscription - auto renew",
      features: [
        "Unlimited group meetings for up to 30 hours and 300 participants",
        "10 GB of cloud storage per user",
        "Real time collaboration with file sharing, tasks, and polling",
      ],
      icons: [FiUsers, FiCloud, FiFileText],
    },
    {
      name: "Microsoft 365 Business Basic",
      price: billingCycle === "yearly" ? "$6.00" : "$7.20",
      period:
        billingCycle === "yearly"
          ? "user/month paid yearly"
          : "user/month paid monthly",
      subscription: "Annual subscription - auto renew",
      features: [
        "Identity and access management for up to 300 users",
        "Web and mobile versions of Word, Excel, PowerPoint, Outlook, and other core productivity apps",
        "Custom business email",
        "Chat, call, meet",
        "1 TB of cloud storage per user",
        "30+ additional apps including Microsoft Bookings, MileIQ, and Forms",
      ],
      icons: [
        FiUsers,
        FiMail,
        FiVideo,
        FiCalendar,
        FiFileText,
        FiCloud,
        FiSettings,
        FiSmartphone,
      ],
    },
    {
      name: "Microsoft 365 Business Standard",
      price: billingCycle === "yearly" ? "$12.50" : "$15.00",
      period:
        billingCycle === "yearly"
          ? "user/month paid yearly"
          : "user/month paid monthly",
      subscription: "Annual subscription - auto renew",
      features: [
        "Identity and access management for up to 300 users",
        "Desktop, web, and mobile versions of Word, Excel, PowerPoint, Outlook, and other core productivity apps",
        "Custom business email",
        "Chat, call, meet, and host webinars",
        "1 TB of cloud storage per user",
        "30+ additional apps including Microsoft Bookings, MileIQ, Bookings, Planner, and Forms",
      ],
      icons: [
        FiUsers,
        FiMail,
        FiVideo,
        FiCalendar,
        FiMonitor,
        FiCloud,
        FiShield,
        FiDatabase,
        FiSettings,
      ],
    },
  ];

  return (
    <Box
      className="py-16 px-4"
      bg="gray.50"
      bgImage={`url(${backgroundImage})`} // Uncomment this when you import your background image
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="7xl">
        <VStack spacing={12}>
          {/* Header */}
          <VStack spacing={6} textAlign="center" maxW="2xl">
            <Heading
              as="h2"
              size="2xl"
              fontWeight="600"
              color="#333275"
              lineHeight="shorter"
            >
              Find the right Teams plan for your needs
            </Heading>
          </VStack>

          {/* Toggle Buttons */}
          <VStack spacing={4}>
            {/* Billing Cycle Toggle */}
            <HStack spacing={0} bg="gray.200" borderRadius="full" p={1}>
              <Button
                size="sm"
                borderRadius="full"
                bg={billingCycle === "yearly" ? "#5D5BD4" : "transparent"}
                color={billingCycle === "yearly" ? "white" : "#333275"}
                onClick={() => setBillingCycle("yearly")}
                _hover={{
                  bg: billingCycle === "yearly" ? "#5D5BD4" : "gray.100",
                }}
                px={6}
              >
                Yearly
              </Button>
              <Button
                size="sm"
                borderRadius="full"
                bg={billingCycle === "monthly" ? "#5D5BD4" : "transparent"}
                color={billingCycle === "monthly" ? "white" : "#333275"}
                onClick={() => setBillingCycle("monthly")}
                _hover={{
                  bg: billingCycle === "monthly" ? "#5D5BD4" : "gray.100",
                }}
                px={6}
              >
                Monthly
              </Button>
            </HStack>

            {/* Plan Type Toggle */}
            <HStack spacing={0} bg="gray.200" borderRadius="full" p={1}>
              <Button
                size="sm"
                borderRadius="full"
                bg={planType === "business" ? "#5D5BD4" : "transparent"}
                color={planType === "business" ? "white" : "#333275"}
                onClick={() => setPlanType("business")}
                _hover={{
                  bg: planType === "business" ? "#5D5BD4" : "gray.100",
                }}
                px={4}
              >
                Business
              </Button>
              <Button
                size="sm"
                borderRadius="full"
                bg={planType === "home" ? "#5D5BD4" : "transparent"}
                color={planType === "home" ? "white" : "#333275"}
                onClick={() => setPlanType("home")}
                _hover={{ bg: planType === "home" ? "#5D5BD4" : "gray.100" }}
                px={4}
              >
                Home
              </Button>
              <Button
                size="sm"
                borderRadius="full"
                bg={planType === "enterprise" ? "#5D5BD4" : "transparent"}
                color={planType === "enterprise" ? "white" : "#333275"}
                onClick={() => setPlanType("enterprise")}
                _hover={{
                  bg: planType === "enterprise" ? "#5D5BD4" : "gray.100",
                }}
                px={4}
              >
                Enterprise
              </Button>
            </HStack>
          </VStack>

          {/* Pricing Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            w="full"
            maxW="6xl"
          >
            {plans.map((plan, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="xl"
                shadow="sm"
                border="1px"
                borderColor="gray.200"
                overflow="hidden"
                _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s ease"
                height="full"
              >
                <VStack spacing={0} align="stretch" height="full">
                  {/* Header */}
                  <Box p={6} pb={4}>
                    <VStack spacing={4} align="start">
                      <Heading
                        as="h3"
                        size="md"
                        color="#333275"
                        fontWeight="600"
                      >
                        {plan.name}
                      </Heading>

                      <VStack spacing={1} align="start">
                        <HStack align="baseline">
                          <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            color="#333275"
                          >
                            {plan.price}
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.600">
                          {plan.period}
                        </Text>
                        <Text fontSize="xs" color="blue.600">
                          {plan.subscription}
                        </Text>
                      </VStack>

                      <VStack spacing={2} w="full">
                        <Button
                          bg="#5D5BD4"
                          color="white"
                          size="md"
                          w="full"
                          _hover={{ bg: "#333275" }}
                        >
                          Buy now
                        </Button>
                        <Button
                          variant="outline"
                          borderColor="#5D5BD4"
                          color="#5D5BD4"
                          size="md"
                          w="full"
                          _hover={{ bg: "#5D5BD4", color: "white" }}
                        >
                          Try now
                        </Button>
                      </VStack>
                    </VStack>
                  </Box>

                  {/* Features */}
                  <Box p={6} pt={0} flex="1">
                    <VStack spacing={4} align="start">
                      <Text fontSize="sm" color="blue.600" fontWeight="500">
                        See what's available:
                      </Text>

                      <List spacing={3}>
                        {plan.features.map((feature, featureIndex) => (
                          <ListItem
                            key={featureIndex}
                            fontSize="sm"
                            color="gray.700"
                          >
                            <HStack align="start" spacing={2}>
                              <Box color="green.500" mt={0.5}>
                                <FiCheck size={14} />
                              </Box>
                              <Text>{feature}</Text>
                            </HStack>
                          </ListItem>
                        ))}
                      </List>
                    </VStack>
                  </Box>

                  {/* Icons */}
                  <Box p={6} pt={4} borderTop="1px" borderColor="gray.100">
                    <HStack spacing={3} justify="center" flexWrap="wrap">
                      {plan.icons.map((Icon, iconIndex) => (
                        <Box
                          key={iconIndex}
                          p={2}
                          borderRadius="md"
                          bg="gray.50"
                          color="#5D5BD4"
                        >
                          <Icon size={18} />
                        </Box>
                      ))}
                    </HStack>
                  </Box>

                  {/* Learn More */}
                  <Box p={6} pt={0}>
                    <Button
                      variant="link"
                      color="#5D5BD4"
                      fontSize="sm"
                      fontWeight="600"
                      _hover={{ color: "#333275" }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TeamsPricingSection;
