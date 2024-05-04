import styled from "styled-components";

const COLORS = {
    primary: {
        "--main": "indigo",
        "--accent": "grey",

    },
    secondary: {
        "--main": "lavenderblush",
        "--accent": "indigo",
    },
};

function Button({ variant = "fill", color = "primary", ...props}) {
    let Components;
    if (variant === "fill") {
        Components = FillButton;

    }else if (variant === "outline") {
        Components = OutlineButton;
    }

    return <Components style = {COLORS[color]} {...props} />;

}

const ButtonBase = styled.button`
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    height: 25px;
    width: auto;
    gap: 6px;

`;

const FillButton = styled(ButtonBase)`
    background-color: #0C2C59;
    color: var(--accent);
    font-weight: bold;

    &:hover {
        opacity: 0.9;
    }`

const OutlineButton = styled(ButtonBase)`
    // background-color: white;
    color: orange;
    border: 2px solid red;

    &:hover {
        border-color: yellow;

    }
`;

export const TestButton = styled(ButtonBase)`
    background-color: grey;
    color: white;
    width: 130px;
`;

export default Button;
