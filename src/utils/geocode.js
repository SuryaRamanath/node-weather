const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3V1dTg3ODgiLCJhIjoiY2tpbXYwd2czMHZjdjMycDl3ZmZ0dHNtciJ9.B96UAAPhexj5mg06mUchgA'
    request({url,json:true},(error,{body}={})=>{
          if(error){
             callback('caught error!',undefined)
          }
          else if(body.features.length===0)
          {
             callback("unable to find location")
          }else{
             callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
             })
          }
          
       })
 }
 module.exports= geocode