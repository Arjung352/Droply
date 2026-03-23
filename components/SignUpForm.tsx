"use client";
import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";

// importing zod schema
import { signUpSchema } from "@/Schemas/signUpSchema";

export default function SignUpForm() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const onSubmit = async () => {};
  const handleVerificationSubmit = async () => {};
}
