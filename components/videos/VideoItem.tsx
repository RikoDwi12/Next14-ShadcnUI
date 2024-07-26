import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VideoItem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ini merupakan tittle</CardTitle>
        <CardDescription>ini merupakan deskripsi</CardDescription>
      </CardHeader>
      <CardContent>
        <p>konten apa</p>
      </CardContent>
      <CardFooter>
        <p>Footerny</p>
      </CardFooter>
    </Card>
  );
}

export default VideoItem;
