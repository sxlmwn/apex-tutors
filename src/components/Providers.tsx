"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import SpringModal from "@/components/SpringModal";
import DragCloseDrawer from "@/components/DragCloseDrawer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <SpringModal />
      <DragCloseDrawer />
    </ModalProvider>
  );
}
