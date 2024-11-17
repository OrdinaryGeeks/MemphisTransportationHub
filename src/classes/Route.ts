import LinePoint from "./LinePoint";

interface Route{

 routeName:string;
 shapeId:string;
 linePoints: LinePoint[]; 
 latLngs: LinePoint[]  
}

export default Route;