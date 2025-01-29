const HamburgerIcon = ({ width = "24", height = "24", color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Menu"
    >
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
