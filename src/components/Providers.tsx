"use client";

import React from "react";
import { ModalProvider } from "@/context/ModalContext";
import SpringModal from "@/components/SpringModal";
import DragCloseDrawer from "@/components/DragCloseDrawer";
import CutoutTextLoader from "@/components/CutoutTextLoader";
import { Home, BookOpen, MapPin, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const mobileNavItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Subjects", url: "#subjects", icon: BookOpen },
  { name: "Cities", url: "#cities", icon: MapPin },
  { name: "Contact", url: "#contact", icon: Phone },
];

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <CutoutTextLoader />
      {children}
      <SpringModal />
      <DragCloseDrawer />
      <NavBar items={mobileNavItems} />
    </ModalProvider>
  );
}
