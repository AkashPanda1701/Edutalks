import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

import Link from "next/link";

export default function UserActions(props) {
  const { link, onClick } = props;

  return (
    <>
      <ButtonGroup variant="solid" size="sm" spacing={3}>
        <IconButton
          colorScheme="green"
          icon={<AiFillEdit />}
          aria-label="Edit"
          onClick={onClick}
        />
        <IconButton
          colorScheme="red"
          variant="outline"
          icon={<BsFillTrashFill />}
          aria-label="Delete"
        />
      </ButtonGroup>
    </>
  );
}
