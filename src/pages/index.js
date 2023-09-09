import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage =  () => {

  return (
    <main>
    <Layout pageHeading='Home' pageTitle='Home title'>
    <p>
    I’m Irene. I’m an iOS app developer enthusiast and a Machine Learning engineer from nine-to-five. I have a background in mechatronics and robotics engineering but in the last few years, I have grown closer to the programming world. Specially, I find building apps, a very rewarding thing to do and I like to share what I learn with the rest of the world.
    </p>
    <StaticImage src="https://media.licdn.com/dms/image/C4D03AQETVXM1LAG8qA/profile-displayphoto-shrink_800_800/0/1642768978891?e=1699488000&v=beta&t=sQLNIanCA7e0f5npLVTX8TLRJZ8axtvmO7cif8XZ0Cc" alt="The author"/>

    
    </Layout>
    
</main>
  )
}


/* Step 3: Export your component so it
can be used by other parts of your app. */
export default HomePage