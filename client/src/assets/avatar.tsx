type SVGProps = React.SVGProps<SVGSVGElement>;

export const AvatarIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      className="IconDefaultProfileLogo"
    >
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="28"
        style={{ maskType: "alpha" }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.6375 13.5625C20.6063 12.2062 21.875 9.975 21.875 7.4375C21.875 3.325 18.55 0 14.4375 0C10.325 0 7 3.325 7 7.4375C7 9.975 8.26875 12.2062 10.2375 13.5625C6.34375 14.7875 3.5 18.4625 3.5 22.75V28H25.375V22.75C25.375 18.4625 22.5312 14.7875 18.6375 13.5625Z"
          fill="#347BBE"
        ></path>
      </mask>
      <g mask="url(#mask0)">
        <circle cx="14.5" cy="11.5" r="15.5" fill="#fff"></circle>
      </g>
    </svg>
  );
};
