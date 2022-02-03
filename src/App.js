import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header'
import {useState , useEffect} from 'react'
import axios  from 'axios';


function App() {
  const [punkListData ,setPunkListData]=useState([])
  useEffect(()=>{
    const getMyNft=async()=>{
      const openSeaData=await axios.get(
      
      'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x5A5bc0535D8c6Db18aEe95Ae4a07088237d918c3'
      )
      
      console.log(openSeaData.data.assets)
  }
  return getMyNft()
},[])
  return( 
    <div className='app'>
    <Header/>
    <CollectionCard 
      id={0} 
      name={'Bandana Punk'} 
      traits={[{value:7}]} 
      image={'https://lh3.googleusercontent.com/cFebPRhI6RMwGCHOtuGwvvNu4JFH_GRJpCG_0zFiHn03XAm-lCT__emfiZqdDCkkwRkg33ZP6avBv9iNDK8gtY4EKzvGz7jxA0DQxQ=w600'}/>

    </div>
  )
};

export default App;
