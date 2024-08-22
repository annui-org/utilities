import { utilities } from "@/lib/utility";
import { Header } from "./_components/header";
import { ActionsProvider } from "./_components/actions";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    utility: string;
  };
};

export default function UtilityPage({ params }: Props) {
  const current = utilities.find((u) => u.url === params.utility);

  if (!current) {
    notFound();
  }

  return (
    <ActionsProvider>
      <Header current={current} />
      {current.page && <current.page />}
    </ActionsProvider>
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const current = utilities.find((u) => u.url === params.utility);

  return {
    title: current?.name,
  };
}
