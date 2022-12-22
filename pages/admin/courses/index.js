import {
  Box,
  Button,
  HStack,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import UserTable from "../../../components/admin/UsersTable";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [formdata, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    totalDuration: "",
  });

  const handleGetCoures = async () => {
    const { data } = await axios.get("/api/courses");
    let res = data.courses;
    for (let i = 0; i < res.length; i++) {
      delete res[i].videos;
      delete res[i].description;
      delete res[i].slug;
      delete res[i].image;
    }
    setCourses(res);
  };

  useEffect(() => {
    handleGetCoures();
  }, []);

  const handleFormChange = (event) => {
    const { value, name } = event.target;
    const inputValue = name === "totalDuration" ? Number(value) : value;
    setFormData({ ...formdata, [name]: inputValue });
  };

  const handleFormSubmit = () => {
    console.log(formdata);
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <AdminNavbar />

      <UserTable
        data={courses}
        header={["id", "title", "type", "duration", "actions"]}
        action="courses"
      />

      <Heading p={5}>Course Creation</Heading>

      <Container my={5} maxW={{ base: "90%", md: "container.sm" }}>
        <Stack spacing={5}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              placeholder="Course title"
              onChange={handleFormChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              placeholder="Course type"
              onChange={handleFormChange}
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Duration</FormLabel>
            <Input
              name="totalDuration"
              placeholder="Course duration"
              onChange={handleFormChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="Course duration"
              onChange={handleFormChange}
            />
          </FormControl>

          <Input
            type="submit"
            _hover={{
              backgroundColor: "#2B6CB0",
              fontWeight: "bold",
              color: "white",
              transition: "all ease .6s",
              cursor: "pointer",
            }}
            onClick={handleFormSubmit}
          />
        </Stack>
      </Container>
    </>
  );
}
