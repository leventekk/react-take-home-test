const api = {
  async getBallotData() {
    return await fetch('/api/getBallotData').then(async (response) => await response.json())
  }
}

export default api
