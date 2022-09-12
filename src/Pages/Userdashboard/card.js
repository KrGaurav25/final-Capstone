
import { useState } from "react"
import axios from"axios"
import "../../CSS/card.css"


const Card=(props)=>
{ 
    console.log(props.value)
    console.log(props.val2)
    const [status, setStatus] = useState(false);

 
 const handleApply  = (itemid) => {
    console.log(status);
    const userId = localStorage.getItem('userId');
    axios.post('http://localhost:9000/apply',{itemid,userId})
    .then(response => {
        console.log(response)
        console.log(response.data);
        setStatus(true)
    }).catch((e)=>console.log(e))
    alert("Job applied Successfully")
    
    axios.post('http://localhost:9000/apply/applicant',{itemid,userId})
    .then((res)=>console.log(res)).catch((e)=>console.log(e))
}
 
    const handlesaved  = (itemid) => {
        console.log(status);
        const userId = localStorage.getItem('userId');
        axios.post('http://localhost:9000/saved',{itemid,userId})
        .then(response => {
            console.log(response)
            console.log(response.data);
            setStatus(true)
        }).catch((e)=>console.log(e))
        alert("Job saved Successfully")

        
    
} 
    return(
        <div>
            {props.value.filter((val)=>{
                if(props.val2===undefined)
                    return val
                else if(val.title.toLowerCase().includes(props.val2.toLowerCase()))
                    return val
            }).map((item)=>
                (
                    <div class="col-sm-6">
                    <div class="card-colour background">
                <div class="card-body ">
                  
                <h3 class="card-subtitle mb-2 text-muted">{item.title}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Role: {item.jobType}</h4>
                              <p class="card-text">Salary: {item.salary} per month</p>
                              <p class="card-text">Duration: {item.duration} months </p>
                    {
                        props.value2==='applied'?<div></div>:<div>
                            <button className="btn btn-primary" onClick={()=>handleApply(item._id)}>Apply</button>
                            <button className="btn btn-primary" onClick={()=>handlesaved(item._id)}>save for later</button>

                        </div>
                    }
                 

                    </div>
                    </div>
                    </div>
                ))
            }
        </div>
    )

}
export default Card