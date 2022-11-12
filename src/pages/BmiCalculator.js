// Find body mass index value (BMI) with this endpoint.
//  You just need to enter three parameters which are age, weight (kg), and height(cm) information.

// url with
// const BMICalUrl = 'https://fitness-calculator.p.rapidapi.com/bmi?age=25&weight=65&height=180';

// {3 items
//     "status_code":200
//     "request_result":"Successful"
//     "data":{3 items
//     "bmi":20.06
//     "health":"Normal"
//     "healthy_bmi_range":"18.5 - 25"
//     }
// }

import React, { useEffect, useState} from 'react';
import { Box, Stack, Typography, TextField, Button,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from '@mui/material';
import { fetchData, BMIOptions } from '../utils/fetchData';


const BmiCalculator = () => {    
    // set state of weight,height and age
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [BMI, setBMI] = useState("Not Calcualted");
    const [ideal, setIdeal] = useState("Not Calcualted");
    const [health, setHealth] = useState('Not Calcualted');
    const [healthyBmiRange, setHealthyBmiRange] = useState('Not Calcualted');
    const [loading, setLoading] = useState(false);

       
        
        const fetchBMICalData = async() =>{            
            if( (weight > 40 && weight < 160) && (height > 130 && height < 230) && (age > 0 && age < 80) ){                
                const BMIData = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, BMIOptions);
                setLoading(true);            
                if(BMIData.status_code === 200){
                    console.log(BMIData);
                    setBMI(BMIData.data.bmi);
                    setHealth(BMIData.data.health);
                    setHealthyBmiRange(BMIData.data.healthy_bmi_range);
                }else{
                    alert('Unable to fetch data from API');
                }                       
                window.scrollTo({top: 1400, behavior: 'smooth'});
            }
            else{
                alert('Please enter valid values');
            }
        }
        
    const fetchIdealWeightData = async()=>{
        if( (height > 130 && height < 230) && (gender === 'male' || gender === 'female' ) ){                
            const IdealData = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`, BMIOptions);
            // const IdealData = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=male&height=185`, BMIOptions);
            setLoading(true);            
            if(IdealData.status_code === 200){
                console.log(IdealData.data);
                setIdeal(IdealData.data.Robinson);
                // setHealth(IdealData.data.health);
                // setHealthyBmiRange(BMIData.data.healthy_bmi_range);
            }else{
                alert('Unable to fetch data from API');
            }                       
            window.scrollTo({top: 1400, behavior: 'smooth'});
        }
        else{
            alert('Please enter valid values');
        }
    }

  return (
    <div>
    <Stack p="60px" gap="25px" backgroundColor="#FFF3F4" width="100%" alignItems='center' justifyContent='center' mt="40px" sx={{boxShadow:'0px 0px 2px #121212'}} >
        <Typography variant='h4' mt="0px"    textAlign='center'>BMI</Typography>

        <TextField type="number"  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder='Your Weight in Kg(must be 40kg to 160kg in range)' onChange={(e)=> setWeight(e.target.value) } />
        <TextField type="number"  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder='Your Height in CM (must be 130cm to 230cm in range)' onChange={(e)=> setHeight(e.target.value) } />
        <TextField type="number"  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder='Your Age(must be 0 to 80 in range)' onChange={(e)=> setAge(e.target.value) }  />
            <Button variant="contained" color="error"   sx={{ position: 'relative', width: '80%', p: '20px',fontSize:"22px" }} onClick={fetchBMICalData} >Calculate BMI</Button>                
    </Stack>
    {BMI==="Not Calcualted" ? '' :
    <Stack  p="60px" gap="25px" backgroundColor="#FFF" width="90%" margin="auto" mt="80px">
        <Typography variant="h3" color='#3A1212'>BMI Results</Typography>
        <Box>
            <Typography variant="h4">BMI: <span style={{color: '#FF2625', fontWeight:"600", fontSize: "40px" }}>{BMI}</span></Typography>
            <Typography variant="h4">HEALTH: <span style={{color: '#FF2625', fontWeight:"600", fontSize: "40px" }}>{health}</span></Typography>
            <Typography variant="h4">HEALTH_BMI_RANGE: <span style={{color: '#FF2625', fontWeight:"600", fontSize: "40px" }}>{healthyBmiRange}</span></Typography>
        </Box>
    </Stack>}
    {/* IDeal Weight */}
    <Stack p="60px" gap="25px" backgroundColor="#FFF3F4" width="100%" alignItems='center' justifyContent='center' mt="40px" sx={{boxShadow:'0px 0px 2px #121212'}} >
        <Typography variant='h4' mt="0px" textAlign='center'>Ideal Weight</Typography>

        <FormControl >
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{fontWeight:'600' ,fontSize:'23px',color:'#3A1212'}}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel  value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
   
      </RadioGroup>
    </FormControl>
        {/* <TextField type="text"  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder='Your Gender' onChange={(e)=> setGender(e.target.value) } /> */}
        <TextField type="number"  height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          placeholder='Your Height in CM (must be 130cm to 230cm in range)' onChange={(e)=> setHeight(e.target.value) } />
       
            <Button variant="contained" color="error"   sx={{ position: 'relative', width: '80%', p: '20px',fontSize:"22px" }} onClick={fetchIdealWeightData} >Calculate Ideal Weight</Button>                
    </Stack>

    {ideal==="Not Calcualted" ? '' :
    <Stack  p="80px" gap="30px" backgroundColor="#FFF" width="90%" margin="auto" mt="100px">
        <Typography variant="h3">Ideal Weight Results</Typography>
        <Box>
            <Typography variant="h4">Ideal weight for you is: <span style={{color: '#FF2625', fontWeight:"600", fontSize: "40px" }}>{ideal} KG</span></Typography>
           
        </Box>
    </Stack>
}
    </div>
  )
}

export default BmiCalculator