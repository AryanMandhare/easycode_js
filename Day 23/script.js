
// async function loaddata(){
//     let response = await fetch("https://api-practice-snowy.vercel.app/songs")
//     let data = await response.json()
//     console.log(data)
// }
// loaddata()

// let loaddata = async()=>{
//     let response = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD")
//     let data = await response.json()
//     console.log(data)
// }
// loaddata()

let loadgithub = async()=>{
try{
    let response = await fetch('https://api.github.com/users/AryanMandhare')
    let data = await response.json()
    console.log(data)
  }catch(error){
    console.log(error)
  }
}
loadgithub()