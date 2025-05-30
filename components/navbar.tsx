"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function NavBar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full text-white py-1 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            width={80}
            height={80}
            alt="Logo"
          />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          {/* Authentication Buttons */}
          <SignedIn>
            <Link
              href="/plan"
              className="text-white hover:text-white/80 transition-colors"
            >
              Plan
            </Link>
            {/* Profile Picture */}
            {user?.imageUrl ? (
              <Link href="/profile">
                <Image
                  src={user.imageUrl}
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white/30"
                />
              </Link>
            ) : (
              <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30"></div>
            )}

            {/* Sign Out Button */}
            <SignOutButton>
              <button className="ml-4 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition border-2 border-white/30">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <Link
              href="/"
              className="text-white hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href={isSignedIn ? "/subscribe" : "/sign-up"}
              className="text-white hover:text-white/80 transition-colors"
            >
              Subscribe
            </Link>

            <Link
              href="/sign-up"
              className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition border-2 border-white/30"
            >
              Sign Up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
