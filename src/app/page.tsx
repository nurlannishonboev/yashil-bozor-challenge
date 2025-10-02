"use client";
import { LoginModal } from "@/features/auth";
import { Button } from "@/shared/libs/shadcn";
import React from "react";

export default function Page() {
  return (
    <>
      <Button>Login</Button>
      <LoginModal />
    </>
  );
}
