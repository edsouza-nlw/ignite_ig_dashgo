import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Souza</Text>
          <Text color="gray.300" fontSize="small">
            jucabala@com.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Ed Souza" src="https://bit.ly/dan-abramov" />
    </Flex>
  )
}
