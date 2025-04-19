import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-[40px] font-bold mb-8 text-blue-400">Hi, How can we help?</h1>
      <div className="w-full max-w-[600px]">
        <div className="relative">
          <Input
            type="text"
            className="h-12 px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:border-gray-300"
            placeholder="What you're looking for"
          />
          <Button variant={'ghost'} className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-2 cursor-pointer">
            <Search />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
