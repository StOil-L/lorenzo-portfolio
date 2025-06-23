import type {CollaboratorProps} from "../../components/Collaborator.tsx";

const collabarray: CollaboratorProps[] = [
  {
    name: "Cédric Berthet"
  },
  {
    name: "Robin L'Huillier",
    profilepage: 'https://gitlab.com/RobinLHuillier',
    imgsrc: 'https://gitlab.com/uploads/-/system/user/avatar/7858421/avatar.png',
  },
  {
    name: "Charlotte Parienti Fabre"
  },
  {
    name: "Nicolas Ruiz"
  },
  {
    name: "Enzo Goulesque"
  },
  {
    name: "Margaux Renoir",
    profilepage: 'https://www.linkedin.com/in/margaux-renoir-244479220/',
    imgsrc: 'https://media.licdn.com/dms/image/v2/D4E03AQHuvSjbv8YTcg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699823842639?e=1756339200&v=beta&t=xcGShUh8hhOAwpTpEW37jvD6PsC5f25XtkqrCsiWWt4',
  },
  {
    name: "Tom Simula",
    profilepage: 'https://www.linkedin.com/in/tom-simula-5039b8193/',
    imgsrc: 'https://media.licdn.com/dms/image/v2/D4D03AQEIVfS8F6Ck_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697567060887?e=1756339200&v=beta&t=7wvZVgLVfFWhuJ5UVMfW-A7gfQjUmlkGROpamIeI2f4',
  },
  {
    name: "Arthur Sapin",
    profilepage: 'https://github.com/a-sapin',
    imgsrc: 'https://avatars.githubusercontent.com/u/148749110?v=4',
  },
  {
    name: "Océane Ongaro",
    profilepage: 'https://oceaneongaro.github.io/',
    imgsrc: 'https://oceaneongaro.github.io/photo2_huc20fadf20c0107975c4d767560791f2e_14941_300x0_resize_q75_box.jpg',
  }
]

const collaborators = new Map<string, CollaboratorProps>();
collabarray.forEach(member => {
  collaborators.set(member.name, member)
})

export default collaborators