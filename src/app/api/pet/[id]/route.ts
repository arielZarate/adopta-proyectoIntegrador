
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";





export  function GET(req:Request,{params}:Params) {
 
    let id=params.id;

      console.log(req)
      console.log(params)
    
      
      return Response.json(`get by id ${id}`)

}


export  function PUT(req:Request,{params}:Params) {

try {
    let id=params.id

    return Response.json(` put pet con id ${id}`)
} catch (error) {
    console.log(error)
}
}




export  function DELETE(req:Request, {params}:Params,res:Response) {
    //console.log("delete")
    //onsole.log(params)

   return Response.json(`pet delete con id ${params.id} `)

}