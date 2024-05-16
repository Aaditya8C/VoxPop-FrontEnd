import { Box } from "@chakra-ui/react";

import Actions from "./Actions";
import Data from "./Data";
import Profile from "./Profile";

function Sidebar() {
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="rgba(45,45,45)"
      color="white"
      rounded="md"
      borderWidth={1}
      className="border-black"
      style={{ transform: "translateY(-150px)" }}
    >
      <Profile />
      <Data />
      <Actions />
    </Box>
  );
}

export default Sidebar;
