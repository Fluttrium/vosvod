"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Пароль должен содержать минимум 6 символов",
  }),
});

interface AuthFormProps {
  testId: number;
  testTitle: string;
  onSuccess: () => void;
  onError: (message: string) => void;
}

export function AuthForm({ testId, testTitle, onSuccess, onError }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(3);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { password: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (attempts <= 0) return;

    setLoading(true);
    onError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (values.password === "Парус2024") {
        localStorage.setItem(`test-auth-${testId}`, "granted");
        onSuccess();
      } else {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        onError(`Неверный пароль. Осталось попыток: ${newAttempts}`);
        if (newAttempts === 0) {
          onError("Доступ заблокирован. Обратитесь к администратору");
        }
      }
    } catch {
      onError("Ошибка проверки пароля");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Card className="mx-auto max-w-md w-full shadow-xl border-blue-300">
        <CardHeader>
          <CardTitle className="text-3xl text-blue-900 flex items-center gap-3 justify-center">
            <SailboatIcon className="w-12 h-12 text-blue-600" />
            <span className="border-l-2 border-blue-200 pl-3">{testTitle}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-blue-900 font-medium">
                🔒 Введите пароль доступа
              </Label>
              <Input
                id="password"
                type="password"
                disabled={attempts <= 0}
                {...form.register("password")}
                className="border-2 border-blue-200 focus:ring-2 focus:ring-blue-500 text-lg py-5"
              />
              {form.formState.errors.password && (
                <p className="text-red-600 font-medium">
                  ⚠️ {form.formState.errors.password.message}
                </p>
              )}
            </div>

            {form.formState.errors.root?.message && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                ⚠️ {form.formState.errors.root.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || attempts <= 0}
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold h-12 transition-all"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Spinner />
                  Проверка...
                </div>
              ) : (
                "⛵ Получить доступ"
              )}
            </Button>

            <div className="mt-8 text-center text-sm text-blue-600 border-t border-blue-200 pt-4">
              <p>Для получения доступа обратитесь к капитану</p>
              <p className="mt-1">Техническая поддержка: +7 (999) 123-45-67</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SailboatIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path
        d="M22 18H2M4 12H20M10 6L14 6M17.306 9.667L15.58 5.838C15.307 5.23 14.687 4.828 14 4.828H10C9.313 4.828 8.693 5.23 8.42 5.838L6.694 9.667M12 15V18M8.5 15L6.5 21M15.5 15L17.5 21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
  );
}