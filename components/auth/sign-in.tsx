"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

interface TerminalLine {
  type: "command" | "output" | "error" | "success" | "prompt";
  content: string;
  timestamp?: string;
}

export default function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to RESSANN Portfolio" },
    { type: "output", content: 'Type "help" for available commands' },
    { type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [authFlow, setAuthFlow] = useState<"signin" | "signup" | null>(null);
  const [authStep, setAuthStep] = useState<
    "email" | "password" | "confirm" | null
  >(null);
  const [authData, setAuthData] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [showCursor, setShowCursor] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Redirect if already authenticated
  useEffect(() => {
    if (status === "authenticated" && session) {
      addLine({
        type: "success",
        content: `Already authenticated as ${session.user?.email}`,
      });
      addLine({ type: "output", content: "Redirecting to homepage..." });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [status, session, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (inputRef.current && !isWaitingForInput && !isProcessing) {
      inputRef.current.focus();
    }
  }, [isWaitingForInput, isProcessing]);

  const addLine = (line: TerminalLine) => {
    setLines((prev) => [
      ...prev,
      { ...line, timestamp: new Date().toLocaleTimeString() },
    ]);
  };

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim();

    // Add the command to terminal
    addLine({ type: "command", content: `$ ${trimmedInput}` });

    if (isWaitingForInput) {
      handleAuthInput(trimmedInput);
      return;
    }

    switch (trimmedInput.toLowerCase()) {
      case "help":
        addLine({ type: "output", content: "Available commands:" });
        addLine({
          type: "output",
          content: "  signin    - Sign in to your account",
        });
        addLine({
          type: "output",
          content: "  signup    - Create a new account",
        });
        addLine({
          type: "output",
          content: "  status    - Check authentication status",
        });
        addLine({
          type: "output",
          content: "  clear     - Clear the terminal",
        });
        addLine({ type: "output", content: "  exit      - Exit the terminal and go to homepage" });
        addLine({
          type: "output",
          content: "  help      - Show this help message",
        });
        addLine({ type: "output", content: "" });
        break;

      case "signin":
        if (status === "authenticated") {
          addLine({ type: "error", content: "Already signed in!" });
        } else {
          startAuthFlow("signin");
        }
        break;

      case "signup":
        if (status === "authenticated") {
          addLine({ type: "error", content: "Already signed in!" });
        } else {
          startAuthFlow("signup");
        }
        break;

      case "status":
        if (status === "loading") {
          addLine({
            type: "output",
            content: "Checking authentication status...",
          });
        } else if (status === "authenticated") {
          addLine({
            type: "success",
            content: `Signed in as: ${session?.user?.email}`,
          });
          //   addLine({ type: "output", content: `User ID: ${session?.user?.id}` })
          addLine({ type: "output", content: `Name: ${session?.user?.name}` });
        } else {
          addLine({ type: "output", content: "Not authenticated" });
        }
        break;

      case "clear":
        setLines([
          { type: "output", content: "Welcome to AuthTerminal v2.0.0" },
          { type: "output", content: "Powered by NextAuth.js" },
          { type: "output", content: 'Type "help" for available commands' },
          { type: "output", content: "" },
        ]);
        break;

      case "exit":
        addLine({ type: "output", content: "Goodbye! 👋" });
        setTimeout(() => {
          addLine({ type: "error", content: "Connection closed." });
        }, 1000);
        redirect("/"); // Redirect to homepage
        break;

      case "":
        // Empty command, just add a new prompt
        break;

      default:
        addLine({
          type: "error",
          content: `Command not found: ${trimmedInput}`,
        });
        addLine({
          type: "output",
          content: 'Type "help" for available commands',
        });
    }

    addLine({ type: "output", content: "" });
  };

  const startAuthFlow = (flow: "signin" | "signup") => {
    setAuthFlow(flow);
    setAuthStep("email");
    setAuthData({});
    setIsWaitingForInput(true);

    const flowText = flow === "signin" ? "Sign In" : "Sign Up";
    addLine({ type: "output", content: `=== ${flowText} ===` });
    setCurrentPrompt("Email: ");
  };

  const handleAuthInput = (input: string) => {
    const trimmedInput = input.trim();

    if (authStep === "email") {
      if (!trimmedInput) {
        addLine({ type: "error", content: "Email cannot be empty" });
        return;
      }

      if (!isValidEmail(trimmedInput)) {
        addLine({
          type: "error",
          content: "Please enter a valid email address",
        });
        return;
      }

      setAuthData((prev) => ({ ...prev, email: trimmedInput }));
      setAuthStep("password");
      setCurrentPrompt("Password: ");
    } else if (authStep === "password") {
      if (!trimmedInput) {
        addLine({ type: "error", content: "Password cannot be empty" });
        return;
      }

      if (trimmedInput.length < 6) {
        addLine({
          type: "error",
          content: "Password must be at least 6 characters",
        });
        return;
      }

      setAuthData((prev) => ({ ...prev, password: trimmedInput }));

      if (authFlow === "signup") {
        setAuthStep("confirm");
        setCurrentPrompt("Confirm Password: ");
      } else {
        processAuth(trimmedInput);
      }
    } else if (authStep === "confirm") {
      if (trimmedInput !== authData.password) {
        addLine({ type: "error", content: "Passwords do not match" });
        return;
      }

      processAuth(trimmedInput);
    }
  };

  const processAuth = async (password: string) => {
    setIsWaitingForInput(false);
    setIsProcessing(true);
    setCurrentPrompt("");

    addLine({ type: "output", content: "Processing..." });

    try {
      if (authFlow === "signin") {
        const result = await signIn("credentials", {
          email: authData.email,
          password: password,
          redirect: false,
        });

        if (result?.error) {
          addLine({
            type: "error",
            content: "Invalid credentials. Please try again.",
          });
        //   addLine({
        //     type: "output",
        //     content: "Hint: Try user@example.com / password123",
        //   });
        } else {
          addLine({
            type: "success",
            content: `Successfully signed in as ${authData.email}`,
          });
          addLine({ type: "output", content: "Redirecting to homepage..." });

          setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
        }
      } else {
        // Handle signup
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: authData.email,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          addLine({
            type: "success",
            content: `Account created successfully for ${authData.email}`,
          });
          addLine({
            type: "output",
            content: "You can now sign in with your credentials.",
          });
        } else {
          addLine({
            type: "error",
            content: data.error || "Registration failed",
          });
        }
      }
    } catch (error) {
      addLine({
        type: "error",
        content: "An error occurred. Please try again.",
      });
    }

    addLine({ type: "output", content: "" });

    // Reset auth state
    setAuthFlow(null);
    setAuthStep(null);
    setAuthData({});
    setIsProcessing(false);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isProcessing) {
      handleCommand(currentInput);
      setCurrentInput("");
    }
  };

  const getPromptText = () => {
    if (isWaitingForInput) {
      return currentPrompt;
    }
    return "$ ";
  };

  return (
    <div className="w-full h-screen mx-auto bg-black text-green-400 font-mono text-sm overflow-hidden shadow-2xl p-5 md:p-10">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 rounded-md">
        <div className="text-gray-300 text-sm ml-4">
          AuthTerminal - RESSANN Portfolio
        </div>
        {status === "authenticated" && (
          <div className="text-green-400 text-xs ml-auto">
            ● {session?.user?.email}
          </div>
        )}
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="p-4 h-[calc(100vh_-_150px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            <span
              className={`
              ${line.type === "command" ? "text-white" : ""}
              ${line.type === "error" ? "text-red-400" : ""}
              ${line.type === "success" ? "text-green-400" : ""}
              ${line.type === "output" ? "text-gray-300" : ""}
              ${line.type === "prompt" ? "text-yellow-400" : ""}
            `}
            >
              {line.content}
            </span>
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center py-2">
          <span className="text-green-400 mr-1">{getPromptText()}</span>
          <form onSubmit={handleSubmit} className="flex-1">
            <Input
              ref={inputRef}
              type={
                authStep === "password" || authStep === "confirm"
                  ? "password"
                  : "text"
              }
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="bg-transparent border-none p-0 text-green-400 font-mono focus:ring-0 focus:outline-none"
              autoComplete="off"
              disabled={
                isProcessing ||
                lines.some((line) => line.content === "Connection closed.")
              }
            />
          </form>
          {showCursor && !isProcessing && (
            <span className="text-green-400 ml-1 animate-pulse">▋</span>
          )}
          {isProcessing && <span className="text-yellow-400 ml-1">⏳</span>}
        </div>
      </div>

        {/* Terminal Footer */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 rounded-md">
          <div className="text-gray-300 text-sm">
            Type "help" for available commands
          </div>
        </div>
    </div>
  );
}
