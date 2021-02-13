import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration:none;
        color:black;
    }

    button {
        outline:none;
        border:none;
    }

    :root {
        // fonts
        --text: 'Lato', sans-serif;
        --heading: 'Reem Kufi', sans-serif;
        --sub-heading: 'Oswald', sans-serif;

        // colors
        --light-gray: #ebebeb;
        --red: #c70101;
        --white: #fff;

        // font weights
        --fw-light: 200;
        --fw-medium:400;
        --fw-heavy:600;

        // font sizes
        --fs-sm: 1rem;
        --fs-md: 3rem;
        --fs-lg: 6rem;

        // paddings
        --padding-1: 1rem;
        --padding-2: 2rem;
        --padding-3: 3rem;

        // margins
        --margin-1: 1rem;
        --margin-2: 2rem;
        --margin-3: 3rem;
        --margin-4: 4rem;
    }

    // Styling for react-elastic-carousel

    .rec-carousel-item{
        pointer-events:none;
    }  
    
    .rec-arrow-right, .rec-arrow-left {
        background-color: var(--red);
        color: white;
        width:40px;
        height:40px;
        min-width:40px;
        line-height:40px;

        &:hover {
            background-color: black !important;
        }
        &:focus {
            background-color: var(--red) !important;

        }
    }

    .rec-dot {
        background-color: white;
    }

    .rec-dot_active {
        background-color: var(--red);
        box-shadow: none;
    }
`;
