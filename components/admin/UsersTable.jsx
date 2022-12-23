import React, { useState } from "react";
import {
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Box,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

// Action Buttons
import CourseActions from "./CourseActions";
import UserActions from "./UserActions";

// Modals
import DeleteModal from "./DeleteModal";
import UpdateCourseModal from "./UpdateCourseModal";
import { useSelector } from "react-redux";

export default function UserTable(props) {
  const { data, header, action } = props;
  const [modalData, setModalData] = useState({});
  const { loading } = useSelector((store) => store.auth);

  const color1 = useColorModeValue("black.600", "gray.400");
  const color2 = useColorModeValue("black.600", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Modal */}
      <>
        {action === "users" ? (
          <DeleteModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            data={modalData}
          />
        ) : (
          <UpdateCourseModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            data={modalData}
          />
        )}
      </>
      {/* Modal */}

      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        py={10}
        alignItems="center"
        justifyContent="center"
      >
          <Box w={{ base: "90%", md: "80%" }}>
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
                        gridTemplateColumns:
                          "minmax(0px, 35%) minmax(0px, 65%)",
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
                        {action === "users" ? (
                          <UserActions
                            link={`/admin/users/${token._id}`}
                            onClick={() => {
                              onOpen();
                              setModalData(token);
                            }}
                          />
                        ) : (
                          <CourseActions
                            onClick={() => {
                              onOpen();
                              setModalData(token);
                            }}
                          />
                        )}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
      </Flex>
    </>
  );
}
