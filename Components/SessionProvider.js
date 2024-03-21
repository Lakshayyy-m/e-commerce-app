"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const MySessionProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default MySessionProvider;
