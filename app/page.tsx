import { utilities } from "@/lib/utility";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${utilities[0].url}`);
}
