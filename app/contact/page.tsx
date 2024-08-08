"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, {
      message: " Name must not be more than 100 characters ",
    })
    .refine((data) => data.length > 3, {
      message: "Name must be atleast more than 3 characters.",
    }),
  email: z.string().email("Invalid Email").min(1, "Email is required"),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(300, {
      message: "Message must not be more than 300 characters",
    })
    .refine((data) => data.length > 3, {
      message: "Message must be atleast 3 characters long",
    }),
});

type FormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full px-8 md:px-0">
        <div className="py-14 space-y-2">
          <h1 className="text-3xl">Let&apos;s talk about your ideas</h1>
          <p className="text-lg text-muted-foreground">
            We help companies and individuals build out their digital presence.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-8 mb-10"
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-10 ">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor={field.name}
                        className="text-inherit capitalize text-base"
                      >
                        {field.name}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="eg: John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor={field.name}
                        className="text-inherit capitalize text-base"
                      >
                        {field.name}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          placeholder="eg: john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor={field.name}
                      className="text-inherit capitalize text-base"
                    >
                      {field.name}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter your message.."
                        rows={7}
                        className=" resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid gap-2">
                <Button className=" bg-primary/90">Let&apos;s talk</Button>
                <small>
                  By submitting this form, I agree to the{" "}
                  <Link
                    href={"/privacy"}
                    className="text-primary hover:underline"
                  >
                    privacy policy
                  </Link>
                </small>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
