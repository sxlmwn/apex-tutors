"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import SpringModal from "@/components/SpringModal";
import DragCloseDrawer from "@/components/DragCloseDrawer";
import CutoutTextLoader from "@/components/CutoutTextLoader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <CutoutTextLoader />
      {children}
      <SpringModal />
      <DragCloseDrawer />
    </ModalProvider>
  );
}
