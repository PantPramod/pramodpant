
export type iData = {
   title: string
   text: string
   technology: string[]
}

const Data: iData[] = [
   {
      title: "TikTokClone",
      technology: ["React Native", "Firebase"],
      text: "User can create Account, Scroll Videos, and upload thier shorts, can able to like comment and share videos"

   },
   {
      title: "task Manager",
      technology: ["React JS , TypeScript,  tailwind CSS, node JS, MongoDB"],
      text: "User can create account and add there task list for (todo, In Progress, Review , Done), and can also set Priority"
   }
]
type iFeaturedProject = {
   title: string
   text: string
   technology: string[]
   imgUrl?: string
}

const FeaturedProjects: iFeaturedProject[] = [
   {
      title: "TikTokClone",
      technology: ["React Native", "Firebase"],
      text: "User can create Account, Scroll Videos, and upload thier shorts, can able to like comment and share videos",
      imgUrl: "https://source.unsplash.com/500x300/?tiktok,app"
   },
   {
      title: "Form Builder",
      technology: ["React JS , Redux, Nest JS, Mongodb Styled Components, GraphQL"],
      text: "User can create there custom form with different types of fields, and share url, the responder can get form and send his responses.Its like a feedback form",
      imgUrl: "https://source.unsplash.com/500x300/?website,forms"
   },
   {
      title: "Online Test",
      technology: ["React JS , Node JS, MOngoDb Styled Components, GraphQL"],
      text: "User can create there custom form with different types of fields, and share url, the responder can get form and send his responses.Its like a feedback form",
      imgUrl: "https://source.unsplash.com/500x300/?quiz,online"
   },
   {
      title: "task Manager",
      technology: ["React JS , TypeScript,  tailwind CSS, node JS, MongoDB"],
      text: "User can create account and add there task list for (todo, In Progress, Review , Done), and can also set Priority",
      imgUrl: "https://source.unsplash.com/500x300/?todo,list"
   }
]



export { Data, FeaturedProjects }