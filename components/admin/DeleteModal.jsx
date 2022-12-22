import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
  useToast 
} from "@chakra-ui/react";

import axios from "axios";

export default function DeleteModal(props) {
    const {onOpen, onClose, isOpen, data} = props;
    const toast = useToast();

    return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              User will be removed permanently!
            </Text>

            <VStack alignItems="flex-start">
              <Text>{data.name}</Text>
              <Text>{data.email}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={async () => {
              onClose();
              toast({
                title: "User Deleted!",
                description: `${data.name} was removed premanently.`,
                status: "success",
                duration: 6000,
                isClosable: true
              })
              await axios.delete(`/api/users/${data._id}`);
            }}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
