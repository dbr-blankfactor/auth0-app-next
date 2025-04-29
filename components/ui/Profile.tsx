"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { User } from "@auth0/nextjs-auth0/types";
import { Avatar, AvatarImage } from "./avatar";

type UserProfileProps = {
  user: User | null | undefined;
  isLoading: boolean;
};

export default function Profile({ user, isLoading }: UserProfileProps) {

    console.log(user)
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 border border-[#2a3548]">
          {isLoading && <p>Loading...</p>}
          {user && (
            <>
              <AvatarImage src={user?.picture || "" || undefined} />
              {/* <AvatarFallback className="bg-[#2a3548]">LC</AvatarFallback> */}
            </>
          )}
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  );
}
