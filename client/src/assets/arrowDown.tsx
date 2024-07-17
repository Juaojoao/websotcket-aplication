type SVGProps = React.SVGProps<SVGSVGElement>;

export const ArrowDownIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="10"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
      className="IconArrowDownChevron"
    >
      <path d="M0 -3.65575e-06L16 0L8 8L0 -3.65575e-06Z" fill="#fff"></path>
    </svg>
  );
};
