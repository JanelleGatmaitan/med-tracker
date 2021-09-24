const Button = {
  baseStyle: {
    letterSpacing: "2px",
    color: "greyScale.700",
    fontFamily: "Roboto"
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    rounded: {
      borderRadius: "50%"
    },
    solid: {
      bg: "blue.300"
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
}

export default Button;
