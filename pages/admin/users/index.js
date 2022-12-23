import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import UserTable from "../../../components/admin/UsersTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    const { data } = await axios.get("/api/users");
    setUsers(data);
  };

  useEffect(() => {
    handleGetUsers();
  }, [users]);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <AdminNavbar />
      <UserTable
        data={users}
        header={["id", "name", "email", "referral code", "role", "actions"]}
        action="users"
      />
    </>
  );
}
