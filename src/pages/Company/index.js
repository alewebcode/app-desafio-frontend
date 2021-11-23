import React, { useEffect,useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container,Content,Header,Table } from './styles';


export default function Company(){

  const [companies,setCompanies] = useState([]);

  useEffect(() => {
    async function loadCompanies(){

      const response = await api.get('/list');

      setCompanies(response.data)
    }
    loadCompanies()
  },[])

  return(
    <>
    <Container>
      <Header>
        <h6>Empresas</h6>
        <Link to="create">
          
          <span>Novo cadastro</span>
        </Link>
      </Header>
  
      <Content>
      <Table>
          <thead>
            <tr>
              <th>Cnpj</th>
              <th>Nome</th>
              <th>Razão social</th>
              <th>Atividade primária</th>
            </tr>
          </thead>
          {companies.map(company => (
          <tbody>           
              <tr key={company.cnpj}>
                <td>{company.cnpj}</td>
                <td>{company.name}</td>
                <td>{company.corporate_name}</td>
                <td>{company.primary_activity}</td>
              </tr>
          </tbody>
           ))}
        </Table>
      </Content>
    </Container>
    </>
  )
}