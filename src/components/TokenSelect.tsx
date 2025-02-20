import {Button, Image} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
type Props = {
  openTokenModal: any;
  value: any;
  image: string;
  button: string;
};

export default function TokenSelect({ openTokenModal, value, image, button }: Props) {

  return value !== undefined ? (
    <Button
      bg="white"
      borderRadius="1.12rem"
      boxShadow="rgba(0, 0, 0, 0.075) 0px 6px 10px"
      fontWeight="500"
      mr="0.5rem"
      color="black"
      onClick={() => {
        console.log(button)
        window.__button = button;
        openTokenModal();}}
        _hover={{ bg: "#db14fb" }}
      rightIcon={<ChevronDownIcon fontSize="1.37rem" cursor="pointer" />}>
      <Image boxSize="1.5rem"
             src={image}
             alt="Logo"
             mr="0.5rem"
      />
      {value}
    </Button>
  ) : (
    <Button
    bg="#bd68fd"
      color="white"
      p="0rem 1rem"
      borderRadius="1.12rem"
      onClick={() => {
        console.log(button)
        window.__button = button;
        openTokenModal();}}
        _hover={{ bg: "#db14fb" }}
      rightIcon={<ChevronDownIcon fontSize="1.37rem" cursor="pointer" />}>Select a token</Button>
  );
}
