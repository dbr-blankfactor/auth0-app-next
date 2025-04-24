import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Search } from 'lucide-react';
import { Input } from './input';

export default function Header() {
  return (
    <header className="h-16 border-b border-[#2a3548] flex items-center justify-between px-4">
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8a94a6]" />
        <Input
          placeholder="Search topics..."
          className="pl-8 bg-[#1a2233] border-[#2a3548] text-[#8a94a6] h-9 focus-visible:ring-[#5e81ff]"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-[#2a3548]">
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=32&width=32" />
            <AvatarFallback className="bg-[#2a3548]">LC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
