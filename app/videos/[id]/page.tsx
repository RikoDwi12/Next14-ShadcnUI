import React from "react";

export default function VideosDetail({ params }: { params: { id: string } }) {
  return <div>VideosDetail {params.id}</div>;
}
