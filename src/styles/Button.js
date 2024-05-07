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
    position: relative;
    box-shadow:
        5.4px 13.6px 9.3px -75px rgba(0, 0, 0, 0.21),
        43px 109px 74px -75px rgba(0, 0, 0, 0.105)
    ;
    
    
`;

const FillButton = styled(ButtonBase)`
    background: #0C2C59;
    color: var(--accent);
    font-weight: bold;
    border: none;
    outline: none;
    

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.075rem;
        background: red;
        left: 0;
        bottom: 0;
        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease;
    }


     &:hover::after{
        transform: scale(1, 1);
    }
`;

const OutlineButton = styled(ButtonBase)`
    
    color: yellow;
   
`;

export const TestButton = styled(ButtonBase)`
    background-color: grey;
    color: green;
    width: 130px;


    &:hover{
        color: #B8860B;
        background: #000000;
        font-weight: bold;
    }
`;

export default Button;
