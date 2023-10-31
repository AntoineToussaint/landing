import { Button } from "@/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Field is required" }),
  email: z
    .string()
    .email({ message: "Must be a valid email" })
    .min(1, { message: "Field is required" }),
  need: z.string().min(1, { message: "Field is required" }),
});

export function SurveyForm() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      need: "",
    },
    resolver: zodResolver(FormSchema),
  });

  return (
    <>
      <div className="mb-4">
        <h3 className="text-2xl">Want to know more?</h3>
        <span className="font-light text-gray-500 text-sm hidden">
          Some description text here
        </span>
      </div>
      <form
        onSubmit={handleSubmit(async (v) => {
          setError("");
          setSubmitting(true);

          const res = await axios.post<{
            success: boolean;
            entry?: any;
            error?: any;
          }>(`/api/survey`, {
            name: v.name,
            email: v.email,
            need: v.need,
          });

          if (res.data.success) {
            setSubmitted(true);
            setSubmitting(false);
          } else {
            setSubmitting(false);
            setError(
              "Oops! An unexpected error has occured. Please try again later"
            );
          }
        })}
      >
        {submitted ? (
          <div>Thank you for your feedback!</div>
        ) : (
          <div className="flex flex-col gap-4">
            {error && (
              <span className="text-sm text-red-500 border border-red-100 bg-red-50 px-2 py-1 rounded-md">
                {error}
              </span>
            )}

            <div>
              <label htmlFor="name" className={labelClassName}>
                Your name
              </label>
              <input
                className={fieldClassName}
                placeholder="John Doe"
                {...register("name")}
              />
              {errors.name?.message && (
                <span className={errorClassName}>{errors.name.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Your email
              </label>
              <input
                className={fieldClassName}
                placeholder="john@example.xyz"
                {...register("email")}
              />
              {errors.email?.message && (
                <span className={errorClassName}>{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="need" className={labelClassName}>
                What feature do you want help with mostly
              </label>
              <select className={fieldClassName} {...register("need")}>
                <option value="">Select one of the following:</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Deployment">Deployment</option>
                <option value="Tech Maintenance">Tech Maintenance</option>
                <option value="Tech Management">Tech Management</option>
              </select>
              {errors.need?.message && (
                <span className={errorClassName}>{errors.need.message}</span>
              )}
            </div>

            <Button type="submit" disabled={submitting}>
              {submitting ? "Working..." : "Submit"}
            </Button>
          </div>
        )}
      </form>
    </>
  );
}

const labelClassName = "text-gray-500 text-[14px] font-light mb-2";

const errorClassName = "text-[14px] text-red-500 font-light mt-1";

const fieldClassName =
  "h-[48px] border-0 bg-gray-100 rounded-lg px-4 py-2 w-full text-[14px]";
