import { useParams } from "react-router-dom";

import { PageContainer } from "../../components/PageContainer";

type PageParams = {
  slug: string;
};

export function Search() {
  const { slug } = useParams<PageParams>();

  return <PageContainer>{slug}</PageContainer>;
}
