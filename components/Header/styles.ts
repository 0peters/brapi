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
  z-index: 10;
  height: 5rem;
  color: var(--text);
  background-color: var(--background-light);
  font-weight: 600;
  box-shadow: 0 3px 5px #dddddd;

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 3px 5px #111;
  }

  nav {
    display: flex;
    div {
      svg {
        height: auto;
        margin-right: 4rem;
      }
    }
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

        :hover {
          border-color: var(--main);
          color: var(--main);
        }

        :active {
          border-color: var(--main-dark);
          color: var(--main-dark);
        }
      }
    }

    ul + ul {
      margin-left: 3rem;
    }
  }

  button {
    svg {
      color: var(--text);

      :hover {
        color: var(--main);
      }

      :active {
        color: var(--main-dark);
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
      height: 3rem;
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;

        svg {
          height: auto;
        }
      }

      .mobile-menu-items {
        width: 100%;
        flex-direction: column;
        background-color: var(--background);

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
