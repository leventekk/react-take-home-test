// process.env.API_URL
const fetch = async <Response>(input: string, init?: RequestInit): Promise<Response> => {
  return await fetch(`${process.env.API_URL}/${input}`, init)
}

export default fetch
