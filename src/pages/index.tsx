import { parseCookies, destroyCookie } from "nookies";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import AuthLayout from "../components/Templates/AuthLayout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUser } from "../features/user/action";
import Table from "../components/Organisms/Table";

const Beranda = () => {
  const dispatch = useAppDispatch();
  // const { data } = useAppSelector((state) => state.user);
  const [data, setData] = useState<any[]>([]);
  const { token } = parseCookies();
  const router = useRouter();

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "name.first",
          },
          {
            Header: "Last Name",
            accessor: "name.last",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "dob.age",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Country",
            accessor: "location.country",
          },
          {
            Header: "Email",
            accessor: "email",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(getUser()).then((v: any) => {
      console.log(v);
      setData(v.payload.serviceData);
    });
  }, [dispatch]);
  useEffect(() => {
    console.log(data);
  }, []);
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      destroyCookie(null, "token");
      router.replace("/auth/login");
    }
  };

  if (token) {
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <h1>Selamat datang di Beranda!</h1>
        <p>Anda sudah login.</p>
        <div
          onClick={() => router.push("/portofolio")}
          className="cursor-pointer"
        >
          <a>Ke Dashboard</a>
        </div>
        <div className="">
          <Table columns={columns} data={data} maxPageCount={10} />
        </div>
        <div className="cursor-pointer" onClick={handleLogout}>
          LogOut
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Beranda;
