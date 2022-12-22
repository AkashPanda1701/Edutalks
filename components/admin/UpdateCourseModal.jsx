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
    Input,
    Select,
  } from "@chakra-ui/react";
  
  export default function UpdateCourseModal(props) {
      const { onOpen, onClose, isOpen, data } = props;
      return (
      <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                Update Course
              </Text>

              <VStack spacing={4}>
                  <Input value={data.title} />

                  <Select value={data.type}>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </Select>

                  <Input value={data.totalDuration} />
              </VStack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Update
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
  