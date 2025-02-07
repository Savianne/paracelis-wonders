import PageContent from "./pageContent";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export default async function Page({
  params,
}: {
  params: Promise<{ destinationUID: string }>,
}) {
  const session = await getServerSession(options);
  const uid = (await params).destinationUID;
  return <PageContent uid={uid} userEmail={session?.user?.email as string} />
}