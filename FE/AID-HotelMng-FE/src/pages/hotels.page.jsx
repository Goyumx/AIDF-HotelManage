import { Button } from "@/components/ui/button";

const HotelsPage = () => {

    const handleClick=()=>{
        const res = fetch("http://localhost:8000/api/hotels",{
            method:"GET",
        });
        res.then((body)=>{
            console.log(body);
        })
        console.log(res);
    }
    return (
      <main>
        <h1>Hotels</h1> 
        <Button onClick={handleClick} >Fetch data</Button>
      </main>
    );
};
  
  export default HotelsPage;