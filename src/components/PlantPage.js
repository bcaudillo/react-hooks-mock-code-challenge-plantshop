import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <ul className="cards">
        {plants.map((plant)=>(
          <PlantList key = {plant.id} plant = {plant}/>
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;
