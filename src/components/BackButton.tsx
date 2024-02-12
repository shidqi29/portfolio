"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeftCircle as BackButtonIcon } from "react-icons/fi";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex w-max cursor-pointer items-center gap-2 font-medium text-secondary-foreground transition-all duration-300 hover:gap-3 hover:text-accent"
    >
      <BackButtonIcon />
      <span>Back</span>
    </button>
  );
};
