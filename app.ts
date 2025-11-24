import Fastify from "fastify";
import mult from "@fastify/multipart";
import cors from "@fastify/cors"; // REMOVE ON PRODUCTION
 

 


export async function buildApp() {
  const fastify = Fastify({
    logger: true,
  });

  // Register plugins
  // registering cors -- REMOVE ON PRODUCTION
  await fastify.register(cors,{
    origin: "*",
  });
  await fastify.register(mult)
  
  


  return fastify;
}
