const FavouriteIcon = ({
  style = {},
  fill = "white",
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 20 19",
  handleClick = () => {}
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={`svg-icon ${className || ""}`}
    onClick={handleClick}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.22318 16.2905L9.22174 16.2892C6.62662 13.936 4.55384 12.0538 3.1178 10.2981C1.69324 8.55647 1 7.06152 1 5.5C1 2.97228 2.97228 1 5.5 1C6.93721 1 8.33224 1.67394 9.23865 2.73834L10 3.6324L10.7614 2.73834C11.6678 1.67394 13.0628 1 14.5 1C17.0277 1 19 2.97228 19 5.5C19 7.06153 18.3068 8.55653 16.882 10.2996C15.4459 12.0566 13.3734 13.9409 10.7786 16.2989C10.7782 16.2993 10.7778 16.2996 10.7775 16.2999L10.0026 17L9.22318 16.2905Z"
      fill={fill}
      stroke={fill}
      strokeWidth="2"
    />
  </svg>
);

export default FavouriteIcon;
