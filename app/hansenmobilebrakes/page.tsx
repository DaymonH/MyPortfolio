"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HanseMobileBrakes = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://hansenmobilenbrakes.netlify.app/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md p-4 shadow-lg">
        <CardHeader>
          <CardTitle>Redirecting...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You are being redirected to Hansen Mobile Brakes. Please wait a
            moment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HanseMobileBrakes;
