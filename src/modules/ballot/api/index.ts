export const getBallots = async (): Promise<Array<{ title: string }>> => {
  const response = await fetch(`${process.env.API_URL}/api/getBallots`)

  return await response.json()
}
