type SVGProps = React.SVGProps<SVGSVGElement>;

export const CartMoreIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      className="IconAddToCart"
    >
      <path
        d="M17.5 18.78V17.04H6.2C6.06 17 5.96 16.89 5.96 16.75L5.99 16.63L6.87 14.43H14.85C15.56 14.43 16.18 14.03 16.5 13.43L17.38 11.8C14.53 11.12 12.35 8.71 12.03 5.73H4.12L3.2 4H0V5.74H1.94L5.44 13.36L4.13 15.82C3.9 16.23 3.82 16.75 3.95 17.28C4.17 18.19 5.03 18.79 5.94 18.79H17.5V18.78Z"
        fill="#42464D"
      ></path>
      <path
        d="M16.18 20C15.1 20 14.23 20.9 14.23 22C14.23 23.1 15.1 24 16.18 24C17.26 24 18.14 23.1 18.14 22C18.13 20.9 17.25 20 16.18 20Z"
        fill="#42464D"
      ></path>
      <path
        d="M6.40001 20C5.32001 20 4.45001 20.9 4.45001 22C4.45001 23.1 5.32001 24 6.40001 24C7.48001 24 8.36001 23.1 8.36001 22C8.35001 20.9 7.47001 20 6.40001 20Z"
        fill="#42464D"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 0C16.238 0 14 2.23858 14 5C14 7.76203 16.2386 10 19 10C21.762 10 24 7.76142 24 5C24 2.23797 21.7614 0 19 0ZM18.4444 2.36249V4.44444H16.2236C15.9199 4.44444 15.6667 4.69318 15.6667 5C15.6667 5.30896 15.916 5.55556 16.2236 5.55556H18.4444V7.91529C18.4444 8.21902 18.6932 8.47222 19 8.47222C19.309 8.47222 19.5556 8.22288 19.5556 7.91529V5.55556H21.7764C22.0801 5.55556 22.3333 5.30682 22.3333 5C22.3333 4.69104 22.084 4.44444 21.7764 4.44444H19.5556V2.36249C19.5556 2.05876 19.3068 1.80556 19 1.80556C18.691 1.80556 18.4444 2.0549 18.4444 2.36249Z"
        fill="#42464D"
      ></path>
    </svg>
  );
};
