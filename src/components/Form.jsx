
const Form = ()=>{

 
    return(
<>
<div className="row">
<form action="" onSubmit={cityCountry}>
<input type="text" name= "city" placeholder="city"/>
<input type="text"  name = "country" placeholder="country"/>

<button className="btn btn-primary " type="submit" > Search</button>


</form>
</div>


</>
    );
}

export default Form;