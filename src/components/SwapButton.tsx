import { Button, Box} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";

export default function SwapButton() {
  const { account } = useEthers();

  return account  ? (
      window.__selected && window.__selected2 ? (
    <Box mt="0.5rem">
      <Button
        color="white"
        bg="#bd68fd"
        width="100%"
        p="1.62rem"
        borderRadius="1.25rem"
        _hover={{ bg: "#db14fb" }}
      >
        Swap
      </Button>
    </Box>
      ) : (
        <Box mt="0.5rem">
          <Button
            color="white"
            bg="#bd68fd"
            width="100%"
            p="1.62rem"
            borderRadius="1.25rem"
            _hover={{ bg: "#db14fb" }}
          >
            Please select token
          </Button>
        </Box>
      )
  ) : (
    <Box mt="0.5rem">
      <Button
        color="white"
        bg="#bd68fd"
        width="100%"
        p="1.62rem"
        borderRadius="1.25rem"
        _hover={{ bg: "#db14fb" }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
}
