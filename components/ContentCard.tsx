'use client';
import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { LucideIcon, CircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContentCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href: string;
  category?: string;  // Add category prop
}

const ContentCard = ({ 
  title, 
  description, 
  icon: Icon = CircleIcon, 
  href, 
  category 
}: ContentCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (category) {
      router.push(`${href}?category=${category}`);
    } else {
      router.push(href);
    }
  };

  return (
    <Card 
      className="hover:shadow-lg hover:border-blue-400 transition-shadow h-[230px] relative cursor-pointer" 
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex flex-col items-center gap-2">
          <Icon className="h-8 w-8 text-gray-500" />
          <h2 className="text-xl font-semibold text-blue-400 dark:text-white text-center">
            {title}
          </h2>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-[250px] mx-auto leading-normal">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
