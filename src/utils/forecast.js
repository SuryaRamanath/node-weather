const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com//current?access_key=ed3ffcae96d59b7dc4da700822afeedf&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
    
           if(error){
              callback('weather service is not responding',undefined)
           }
           else if(body.error){
              callback('unable to find location',undefined)
           }
           else{
           callback(undefined,'observation time is '+body.current.observation_time+'.Temperature of '+body.current.temperature+' degree celsius')
           }
        })
}
module.exports= forecast