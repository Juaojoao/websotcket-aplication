// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/hpgtJwx8SLF
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";
// // import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// import { SendIcon } from "./assets/sendIcon";
// import { XIcon } from "./assets/XIcon";
// import { ShoppingCartIcon } from "./assets/shoppingCartIcon";
// import { MountainIcon } from "./assets/mountainIcon";

// export const Component = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 grid grid-cols-2 gap-8 p-8">
//         <div className="col-span-1">
//           <div className="grid gap-4">
//             <div className="bg-muted rounded-lg p-4">
//               <h2 className="text-2xl font-bold">Featured Products</h2>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <Link href="#" className="group" prefetch={false}>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Product 1"
//                     width={300}
//                     height={300}
//                     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-80 transition"
//                   />
//                   <div className="mt-2">
//                     <div className="font-medium">Product 1</div>
//                     <div className="text-muted-foreground text-sm">$49.99</div>
//                   </div>
//                 </Link>
//                 <Link href="#" className="group" prefetch={false}>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Product 2"
//                     width={300}
//                     height={300}
//                     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-80 transition"
//                   />
//                   <div className="mt-2">
//                     <div className="font-medium">Product 2</div>
//                     <div className="text-muted-foreground text-sm">$29.99</div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <div className="bg-muted rounded-lg p-4">
//               <h2 className="text-2xl font-bold">New Arrivals</h2>
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 <Link href="#" className="group" prefetch={false}>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Product 3"
//                     width={300}
//                     height={300}
//                     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-80 transition"
//                   />
//                   <div className="mt-2">
//                     <div className="font-medium">Product 3</div>
//                     <div className="text-muted-foreground text-sm">$39.99</div>
//                   </div>
//                 </Link>
//                 <Link href="#" className="group" prefetch={false}>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Product 4"
//                     width={300}
//                     height={300}
//                     className="rounded-lg object-cover w-full aspect-square group-hover:opacity-80 transition"
//                   />
//                   <div className="mt-2">
//                     <div className="font-medium">Product 4</div>
//                     <div className="text-muted-foreground text-sm">$59.99</div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1 bg-muted rounded-lg p-4">
//           <div className="flex flex-col h-full">
//             <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
//               <div className="flex items-center gap-2">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="font-medium">Chat with Sales</div>
//               </div>
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <XIcon className="w-5 h-5" />
//                 <span className="sr-only">Close chat</span>
//               </Button>
//             </header>
//             <div className="flex-1 overflow-auto p-4 space-y-4">
//               <div className="flex items-start gap-4">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-background rounded-lg p-3 max-w-[75%]">
//                   <div className="font-medium">John Doe</div>
//                   <div>Hey there! How can I help you today?</div>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 justify-end">
//                 <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
//                   <div className="font-medium">You</div>
//                   <div>
//                     I'm interested in your product. Can you tell me more about
//                     the pricing?
//                   </div>
//                 </div>
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-background rounded-lg p-3 max-w-[75%]">
//                   <div className="font-medium">John Doe</div>
//                   <div>
//                     Sure, our pricing starts at $99 per month for the basic
//                     plan. Let me know if you have any other questions!
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-background p-4 flex items-center gap-2 rounded-b-lg">
//               <Textarea
//                 placeholder="Type your message..."
//                 className="flex-1 rounded-lg resize-none"
//               />
//               <Button type="submit">
//                 <SendIcon className="w-5 h-5" />
//                 <span className="sr-only">Send message</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
