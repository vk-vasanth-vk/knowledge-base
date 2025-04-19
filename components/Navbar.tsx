"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            KovaiBase
          </h1>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600"
              } hover:text-gray-900`}
            >
              Home
            </Link>
            <Link
              href="/getting-started"
              className={`${
                pathname === "/getting-started"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              Getting Started
            </Link>
            <Link
              href="/account-management"
              className={`${
                pathname === "/account-management"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              Account Management
            </Link>
            <Link
              href="/product-features"
              className={`${
                pathname === "/product-features"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              Product Features
            </Link>
            <Link
              href="/integrations"
              className={`${
                pathname === "/integrations"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              Integrations
            </Link>
            <Link
              href="/troubleshoot"
              className={`${
                pathname === "/troubleshoot"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              Troubleshoot
            </Link>
            <Link
              href="/faqs"
              className={`${
                pathname === "/faqs"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600"
              } hover:text-gray-900`}
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
