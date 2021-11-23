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

 div {
   display: flex;
   margin:0 auto;
   width: 30rem;
   justify-content:space-between;
   align-items: center;
   
   
   input{
    
     width: 20rem;
     height:2rem;
     border-radius: 20px;
     border:1px solid #ccc;
     outline: none;
     padding:1rem;
     

   }

   button{
    font-size: 1rem;
    color: #fff;
    background: #3EB595;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;

    &:hover {
      filter: brightness(1.1);
    }

   }
   &.error{

     
     color:#ff0000;

   }
   &.success{

     
     color:#3EB595;

   }
 }

 form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem 2rem;
  max-width: 1120px;
  flex-direction: column;

  label{
    padding:1rem 0 0;
  }

  input {
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
  }
  button{
    font-size: 1rem;
    color: #fff;
    background: #3EB595;
    border: 0;
    border-radius: 1rem;
    padding: 0 2rem;
    height: 2rem;
    margin-top:1rem;

    &:hover {
      filter: brightness(1.1);
    }

   }
 }

`