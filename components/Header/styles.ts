import styled, { css } from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const Container = styled.div<MenuProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 2rem 0;
  color: var(--text);
  background-color: var(--background);
  font-weight: 600;

  .logo {
    width: 100px;
    height: auto;
    margin-right: 4rem;
  }

  nav {
    display: flex;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    place-items: center;

    li {
      list-style-type: none;

      & + li {
        margin-left: 2rem;
      }

      a {
        color: var(--text);
        cursor: pointer;
      }
    }

    ul + ul {
      margin-left: 3rem;
    }

    button {
      svg {
        color: var(--text);
      }
    }
  }

  .rounded-border {
    border: 1px solid #999999;
    border-radius: 0.75rem;
    padding: 0.5rem 1.25rem;

    text-align: center;
  }

  .mobile-menu,
  .mobile-menu-items {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-menu {
      width: 100vw;
      display: flex;
      flex-direction: column;
      padding: 0 2rem;

      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .mobile-menu-items {
        width: 100%;
        flex-direction: column;

        ${(props) =>
          props.open &&
          css`
            display: flex;
          `}

        li {
          width: 70%;
          margin: 0;
          text-align: center;
          font-size: 24px;
          padding: 0.75rem;

          & + li {
            border-top: 1px solid var(--main);
          }
        }
      }
    }

    nav,
    .ul-right {
      display: none;
    }
  }
`;
