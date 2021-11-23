import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  

`;

export const Header = styled.div`
  display:flex;
  padding: 5rem 9rem 1rem;
  justify-content: space-between;
 
  align-items: center;
  

  h6{
    font-size: 1rem;
  }
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;

    font-size: 1rem;
    color: #fff;
    background: #3EB595;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(1.1);
    }
}

`

export const Content = styled.div`
 margin: 0 auto;
 padding: 3rem 1rem 1rem;
 max-width: 1120px;
 width: 100%;

`

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;

  td,
  th {
    padding-left: 8px;
    text-align: left;
  }

  thead tr {
    height: 60px;
    background: #e9ecef;
    color: #6b7a99;
    font-size: 16px;
  }

  tbody tr {
    line-height: 3rem;
    border-bottom: 1px solid #e3f1d5;
  }

  tr:last-child {
    //border: 0;
  }

  td.l,
  th.l {
    text-align: right;
  }
  td.c,
  th.c {
    text-align: center;
  }
  td.r,
  th.r {
    text-align: center;
  }

`