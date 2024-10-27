import { FC } from "react";

type PageProps = {
  params?:{
    id: string
  }
};
const Meet: FC = ({ params }: PageProps) => {
  return <p>{params?.id}</p>
}

export default Meet