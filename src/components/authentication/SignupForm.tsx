"use client";
import React, { useId, useState } from "react";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { signup } from "@/actions/auth-action";
// import { fa, id } from "zod/v4/locales"; 
import { useRouter } from "next/navigation";

const passwordValidation = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
);
const formSchema = z
  .object({
    full_name: z.string().min(3, {
      message: "Your name must be 3 character long",
    }),
    email: z.string().email({
      message: "Please enter a valid email address!",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordValidation, {
        message:
          "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const SignUp = ({ className }: { className?: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const toastId = useId();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Signing Up .... ", { id: toastId });
    setLoading(true);
    const formData = new FormData();
    formData.append("full_name", values.full_name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    const { success, error } = await signup(formData);
    if (!success) {
      toast.error(String(error), { id: toastId });
      setLoading(false);
    } else {
      toast.success(
        "signed up successfully! please confirm your email address ",
        { id: toastId }
      );
      router.push("/login");
    }
    setLoading(false);
    console.log(values);
  }
  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Create your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </form>
      </Form>
      <div className="flex  text-muted-foreground">
        <Switch />
        <p className="ml-3 ">
          I agree to the{" "}
          <Link
            href="#"
            className="underline hover:text-primary cursor-pointer"
          >
            {" "}
            Terms & Conditions{" "}
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="underline hover:text-primary cursor-pointer"
          >
            {" "}
            Privacy policy{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
export default SignUp;
