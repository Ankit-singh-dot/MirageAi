"use client";
import React, { useId, useState } from "react";
import { email, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "@/actions/auth-action";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address!",
  }),
  password: z.string().min(8, {
    message: "password must be 8 digit long",
  }),
});
const LoginForm = ({ className }: { className?: string }) => {
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
    toast.loading("Signing in .... ", { id: toastId });
    setLoading(true);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    const { success, error } = await login(formData);
    if (!success) {
      toast.error(String(error), { id: toastId });
      setLoading(false);
    } else {
      toast.success("Signup done. Don’t ghost  ", { id: toastId });
      router.push("/dashboard");
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
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
