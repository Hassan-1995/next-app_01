import React from "react";

interface Props {
  params: { id: number; photoID: number };
}

const PhotoPage = ({ params: { id, photoID } }: Props) => {
  return (
    <div>
      UserDetailPage {id} PhotoPage {photoID}
    </div>
  );
};

export default PhotoPage;
