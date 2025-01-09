const box = document.getElementById('box')

box.style.backgroundColor = 'silver'
box.style.width = 'Auto'
box.style.height = 'Auto'
box.style.flexDirection='center'
box.style.alignItems='center'
box.style.margin='auto'
box.style.margin='2%'
box.style.border = '2px solid black'

const here = document.createElement('div')
here.style.width = '75%'
here.style.height = '75%'
here.style.display = 'flex'
here.style.display = 'flex'

here.style.margin='auto'
here.style.marginTop='5%'
here.style.flexWrap='wrap'
here.style.flexWrap='wrap'


const inputss = document.createElement('input')
inputss.style.width='300px'
inputss.style.height='25px'
inputss.style.display = 'flex'
inputss.style.margin='auto'
inputss.placeholder='Enter Your Flag Country here'
inputss.style.textAlign='center'

const btn = document.createElement('button')
btn.style.width='225px'
btn.style.height='25px'
btn.style.display = 'flex'
btn.style.margin='Auto'
btn.type='submit'
btn.textContent='Send'
btn.style.textAlign='Center'
btn.style.justifyContent='center'
btn.style.marginTop='1%'

box.appendChild(inputss)
box.appendChild(btn)
box.appendChild(here)



btn.addEventListener('click',  async ()=>{
    
const getCountries =  async (country)=>{
    try{
       
        const request = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        let data =  await request.json()
        return data[0].flags.png

    }catch(error){
        console.error('failed' , error);
        return null;
    }
    };
try{
    const cntName = inputss.value
    if(cntName){
        const flagUrl = await getCountries(cntName);
        if(flagUrl){
          
            const flagImg = document.createElement('img')
            flagImg.src = flagUrl
            flagImg.alt = `flag of ${cntName}`
            flagImg.style.width = '150px'
            flagImg.style.height = '150px'
            flagImg.style.border = '2px solid white'
            flagImg.style.margin = '1%'
            here.appendChild(flagImg)
        }
    }}catch(error){
        console.error('faild',error);
        
    }

}

)




