import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btn = useRef();

  return (
    <Box pos="fixed" right="5" top="5" zIndex={1000}>
      <Button
        backgroundColor="#a138f7"
        color="white"
        ref={btn}
        onClick={onOpen}
      >
        <Icon as={HamburgerIcon} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btn}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src="assets/Logo.png" w="50%" marginTop="-14" />
          </DrawerHeader>
          <DrawerBody display="flex" flexDir={"column"}>
            <Link href="#" paddingBottom="1">
              Home
            </Link>
            <Link href="#ads" paddingBottom="1">
              Ad Campaigns
            </Link>
            <Link href="#content" paddingBottom="1">
              Content Creation
            </Link>
            <Link href="#marketing" paddingBottom="1">
              Marketing
            </Link>
            <Link href="#seo" paddingBottom="1">
              Google SEO
            </Link>
            <Link href="#web-dev" paddingBottom="1">
              Web Development
            </Link>
            <Link href="#models" paddingBottom="1">
              Influencers
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
