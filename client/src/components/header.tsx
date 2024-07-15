import Link from "next/link";
import { MountainIcon } from "../assets/mountainIcon";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="#" prefetch={false}>
          <MountainIcon className="w-8 h-8" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="font-medium">Acme Shop</div>
      </div>
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="font-medium">Chat with Sales</div>
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full">
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="sr-only">View Cart</span>
        </Button>
      </div>
    </header>
  );
};
