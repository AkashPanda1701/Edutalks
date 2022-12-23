import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  ModalBody,
  ModalFooter,
  Text,
  Heading,
} from "@chakra-ui/react";

import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

const header = ["id", "created", "email", "referral code", "role", "actions"];

export default function SingleUser(props) {
  const { data } = props;

  const color1 = useColorModeValue("black.600", "gray.400");
  const color2 = useColorModeValue("black.600", "gray.400");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AdminNavbar />
      {/* Issue Certificate */}
      <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                User will be deleted permanently!
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Delete
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      {/* Issue Certificate */}

      <Heading>{data?.name}</Heading>

      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Table
          w="full"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          display={{
            base: "block",
            md: "table",
          }}
          sx={{
            "@media print": {
              display: "table",
            },
          }}
        >
          <Thead
            display={{
              base: "none",
              md: "table-header-group",
            }}
            sx={{
              "@media print": {
                display: "table-header-group",
              },
            }}
          >
            <Tr>
              {header.map((x) => (
                <Th key={x}>{x}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody
            display={{
              base: "block",
              lg: "table-row-group",
            }}
            sx={{
              "@media print": {
                display: "table-row-group",
              },
            }}
          >
            {data?.map((token, tid) => {
              return (
                <Tr
                  key={tid}
                  display={{
                    base: "grid",
                    md: "table-row",
                  }}
                  sx={{
                    "@media print": {
                      display: "table-row",
                    },
                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                    gridGap: "10px",
                  }}
                >
                  {Object.keys(token).map((x) => {
                    return (
                      <React.Fragment key={`${tid}${x}`}>
                        <Td
                          display={{
                            base: "table-cell",
                            md: "none",
                          }}
                          sx={{
                            "@media print": {
                              display: "none",
                            },
                            textTransform: "uppercase",
                            color: color1,
                            fontSize: "xs",
                            fontWeight: "bold",
                            letterSpacing: "wider",
                            fontFamily: "heading",
                          }}
                        >
                          {x}
                        </Td>
                        <Td color={"gray.500"} fontSize="md">
                          {token[x]}
                        </Td>
                      </React.Fragment>
                    );
                  })}
                  <Td
                    display={{
                      base: "table-cell",
                      md: "none",
                    }}
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                      textTransform: "uppercase",
                      color: color2,
                      fontSize: "xs",
                      fontWeight: "bold",
                      letterSpacing: "wider",
                      fontFamily: "heading",
                    }}
                  >
                    Actions
                  </Td>
                  <Td>
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <IconButton
                        colorScheme="red"
                        icon={<BsFillTrashFill />}
                        onClick={onOpen}
                        aria-lable="issue"
                      />
                      <Link
                        href={`/admin/users/${token._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconButton
                          colorScheme="facebook"
                          variant="outline"
                          icon={<FaUserGraduate />}
                          aria-label="Delete"
                        />
                      </Link>
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);

 const { data } = await axios.get(`${process.env.BASE_URL}/api/users/${id}`);

 delete data.courses;

  return {
    props: {
      data: [data]
    }
  }
}