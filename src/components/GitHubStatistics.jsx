import React, { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Image, Spinner, Text, Stack, Flex } from '@chakra-ui/react';

const GitHubStatistics = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    mostUsedLanguages: null,
    streakStats: null,
    currentStats: null,
  });

  useEffect(() => {
    if (!username) {
      setError("No username provided");
      setLoading(false);
      return;
    }

    const fetchGitHubStats = async () => {
      try {
        const mostUsedLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}`;
        const streakStats = `https://github-readme-streak-stats.herokuapp.com/?user=${username}`;
        const currentStats = `https://github-readme-stats.vercel.app/api?username=${username}`;

        setStats({
          mostUsedLanguages,
          streakStats,
          currentStats,
        });
      } catch (error) {
        setError("Failed to fetch GitHub statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) {
    return (
      <Box py={10} px={5} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box py={10} px={5} textAlign="center">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box py={10} px={5} maxW="lg" mx="auto" >
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        GitHub Statistics
      </Heading>
      <Flex direction={"column"} gap={'40px'} textAlign="center" >
        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'8px'}  data-aos="zoom-in-up"cursor={'pointer'} >
          <Heading as="h3" size="lg">
            Most Used Languages
          </Heading>
          <Image
            src={stats.mostUsedLanguages}
            alt="Most Used Languages"
            borderRadius="md"
            shadow="md"
          />
        </Flex>
        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'8px'}  data-aos="zoom-in-up" cursor={'pointer'}>
          <Heading as="h3" size="lg">
            Streak Stats
          </Heading>
          <Image
            src={stats.streakStats}
            alt="Streak Stats"
            borderRadius="md"
            shadow="md"
          />
        </Flex>
        <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} gap={'8px'}  data-aos="zoom-in-up" cursor={'pointer'}>
          <Heading as="h3" size="lg" >
            Current Stats
          </Heading>
          <Image
            src={stats.currentStats}
            alt="Current Stats"
            borderRadius="md"
            shadow="md"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default GitHubStatistics;
