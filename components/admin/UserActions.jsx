import { ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

export default function UserActions(props) {
    const { link, onClick } = props;

    return (
        <>
            <ButtonGroup variant="solid" size="sm" spacing={3}>
                <IconButton
                    colorScheme="red"
                    icon={<BsFillTrashFill />}
                    onClick={onClick}
                    aria-lable="issue"
                />
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <IconButton
                        colorScheme="facebook"
                        variant="outline"
                        icon={<FaUserGraduate />}
                        aria-label="Delete"
                    />
                </Link>
            </ButtonGroup>
        </>
    )
}