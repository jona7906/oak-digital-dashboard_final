

function GetDate(props) {
    if(!props.timeCreated){
        console.log("no props");
       return "no time"
    }
    const findDate = props.timeCreated;
  /* console.log(serverdata); */
  const timestamp = new Date(findDate*1000); 
 
  let theDate = new Intl.DateTimeFormat('da-DK', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

  return theDate
}

export default GetDate;

