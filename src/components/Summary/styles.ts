import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    
    &:last-child {
    background-color: var(--green);
    color: var(--shape);
  }

  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong{
    margin-top: 1rem; 
    font-size: 2rem;
    display: block;
    font-weight: 500;
    line-height: 3rem;
  }
  
`;