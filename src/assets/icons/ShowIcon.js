const ShowIcon = ({
  style = {},
  fill = "white",
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 24 24",
  handleClick
}) => (
  <svg
    onClick={handleClick}
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={`svg-icon ${className || ""}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
      fill={fill}
    />
    <path
      d="M12.0003 5C4.36729 5 2.07329 11.617 2.05229 11.684L1.94629 12L2.05129 12.316C2.07329 12.383 4.36729 19 12.0003 19C19.6333 19 21.9273 12.383 21.9483 12.316L22.0543 12L21.9493 11.684C21.9273 11.617 19.6333 5 12.0003 5ZM12.0003 17C6.64929 17 4.57629 13.154 4.07429 12C4.57829 10.842 6.65229 7 12.0003 7C17.3513 7 19.4243 10.846 19.9263 12C19.4223 13.158 17.3483 17 12.0003 17Z"
      fill={fill}
    />
  </svg>
);


export default ShowIcon;
