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

import axios from "axios";
import { useState } from "react";

export default function UpdateCourseModal(props) {
  const { onOpen, onClose, isOpen, data } = props;

  const [formdata, setFormData] = useState(data || {
    title: "",
    type: "",
    totalDuration: ""
  });

  const handleFormData = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formdata, [name]: value });
  };

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
              <Input
                name="title"
                value={formdata.title}
                onChange={handleFormData}
              />

              <Select name="type" value={formdata.type} onChange={handleFormData}>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </Select>

              <Input
                name="totalDuration"
                value={formdata.totalDuration}
                onChange={handleFormData}
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                console.log("data", data);
                console.log("formdata", formdata);
                onClose();
              }}
            >
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
