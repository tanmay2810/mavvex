import styled from "@emotion/styled";

export const NavBarCss = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0.5rem 1rem;

    & bg-light {
        background-color: #f8f9fa;
    }
    
    & navbar-expand-lg {
        flex-flow: row nowrap;
        justify-content: flex-start;
    }
`;
