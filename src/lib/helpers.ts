import { auth } from "@clerk/nextjs/server";
import type { UserRole } from "@/types";

export async function getUserRole(): Promise<UserRole> {
  const { sessionClaims } = auth();
  return (sessionClaims?.metadata?.role as UserRole) || "student";
}
