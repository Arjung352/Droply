"use client";
import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";

// importing zod schema
import { signUpSchema } from "@/Schemas/signUpSchema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  const [verifying, setVerifying] = useState(false);
  const { signUp, isLoaded, setActive } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async () => {};
  const handleVerificationSubmit = async () => {};

  if (verifying) {
    return <h1>This is otp entering field</h1>;
  }

  return <h1>SignUp form with email and other fields</h1>;
}
