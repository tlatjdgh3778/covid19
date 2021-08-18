import styled from "styled-components";

const SideBarTitleContainer = styled.div`
    padding: 2rem 1rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.md};

    @media ${({ theme }) => theme.device.TabletPortrait} {
        padding: 0;
        display: flex;
    }
`;
const Title = styled.div`
    @media ${({ theme }) => theme.device.TabletPortrait} {
        padding: 0 0.25rem;
    }
`;

export { SideBarTitleContainer, Title };
