import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";

function App() {
  const [plants, setPlants]= useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r => r.json)
    .then(setPlants)
  }, []);

  // const displayedPlants = plants.filter((plant) =>
  //   plant.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="app">
      <Header onSearch = {setSearch}/>
      <PlantPage plants = {plants}/>
    </div>
  );
}

export default App;
