export type iData={
    title:string
    text:string
    technology:string[]
 }
 
 const Data: iData[]=[
             {
                title:"TikTokClone",
                technology:["React Native", "Firebase"],
                text:"User can create Account, Scroll Videos, and upload thier shorts, can able to like comment and share videos"

             },
             {
                title:"Form Builder",
                technology:["React JS , Redux, Nest JS, Styled Components, GraphQL"],
                text:"User can create there custom form with different types of fields, and share url, the responder can get form and send his responses.Its like a feedback form"
             }
]

export {Data}