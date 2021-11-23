import React,{useState} from 'react';
import { GoogleMap, useLoadScript,Marker  } from '@react-google-maps/api';

import { Container,Content,Header } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import * as Yup from 'yup';

const containerStyle = {
  width: '600px',
  height: '300px'
};

export default function CreateCompany(){
  const [name,setName] = useState();
  const [corporate_name,setCorporateName] = useState();
  const [primary_activity,setPrimaryActivity] = useState();
  const [address,setAddress] = useState([]);
  const [center,setCenter] = useState({ lat:0,lng:0})
  const [map, setMap] = useState(null)
  const [cnpj,setCnpj] = useState();
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')


  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBFu1W3qS2to-w_kLlAjby-0AAR7FSaMxA"
  })

  async function handleSearchCompany(){

    setError('')
    

    const schema = Yup.object().shape({
      cnpj: Yup.number().required().typeError('O campo deve ser númerico e deve conter ao menos 14 dígitos').min(14)
     
    })
    schema.validate({ cnpj }).catch(function (err) {
      setError(err.errors)
      
      return
    });
    
    try {

      const response = await api.get(`/show?cnpj=${cnpj}`);

      setName(response.data.fantasia)
      setCorporateName(response.data.nome)
      setPrimaryActivity(response.data.atividade_principal[0]['text'])
  
      const address = {
        street:response.data.logradouro,
        neighborhood:response.data.bairro,
        number:response.data.numero,
        complement:response.data.complemento,
        zip_code:response.data.cep,
        city:response.data.municipio,
        state:response.data.uf,
      }
  
      const format_address = `${address.street},${address.neighborhood},${address.number}`;
  
      const location = await api.get(`/company/location?address=${format_address}`);
  
      
      setCenter({
        lat:location.data.results[0].geometry.location.lat,
        lng:location.data.results[0].geometry.location.lng
      })
      setAddress(address)
      
    } catch (error) {

       return
    }
   

  }
  async function handleSubmit(event){
    setSuccess('')

    event.preventDefault();

    const data = {
      cnpj,
      name,
      corporate_name,
      primary_activity,
      address
    }
    
    const schema = Yup.object().shape({
      cnpj: Yup.number().required().typeError('O campo deve ser númerico e deve conter ao menos 14 dígitos').min(14)
     
    })
    schema.validate({ cnpj }).catch(function (err) {
      setError(err.errors)

    });
    

    try {
     await api.post('/create',data);

     setSuccess('Inserido com sucesso!')
      
    } catch (err) {

      setError(err.response.data.msg)
      
    }
   
  }
  return(
    <>
    <Container>
      <Header>
          <h6>Cadastrar Empresa</h6>
          <Link to="/">
            
            <span>Voltar</span>
          </Link>
        </Header>
      <Content>
        <div>
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" maxLength="14" placeholder="Informe um cnpj" name="cnpj" value={cnpj} onChange={(event) => setCnpj(event.target.value)}/>
          <button type="button" onClick={handleSearchCompany} >Buscar</button>
          
          
        </div>
        <div className="error">{error}</div>
        <div className="success">{success}</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" disabled="disabled" value={name}/>

          <label htmlFor="corporate_name">Razão social</label>
          <input type="text" name="corporate_name" disabled="disabled" value={corporate_name}/>

          <label htmlFor="primary_activity">Atividade Primária</label>
          <input type="text" name="primary_activity" disabled="disabled" value={primary_activity}/>

          <label htmlFor="adress">Endereço</label>
          
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={map => setMap(map)}
              
            >
            <Marker position={center} />
              <></>
            </GoogleMap>
      
            ) : <></>}

         
          <button  type="submit">Salvar</button>
        </form>
       

       
      </Content>
    </Container>
    </>
  )
}